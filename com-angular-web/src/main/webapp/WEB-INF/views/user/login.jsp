  <script src="<c:url value='/js/app.js' />"></script>
<div ng-app="myApp" ng-controller="LoginController as loginCtrl">

	<form name="loginForm" ng-submit="loginCtrl.submit()">

		<div>User Name :</div>
		<div>
			<input type="text" name="uname" ng-model="loginCtrl.user.userName"
				required ng-minlength="3"/>
		</div>
		<div>Password :</div>
		<div>
			<input type="password" name="pass" ng-model="loginCtrl.user.password"
				required ng-minlength="3"/>
		</div>
		<div>
			<input type="submit" >
		</div>

	</form>
</div>
<script src="<c:url value='/js/controller/login-controller.js' />"></script>