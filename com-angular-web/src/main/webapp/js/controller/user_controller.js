'use strict';

angular.module('myApp').controller('UserController', ['$rootScope','$scope', 'UserService',  function($rootScope, $scope, UserService) {
    var self = this;
    self.user={id:null,username:'',address:'',email:''};
    self.users=[];
   // self.ser_port= this.server_port;

    self.submit = submit;
    self.edit = edit;
    self.remove = remove;
    self.reset = reset;
    self.listUser = listUser;
    self.toSecDir = toSecDir;
        
    $scope.ser_port = "8080"; //not really needed
    $scope.initialize = function(server_port){
        $scope.ser_port=server_port;
        $rootScope.ser_port = server_port;
    }


    fetchAllUsers();
    
    function listUser(){
    	UserService.userList();
    }
    
    function toSecDir(){
    	alert('1');
    	UserService.openDir2();
    }

    function fetchAllUsers(){
    	//alert(self.ser_port);
        UserService.fetchAllUsers()
            .then(
            function(d) {
                self.users = d;
            },
            function(errResponse){
                console.error('Error while fetching Users');
            }
        );
    }

    function createUser(user){
        UserService.createUser(user)
            .then(
            fetchAllUsers,
            function(errResponse){
                console.error('Error while creating User');
            }
        );
    }

    function updateUser(user, id){
        UserService.updateUser(user, id)
            .then(
            fetchAllUsers,
            function(errResponse){
                console.error('Error while updating User');
            }
        );
    }

    function deleteUser(id){
        UserService.deleteUser(id)
            .then(
            fetchAllUsers,
            function(errResponse){
                console.error('Error while deleting User');
            }
        );
    }

    function submit() {
        if(self.user.id===null){
            console.log('Saving New User', self.user);
            createUser(self.user);
        }else{
            updateUser(self.user, self.user.id);
            console.log('User updated with id ', self.user.id);
        }
        reset();
    }

    function edit(id){
        console.log('id to be edited', id);
        for(var i = 0; i < self.users.length; i++){
            if(self.users[i].id === id) {
                self.user = angular.copy(self.users[i]);
                break;
            }
        }
    }

    function remove(id){
        console.log('id to be deleted', id);
        if(self.user.id === id) {//clean form if the user to be deleted is shown there.
            reset();
        }
        deleteUser(id);
    }


    function reset(){
        self.user={id:null,username:'',address:'',email:''};
        $scope.myForm.$setPristine(); //reset Form
    }

}]);

angular.module('myApp').controller('ControllerTwo', ['$scope', function($scope){
	
	$scope.Mahesh = {};
	$scope.Mahesh.name = 'Mahesh Rokade';
	$scope.Mahesh.roll = '1';
	
	
	$scope.Ramesh = {};
	$scope.Ramesh.name = 'Ramesh Mhase';
	$scope.Ramesh.roll = '2';
	
	
}]);
