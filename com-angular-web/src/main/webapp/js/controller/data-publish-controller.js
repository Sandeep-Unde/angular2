var myApp = angular.module('myApp');

myApp.controller('FirstCtrl', function( $scope, User ){
	  $scope.Alpha = User;
	});

myApp.controller('SecondCtrl',  function( $scope, User ){
	  $scope.Beta = User;
	});