var app = angular.module('app', [ 'ngRoute', 'restangular', 'mm.foundation' ]);

app.config(function(RestangularProvider) {
	RestangularProvider.setBaseUrl('http://186.136.230.149:8081/index.php/');
});

app.config(function($routeProvider) {
	$routeProvider.when('/news', {
		templateUrl : 'app/news/news.html',
		controller : 'newsController'
	}).when('/tv', {
		templateUrl : 'app/tv/tv.html',
		controller : 'tvController'
	}).when('/radio', {
		templateUrl : 'app/radio/radio.html',
		controller : 'radioController'
	}).when('/newsAbm', {
		templateUrl : 'app/newsAbm/newsAbm.html',
		controller : 'newsAbmController'
	}).when('/home', {
		templateUrl : 'app/home/home.html',
		controller : 'homeController'
	}).when('/newsDetail/:newsId', {
		templateUrl : 'app/newsDetail/newsDetail.html',
		controller : 'newsDetailController'
	}).otherwise({
		redirectTo : '/home'
	});
});

app.run(function($rootScope) {
	//TODO: Dummy load of news
	$rootScope.dummyNews = [
		{
			"id":0,
			"title" : "Titulo 1",
			"media":[{
			     "url" : "http://th02.deviantart.net/fs71/200H/i/2010/255/0/6/dsasda_by_caglarocal-d2yl1zw.jpg",
			}],
			"description" : "This is a long description of the news, it's so long that couldn't been displayed in the news thumbnail, so it should be cutted off"
		},
		{
			"id":1,
			"title" : "Titulo 2",
			"media":[{
			     "url" : "http://i.telegraph.co.uk/multimedia/archive/01909/nice-beach_1909152b.jpg",
			}],
			"description" : "This is a short description of the news"
		},
		{
			"id":2,
			"title" : "Titulo 3",
			"media":[{
			     "url" : "http://i.telegraph.co.uk/multimedia/archive/01909/nice-beach_1909152b.jpg",
			}],
			"description" : "This is a long description of the news, it's so long that couldn't been displayed in the news thumbnail, so it should be cutted off"
		},
		{
			"id":3,
			"title" : "Titulo 4",
			"media":[{
			     "url" : "http://i.telegraph.co.uk/multimedia/archive/01909/nice-beach_1909152b.jpg",
			}],
			"description" : "This is a long description of the news, it's so long that couldn't been displayed in the news thumbnail, so it should be cutted off"
		} ];
});