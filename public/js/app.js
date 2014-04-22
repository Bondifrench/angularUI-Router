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
			views: {
				'':{templateUrl: './partials/partial-about.html'},
				'columnOne@about':{template:'Look I am a column!'},
				'columnTwo@about': {
					templateUrl : './partials/table-data.html',
					controller: 'scotchCtrl'
				}
			}
		});	
	}]);
myApp.controller('scotchCtrl', ['$scope', function($scope){
	$scope.message = 'test';
	$scope.scotches = [
	{
		name: 'Macallan 12',
		price: 50
	},
	{
		name: 'Chivas Regal Royal Salute',
		price: 10000
	},
	{
		name: 'Glenfiddich 1937',
		price: 20000
	}
	];
	
}]);