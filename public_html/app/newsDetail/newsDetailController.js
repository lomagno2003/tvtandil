var app = angular.module('app');

app.controller('newsDetailController', function($scope, $rootScope, $routeParams, Restangular) {
	Restangular.one("news", $routeParams.newsId).get().then(function(data){
		$scope.actualNews = data.data;
	});
	
	$scope.sync = function(){
		$('.carousel').carousel();
	};
	
	$scope.advertisings = $rootScope.advertisings;
});