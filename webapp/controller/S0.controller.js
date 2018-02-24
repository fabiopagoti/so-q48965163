sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("q48965163.controller.S0", {
		
		onInit: function(){
			this._subcategorySelect = this.byId("subcategory-select");
		},
		
		onChangeCategory: function(oEvent){
			var oSelectedItem = oEvent.getParameters().selectedItem;
			var oContext = oSelectedItem.getBindingContext();
			// var oCategory = oContext.getObject();
			
			this._subcategorySelect.bindElement(oContext.getPath());
		}

	});
});