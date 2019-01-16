'use strict';

angular.module('myApp').controller('UserListController', ['$scope', 'UserListService',  function($scope, UserListService) {
    var self = this;
    self.user={id:null,username:'',address:'',email:''};
    self.users=[];

    self.toHome = toHome;
    self.update = update;
    $scope.users;

    fetchAllUsers();

    function fetchAllUsers(){
    	UserListService.fetchAllUsers()
            .then(
            function(d) {
                self.users = d;
            },
            function(errResponse){
                console.error('Error while fetching Users');
            }
        );
    }
    
    function toHome(){
    	UserListService.toHome();
    }
    
    function update(){
    	var updateUserList = $scope.ctrl.users;
    	UserListService.updateUser(updateUserList);
    }

}]);
