sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller, MessageBox) {
	"use strict";
	return Controller.extend("mr.sapui.SUI5-1.controller.View1", {
		akcija1: function() {
			MessageBox.success("Ovo je poruka");
		},
		akcija2: function() {
			MessageBox.alert("Ovo je poruka 2");
		}
	});
});