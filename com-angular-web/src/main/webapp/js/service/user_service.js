'use strict';

angular.module('myApp').factory('UserService', ['$http', '$q', function($http, $q){

    
	var APP_USER_SERVICE = '';
	var APP_USER_LIST_SERVICE = '';
	
	 $http.get('connection.properties').then(function (response) {
		 APP_USER_SERVICE =  response.data.APP_USER_SERVICE;
		 APP_USER_LIST_SERVICE =  response.data.APP_USER_LIST_SERVICE;
	      });

    var factory = {
        fetchAllUsers: fetchAllUsers,
        createUser: createUser,
        updateUser:updateUser,
        deleteUser:deleteUser,
        userList:userList
    };

    return factory;

    function fetchAllUsers() {
        var deferred = $q.defer();
        $http.get(APP_USER_SERVICE)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while fetching Users');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

    function createUser(user) {
        var deferred = $q.defer();
        $http.post(APP_USER_SERVICE, user)
            .then(
            function (response) {
            	 var sucesscMsg = messages.getMessage("msg.user.added.success", []);
            	 alert(sucesscMsg);
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while creating User');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }


    function updateUser(user, id) {
        var deferred = $q.defer();
        $http.put(APP_USER_SERVICE+id, user)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while updating User');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

    function deleteUser(id) {
        var deferred = $q.defer();
        $http.delete(APP_USER_SERVICE+id)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while deleting User');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    
    function userList(){
    	window.location.href = APP_USER_LIST_SERVICE;
    }

}]);
