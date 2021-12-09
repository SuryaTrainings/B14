sap.ui.define(["sap/ui/core/mvc/Controller"], 
    function(Controller) {
    'use strict';
    
return Controller.extend("home.controller.screen1",{
    press: function(){
        var oCore   = this.getView();
        var oInpRef = oCore.byId("idInput");
        var oValue  = oInpRef.getValue();

        alert(oValue);
    }
});

});