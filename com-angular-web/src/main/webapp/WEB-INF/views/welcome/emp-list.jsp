

<div ng-app="myApp" ng-controller="EmpController as empCtrl">

	<table>
	<tr>
		<th>Emp No.</th>
		<th>Emp Name</th>
		<th>Emp Address</th>
	</tr>
	<tr ng-repeat="emp in empCtrl.empList">
		<td>{{emp.empNo}}</td>
		<td>{{emp.empName}}</td>
		<td>{{emp.empAddress}}</td>
	</tr>
	</table>
	
	<script src="<c:url value='/js/service/emp_service.js' />"></script>
      <script src="<c:url value='/js/controller/emp_controller.js' />"></script>
</div>