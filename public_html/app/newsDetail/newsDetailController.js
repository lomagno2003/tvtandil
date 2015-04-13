var app = angular.module('app');

app.controller('newsDetailController', function($scope, $rootScope, $routeParams) {
	$scope.actualNews = $rootScope.dummyNews[parseInt($routeParams.newsId)];
});