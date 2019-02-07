'use strict';

var app = angular.module('myApp',[]);

var secDir = app.directive('studentTag', function(){
	var directive = {};
	 directive.restrict = 'E';
	// directive.template = 'Student : {{studentTag.name}}  Roll no : {{studentTag.rollno}}';
	 directive.templateUrl = './js/directives/my-template.html';
	/* directive.compile = function (element,atrributes){
		var link =  function(element,$scope, attributes){
			'some text';
		}
		return link;
	 };*/
	 directive.scope = {
			studentTag : "=name"
		}
	return  directive;
});

