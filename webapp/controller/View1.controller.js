sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller, MessageBox) {
	"use strict";
	return Controller.extend("mr.sapui.SUI5-1.controller.View1", {
		onInit: function() {
			this._router = sap.ui.core.UIComponent.getRouterFor(this);
		},

		akcija1: function() {
			MessageBox.success("Ovo je poruka");
		},
		akcija2: function() {
			MessageBox.alert("Ovo je poruka 2");
		},
		akcija3: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("View2");
		},
		akcija4: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("View3");
		},
	    akcija5: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("View4");
		}
	});
});