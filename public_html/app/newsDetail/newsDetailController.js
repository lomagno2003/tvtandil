var app = angular.module('app');

app.controller('newsDetailController', function($scope, $rootScope) {
	$scope.actualNews = $rootScope.actualNews;
	
	
});