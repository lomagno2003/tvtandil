var app = angular.module('app');

app.controller('homeController', function($scope) {
	//TODO: This news should be retrieved from the server
	$scope.news=[
	{
		"title":"Titulo 1",
		"url":"http://th02.deviantart.net/fs71/200H/i/2010/255/0/6/dsasda_by_caglarocal-d2yl1zw.jpg",
		"description":"This is a long description of the news, it's so long that couldn't been displayed in the news thumbnail, so it should be cutted off"
	},
	{
		"title":"Titulo 2",
		"url":"http://i.telegraph.co.uk/multimedia/archive/01909/nice-beach_1909152b.jpg",
		"description":"This is a short description of the news"
	},
	{
		"title":"Titulo 3",
		"url":"http://i.telegraph.co.uk/multimedia/archive/01909/nice-beach_1909152b.jpg",
		"description":"This is a long description of the news, it's so long that couldn't been displayed in the news thumbnail, so it should be cutted off"
	},
	{
		"title":"Titulo 4",
		"url":"http://i.telegraph.co.uk/multimedia/archive/01909/nice-beach_1909152b.jpg",
		"description":"This is a long description of the news, it's so long that couldn't been displayed in the news thumbnail, so it should be cutted off"
	}];
});