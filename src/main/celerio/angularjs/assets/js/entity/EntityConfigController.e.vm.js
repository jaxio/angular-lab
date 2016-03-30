$output.webapp("assets\js\entity", "${entity.model.var}ConfigController.js")##

app.controller("${entity.model.type}ConfigController", ["${dollar}scope", "${dollar}window", "${dollar}aside", 
"${dollar}log", "AppParameterRestService", 
		"${dollar}alert", "${dollar}timeout", "config", function(scope, window, aside, log, 
		appParameterRestService, 
		alertService, timeoutService, config) {

	log.info("inside ${entity.model.type}EditController, config.value: " + config.value);
	scope.config = angular.fromJson(config.value);
	log.info("inside ${entity.model.type}EditController, config.address: " + config.address);

}]);
