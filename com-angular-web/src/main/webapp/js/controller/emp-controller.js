var app = angular.module("myApp");

app.controller("EmpController",['EmpService', function(EmpService){
	var self = this;
	self.empList = [];
	
	self.fetchEmpList = fetchEmpList;
	
	self.empList = fetchEmpList();
	
	function fetchEmpList(){
		
		EmpService.fetEmployeeDetails()
         .then(
         function(d) {
        	 self.empList = d;
         },
         function(errResponse){
             console.error('Error while fetching Users');
         }
     );
		return self.empList;
	}
	
	
}])
