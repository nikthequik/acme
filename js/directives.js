angular.module('acme')
.directive('optIn', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/opt-in.html',
		transclude: true,
		scope: false
	}
});