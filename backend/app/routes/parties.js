/* ------------------------------------------------------------------------- *\
	 						   ROUTES USERS
\* ------------------------------------------------------------------------- */

var Party = require('../models/party.js');
var Auth = require('../middlewares/authorization.js');

module.exports 	= function(app, passport) {

	app.get('/api/parties', Auth.user.hasAuthorization, Party.findAll);

	app.get('/api/parties/:id', Auth.user.hasAuthorization, Party.findById);

	app.post('/api/parties', Auth.user.hasAuthorization, Party.create);

	app.put('/api/parties/:id', Auth.user.hasAuthorization, Party.update);
    
    app.put('/api/parties/subscribe/:id', Auth.user.hasAuthorization, Party.subscribe);
    
    app.put('/api/parties/unsubscribe/:id', Auth.user.hasAuthorization, Party.unsubscribe);
    
    app.put('/api/parties/paid/:id', Auth.user.hasAuthorization, Party.paid);
    
    app.put('/api/parties/unpaid/:id', Auth.user.hasAuthorization, Party.unpaid);
    
	app.delete('/api/parties/:id', Auth.user.hasAuthorization, Party.delete);

}