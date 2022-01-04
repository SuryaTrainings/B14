sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function(JSONModel,ResourceModel) {
    'use strict';

    return {
        createJsonModel: function(sPath){
                debugger;
                //Step - 1 : Instantiate Model object 
                var oJsonModel = new JSONModel();
                //Step - 2 : Assign data to model
                // oJsonModel.setData();
                oJsonModel.loadData(sPath);
                oJsonModel.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
                debugger;
                return oJsonModel;
        },
        createResourceModel: function(sPath){
            debugger;
            //Step - 1 : Instantiate Model object 
            var oResourceModel = new ResourceModel({
                bundleUrl : "i18n/i18n.properties"
            });
            return oResourceModel;
    }

    }
});