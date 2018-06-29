sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("mr.sapui.SUI5-1.controller.View3", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf mr.sapui.SUI5-1.view.View3
		 */
			onInit: function() {
			this._router = sap.ui.core.UIComponent.getRouterFor(this);
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf mr.sapui.SUI5-1.view.View3
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf mr.sapui.SUI5-1.view.View3
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf mr.sapui.SUI5-1.view.View3
		 */
		//	onExit: function() {
		//
		//	}
	akc1: function(){
		// registruj odata servis.
		// http://sapides.mi-system.co.rs:8000/sap/opu/odata/sap/ZRM_PROBA_SRV/ZbirFun?iPrvi=100&iDrugi=10
		var url =  "/sap/opu/odata/sap/ZRM_PROBA_SRV/";
		var oModel = new sap.ui.model.odata.v2.ODataModel( url );
		// pozovi funkciju sa odata servisa.
	},
	nazad: function() {
			//history.go(-1);
			this._router.navTo("RouteView1");
		}
	});

});