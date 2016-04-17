$output.webapp("assets\js\entity", "${entity.model.var}Controller.js")##

#########################################################################################
## macro that can generate an AngularJS composite key for an URL:  
## sample: :id 				ou bien 		:keyPart1,:keyPart2
#########################################################################################
#macro(generateSimpleOrCompositeKeyForURL2 $ckey	$list)
	#foreach ($attribute in $list)
		#if ($attribute.isInCpk() == true)
			#if ($ckey == "")
				#set ($ckey = ":$attribute.name")
			#else
				#set ($ckey = "$ckey,:$attribute.name")
			#end
		#end
	#end
	
	#if ($ckey == "")
		#set ($ckey = ":id") 
	#end		
#end

app.controller("${entity.model.type}Controller", ["${dollar}scope", "${dollar}window", "${dollar}aside", "PlaceholderTextService", 
"${dollar}log", "${entity.model.type}RestService", "${entity.model.type}RestSearchService", 
		"${entity.model.type}RestIndexService", "${entity.model.type}RestMassDeleteService",
#foreach ($attribute in $entity.nonCpkAttributes.list)
	#if ($attribute.isInFk())
		#if ($attribute.getXToOneRelation().isManyToOne())
			"${attribute.getEntityIPointTo().name}RestService",
		#else
			/* Type of relation [$attribute.getXToOneRelation()] not implemented yet !!!! */
		#end 
	#end
#end		
		"${dollar}alert", "${dollar}timeout", "config", function(scope, window, c, d, log, 
		${entity.model.var}RestService, ${entity.model.var}RestSearchService, ${entity.model.var}RestIndexService, 
		${entity.model.var}RestMassDeleteService, 
#foreach ($attribute in $entity.nonCpkAttributes.list)
	#if ($attribute.isInFk())
		#if ($attribute.getXToOneRelation().isManyToOne())
			$attribute.getEntityIPointTo().name.substring(0,1).toLowerCase()$attribute.getEntityIPointTo().name.substring(1).toLowerCase()RestService,
		#else
			/* Type of relation [$attribute.getXToOneRelation()] not implemented yet !!!! */
		#end 
	#end
#end				 
		alertService, timeoutService, config) {

log.info("inside ${entity.model.type}Controller, config.value: " + config.value);
scope.configValue = angular.fromJson(config.value);
		
scope.settings = {
		singular: "Item",
		plural: "Items",
		cmd: "Add"
};

// pagination variables
scope.pagination = {};
scope.totalElementsPerPage = 20;
scope.busy = false;

// checkbox in the grid header
scope.selectAll = false;

// data to fill the grid
scope.data = [];

/** Refresh the result grid via a REST call, gets only the first page */
scope.refresh = function () {
	log.info("call method refresh inside ${entity.model.type}Controller");
	${entity.model.var}RestService.query({page: 0, size: scope.totalElementsPerPage}, function(result) {
		log.info("receiving info from server side");
		
		log.info("result: " + result);
		scope.data = result.content;
		log.info("data post refresh:" + scope.data.length);
	});
	
	scope.selectAll = false;
};

/** Gets data page per page */
scope.refreshByPage = function (page, size, addMode) {
	log.info("call method refreshByPage inside ${entity.model.type}Controller");
	${entity.model.var}RestService.query({page: page, size: size}, function(result) {
		log.info("receiving info from server side in page mode");
		
		log.info("result: " + result);
		if (addMode) {
			for (var i = 0; i < result.content.length; i++) {
				scope.data.push(result.content[i]);
			}
		} else {
			scope.data = result.content;
		}
		
		// fill pagination variables
		scope.pagination.first = result.first;
		scope.pagination.last = result.last;
		scope.pagination.totalElements = result.totalElements;
		scope.pagination.totalPages = result.totalPages;
		scope.pagination.number = result.number;
		
		log.info("data post refresh:" + scope.data.length);
		log.info("page number: " + scope.pagination.number);
		scope.busy = false;
	});
	
	scope.selectAll = false;
};

/** Gets first page */
scope.first = function () {
	log.info("call method first inside ${entity.model.type}Controller for page: 0");
	scope.refreshByPage(0, scope.totalElementsPerPage, false);		
}; 

/** Gets previous page */
scope.prev = function () {
	log.info("call method prev inside ${entity.model.type}Controller for page: " + (scope.pagination.number - 1));
	scope.refreshByPage(scope.pagination.number - 1, scope.totalElementsPerPage, false);		
}; 

/** Gets next page */
scope.next = function () {
	log.info("call method next inside ${entity.model.type}Controller for page: " + (scope.pagination.number + 1));
	scope.refreshByPage(scope.pagination.number + 1, scope.totalElementsPerPage, false);		
}; 

/** Gets last page */
scope.last = function () {
	log.info("call method last inside ${entity.model.type}Controller for page: " + (scope.pagination.totalPages - 1));
	scope.refreshByPage(scope.pagination.totalPages - 1, scope.totalElementsPerPage, false);		
};

#foreach ($attribute in $entity.nonCpkAttributes.list)
	#if ($attribute.isInFk())
		#if ($attribute.getXToOneRelation().isManyToOne())
// fill $attribute.getEntityIPointTo().name combo with data from server side
${attribute.getEntityIPointTo().name.substring(0,1).toLowerCase()}${attribute.getEntityIPointTo().name.substring(1).toLowerCase()}RestService.query({query: '*'}, function success(result){
	log.info("receiving ${attribute.getEntityIPointTo().name} from server side");
	scope.$attribute.getEntityIPointTo().name.substring(0,1).toLowerCase()$attribute.getEntityIPointTo().name.substring(1).toLowerCase()s = result;
	log.info("${attribute.getEntityIPointTo().name} post refresh: " + result.length);
});
		#else
			/* Type of relation [$attribute.getXToOneRelation()] not implemented yet !!!! */
		#end 
	#end
#end		

/** Clear the result grid */
scope.clear = function () {
	log.info("call method clear inside ${entity.model.type}Controller");
	log.info(scope.data.length);
	scope.data = [];
};

/** Shows search aside */
scope.searchItem = function() {
	log.info("searchItem: ");
	var b = {
			icon: d.createIcon(!0),
			editing: !0
	};
	scope.item = b, scope.settings.cmd = "Search", scope.item.title='todo';
	
	showForm(searchAside);
};

/** Executes the classical search on the server side */
scope.startSearch = function(item) {
	log.info("startSearch: " + scope.item);

	// get criteria

	// call search on the server side


	// refresh the grid
	
	// close the search aside
	hideForm(searchAside);
};

/** Executes the Elastic search on the server side */
scope.startElasticSearch = function(item) {
	// get criteria
	var query = scope.item.query;
	log.info("startElasticSearch: " + query);
	
	scope.data = [];
	
	// call search on the server side via REST
	${entity.model.var}RestSearchService.query({query: query}, function success(result){
		log.info("receiving info from server side");
		
		// refresh data and so the grid
		scope.data = result;
		log.info("data post refresh:" + result);
	});
	
	// close the search aside
	hideForm(searchAside);
};

/** Loads only one item with its ID */
scope.loadOneItem = function(id) {
	${entity.model.var}RestService.get({id: id}, function success(result) {
		scope.item = result;

		log.info("item loaded: " + result);
	});
};

/* fill the result grid by default (first page only) */
scope.refreshByPage(0, scope.totalElementsPerPage);

/** defines the CRUD aside */
var crudAside = c({
	scope: scope,
	template: "assets/tpl/apps/crud-${entity.model.var}.html",
	show: !1,
	placement: "left",
	backdrop: !1,
	animation: "am-slide-left"
	});

/** defines the search aside */
var searchAside = c({
	scope: scope,
	template: "assets/tpl/apps/${entity.model.var}/${entity.model.var}Search.html",
	show: !1,
	placement: "left",
	backdrop: !1,
	animation: "am-slide-left"
	});

/** Permet de vider le tableau des éléments */
scope.clearAll = function() {
	scope.data = [];
};

scope.checkBoxValue = function() {
	log.info(scope.selectAll);
};

/** Selects all items */
scope.checkAll = function() {
	log.info("function checkAll called");
	angular.forEach(scope.data, function(scope) {
		scope.selected = !scope.selected
	});
	log.info(scope.selectAll);
	scope.selectAll = !scope.selectAll;
	log.info(scope.selectAll);
};

/** Opens and fills the CRUD aside with an item in EDIT mode */
scope.editItem = function(item) {
	//scope.loadOneItem(item.id);
	${entity.model.var}RestService.get({id: item.id}, function success(result) {
		scope.item = result;
		
		item && (item.editing = !0, scope.item = item, scope.settings.cmd = "Edit", showForm(crudAside));
		
		log.info("item loaded: " + result);
	});
};

/** Opens and fills the CRUD aside with an item in VIEW mode */
/* deprecated
scope.viewItem = function(b) {
	scope.loadOneItem(b.id);
	
	b && (b.editing = !1, scope.item = b, scope.settings.cmd = "View", showForm(crudAside))
};
*/

/** Opens the CRUD aside in CREATION mode */
scope.createItem = function() {
	var b = {
			icon: d.createIcon(!0),
			editing: !0
	};
	scope.item = b, scope.settings.cmd = "New";
	showForm(crudAside);
};
	
/** Creates or updates an item */
scope.saveItem = function() {
	log.info("Creating or updating an item");
	
	// defines the success behavior inside a methode
	var onSaveSuccess = function success(data) {
		console.log('success, got data: ', data);
	
		"New" == scope.settings.cmd, hideForm(crudAside);
	
		scope.refresh();
	
		window.showAlert = function(){
			
			var userALert = alertService({
	                    title: "SUCCESS:",
	                    content: '<BR>Your ${entity.model.var} have been <i>created or updated</i>. You can find it int the result table. See <a href="#"><B>older messages</B></a> !',
	                    placement: "top-right",
	                    type: "theme",
	                    container: ".alert-container-top-right",
	                    show: !1,
	                    animation: "mat-grow-top-right"
	                    });
	    
			timeoutService(function() {
				userALert.show()
	        	}, 1 /* timeout duration */);
		};
		
		window.showAlert();
		};
	
		// defines the error behavior inside a methode
	var onSaveError = function (result) {
			window.showAlert = function(){
				var userALert = alertService({
		                    title: "ERROR:",
		                    content: "<BR>Your ${entity.model.var} haven't been created. Try again !",
		                    placement: "top-right",
		                    type: "theme",
		                    container: ".alert-container-top-right",
		                    show: !1,
		                    animation: "mat-grow-top-right"
		                    });
		    
				timeoutService(function() {
					userALert.show()
		        	}, 1 /* timeout duration */);
			};
			window.showAlert();
		};
	
	if (scope.item.id != null) {
		// update mode
		${entity.model.var}RestService.update(scope.item, onSaveSuccess, onSaveError);
	} else {
		// creation mode
		${entity.model.var}RestService.save(scope.item, onSaveSuccess, onSaveError);
	}
};

/** Removes one item or a list of items (selected ones) */
scope.remove = function(b) {
	console.log(scope.selectAll);
	var r = confirm("Are you sure ?");
	if (r == true) {/*
		(b ? scope.data.splice(scope.data.indexOf(b), 1) : (scope.data = scope.data.filter(function(a) {
		return !a.selected
		}), scope.selectAll = !1)); 
	 	*/
		if (!b) {
			// mass deletion mode
			var ids = "";
			// we browse all items in the table
			for	(index = 0; index < scope.data.length; index++) {
				if (scope.data[index].selected) {
					// we find a selected item
					console.log(index + ' ' + scope.data[index].title);
					
					if (ids.length == 0) {
						// we add the first item, so without the comma 
						ids = scope.data[index].id;
					} else {
						// another item, so with a separating comma
						ids = ids + "," + scope.data[index].id;
					}
				} 
			} 

			${entity.model.var}RestMassDeleteService.massDelete({id: ids}, function success(data) {
				scope.refresh();
				
				window.showAlert = function(){
				    var userALert = alertService({
				                    title: "SUCCESS:",
				                    content: '<BR>Your ${entity.model.var} have been deleted. The result table have been <b>updated</b>.',
				                    placement: "top-right",
				                    type: "theme",
				                    container: ".alert-container-top-right",
				                    show: !1,
				                    animation: "mat-grow-top-right"
				                    });
				    
				    timeoutService(function() {
				    	userALert.show()
				        }, 1 /* timeout duration */);
				};
				window.showAlert();
			}, function failure(err) {
				alert('request failed');
			});

		} else {
			// one item deletion mode
			${entity.model.var}RestService.delete({id: b.id}, function success(data) {
				scope.refresh();
			}, function failure(err) {
				alert('request failed');
			});
		}	

	// uncheck the selectAll checkbox in the grid header
	scope.selectAll = false;
	}
};

/* Get data in csv format for download */
scope.getCSVData = function() {
	return scope.data;
};

/** Indexes all items on the server side */
scope.index = function() {
	${entity.model.var}RestIndexService.index();
};

/** Opens an aside */
showForm = function(aside) {
	angular.element(".tooltip").remove();
	aside.show();
};

/** Closes an aside */
hideForm = function(aside) {
	aside.hide()
};

/** Closes all asides */
scope.${dollar}on("${dollar}destroy", function() {
	hideForm(crudAside);
	hideForm(searchAside);
	})
}]);

