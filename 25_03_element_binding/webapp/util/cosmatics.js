sap.ui.define(["sap/ui/core/format/NumberFormat"], function(oNumberFormat) {
    'use strict';
    return {
        toUpperCase: function(inp){
            if(inp){
            return inp.toUpperCase();
            }
        },
        changeCurrency: function(amount, currCode){
            var oCurrFormat = oNumberFormat.getCurrencyInstance();
            return oCurrFormat.format(amount, currCode);

             

        }
    };
});