var app = angular.module('app', [ 'ngRoute','restangular' ]);

app.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://186.136.230.149:8081/index.php/');
});

app.config(function($routeProvider) {
	$routeProvider.when('/news', {
		templateUrl : 'app/news/news.html',
		controller : 'newsController'
	}).when('/home', {
		templateUrl : 'app/home/home.html',
		controller : 'homeController'
	}).otherwise({
		redirectTo : '/home'
	});
});
