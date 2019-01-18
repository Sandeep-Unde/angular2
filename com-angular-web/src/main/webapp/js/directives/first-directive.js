'use strict';

var app = angular.module('myApp');

var dirResponse = app.directive('myDateDir', function() {
	 var date = new Date();
	var directive = {};
    directive.restrict = 'E'; /* restrict this directive to elements */
    directive.compile = function(element, attributes) {
       // element.css("border", "0px solid #cccccc");
        var linkFunction = function($scope, element, attributes) {
        	$scope.date = new Date();
           // element.css("background-color", "#ffff00");
        }

        return linkFunction;
    }
    directive.template = "{{date | date:'yyyy-MM-dd'}}";
	return directive;
});