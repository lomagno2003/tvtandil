var app = angular.module('app');

app.controller('topBarController', function($scope) {
	$scope.setActive = function($event){
		alert($event);
		 // $("#"+btnId).toggleClass("active");
	};
	
});