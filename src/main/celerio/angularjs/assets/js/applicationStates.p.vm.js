$output.webapp("assets\js", "applicationStates.js")##
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
    	.state('logLevels', {
      		url: "/logLevels",
      		templateUrl: "assets/tpl/logLevels.html",
      		controller: "LogsController"
    });
    
    ${dollar}stateProvider
    	.state('translation', {
      		url: "/translation",
      		templateUrl: "assets/tpl/apps/admin/translation.html",
      		controller: "TranslationController"
    });		
    	
## main state for each entity    	
#foreach ($entity in $project.entities.list)
	${dollar}stateProvider
		.state('$entity.name.toLowerCase()', {
	    	url: "/$entity.name.toLowerCase()",
	    	templateUrl: "assets/tpl/apps/${entity.model.var}.html",
			controller: "${entity.name}Controller" 
	});		  
#end    	

## edit state for each entity    	
#foreach ($entity in $project.entities.list)
	${dollar}stateProvider
		.state('edit${entity.name}', {
			url: "/${entity.name.toLowerCase()}/{id}",
	    	templateUrl: "assets/tpl/apps/edit${entity.name}.html",
			controller: "${entity.name}EditController",
			resolve: {
				item : ['${dollar}stateParams', '${entity.name}RestService', '${dollar}log', function(${dollar}stateParams, ${entity.name}RestService, log) {
					log.info("inside resolve, id: " + ${dollar}stateParams.id);
                    return ${entity.name}RestService.get({id : ${dollar}stateParams.id}, function success(result) {log.info("inside success");}, 
                    function failure(result){log.info("inside success");}).${dollar}promise;
                    }]
				}
	});
#end

## create state for each entity    	
#foreach ($entity in $project.entities.list)
	${dollar}stateProvider
		.state('create${entity.name}', {
			url: "/${entity.name.toLowerCase()}",
	    	templateUrl: "assets/tpl/apps/edit${entity.name}.html",
			controller: "${entity.name}CreateController"
	});
#end
});