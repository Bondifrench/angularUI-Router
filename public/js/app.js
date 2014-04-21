'use strict';

var myApp = angular.module('MyApp', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home',{
			url: '/home',
			templateUrl:'./partials/partial-home.html'
			})
		.state('about', {
			url: '/about',
			templateUrl:'./partials/partial-about.html'
		});			
	
}]);