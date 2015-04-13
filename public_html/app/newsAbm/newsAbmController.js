var app = angular.module('app');

app.controller('newsAbmController', function($scope, $rootScope) {
	$scope.title = "";
	$scope.descripcion = "";
	
	$scope.guardar = function() {
		$rootScope.actualNews = {
			"titulo":$scope.title,
			"descripcion":$scope.descripcion
		}
	};
	
});