({
    doInit : function(component, event, helper) {
        helper.doInit(component);
    },
    handleNew : function(component, event, helper) {
        $A.createComponent("c:NewCase", {},
                           function(content, status) {
                               if (status === "SUCCESS") {
                                   component.find('overlayLib').showCustomModal({
                                       header: "Create Case",
                                       body: content, 
                                       showCloseButton: true,
                                       closeCallback: function() {
                                           helper.doInit(component);
                                       }
                                   })   
                               }
                           });
        
        
    }
})