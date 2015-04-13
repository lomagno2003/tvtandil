var app = angular.module('app');

app.directive('newsThumbnail', function() {
	return {
		scope : {
			news : '=news'
		},
		templateUrl : 'app/common/directives/newsDirective/newsDirective.html',
		link : function(scope, element, attrs) {
			//TODO: The news information should be retrieved here from the server
			
			//TODO: This value should be stored in a global scope
			var maxDescriptionLength = 50;
			
			if(scope.news.description.length > maxDescriptionLength){
				scope.news.shortDescription = scope.news.description.substring(0, maxDescriptionLength - 3) + '...';
			} else {
				scope.news.shortDescription = scope.news.description;
			}			
		},
	};
});