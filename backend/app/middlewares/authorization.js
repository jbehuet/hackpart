/*
 *  User authorization routing middleware
 */

exports.user = {
    
	hasAuthorization: function (req, res, next) {
	    //if (!req.user) {
	    //  return res.sendStatus(403);
	    //}
	    next();
 	}
};