sap.ui.define([
    "sap/ui/core/UIComponent"
], function(UIComponent) {
    'use strict';
    
    return UIComponent.extend("home.Component",{
        
        metadata: {
            manifest: "json"        
        },

        init: function(){
            UIComponent.prototype.init.apply(this);
        },

        createContent: function(){

            // App view
            var oView = sap.ui.view({
                viewName : "home.view.App",
                id: "idAppView",
                // type:"XML"
                type:sap.ui.core.mvc.ViewType.XML

            });

            var oScreen1 = sap.ui.view({
                viewName : "home.view.screen1",
                id: "idScreen1",
                // type:"XML"
                type:sap.ui.core.mvc.ViewType.XML

            });

            var oScreen2 = sap.ui.view({
                viewName : "home.view.screen2",
                id: "idScreen2",
                // type:"XML"
                type:sap.ui.core.mvc.ViewType.XML

            });

            var oAppCon = oView.byId("appCon");

            oAppCon.addPage(oScreen1);

            oAppCon.addPage(oScreen2);
            
            return oView;

        }
    })
});