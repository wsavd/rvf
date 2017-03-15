var mongoose = require('mongoose');

var PersonSchema = mongoose.Schema({
	firstName: {
		type: String
	},
	SecondName: {
        type: String
    }
});

var Person = module.exports = mongoose.model('Person', PersonSchema);