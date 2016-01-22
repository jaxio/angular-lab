$output.webapp("assets\js", "bookController.js")##
app.controller("BookController", ["${dollar}scope", "${dollar}window", "${dollar}aside", "PlaceholderTextService", 
"${dollar}log", "BookRestService", "BookRestSearchService", "BookRestIndexService",
"AuthorRestService", function(scope, b, c, d, log, 
		  bookRestService, bookRestSearchService, bookRestIndexService, authorRestService) {
scope.settings = {
		singular: "Item",
		plural: "Items",
		cmd: "Add"
};

// checkbox in the grid header
scope.selectAll = false;

// data to fill the grid
scope.data = [];

/** Permet de rafraichir l'écran de résultat de la recherche */
scope.refresh = function () {
	log.info("call de la method refresh dans le BookController");
	bookRestService.query('', function(result) {
		log.info("receiving info from server side");
		
		log.info("result: " + result);
		scope.data = result;
		log.info("data post refresh:" + scope.data.length);
	});
	
	scope.selectAll = false;
};

// on doit remplir cette variable avec la liste des auteurs pour la combo
authorRestService.query({query: '*'}, function success(result){
	log.info("receiving authors from server side");
	scope.authors = result;
	log.info("authors post refresh:" + result);
});

/** Permet de vider l'écran de résultat de la recherche */
scope.clear = function () {
	log.info("call de la method clear dans le BookController");
	log.info(scope.data.length);
	scope.data = [];
};

/** Permet d'aller vers la recherche d'un élément */
scope.searchItem = function() {
	log.info("searchItem: ");
	var b = {
			icon: d.createIcon(!0),
			editing: !0
	};
	scope.item = b, scope.settings.cmd = "Search", scope.item.title='todo', showForm(searchAside);
};

/** Permet de faire une recherche sur le serveur */
scope.startSearch = function(item) {
	log.info("startSearch: " + scope.item);

	// récupère les critères de recherche

	// lance la recherche


	// on met à jour le tableau du résultat

	// on ferme le bandeau de recherche
	hideForm(searchAside);
};

/** Permet de faire une recherche Elastic sur le serveur */
scope.startElasticSearch = function(item) {
	// récupère les critères de recherche
	var query = scope.item.query;
	log.info("startElasticSearch: " + query);
	
	scope.data = [];
	
	// lance la recherche via REST
	bookRestSearchService.query({query: query}, function success(result){
	log.info("receiving info from server side");
	scope.data = result;
	log.info("data post refresh:" + result);
	});
	
	// on met à jour le tableau du résultat
	
	// on ferme le bandeau de recherche
	hideForm(searchAside);
};

/** Permet de charger un seul item via son id */
scope.loadOneItem = function(id) {
	bookRestService.get({id: id}, function success(result) {
		scope.item = result;

		log.info("on a chargé: " + result);
	});
};

/* fill the result grid by default */
scope.refresh();

/** bandeau pour les modifications CRUD */
var crudAside = c({
	scope: scope,
	template: "assets/tpl/apps/crud-book.html",
	show: !1,
	placement: "left",
	backdrop: !1,
	animation: "am-slide-left"
	});

/** bandeau pour les recherches */
var searchAside = c({
	scope: scope,
	template: "assets/tpl/apps/crud-book-search.html",
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

/** Permet de sélectionner tous les items dans le modèle */
scope.checkAll = function() {
	log.info("function checkAll called");
	angular.forEach(scope.data, function(scope) {
		scope.selected = !scope.selected
	});
	log.info(scope.selectAll);
	scope.selectAll = !scope.selectAll;
	log.info(scope.selectAll);
};

/** Permet d'éditer un item */
scope.editItem = function(item) {
	//scope.loadOneItem(item.id);
	bookRestService.get({id: item.id}, function success(result) {
		scope.item = result;
		
		item && (item.editing = !0, scope.item = item, scope.settings.cmd = "Edit", showForm(crudAside));
		
		log.info("on a chargé: " + result);
	});
};

/** Permet de consulter un élément */
scope.viewItem = function(b) {
	scope.loadOneItem(b.id);
	
	b && (b.editing = !1, scope.item = b, scope.settings.cmd = "View", showForm(crudAside))
};

/** Permet d'aller vers la création d'un élément */
scope.createItem = function() {
	var b = {
	icon: d.createIcon(!0),
	editing: !0
	};
	scope.item = b, scope.settings.cmd = "New", showForm(crudAside)
	};
	
	/** Permet de sauvegarder ou de mettre à jour un élément */
	scope.saveItem = function() {
	/* création d'un élément */
	log.info("sauvegarde ou mise à jour en cours");
	
	var onSaveSuccess = function success(data) {
	console.log('success, got data: ', data);
	
	"New" == scope.settings.cmd/* && scope.data.push(scope.item)*/, hideForm(crudAside);
	
	scope.refresh();
	
	/** Pour l'affichage des messages vers l'utilisateur */
	b.showAlert = function(){
	    console.log("toto");
	    var userALert = alertService({
	                    title: "SUCCESS:",
	                    content: '<BR>Your book have been <i>created or updated</i>. You can find it int the result table. See <a href="#"><B>older messages</B></a> !',
	                    placement: "top-right",
	                    type: "theme",
	                    container: ".alert-container-top-right",
	                    show: !1,
	                    animation: "mat-grow-top-right"
	                    });
	    
	    timeoutService(function() {
	    	userALert.show()
	        }, 1 /*durée du timeout*/);
	};
	b.showAlert();
	};
	
	var onSaveError = function (result) {
		b.showAlert = function(){
		    console.log("toto");
		    var userALert = alertService({
		                    title: "ERROR:",
		                    content: "<BR>Your book haven't been created. Try again !",
		                    placement: "top-right",
		                    type: "theme",
		                    container: ".alert-container-top-right",
		                    show: !1,
		                    animation: "mat-grow-top-right"
		                    });
		    
		    timeoutService(function() {
		    	userALert.show()
		        }, 1 /*durée du timeout*/);
		};
		b.showAlert();
	};
	
	if (scope.item.id != null) {
	// mode update
	bookRestService.update(scope.item, onSaveSuccess, onSaveError);
	} else {
	// mode creation
	bookRestService.save(scope.item, onSaveSuccess, onSaveError);
	}
	
};

/** Permet de supprimer un élément ou tous les éléments sélectionnés */
scope.remove = function(b) {
	console.log(scope.selectAll);
	var r = confirm("Are you sure ?");
	if (r == true) {/*
		(b ? scope.data.splice(scope.data.indexOf(b), 1) : (scope.data = scope.data.filter(function(a) {
		return !a.selected
		}), scope.selectAll = !1)); 
	 	*/
		if (!b) {
			// suppression en masse
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
				} // fin du if
			} // fin du for

			bookRestMassDeleteService.massDelete({id: ids}, function success(data) {
				scope.refresh();
				/** Pour l'affichage des messages vers l'utilisateur */
				b.showAlert = function(){
				    var userALert = alertService({
				                    title: "SUCCESS:",
				                    content: '<BR>Your book have been deleted. The result table have been <b>updated</b>.',
				                    placement: "top-right",
				                    type: "theme",
				                    container: ".alert-container-top-right",
				                    show: !1,
				                    animation: "mat-grow-top-right"
				                    });
				    
				    timeoutService(function() {
				    	userALert.show()
				        }, 1 /*durée du timeout*/);
				};
				b.showAlert();
			}, function failure(err) {
				alert('request failed');
			});

		} else {
			// suppression d'un élément
			bookRestService.delete({id: b.id}, function success(data) {
				scope.refresh();
			}, function failure(err) {
				alert('request failed');
			});
		}	

	// on décoche la case à cocher globale
	scope.selectAll = false;
	}
};

/** Permet d'indexer tous les éléments */
scope.index = function() {
	bookRestIndexService.index();
};

/** Permet d'ouvrir un bandeau */
showForm = function(aside) {
	angular.element(".tooltip").remove();
	aside.show();
};

/** Permet de fermer un bandeau */
hideForm = function(aside) {
	aside.hide()
};

/** Permet de fermer tous les bandeau en cas de ? */
scope.${dollar}on("${dollar}destroy", function() {
	hideForm(crudAside);
	hideForm(searchAside);
	})
}]).factory('BookRestService', function (${dollar}resource) {
	/** Service contenant les appels vers le service REST basique */
	return ${dollar}resource('api/books/:id', {}, {
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
	}).factory('BookRestSearchService', function (${dollar}resource) {
/** Service contenant les appels vers le service REST dédié aux recherches Elastic */
return ${dollar}resource('api/books/search/:query', {}, {
'query': { method: 'GET', isArray: true}
});

}).factory('BookRestIndexService', function (${dollar}resource) {
	/** Service contenant les appels vers le service REST dédié aux recherches Elastic */
	return ${dollar}resource('api/books/indexAll', {}, {
		'index': { method: 'GET'}
	});
}).factory('BookRestMassDeleteService', function (${dollar}resource) {
	/** Service contenant les appels vers le service REST dédié aux mass delete */
	return ${dollar}resource('api/books/mass/:id', {}, {
		'massDelete': { method: 'DELETE'}
	});
}).config(['${dollar}resourceProvider', function(${dollar}resourceProvider) {
	// Don't strip trailing slashes from calculated URLs
	${dollar}resourceProvider.defaults.stripTrailingSlashes = false;
}]);