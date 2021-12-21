sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function (Controller) {
    'use strict';
    return Controller.extend("home.controller.screen1", {
        onInit: function () {
            // alert("onInit methods loaded");
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