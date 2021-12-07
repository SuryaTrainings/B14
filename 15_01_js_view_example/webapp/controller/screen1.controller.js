sap.ui.define(["sap/ui/core/mvc/Controller"], 
    function(Controller) {
    'use strict';
    
return Controller.extend("home.controller.screen1",{
    press: function(){
        var oCore   = sap.ui.getCore();
        var oInpRef = oCore.byId("idInput");
        var oValue  = oInpRef.getValue();

        alert(oValue);
    }
});

});