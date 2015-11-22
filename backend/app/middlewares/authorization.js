/*
 *  User authorization routing middleware
 */

var jwt = require('jsonwebtoken');

exports.user = {
    
	hasAuthorization: function (req, res, next) {
        console.log(req.headers.authorization);
        if (req.headers.authorization){
            jwt.verify(req.headers.authorization, 'tokenHackpartSecret', function(err, decoded) { 
                if (err)
                    return res.sendStatus(403);
                else
                    next();
            });
        }else{
            return res.sendStatus(403);
        }
 	}
};