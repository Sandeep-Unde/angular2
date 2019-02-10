
var myApp = angular.module('myApp');
myApp.controller('SecondCtrl1', function( $scope, Fact ){
	alert(Fact);
  $scope.Beta = Fact;
});