sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(Controller,Filter,FilterOperator) {
    'use strict';
    
    return Controller.extend("st.sales.report.salesreport.controller.screen1",{

        onNext: function(){
            //step - 1 : Get Parent object
            var oAppCon = this.getView().getParent();
            //Step - 2 : Navigate parent to child
            oAppCon.to("idScreen2");
        },
        onSearch: function(oEvent){
            //4 - step process
            //1 - what user is looking for
            var sSearch = oEvent.getParameter("query");
            if(sSearch === '' || sSearch === undefined){
                sSearch = oEvent.getParameter("newValue");
            }
            //2 - Create filter and filter type object 
            var oFilter1 = new Filter("name",FilterOperator.Contains,sSearch);
            var oFilter2 = new Filter("taste",FilterOperator.Contains,sSearch);
            //3 - Filter data with above values
            var aFilter = [oFilter1,oFilter2];
            var oMaster = new Filter({
                filters:aFilter,
                and: false
            });
            var oList = this.getView().byId("idList");
            //4 - Bind the filtered data
            oList.getBinding("items").filter(oMaster);
        }

    });

});