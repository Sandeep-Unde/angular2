'use strict';

var app = angular.module('myApp',[]);

var secDir = app.directive('studentTag', function(){
	alert('22');
	var directive = {};
	 directive.restrict = 'E';
	 directive.template = 'Student : {{studentTag.name}}  Roll no : {{studentTag.rollno}}';
	 directive.scope = {
			studentTag : "=name"
		}
	return  directive;
});

