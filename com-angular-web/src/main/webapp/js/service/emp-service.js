var app = angular.module("myApp");

app.factory("EmpService",['$http', '$q', function($http,$q){
	
	var APP_HOME_URI = '';
	
	 $http.get('connection.properties').then(function (response) {
		 APP_HOME_URI = response.data.APP_HOME_URI;
	      });

	
	return {
		fetEmployeeDetails : fetEmployeeDetails
	}
	
	function fetEmployeeDetails(){
		var url = 'http://localhost:8080/com-angular-web/empList';
		var deffered = $q.defer();
		
		$http.get(url).then(
				
				function(response){
					var resposeData = response.data;
					deffered.resolve(resposeData);
				},
				function(errResponse){
					deffered.reject(errResponse);
				}
		
		);
		return deffered.promise;
	}
	
	
}]);