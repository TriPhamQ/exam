var myApp = angular.module('app', ['ngRoute', 'ngCookies']);

myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/logreg.html',
		controller: 'logregController'
	})
	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html',
		controller: 'dashboardController'
	})
	.when('/new-question', {
		templateUrl: 'partials/new_question.html',
		controller: 'triviasController'
	})
	.when('/lets-play', {
		templateUrl: 'partials/lets_play.html',
		controller: 'playController'
	})
	.otherwise({
		redirectTo: '/'
	});
});
