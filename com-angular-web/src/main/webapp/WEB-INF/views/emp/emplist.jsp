<div ng-app="myApp" ng-controller="EmpController as empCtrl">
 <input type="text" ng-model="query" class="form-control input-sm" placeholder="filter"/>
  <input type="text" ng-model="itemPerPage" class="form-control input-sm"  ng-change="empCtrl.fetchEmpList()" value="3"/>
  {{itemPerPage}}
	<table>
	<tr>
		<th>Emp No.</th>
		<th>Emp Name</th>
		<th>Emp Address</th>
	</tr>
	<tr dir-paginate="emp in empCtrl.empList | itemsPerPage:itemPerPage | filter :query">
		<td>{{emp.empNo}}</td>
		<td>{{emp.empName}}</td>
		<td>{{emp.empAddress}}</td>
	</tr>
	</table>
	<dir-pagination-controls ng-hide='query.length > 0'></dir-pagination-controls>
	<script src="<c:url value='/js/service/emp-service.js' />"></script>
      <script src="<c:url value='/js/controller/emp-controller.js' />"></script>
</div>