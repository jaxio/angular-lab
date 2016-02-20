$output.webapp("assets\js\entity", "${entity.model.var}Controller.js")##

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
		"${dollar}alert", "${dollar}timeout", function(scope, window, c, d, log, 
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
		alertService, timeoutService) {
	
scope.settings = {
		singular: "Item",
		plural: "Items",
		cmd: "Add"
};

// checkbox in the grid header
scope.selectAll = false;

// data to fill the grid
scope.data = [];

/** Refresh the result grid via a REST call */
scope.refresh = function () {
	log.info("call method refresh inside ${entity.model.type}Controller");
	${entity.model.var}RestService.query('', function(result) {
		log.info("receiving info from server side");
		
		log.info("result: " + result);
		scope.data = result;
		log.info("data post refresh:" + scope.data.length);
	});
	
	scope.selectAll = false;
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

/* fill the result grid by default */
scope.refresh();

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
	template: "assets/tpl/apps/crud-${entity.model.var}-search.html",
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
scope.viewItem = function(b) {
	scope.loadOneItem(b.id);
	
	b && (b.editing = !1, scope.item = b, scope.settings.cmd = "View", showForm(crudAside))
};

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

/** main REST client for managing (4 CRUD calls) ${entity.model.type} entity */
app.factory('${entity.model.type}RestService', function (${dollar}resource) {
	return ${dollar}resource('api/${entity.model.vars}/:id', {}, {
		'query': { method: 'GET', isArray: true},
		'get': {
			method: 'GET',
			transformResponse: function (data) {
				data = angular.fromJson(data);
				return data;
			}
		},
		'update': { method:'PUT' },
		'delete': { method:'DELETE' }
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

## --------------- Many to many
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
	    });	
	#end
	});
#end