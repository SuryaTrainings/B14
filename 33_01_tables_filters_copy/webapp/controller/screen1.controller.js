sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(Controller, Filter, FilterOperator) {
    'use strict';
    
    return Controller.extend("st.sales.report.salesreport.controller.screen1",{

        onNext: function(){
            //step - 1 : Get Parent object
            var oAppCon = this.getView().getParent();
            //Step - 2 : Navigate parent to child
            oAppCon.to("idScreen2");
        },
        onSearch: function(oEvent){
            //1. What is that user type in search field
            var sSearch = oEvent.getParameter("query");
            //2. Construct the filter object with opertor and operand 
            var oFilter1 = new Filter("name", FilterOperator.Contains, sSearch);
            var oFilter2 = new Filter("taste", FilterOperator.Contains, sSearch);
            var aFilter = [oFilter1,oFilter2];
            var oMaster = new Filter({
                filters: aFilter,
                and: false
            });
            //3. Get the fiter object 
            var oList = this.getView().byId("idList");
            //4. Inject final values to list control
            oList.getBinding("items").filter(oMaster);
        }

    });

});