sap.ui.jsview("home.view.screen1",{
    getControllerName: function(){
        return "home.controller.screen1"
    },

    createContent:function(oController){
        var oInp = new sap.m.Input("idInput", {
            placeholder : "Enter a value"
        }); 

        var oBtn = new sap.m.Button("idBtn", {
            text: "Display Input data",
            press: oController.press
        });

        return [oInp, oBtn]
    }

});