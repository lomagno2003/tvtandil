var app = angular.module('app');

app.directive('foundationSynchronyzed', function() {
	return {
		priority : -1000, // a low number so this directive loads after all other directives have loaded. 
		restrict : "A", // attribute only
		link : function(scope, element, attrs) {
			$(document).foundation({
				equalizer : {
					// Specify if Equalizer should make elements equal height once they become stacked.
					equalize_on_stack : true
				}
			});
		},
	};
});