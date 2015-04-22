var app = angular.module('app', [ 'ngRoute', 'restangular']);

app.config(function(RestangularProvider) {
	RestangularProvider.setBaseUrl('http://186.136.230.149:8081/index.php/');
});

app.config(function($routeProvider) {
	$routeProvider.when('/tv', {
		templateUrl : 'tv/tv.html',
		controller : 'tvController'
	}).when('/radio', {
		templateUrl : 'radio/radio.html',
		controller : 'radioController'
	}).when('/principal', {
		templateUrl : 'principal/principal.html',
		controller : 'principalController'
	}).when('/newsAbm', {
		templateUrl : 'newsAbm/newsAbm.html',
		controller : 'newsAbmController'
	}).when('/home', {
		templateUrl : 'home/home.html',
		controller : 'homeController'
	}).when('/newsDetail/:newsId', {
		templateUrl : 'newsDetail/newsDetail.html',
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
				"epigraph":"Picture 1",
			     "url" : "http://th02.deviantart.net/fs71/200H/i/2010/255/0/6/dsasda_by_caglarocal-d2yl1zw.jpg",
			},
			{
				"epigraph":"Picture 2",
			     "url" : "http://globe-views.com/dcim/dreams/car/car-03.jpg",
			},
			{
				"epigraph":"Picture 3",
			     "url" : "http://wallpapers111.com/wp-content/uploads/2015/03/Cars-Desktop-Wallpaper-HD3.jpg",
			}],
			"description" : "This is a long description of the news, it's so long that couldn't been displayed in the news thumbnail, so it should be cutted off"
		},
		{
			"id":1,
			"title" : "Titulo 2",
			"media":[{
				"epigraph":"Picture 1",
			     "url" : "http://i.telegraph.co.uk/multimedia/archive/01909/nice-beach_1909152b.jpg",
			}],
			"description" : "This is a short description of the news"
		},
		{
			"id":2,
			"title" : "Titulo 3",
			"media":[{
				"epigraph":"Picture 1",
			     "url" : "http://i.telegraph.co.uk/multimedia/archive/01909/nice-beach_1909152b.jpg",
			}],
			"description" : "This is a long description of the news, it's so long that couldn't been displayed in the news thumbnail, so it should be cutted off"
		},
		{
			"id":3,
			"title" : "Titulo 4",
			"media":[{
				"epigraph":"Picture 1",
			     "url" : "http://i.telegraph.co.uk/multimedia/archive/01909/nice-beach_1909152b.jpg",
			}],
			"description" : "This is a long description of the news, it's so long that couldn't been displayed in the news thumbnail, so it should be cutted off"
		} ];
});
