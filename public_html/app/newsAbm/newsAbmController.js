var app = angular.module('app');

app.controller('newsAbmController', function($scope, $rootScope) {
	$scope.actualNews = {};
	$scope.actualNews.title = "";
	$scope.actualNews.description = "";
	$scope.actualNews.media=[];
	
	$scope.mediasListener = function(newVal, oldVal){
		if(!$scope.mediasListenerRunning){
			$scope.mediasListenerRunning = true;

			for (index = 0; index < newVal.length; ++index) {
				if(!newVal[index].fileData){
					newVal.splice(index--, 1);
				}
			}

			newVal.push({});
			
			$scope.mediasListenerRunning = false;
		}
	};
	
	$scope.$watch('actualNews.media', $scope.mediasListener, true);
	
	$scope.deleteMedia = function(media){
		media.file = null;
	};
	
	$scope.guardar = function() {
		$scope.actualNews.media.pop();
		
		console.log($scope.actualNews);
		
		$scope.actualNews.media.push({});
	};
	
});