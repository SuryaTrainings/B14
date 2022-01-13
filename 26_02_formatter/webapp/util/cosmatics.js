sap.ui.define([
    "sap/ui/core/format/NumberFormat"
], function(oNumberFormat) {
    'use strict';
    return {
        
       toUpperCase: function(empName){
            return empName.toUpperCase();
       },

       changeCurrency: function(amount, currCode){
           var oCurrFormat = oNumberFormat.getCurrencyInstance();
           return oCurrFormat.format(amount, currCode)
       }
    }
});