var app = angular.module('app');

app.controller('newsDetailController', function($scope, $rootScope, $routeParams) {
	$scope.actualNews = $rootScope.dummyNews[parseInt($routeParams.newsId)];
	
	$scope.sync = function(){
		$('.carousel').carousel();
	};
	
	$scope.advertisings = $rootScope.advertisings;
});