$output.webapp("assets\js\entity", "${entity.model.var}CreateController.js")##

app.controller("${entity.model.type}CreateController", ["${dollar}scope", "${dollar}window", "${dollar}aside", 
"${dollar}log", "${entity.model.type}RestService", 
#foreach ($attribute in $entity.nonCpkAttributes.list)
#if ($attribute.isInFk())
	#if ($attribute.getXToOneRelation().isManyToOne())
		"${attribute.getEntityIPointTo().name}RestService",
	#else
		/* Type of relation [$attribute.getXToOneRelation()] not implemented yet !!!! */
	#end 
#end
#end
		"${dollar}alert", "${dollar}timeout", function(scope, window, aside, log, 
		${entity.model.var}RestService, 
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
