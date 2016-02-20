$output.webapp("assets\js\admin", "logsController.js")##

/** main REST client for managing special Logs entity */
app.factory('LogsService', function (${dollar}resource) {
	return ${dollar}resource('api/logs', {}, {
    	'findAll': { method: 'GET', isArray: true},
        'changeLevel': { method: 'PUT'}
    });
});

/** Controller dedicated to Logs entity management */    
app.controller('LogsController', function (${dollar}scope, LogsService) {
	
	/** loads all items from the server side by default */
    ${dollar}scope.loggers = LogsService.findAll();
		
	/** updates logs level and refreshes the grid */	
    ${dollar}scope.changeLevel = function (name, level) {
        LogsService.changeLevel({name: name, level: level}, function () {
            ${dollar}scope.loggers = LogsService.findAll();
        });
    };
});