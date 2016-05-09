$output.webapp("assets\js\entity", "${entity.model.var}EditController.js")##

#set ($str1 = "")
#set ($str2 = "")
#set ($str3 = "")
#set ($str4 = "")
#set ($str5 = "")
#set ($str6 = "")
#set ($str7 = "")
#set ($str8 = "")
#set ($str9 = "")
#set ($str10 = "")
#generateSimpleOrCompositeKeyForURL($str1 $str2 $str3 $str4 $str5 $str6 $str7 $str8 $str9 $str10 $entity.attributes.list)

app.controller("${entity.model.type}EditController", ["${dollar}scope", "${dollar}window", "${dollar}aside", 
"${dollar}log", "${entity.model.type}RestService", 
#foreach ($attribute in $entity.allAttributes.list)
#if ($attribute.isInFk() || ($attribute.isInCpk() == true && $attribute.isSimpleFk() == true))
	#if ($attribute.getXToOneRelation().isManyToOne())
		"${attribute.getEntityIPointTo().name}RestService",
	#elseif ($attribute.getXToOneRelation().isOneToOne())
		"${attribute.getEntityIPointTo().name}RestService",
	#else
		/* Type of relation [$attribute.getXToOneRelation()] not implemented yet !!!! */
	#end 
#end
#end
		"${entity.model.type}RestInvRelationService", "${dollar}alert", "${dollar}timeout", "item", "mode", function(scope, window, aside, log, 
		${entity.model.var}RestService, 
#foreach ($attribute in $entity.allAttributes.list)
	#if ($attribute.isInFk() || ($attribute.isInCpk() == true && $attribute.isSimpleFk() == true))
		#if ($attribute.getXToOneRelation().isManyToOne())
			$attribute.getEntityIPointTo().name.substring(0,1).toLowerCase()$attribute.getEntityIPointTo().name.substring(1).toLowerCase()RestService,
		#elseif ($attribute.getXToOneRelation().isOneToOne())
			$attribute.getEntityIPointTo().name.substring(0,1).toLowerCase()$attribute.getEntityIPointTo().name.substring(1).toLowerCase()RestService,
		#else
			/* Type of relation [$attribute.getXToOneRelation()] not implemented yet !!!! */
		#end 
	#end
#end		
		${entity.model.var}RestInvRelationService, alertService, timeoutService, item, mode) {
	
	log.info("inside ${entity.model.type}EditController, mode: " + mode);
	log.info("inside ${entity.model.type}EditController, item: " + item);
	scope.mode = mode;
	scope.item = item;

#foreach ($attribute in $entity.allAttributes.list)
	#if ($attribute.isInFk() || ($attribute.isInCpk() == true && $attribute.isSimpleFk() == true))
		#if ($attribute.getXToOneRelation().isManyToOne())
// fill $attribute.getEntityIPointTo().name combo with data from server side
${attribute.getEntityIPointTo().name.substring(0,1).toLowerCase()}${attribute.getEntityIPointTo().name.substring(1).toLowerCase()}RestService.query({query: '*'}, function success(result){
	log.info("receiving ${attribute.getEntityIPointTo().name} from server side");
	scope.$attribute.getEntityIPointTo().name.substring(0,1).toLowerCase()$attribute.getEntityIPointTo().name.substring(1)s = result.content;
	log.info("${attribute.getEntityIPointTo().name} post refresh: " + result.length);
});
		#elseif ($attribute.getXToOneRelation().isOneToOne())
	// fill $attribute.getEntityIPointTo().name combo with data from server side
	${attribute.getEntityIPointTo().name.substring(0,1).toLowerCase()}${attribute.getEntityIPointTo().name.substring(1).toLowerCase()}RestService.query({query: '*'}, function success(result){
		log.info("receiving ${attribute.getEntityIPointTo().name} from server side");
		scope.$attribute.getEntityIPointTo().name.substring(0,1).toLowerCase()$attribute.getEntityIPointTo().name.substring(1)s = result.content;
		log.info("${attribute.getEntityIPointTo().name} post refresh: " + result.length);
	});
		#else
			// Type of relation [$attribute.getXToOneRelation()] not implemented yet !!!! 
		#end 
	#end
#end		
	
## --------------- Inverse relation
#foreach ($entityP in $project.getEntities().list)
#foreach ($rel in $entityP.getRelations().list)
#if ($entity == $rel.getToEntity())
#if ($rel.getKind() == "many-to-one" || $rel.getKind() == "many-to-many" || $rel.getKind() == "one-to-one")
	${entity.model.var}RestInvRelationService.find${entityP.model.type}By${entity}({id: item.id}, function(result) {
	    scope.find${entityP.model.type}By${entity} = result;
	    log.info("inv. relation, ${entityP.model.type} data post refresh: " + scope.find${entityP.model.type}By${entity}.length);
    });
#end
#end
#end ## end foreach relation
#end  ## end foreach entity

	/** Clear item */
	scope.clear = function () {
			scope.item = null;
	};
	
	/** Creates or updates an item */
	scope.saveItem = function() {
		log.info("Creating or updating an item");
		
		// defines the success behavior inside a methode
		var onSaveSuccess = function success(data) {
			console.log('success, got data: ', data);
		
			window.showAlert = function(){
				
				var userALert = alertService({
		                    title: "SUCCESS:",
		                    content: '<BR>Your ${entity.model.var} have been <i>created or updated</i>. You can find it in the result table. See <a href="#"><B>older messages</B></a> !',
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
			console.log("update mode");
			#if (!$entity.hasSimplePk())
				#foreach ($attribute in $entity.getPrimaryKey().getAttributes())
					#if ($attribute.isSimpleFk() == true)
						scope.item.id.${attribute.var}  = scope.item.${attribute.var}.id;
					#else
						scope.item.${attribute.var} = scope.item.id.${attribute.var};
					#end
				#end
			#end	
			${entity.model.var}RestService.update(scope.item, onSaveSuccess, onSaveError);
		} else {
			// creation mode
			console.log("creation mode");
			${entity.model.var}RestService.save(scope.item, onSaveSuccess, onSaveError);
		}
	};

	/** Removes one item or a list of items (selected ones) */
	scope.remove = function(item) {
		
		var r = confirm("Are you sure ?");
		if (r == true) {
			if (item) {				
				// one item deletion mode
				#set ($key = "{id: item.id}")
				#if (!$entity.hasSimplePk())
					#set ($key = $str8)
					#foreach ($attribute in $entity.getPrimaryKey().getAttributes())
						console.log("cpk: " + item.id.$attribute.var);
					#end
				#end
				${entity.model.var}RestService.delete($key, function success(data) {
					scope.clear();
					alert('item deleted');
				}, function failure(err) {
					alert('request failed');
				});
			}	
		}
	};

}]);
