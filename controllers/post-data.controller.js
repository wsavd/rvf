var Person = require('../models/person.model')

module.exports.post = function(req, res) {   
    var newPerson = new Person(req.body);

	newPerson.save(function(err, results){
		if(err) {
			res.send(err);
		} else {
		    res.send("we have a new person");
        }
    });
  };