var myApp = angular.module('app', ['ngRoute', 'ngCookies']);

myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/logreg.html',
		controller: 'logregController'
	})
	.when('/:id/dashboard', {
		templateUrl: 'partials/dashboard.html',
		controller: ''
	})
	.otherwise({
		redirectTo: '/'
	});
});
