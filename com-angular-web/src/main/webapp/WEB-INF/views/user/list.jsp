  <div ng-app="myApp" class="ng-cloak" >
  <script src="<c:url value='/js/app.js' />"></script>
  <script src="<c:url value='/js/directives/first-directive.js' />"></script>
      <div class="generic-container" ng-controller="UserListController as ctrl">
          
          <div class="panel panel-default" onload="ctrl.fetchAllUsers()">
                <!-- Default panel contents -->
              <div class="panel-heading"><span class="lead">List of Users </span></div>
              <div class="tablecontainer">
                  <table class="table table-hover">
                      <thead>
                          <tr>
                              <th>ID.</th>
                              <th>Name</th>
                              <th>Address</th>
                              <th>Email</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr ng-repeat="u in ctrl.users">
                              <td><span ng-bind="u.id"></span></td>
                              <td><input type="text" ng-model="u.username"/></td>
                              <td><input type="text" ng-model="u.address"/></td>
                              <td><input type="email" ng-model="u.email"/></td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      
	<div class="row">
		<div class="form-actions floatRight" >
			<button type="button"   class="btn btn-primary btn-sm" ng-click="ctrl.update()" >Update</button>
			<button type="button" ng-click="ctrl.toHome()"
				class="btn btn-warning btn-sm" >Back</button>
		</div>
	</div>
</div>
      <script src="<c:url value='/js/service/user_service.js' />"></script>
      <script src="<c:url value='/js/controller/user_controller.js' />"></script>
      <script src="<c:url value='/js/controller/userlistcontroller.js' />"></script>
      <script src="<c:url value='/js/service/user_listservice.js' />"></script>
  </div>
