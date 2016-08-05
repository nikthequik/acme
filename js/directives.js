angular.module('acme')
.directive('optIn', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/opt-in.html',
		controller: 'dirCtrl',
		controllerAs: 'dc',
		transclude: true,
		scope: false
	}
})
.controller('dirCtrl', function(){
	var dc = this;

});