#set ($str1 = "")
#set ($str2 = "")
#set ($str3 = "")
#set ($str4 = "")
#set ($str5 = "")
#set ($str6 = "")
#set ($str7 = "")
#set ($str8 = "")
#set ($str9 = "")
#generateSimpleOrCompositeKeyForURL($str1 $str2 $str3 $str4 $str5 $str6 $str7 $str8 $str9 $entity.attributes.list)
/** main REST client for managing (4 CRUD calls) ${entity.model.type} entity */
app.factory('${entity.model.type}RestService', function (${dollar}resource) {
	return ${dollar}resource('api/${entity.model.vars}/bypage/?page=:page&size=:size', {}, {
			/* sorting sample: &sort=aColumnName,desc&sort=anotherColumnName,asc */
		'query': { method: 'GET', isArray: false},
		'get': {
			method: 'GET',
			url: 'api/${entity.model.vars}/$str6',
			transformResponse: function (data) {
				data = angular.fromJson(data);
				return data;
			}
		},
		'create': { method:'POST', url: 'api/${entity.model.vars}/$str6'},
		'update': { method:'PUT', url: 'api/${entity.model.vars}/$str6'},
		'delete': { method:'DELETE', url: 'api/${entity.model.vars}/$str6' }
## dedicated method for system entities
#if ($entity.model.type == "AppParameter")
		,'getParameter': {method: 'GET',
			url: 'api/appParameters/finder/:domain,:key',
			transformResponse: function (data) {
				data = angular.fromJson(data);
				return data;
			}
		}
#end		
	});
});

