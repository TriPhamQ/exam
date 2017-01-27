myApp.controller('triviasController', ['$scope', 'triviasFactory', '$location', '$rootScope', '$cookies', function ($scope, triviasFactory, $location, $rootScope, $cookies) {
    console.log('triviasController loaded');

	$scope.logOut = function () {
        $cookies.remove('token');
        $cookies.remove('currentuser');
        $cookies.remove('currentuser_id');
        $rootScope.token = null;
        $rootScope.currentuser = null;
        $rootScope.currentuser_id = null;
        $location.url('/');
    };

	$scope.new = function () {
		console.log($scope.newTrivia);
		triviasFactory.new($scope.newTrivia, function (output) {
            console.log("New trivia created");
            $scope.newTrivia = {};
		});
	};
	console.log($rootScope.triviaID);
	console.log("ROOT USER IS", $rootScope.currentuser);
}]);
