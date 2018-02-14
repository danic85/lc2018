({
    doInit : function(component, event, helper) {
        // Prepare a new record from template
        component.find("caseCreator").getNewRecord(
            "Case", null, false, 
            $A.getCallback(function() {
                var rec = component.get("v.newCase");
            })
        );
    },
    handleSaveCase : function (component, event, helper) {
        component.find("caseCreator").saveRecord(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                // record is saved successfully
                var resultsToast = $A.get("e.force:showToast");
                resultsToast.setParams({
                    "title": "Saved",
                    "message": "The record was saved.",
                    "type": "success"
                });
                resultsToast.fire();
                component.find("overlayLib").notifyClose();  
            } 
        });
        
    }
})