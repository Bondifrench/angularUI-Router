'use strict';

var myApp = angular.module('MyApp', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home',{
			url: '/home',
			templateUrl:'./partials/partial-home.html'
			})
		.state('home.list',{
			url:'/list',
			templateUrl:'./partials/partial-home-list.html',
			controller: function($scope){
				$scope.dogs=['Bernese', 'Husky', 'Goldendoodle'];
			}
		})
		.state('home.paragraph', {
			url: '/paragraph',
			template:'Some random text for illutrative purposes'
		})
		.state('about', {
			url: '/about',
			templateUrl:'./partials/partial-about.html'
		});			
	
}]);