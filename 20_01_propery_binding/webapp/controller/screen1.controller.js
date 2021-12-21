sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function (Controller) {
    return Controller.extend("home.controller.screen1", {
        onInit: function () {
            //Step - 1 : Instantiate Model object 
            var oJsonModel = new sap.ui.model.json.JSONModel();

            //Step - 2 : Assign data to model
            oJsonModel.setData({
                "empData" : {
                    "empId" : 0001,
                    "empName" : "SURYA",
                    "empSal" : 20000,
                    "empCur" : "INR"
                }
            });

            //Step - 3 : Make aware of model to the FRAMEWORK
            sap.ui.getCore().setModel(oJsonModel);


            //Controller property binding
            var oEmpSal = this.getView().byId("idEmpSal").bindValue("/empData/empSal");

            
            //Controller property binding
            var oEmpCur = this.getView().byId("idEmpCurr").bindProperty("value", "/empData/empCur");                    },

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