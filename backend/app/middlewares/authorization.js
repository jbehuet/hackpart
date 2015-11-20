/*
 *  User authorization routing middleware
 */

exports.user = {
    
	hasAuthorization: function (req, res, next) {
	    //if (!req.user) {
	    //  return res.sendStatus(403);
	    //}
	    next();
 	},
    
	isAdministrator: function (req, res, next) {
	    //if (!req.user.admin) {
	    //  return res.sendStatus(401);
	    //}
	    next();
  	}
};