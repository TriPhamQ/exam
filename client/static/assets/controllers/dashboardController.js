myApp.controller('dashboardController', ['$scope', 'dashboardFactory', '$location', '$rootScope', '$cookies', function ($scope, dashboardFactory, $location, $rootScope, $cookies) {
    console.log('dashboardController loaded');

	$scope.logOut = function () {
        $cookies.remove('token');
        $cookies.remove('currentuser');
        $cookies.remove('currentuser_id');
        $rootScope.token = null;
        $rootScope.currentuser = null;
        $rootScope.currentuser_id = null;
        $location.url('/');
    };

	dashboardFactory.getall(function (output) {
		console.log("Got back users from factory:", output.data);
		$scope.users = output.data;
	});
	console.log("ROOT USER IS", $rootScope.currentuser);
}]);
