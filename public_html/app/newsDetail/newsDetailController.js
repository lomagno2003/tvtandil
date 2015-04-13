var app = angular.module('app');

app.controller('newsDetailController', function($scope, $rootScope, $routeParams) {
	$scope.actualNews = $rootScope.dummyNews[parseInt($routeParams.newsId)];
	
	$scope.sync = function(){
		console.log("blabla");
		$('.slickc').slick();
	};
});