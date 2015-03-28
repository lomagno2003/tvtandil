var app = angular.module('app');

app.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
}]);

app.controller('newsController', function($scope, Restangular) {
	$scope.title = 'News';
	$scope.baseNews = Restangular.all('news/');
	$scope.news = $scope.baseNews.getList().$object;

	$scope.newNews = {
		"title" : "defaultTitle"
	};

	$scope.onClick = function() {
		var elem = $scope.news[0];
		elem.title = 'Lala';
		elem.put();
	}

	$scope.submit = function() {
		$scope.baseNews.post($scope.newNews);
	};
});