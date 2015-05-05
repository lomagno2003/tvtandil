var app = angular.module('app');

app.directive('newsThumbnail', function($rootScope) {
	return {
		scope : {
			newsId : '=newsId'
		},
		templateUrl : 'common/directives/newsDirective/newsDirective.html',
		link : function(scope, element, attrs) {
			//TODO: The news information should be retrieved here from the server
			scope.news = $rootScope.dummyNews[scope.newsId];
			
			/* Set the thumbnail image */
			if(scope.news.media && scope.news.media.lenght != 0){
				scope.news.thumbnailUrl = scope.news.media[0].url;
			} else {
				//TODO Default thumbnail image
			}
		},
	};
});