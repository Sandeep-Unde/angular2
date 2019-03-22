var app = angular.module("myApp");

app.factory("EmpService", function($q){
	
	var url = "";
	
	return {
		fetEmployeeDetails : fetEmployeeDetails
	}
	
	function fetEmployeeDetails(){
		var deffered = $q.defer();
		
		$http.get(url).then(
				
				function(response){
					deffered.resolve(response.data);
				},
				function(errResponse){
					deffered.reject(errResponse);
				}
		
		)
		return deffered.promise();
	}
	
	
});