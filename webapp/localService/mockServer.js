sap.ui.define([
	"sap/ui/core/util/MockServer"
], function(MockServer) {
	"use strict";

	return {

		init: function() {
			// create
			var oMockServer = new MockServer({
				rootUri: "/"
			});

			// simulate against the metadata and mock data
			oMockServer.simulate("localService/metadata.xml", {
				sMockdataBaseUrl: "localService/mockdata",
				bGenerateMissingMockData: true
			});

			// start
			oMockServer.start();

			jQuery.sap.log.info("Running the app with mock data");
		}

	};

});