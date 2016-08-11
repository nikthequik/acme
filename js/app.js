angular.module('acme',['ngRoute'])
.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'partials/main.html',
		transclude: true,
	});
});

