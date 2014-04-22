'use strict';

var myApp = angular.module('MyApp', ['ui.router','myAppControllers']);

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
			controller: 'dogsCtrl'
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