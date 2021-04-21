/*global QUnit*/

sap.ui.define([
	"comtraining./pcm_register/controller/RegisterView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("RegisterView Controller");

	QUnit.test("I should test the RegisterView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
