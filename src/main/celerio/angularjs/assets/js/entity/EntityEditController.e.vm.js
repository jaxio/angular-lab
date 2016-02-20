$output.webapp("assets\js\entity", "${entity.model.var}EditController.js")##

app.controller("${entity.model.type}EditController", ["${dollar}scope", "${dollar}window", "${dollar}aside", 
"${dollar}log", "${entity.model.type}RestService", 
		"${dollar}alert", "${dollar}timeout", "item", function(scope, window, aside, log, 
		${entity.model.var}RestService, alertService, timeoutService, item) {
	
	log.info("inside ${entity.model.type}EditController, item id: " + item.id);
	scope.item = item;

	/** Creates or updates an item */
	scope.saveItem = function() {
		log.info("Creating or updating an item");
		
		// defines the success behavior inside a methode
		var onSaveSuccess = function success(data) {
			console.log('success, got data: ', data);
		
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
		if (r == true) {
			if (b) {				
				// one item deletion mode
				${entity.model.var}RestService.delete({id: b.id}, function success(data) {
					scope.refresh();
				}, function failure(err) {
					alert('request failed');
				});
			}	
		}
	};

}]);
