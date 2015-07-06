var newsThumbnailDirective = function($rootScope) {
	return {
		scope : {
			newsElement : '='
		},
		templateUrl : 'common/directives/newsThumbnailDirective/newsThumbnailDirective.html',
		link : function(scope, element, attrs) {
			scope.logged = $rootScope.logged;
			/* Set the thumbnail image */
			if(scope.newsElement.media && scope.newsElement.media.lenght != 0){
				scope.newsElement.thumbnailUrl = scope.newsElement.media[0].url;
			} else {
				//TODO Default thumbnail image
			}
		},
	};
};

var app = angular.module('app');
app.directive('newsThumbnail', newsThumbnailDirective);