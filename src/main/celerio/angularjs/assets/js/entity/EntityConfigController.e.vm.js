$output.webapp("assets\js\entity", "${entity.model.var}ConfigController.js")##

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

app.controller("${entity.model.type}ConfigController", ["${dollar}scope", "${dollar}window", "${dollar}aside", 
"${dollar}log", "AppParameterRestService", 
		"${dollar}alert", "${dollar}timeout", "config", function(scope, window, aside, log, 
		appParameterRestService, 
		alertService, timeoutService, config) {

	if (!config.value) {
		// config is empty, create one without id
		config = {"domain": "SCREEN_CONFIG", "key": "${entity.name}", "value": "$str9"};
	}
	log.info("inside ${entity.model.type}ConfigController, config.value: " + config.value);
	scope.configValue = angular.fromJson(config.value);

	/** Saves config into database */
	scope.saveConfig = function (configValue) {
		log.info("call method saveConfig inside ${entity.model.type}ConfigController");
		
		// defines the success behavior inside a method
		var onSaveSuccess = function success(data) {
			console.log('success, got data: ', data);
		
			window.showAlert = function(){
				
				var userALert = alertService({
		                    title: "SUCCESS:",
		                    content: '<BR>Your store have been <i>created or updated</i>. You can find it int the result table. See <a href="#"><B>older messages</B></a> !',
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
			                    content: "<BR>Your store haven't been created. Try again !",
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
		
		// we have to recreate a JSON valid parameter	
		config.value = angular.toJson(configValue, true);
		appParameterRestService.update(config, onSaveSuccess, onSaveError);
	};
}]);
