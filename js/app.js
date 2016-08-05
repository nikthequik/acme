angular.module('acme',['ngRoute'])
.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'partials/main.html',
		transclude: true,
		controller: 'mainCtrl',
		controllerAs: 'mc'
	});
})
.controller('mainCtrl', function() {
	var mc = this;
	mc.value = 0;
});
