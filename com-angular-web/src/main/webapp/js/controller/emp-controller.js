var app = angular.module("myApp");

app.controller("EmpController",['EmpService', function(EmpService){
	this.empList = [];
	
	this.fetchEmpList = fetchEmpList;
	
	fetchEmpList();
	
	function fetchEmpList(){
		this.empList = EmpService.fetEmployeeDetails();
	}
	
	
}])
