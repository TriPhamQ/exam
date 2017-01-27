console.log('trivias controller');
var mongoose = require('mongoose');
var Trivia = mongoose.model('Trivia');

module.exports = (function () {
	return {
		new: function (req, res) {
			console.log("In the new trivia");
			console.log(req.body);
			Trivia.create(req.body, function (err, results) {
				if (err) {
					console.log(err);
				}
				else {
					console.log("New trivia created");
					res.json(results);
				};
			});
		},
		getall: function (req, res) {
			console.log("Lets get all the trivias");
			Trivia.find({},function (err, results) {
				if (err) {
					console.log("Something went wrong while getting all trivias");
				}
				else {
					console.log("Found trivias from DB");
					res.json(results);
				};
			});
		}
	}
})();
