var app = angular.module('app');

app.controller('newsController', function($scope, Restangular) {
	$scope.title = 'News';
	
	$scope.news = Restangular.all('news').getList().$object;
	
	$scope.onClick = function(){
		var elem = $scope.news[0];
		elem.title='Lala';
		elem.put();
	}
});