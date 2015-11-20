/* ------------------------------------------------------------------------- *\
	 							ROUTES
\* ------------------------------------------------------------------------- */

module.exports 	= function(app, passport) {

	'use strict';
  	var fs   = require('fs');
  	var path = require('path');

  	fs.readdir('./app/routes', loadRoutes);

	function loadRoutes(error, files) {
		if (error)
		  throw error;
		else
		  files.forEach(requireRoute);
	}

	function requireRoute(file) {
		// remove the file extension
		var route = file.substr(0, file.lastIndexOf('.'));
		// do not require index.js (this file)
		if (route !== 'index') {
		  // require the controller
		  require('./' + route)(app, passport);
		}
	}
}