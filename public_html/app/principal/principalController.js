var app = angular.module('app');

app.controller('principalController', function($scope) {
	//TODO: This news should be retrieved from the server
	$scope.news=[0,1,2,3];
});