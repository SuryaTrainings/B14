sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function(JSONModel) {
    'use strict';

    return {
        createJsonModel: function(sPath){
                debugger;
                //Step - 1 : Instantiate Model object 
                var oJsonModel = new JSONModel();
                //Step - 2 : Assign data to model
                // oJsonModel.setData();
                oJsonModel.loadData(sPath);

                return oJsonModel;
        }
    }
});