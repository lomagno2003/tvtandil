var homeController = function($scope, Restangular) {
	$scope.news = [];
	
	Restangular.all('news').getList().then(function(response) {
		$scope.news = response.data;
	})
};

var app = angular.module('app');
app.controller('homeController', homeController);