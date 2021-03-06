var app = angular.module('app');

app.controller('newsAbmController', function($scope, $rootScope, $routeParams, $location, Restangular) {
	if($routeParams.newsId){
		$scope.actualNews = Restangular.one('news', $routeParams.newsId).get().then(function(response){
			$scope.actualNews = response.data;
		});
	} else {
		$scope.actualNews = {};
		$scope.actualNews.title = "";
		$scope.actualNews.description = "";
		$scope.actualNews.media=[];
	}

	$scope.removeMedia = function(media){
		index = $scope.actualNews.media.indexOf(media);
		if (index > -1) {
			$scope.actualNews.media.splice(index, 1);
		}
	};
	
	$scope.save = function() {
		if($scope.actualNews.id){
			$scope.actualNews.put().then(function(data){
				$('#newsSaved').modal('toggle');
			});
		} else {
			Restangular.all('news/').post($scope.actualNews).then(function(result){
				$location.path('/newsAbm/' + result);
			});
		}
	};
	
	$scope.remove = function(){
		$scope.actualNews.remove().then(function(){
			$location.path('/');
		});
	}
	
	
	/* Images Section */
	$scope.tmpImage = {};
	$scope.addImageSubmit = function(){
		$scope.tmpImage.MEDIA_TYPE="IMAGE";
		$scope.actualNews.media.push($scope.tmpImage);
		$scope.tmpImage = {};
	};
	$scope.addImageCancel = function(){
		$scope.tmpImage = {};
	};
	
	/* Video Section */
	$scope.tmpVideo = {};
	$scope.addVideoSubmit = function(){
		$scope.tmpVideo.type="UPLOADED_VIDEO";
		$scope.actualNews.media.push($scope.tmpVideo);
		$scope.tmpVideo = {};
	};
	$scope.addVideoCancel = function(){
		$scope.tmpVideo = {};
	};
	
});