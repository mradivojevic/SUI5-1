sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageBox"
], function(Controller, History, MessageBox) {
	"use strict";

	return Controller.extend("mr.sapui.SUI5-1.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf mr.sapui.SUI5-1.view.View2
		 */
		onInit: function() {
			
			this._router = sap.ui.core.UIComponent.getRouterFor(this);
			this._model = this.getOwnerComponent().getModel("MojModel");
			this.getView().setModel(this._model);

		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf mr.sapui.SUI5-1.view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf mr.sapui.SUI5-1.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf mr.sapui.SUI5-1.view.View2
		 */
		//	onExit: function() {
		//
		//	}
		nazad: function() {
			//history.go(-1);
			this._router.navTo("RouteView1");
		},
		popup: function() {
			var objm = this._model.getObject("/MM");
			MessageBox.success(objm.zaglavlje.pod1);
			
			var combolist = this.getView().byId("box0");
			MessageBox.success(combolist.getSelectedKey());
			
		}
	});

});