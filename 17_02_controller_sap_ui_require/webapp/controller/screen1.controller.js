sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function (Controller) {
    'use strict';
    return Controller.extend("home.controller.screen1", {
        onInit: function () {
            alert("onInit methods loaded");
        },

        onBeforeRendering: function () {

        },

        onAfterRendering: function () {

        },

        onExit: function () {
            
        },

        //Custom methods too
        onPress: function () {
            sap.ui.require(["sap/m/MessageToast"], function(MessageToast){
                MessageToast.show("Your order placed successfully",{
                    "duration": 1000
                });
            })
        }
    });

});