/** REST client for managing Elastic search calls on ${entity.model.type} entity */
app.factory('${entity.model.type}RestSearchService', function (${dollar}resource) {
	return ${dollar}resource('api/${entity.model.vars}/search/:query', {}, {
		'query': { method: 'GET', isArray: true}
	});
});

/** REST client for indexing ${entity.model.type} entity */
app.factory('${entity.model.type}RestIndexService', function (${dollar}resource) {
	return ${dollar}resource('api/${entity.model.vars}/indexAll', {}, {
		'index': { method: 'GET'}
	});
});

/** REST client for managing mass deletion calls on ${entity.model.type} entity */
app.factory('${entity.model.type}RestMassDeleteService', function (${dollar}resource) {
	return ${dollar}resource('api/${entity.model.vars}/mass/:id', {}, {
		'massDelete': { method: 'DELETE'}
	});
});

## --------------- One to one
#if ($entity.oneToOne.list.size() > 0)
	/** REST client for managing linked entities for ${entity.model.type} entity */
	app.factory('${entity.model.type}LinkedEntitiesService', function (${dollar}resource) {
	#foreach ($relation in $entity.oneToOne.list)	
		#if ($velocityCount == 1)
			## --------------- return statement only once
		return ${dollar}resource('api/${relation.to.vars}/${relation.to.vars}By${entity.model.type}sId/:id', {}, {
	        'query${relation.to.varsUp}By${entity.model.type}sId': {
	        	method: 'GET',
	        	url: 'api/${relation.to.vars}/${relation.to.vars}By${entity.model.type}sId/:id',
	        	isArray: true
	        }
		#else
			,
	        'query${relation.to.varsUp}By${entity.model.type}sId': {
	        	method: 'GET',
	        	url: 'api/${relation.to.vars}/${relation.to.vars}By${entity.model.type}sId/:id',
	        	isArray: true
	        }
		#end	
	#end
	    })});
