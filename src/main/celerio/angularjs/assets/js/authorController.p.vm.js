$output.webapp("assets\js", "authorController.js")##
app.controller("AuthorController", ["${dollar}scope", "${dollar}window", "${dollar}aside", 
"PlaceholderTextService", "${dollar}log", 
"AuthorRestService", "AuthorRestSearchService", "AuthorRestIndexService", function(scope, b, c, 
	d, log, authorRestService, authorRestSearchService, authorRestIndexService) {
scope.settings = {
	singular: "Item",
	plural: "Items",
	cmd: "Add"
};

/** Permet de rafraichir l'écran de résultat de la recherche */
scope.refresh = function () {
	log.info("call de la method refresh dans le AuthorController");
	authorRestService.query('', function(result) {
		log.info("receiving info from server side");
		scope.data = result;
		log.info("data post refresh:" + result);
	});
};

/** Permet de vider l'écran de résultat de la recherche */
scope.clear = function () {
	log.info("call de la method clear dans le AuthorController");
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
	authorRestSearchService.query({query: query}, function success(result){
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
	authorRestService.get({id: id}, function success(result) {
		scope.item = result;

		log.info("on a chargé: " + result);
		});
};

//scope.clearAll();
/* on rafaichit l'écran résultat */
scope.refresh();

//scope.data = [];

/** bandeau pour les modifications CRUD */
var crudAside = c({
	scope: scope,
	template: "assets/tpl/apps/crud-author.html",
	show: !1,
	placement: "left",
	backdrop: !1,
	animation: "am-slide-left"
	});

/** bandeau pour les recherches */
var searchAside = c({
	scope: scope,
	template: "assets/tpl/apps/crud-author-search.html",
	show: !1,
	placement: "left",
	backdrop: !1,
	animation: "am-slide-left"
	});

/** Permet de vider le tableau des éléments */
scope.clearAll = function() {
	scope.data = [];
};

/** Permet de sélectionner tous les items dans le modèle */
scope.checkAll = function() {
	angular.forEach(scope.data, function(scope) {
	scope.selected = !scope.selected
	})
};

/** Permet d'éditer un item */
scope.editItem = function(item) {
	//scope.loadOneItem(item.id);
	authorRestService.get({id: item.id}, function success(result) {
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
		};

	var onSaveError = function (result) {
		alert('request failed');
		};

	if (scope.item.id != null) {
	// mode update
	authorRestService.update(scope.item, onSaveSuccess, onSaveError);
	} else {
	// mode creation
	authorRestService.save(scope.item, onSaveSuccess, onSaveError);
	}

};

/** Permet de supprimer un élément ou tous les éléments sélectionnés */
scope.remove = function(b) {
	console.log(scope.selectAll);
	var r = confirm("Are you sure ?");
	if (r == true) {
		if (!b) {
			for	(index = 0; index < scope.data.length; index++) {
				if (scope.data[index].selected) {
					console.log(index + ' ' + scope.data[index].title);

					authorRestService.delete({id: scope.data[index].id}, function success(data) {
						scope.refresh();
					}, function failure(err) {
						alert('request failed');
					});
					}
					}
				} else {
					authorRestService.delete({id: b.id}, function success(data) {
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
	authorRestIndexService.index();
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
	hideform(searchAside);
})
}]).factory('AuthorRestService', function (${dollar}resource) {
	/** Service contenant les appels vers le service REST basique */
	return ${dollar}resource('api/authors/:id', {}, {
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
}).factory('AuthorRestSearchService', function (${dollar}resource) {
	/** Service contenant les appels vers le service REST dédié aux recherches Elastic */
	return ${dollar}resource('api/authors/search/:query', {}, {
		'query': { method: 'GET', isArray: true}
	});

}).factory('AuthorRestIndexService', function (${dollar}resource) {
	/** Service contenant les appels vers le service REST dédié aux recherches Elastic */
	return ${dollar}resource('api/authors/indexAll', {}, {
		'index': { method: 'GET'}
	});

}).config(['${dollar}resourceProvider', function(${dollar}resourceProvider) {
	// Don't strip trailing slashes from calculated URLs
	${dollar}resourceProvider.defaults.stripTrailingSlashes = false;
}]);