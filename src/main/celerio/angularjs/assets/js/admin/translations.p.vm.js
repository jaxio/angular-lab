$output.webapp("assets\js\admin", "translations.js")##

app.config(['${dollar}translateProvider', function (${dollar}translateProvider) {
	${dollar}translateProvider.translations('en', {
	
#foreach ($entity in $project.entities.list)
		  '$entity.name.toUpperCase()_TITLE': '$entity.name',
		  '$entity.name.toUpperCase()_MENU': '$entity.name',
#end
	
    	'ENTITY_DESCRIPTION': 'Use this page to manage book entities. You will be able to search, view, edit and delete items.',
    
      	'ID': 'Id',
      	'TITLE': 'Title',
      	'AUTHOR': 'Author',
      	'DESCRIPTION': 'Description',
      	'PRICE': 'Price',
      	'PUBLICATION_DATE': 'Publication date',
      	'NB_ITEMS_AVAILABLE': '{{nb}} {{item}} available',
      
      	// common translation
      	'ACTIONS': 'Actions',
      	'INFO': 'Info',
      	'SEARCH': 'Search',
      	'ELASTIC_SEARCH': 'Elastic search',
      	'QUERY': 'Query',
      	'REFRESH_GRID': 'Refresh the grid',
      	'CLEAR_GRID': 'Clear the grid',
      	'INDEX_ITEMS': 'Index all items',
      	'VIEW_ITEM': 'View item',
      	'EDIT_ITEM': 'Edit item',
      	'DELETE_ITEM': 'Delete item',
      	'ADD_ITEM': 'Add an item',
      	'SAVE': 'Save',
      	'SCROLL_TO_TOP': 'Scroll to top',
      	'CLOSE': 'Close this aside'
  	});
 
 	${dollar}translateProvider.translations('fr', {
    	'TITLE': 'Entité livre',
    	'DESCRIPTION': 'à faire'
  	});
 
 	/** sets default language */
 	${dollar}translateProvider.fallbackLanguage('en');
 
  	${dollar}translateProvider.preferredLanguage('en');
  
  	/** Stores the language over cross http requests */
  	/**${dollar}translateProvider.useCookieStorage();*/
  
 	/** Enable escaping of HTML */
  	${dollar}translateProvider.useSanitizeValueStrategy('sanitizeParameters');
}]);