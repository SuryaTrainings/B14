sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/m/MessageBox"
], function (Controller, MessageBox) {
    'use strict';
    return Controller.extend("home.controller.screen1", {
        onInit: function () {

        },

        onBeforeRendering: function () {

        },

        onAfterRendering: function () {

        },

        onExit: function () {

        },

        //Custom methods too
        onPress: function () {
            MessageBox.show("on Press method executed");
        }
    });

});