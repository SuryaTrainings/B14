sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';
    
    return Controller.extend("home.controller.screen1",{

        onNext: function(){
            //step - 1 : Get Parent object
            var oAppCon = this.getView().getParent();
            //Step - 2 : Navigate parent to child
            oAppCon.to("idScreen2");
        }

    });

});