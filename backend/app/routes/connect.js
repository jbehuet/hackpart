/* ------------------------------------------------------------------------- *\
	 						ROUTES CONNECT
\* ------------------------------------------------------------------------- */

var User = require('../models/user.js');

module.exports 	= function(app, passport) {

	app.get('/api/loggedin', function(req, res) {
	  res.send(req.isAuthenticated() ? req.user : '0');
	});

	app.post('/api/login', passport.authenticate('local'), function(req, res) {
	  res.send(req.user);
	});

	app.post('/api/logout', function(req, res){
	  req.logOut();
	  res.sendStatus(200);
	});
}