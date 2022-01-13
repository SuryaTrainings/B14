/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["home/project27/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
