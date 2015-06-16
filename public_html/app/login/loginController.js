var app = angular.module('app');

app.controller('loginController', function($scope, $location) {
	$scope.submit = function(){
		if($scope.inputPassword == "hola"){
			$location.url("newsAbm");
		};
	};
});