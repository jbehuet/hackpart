var mongoose = require('mongoose');

var partySchema = new mongoose.Schema({
  title: String,
  description: String,
  place: Number,
  date: Date,
  organizer : {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
  },
  price: Number,
  entrant:[{
      user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      hasPaid: Boolean
  }]
});

var Party = {
    model: mongoose.model('Party', partySchema),
        
    findAll: function(req, res) {
        Party.model.find({})
            .populate("organizer", "-password")
            .populate("entrant.user", "-password")
            .exec(function(err,parties) {
                res.json(parties);
		});
	},
    
    findById: function(req, res) {
		Party.model.findById(req.params.id)
            .populate("organizer", "-password")
            .populate("entrant.user", "-password")
            .exec(function (err, party) {
                res.json(party);
		});
	},

	create: function(req, res) {
		Party.model.create({
			title: req.body.title,
			description: req.body.description,
			place: req.body.place,
            date: req.body.date,
            organizer: req.body.organizer,
            price: req.body.price
		}, function(err, party) {
			res.json(party);
	    });
	},

	update: function(req, res) {
		Party.model.findByIdAndUpdate(req.params.id, { $set: {
			title: req.body.title,
			description: req.body.description,
			place: req.body.place,
            date: req.body.date,
            organizer: req.body.organizer,
            price: req.body.price
        }, $inc: {__v: 1} }, function(err, party) {
			res.sendStatus(200);
	    });
	},
    
    // Editer req.body.id par req.user._id
    subscribe: function(req, res){
        Party.model.findByIdAndUpdate(req.params.id, { $addToSet: {
            entrant: {
                user: req.body.id,
                hasPaid: false
            }
        }, $inc: {__v: 1}}, function(err, party) {
			res.sendStatus(200);
	    });
    },
    
    // Editer req.body.id par req.user._id
    unsubscribe: function(req, res){
        Party.model.findByIdAndUpdate(req.params.id, { $pull: {
            entrant: {
                user: req.body.id
            }
        }, $inc: {__v: 1}}, function(err, party) {
			res.sendStatus(200);
	    });
    },

    paid: function(req, res){
        Party.model.update({_id: req.params.id, 'entrant.user': req.body.id }, { $set: {
            'entrant.$.hasPaid': true, 
        }, $inc: {__v: 1}}, function(err, party) {
			res.sendStatus(200);
	    });
    },
    
    unpaid: function(req, res){
        Party.model.update({_id: req.params.id, 'entrant.user': req.body.id }, { $set: {
            'entrant.$.hasPaid': false, 
        }, $inc: {__v: 1}}, function(err, party) {
			res.sendStatus(200);
	    });
    },
    
	delete: function(req, res){
		Party.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	}
    
}

module.exports = Party;