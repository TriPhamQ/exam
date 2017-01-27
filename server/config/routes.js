console.log("Routes...");
var users = require('../controllers/users.js');
var trivias = require('../controllers/trivias.js');

module.exports = function(app){
    app.get('/', function (req, res) {
		console.log("Hello");
	});
    app.post('/reg', function (req, res) {
        users.register(req, res);
    });
    app.post('/log', function (req, res) {
        users.login(req, res);
    });
    app.get('/users', function (req, res) {
		users.getall(req, res);
	});
    app.post('/trivia', function (req, res) {
        trivias.new(req, res);
    });
    app.get('/trivias', function (req, res) {
        trivias.getall(req, res);
    });
    app.post('/update', function (req, res) {
        users.update(req, res);
    });
};
