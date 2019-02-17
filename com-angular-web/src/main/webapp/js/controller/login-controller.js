'use strict';
angular.module('myApp').controller("LoginController",['$scope', function($scope){
	var self = this;
	self.user={userName:'',password:''};
	this.submit = submit;
	
	function submit (){
		 createUser(self.user);
		
	}
	
	function createUser(user){
		alert('user Name=='+ user.userName);
		alert('password==>'+ user.password);
	}
	
}]);