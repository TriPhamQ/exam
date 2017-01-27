myApp.factory('playFactory', ['$http', '$cookies', '$rootScope', function ($http, $cookies, $rootScope) {
	console.log('Play Factory');
	var factory = {};

	factory.score = function (w, l ,callback) {
		console.log("from play factory, Win:", w, "Lost:", l);
		console.log("user is:", $rootScope.currentuser_id);
		$http.post('/update', {userid: $rootScope.currentuser_id, win: w, lost: l}).then(function (output) {
		//
		});
	};

	return factory;
}]);
