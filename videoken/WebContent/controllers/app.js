var videokenApp = angular.module("videokenApp", ["ngRoute","ui.bootstrap"]);

videokenApp.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'view/home.html',
			controller: 'videokenController'
		})
		.when('/details', {
			templateUrl: 'view/detials.html',
			controller: 'videokenController'
		})
		.otherwise({
			redirectTo: '/home'
		});
});