#end

## --------------- Many to many; WARNING: the code below is a copy of the one above
#if ($entity.manyToMany.list.size() > 0)
	/** REST client for managing linked entities for ${entity.model.type} entity */
	app.factory('${entity.model.type}LinkedEntitiesService', function (${dollar}resource) {
	#foreach ($relation in $entity.manyToMany.list)	
		#if ($velocityCount == 1)
			## --------------- return statement only once
		return ${dollar}resource('api/${relation.to.vars}/${relation.to.vars}By${entity.model.type}sId/:id', {}, {
	        'query${relation.to.varsUp}By${entity.model.type}sId': {
	        	method: 'GET',
	        	url: 'api/${relation.to.vars}/${relation.to.vars}By${entity.model.type}sId/:id',
	        	isArray: true
	        }
		#else
			,
	        'query${relation.to.varsUp}By${entity.model.type}sId': {
	        	method: 'GET',
	        	url: 'api/${relation.to.vars}/${relation.to.vars}By${entity.model.type}sId/:id',
	        	isArray: true
	        }
		#end	
	#end
	    })});
#end

## --------------- Inverse relation PROTOTYPE
/** REST client for managing inverse relation */
app.factory('${entity.model.type}RestInvRelationService', function (${dollar}resource) {
	return ${dollar}resource('api/void/:id', {}, {
		'void': { method: 'GET'}
#if (${entity.model.type} == "Author")		
		,'findByAuthor': { method: 'GET', isArray: true, url: 'api/books/findByAuthor/:id'}
#end		
	});
});
