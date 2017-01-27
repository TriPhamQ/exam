console.log('Trivias Model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TriviaSchema = new mongoose.Schema({
	question: {type: String,
		required: true
	},
	answer1: {
		type: String || Number,
		required: true
	},
	answer2: {
		type: String || Number,
		required: true
	},
	answer3: {
		type: String || Number,
		required: true
	},
	id: {
		type: Number,
		required: true
	}
}, {timestamps: true});

mongoose.model('Trivia', TriviaSchema);
