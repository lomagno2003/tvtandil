var app = angular.module('app', [ 'ngRoute', 'restangular', 'ui.bootstrap']);

app.config(function(RestangularProvider) {
	RestangularProvider.setBaseUrl('http://localhost:8081/index.php');
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
	}).when('/newsAbm/:newsId', {
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
			     "url" : "http://www.fondosescritoriogratis.net/wp-content/uploads/2010/12/paisaje-de-vietnam.jpg",
			},
			{
				"epigraph":"Picture 2",
			     "url" : "http://globe-views.com/dcim/dreams/car/car-03.jpg",
			},
			{
				"epigraph":"Picture 3",
			     "url" : "http://wallpapers111.com/wp-content/uploads/2015/03/Cars-Desktop-Wallpaper-HD3.jpg",
			}],
			"description" : 
 "TLorem ipsum dolor sit celerisque metus. Ut scelerisque, nibh non lacinia justo gravida eros, nec auctor tortor libero at elit. Proin imperdiet augue at diam convallis vestibulum. Donec tristique id urna ut semper. \n"
 + "\n"
 + "Curabitur mattis nisi arcu, eget suscipit turpis posuere quis. Morbi blandit gravida velit, nec efficitur nisl mattis vitae. Aliquam pretium, purus eget iaculis consequat, dui sem egestas risus, tempor consectetur ligula eros a nisi. Integer gravida rutrum mi, quis pellentesque magna auctor quis. Aenean a gravida massa, ac tristique risus. Maecenas molestie eget turpis vel volutpat. Nullam commodo arcu id dictum tempus. Sed pulvinar nisi metus, eu dapibus sapien hendrerit nec. Phasellus blandit sodales ante, eu commodo dui lacinia auctor.\n"
 + "\n"
 + "Vivamus in auctor dui, vitae volutpat lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur non felis sed nulla elementum sagittis pellentesque et neque. Phasellus condimentum semper vestibulum. Fusce a vehicula felis. Aliquam non volutpat dui. Etiam sollicitudin dui nec turpis placerat, sit amet porta neque mattis. Nunc blandit id erat sit amet eleifend. Maecenas mi enim, commodo id diam at, porttitor scelerisque libero. Donec sed ligula auctor, suscipit turpis eget, blandit velit. Donec iaculis odio a lacus lobortis, ut accumsan neque vestibulum. Fusce a enim pulvinar, semper metus mollis, facilisis urna. Nullam id urna rhoncus, pellentesque libero ac, fermentum orci. Suspendisse nec sapien eget ex mollis pulvinar.\n"
 + "\n"
 + "Fusce in odio suscipit, rutrum quam ut, hendrerit tortor. Aenean ullamcorper odio quam, ut dictum est vulputate id. Vestibulum laoreet ligula quis sapien interdum, ut tincidunt lectus pharetra. Mauris laoreet, massa ut iaculis efficitur, tellus ex pellentesque dui, non scelerisque lectus nulla non augue. Vestibulum nec ipsum suscipit, finibus ligula a, tincidunt dolor. Nulla eros lacus, eleifend et gravida eget, ornare eu velit. Nulla tristique eros ac lacus varius iaculis. Nam libero ligula, viverra tempus dui sit amet, auctor imperdiet ligula. Vivamus sed nibh vel urna luctus accumsan. Fusce porta tempor magna, quis congue dolor sagittis sed.\n"
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
