'use strict';

var myAppControllers = angular.module('myAppControllers',[]);

myAppControllers.controller('dogsCtrl',['$scope', function ($scope) {
	$scope.dogs = ['GoldenRetriever', 'Husky', 'German Sheppard'];
}]);
myAppControllers.controller('scotchCtrl', ['$scope', function($scope){
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