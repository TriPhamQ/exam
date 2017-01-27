myApp.factory('triviasFactory', ['$http', '$cookies', '$rootScope', function ($http, $cookies, $rootScope) {
	console.log('Trivias Factory');
	var factory = {};

	factory.new = function (trivia, callback) {
		console.log("Inside the trivia factory", trivia);
		trivia.id = $rootScope.triviaID
		$http.post('/trivia', trivia).then(function (output) {
			$rootScope.triviaID ++;
			callback(output);
		});
	};

	factory.getall = function (callback) {
		console.log("Let's get all the trivias...");
		$http.get('/trivias').then(function (output) {
			callback(output);
		});
	};

	return factory;
}]);
