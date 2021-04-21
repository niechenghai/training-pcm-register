/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comtraining./pcm_register/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
