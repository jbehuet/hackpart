var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  password: String
});

var User = {
    model: mongoose.model('User', userSchema),
    
    find: function(name, password, callback) {
        User.model.findOne({
            name: name,
            password: password
		}, {password: 0}, callback);
	},
    
    findAll: function(req, res) {
		User.model.find({}, {password: 0}, function (err, users) {
			res.json(users);
		});
	},

	findById: function(req, res) {
		User.model.findById(req.headers.id, {password: 0}, function (err, user) {
			 res.json(user);
		});
	},

	create: function(req, res) {
		User.model.create({
			name: req.body.name,
			password: req.body.password
		}, function(err, user) {
			res.sendStatus(200);
	    });
	},

	update: function(req, res) {
		User.model.findByIdAndUpdate(req.params.id, {
			name: req.body.name,
			password: req.body.password
		}, function(err, user) {
			res.sendStatus(200);
	    });
	},

	delete: function(req, res){
		User.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	}
}


module.exports = User;