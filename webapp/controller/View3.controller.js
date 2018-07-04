sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller, MessageBox) {
	"use strict";

	return Controller.extend("mr.sapui.SUI5-1.controller.View3", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf mr.sapui.SUI5-1.view.View3
		 */
		onInit: function() {
			this._router = sap.ui.core.UIComponent.getRouterFor(this);
			var url = "/sap/opu/odata/sap/ZRM_PROBA_SRV";
			this._model = new sap.ui.model.odata.v2.ODataModel(url);
		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf mr.sapui.SUI5-1.view.View3
		 */
		//  onExit: function() {
		//
		//  }

		akc1: function() {
			// /sap/opu/odata/sap/ZRM_PROBA_SRV/ZbirFun?iPrvi=100&iDrugi=1
			var prvi = this.getView().byId("input1").getValue();
			var drugi = this.getView().byId("input2").getValue();
			
			this._model.callFunction("/ZbirFun", {
				method: "POST",
				urlParameters: {
					"iPrvi": prvi,
					"iDrugi": drugi
				},
				success: this.pozUsp,
				error: this.pozGresk
			});

		},
		nazad: function() {
			//history.go(-1);
			this._router.navTo("RouteView1");
		},

		pozUsp: function(odata, response) {
			MessageBox.success("Rezultat: " + odata.Zbir);
		},

		pozGresk: function(oerror) {
			MessageBox.alert(oerror);
		}
	});

});