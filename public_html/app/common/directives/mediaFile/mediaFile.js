var app = angular.module('app');

app.directive("mediaFile", [ function() {
	return {
		scope : {
			mediaFile : "="
		},
		link : function(scope, element, attributes) {
			element.bind("change", function(changeEvent) {
				if (changeEvent.target.files[0]) {
					var reader = new FileReader();
					reader.onload = function(loadEvent) {
						scope.$apply(function() {
							scope.mediaFile.fileData = loadEvent.target.result;
						});
					}
					reader.readAsDataURL(changeEvent.target.files[0]);
				} else {
					scope.$apply(function() {
						scope.mediaFile = null;
					});
				}
			});
		}
	}
} ]);