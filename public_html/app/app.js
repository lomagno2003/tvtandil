var app = angular.module('app', [ 'ngRoute','restangular','mm.foundation']);

app.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://186.136.230.149:8081/index.php/');
});

app.config(function($routeProvider) {
	$routeProvider.when('/news', {
		templateUrl : 'app/news/news.html',
		controller : 'newsController'
	}).when('/newsAbm', {
		templateUrl : 'app/newsAbm/newsAbm.html',
		controller : 'newsAbmController'
	}).when('/home', {
		templateUrl : 'app/home/home.html',
		controller : 'homeController'
	}).when('/newsDetail', {
		templateUrl : 'app/newsDetail/newsDetail.html',
		controller : 'newsDetailController'
	}).otherwise({
		redirectTo : '/home'
	});
});
