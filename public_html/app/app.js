var app = angular.module('app', [ 'ngRoute','restangular' ]);

app.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:8081/index.php/');
});

app.config(function($routeProvider) {
	$routeProvider.when('/news', {
		templateUrl : 'app/news/news.html',
		controller : 'newsController'
	}).otherwise({
		redirectTo : '/news'
	});
});
