sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'home/model/models'
], function (Controller, oModels) {
    return Controller.extend("home.controller.screen1", {
        onInit: function () {

            debugger;

            var oJsonModel = oModels.createJsonModel("model/mockdata/empData.json");

            
            var oJsonModel2 = oModels.createJsonModel("model/mockdata/empData2.json");

            
            var oJsonModel3 = oModels.createJsonModel("model/mockdata/empData3.json");

            //Step - 3 : Make aware of model to the FRAMEWORK
            sap.ui.getCore().setModel(oJsonModel);

            sap.ui.getCore().setModel(oJsonModel2, "person2");

            sap.ui.getCore().setModel(oJsonModel3, "person3");

            debugger;
            
        },
        onBeforeRendering: function () {

        },

        onAfterRendering: function () {

        },

        onExit: function () {
            
        },

        //Custom methods too
        onPress: function () {
            // sap.ui.require(["sap/m/MessageToast"], function(MessageToast){
            //     MessageToast.show("Your order placed successfully",{
            //         "duration": 1000
            //     });
            // })
        },

        onBtn1Press: function(){
            // alert("Btn 1 press function working fine");

            var oView = this.getView();

            oView.byId("idEmpName").setValue("SURYA");
            oView.byId("idEmpId").setValue("10704");
            oView.byId("idEmpSal").setValue("7500");
            oView.byId("idEmpCurr").setValue("INR");
            
        }
    });

});