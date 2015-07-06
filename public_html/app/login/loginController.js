var app = angular.module('app');

app.controller('loginController', function($scope, $rootScope, $location) {
	$scope.submit = function(){
		if($scope.inputPassword == "hola"){
			$rootScope.logged=true;
			$location.url("newsAbm");
		};
	};
});