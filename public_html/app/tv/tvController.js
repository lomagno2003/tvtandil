var app = angular.module('app');

app.controller('tvController', function($scope, $http) {
	$scope.videos = [];
	$scope.key = "AIzaSyAzrhQr6XJq0HFcxL3q5Nb1cA85zEb8Khw";
	$scope.channelId = "UCOn9leGj1xnJ5vkKUDDasSw";

	$scope.url = "https://www.googleapis.com/youtube/v3/search?key=" + 
		$scope.key + 
		"&channelId=" + 
		$scope.channelId + 
		"&part=snippet,id&order=date&maxResults=20";
	
	$http.get($scope.url).
	  success(function(data, status, headers, config) {
	    $scope.videos = data["items"];
	  }).
	  error(function(data, status, headers, config) {
	    console.error(status);
	  });
});