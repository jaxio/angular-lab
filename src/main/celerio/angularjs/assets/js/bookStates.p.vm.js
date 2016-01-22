$output.webapp("assets\js", "bookStates.js")##
app.config(function(${dollar}stateProvider, ${dollar}urlRouterProvider) {
  //
  // For any unmatched url, redirect to /dashboard
  ${dollar}urlRouterProvider.otherwise("/dashboard");
  //
  
  // Now set up the states
  ${dollar}stateProvider
    .state('dashboard', {
      url: "/dashboard",
      templateUrl: "assets/tpl/dashboard.html"
    });
	
	${dollar}stateProvider
    .state('settings', {
      url: "/settings",
      templateUrl: "assets/tpl/settings.html"
    });
    
    ${dollar}stateProvider
    .state('logout', {
      url: "/logout",
      templateUrl: "assets/tpl/logout.html"
    });	
    	
	${dollar}stateProvider
	    .state('author', {
	      url: "/author",
	      templateUrl: "assets/tpl/apps/author.html",
		  controller: "AuthorController" 
	    });
	    	
  ${dollar}stateProvider
    .state('book', {
      url: "/book",
      templateUrl: "assets/tpl/apps/book.html",
	  controller: "BookController" 
    });
});