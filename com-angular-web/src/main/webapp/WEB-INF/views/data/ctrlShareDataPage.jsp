<script src="<c:url value='/js/service/user_service.js' />" > </script>
<script src="<c:url value='/js/controller/user_controller.js' />" ></script>
<script src="<c:url value='/js/model/share-list.js' />" ></script>
<script src="<c:url value='/js/controller/shared-data-controller.js' />" ></script>

<div ng-app="myApp">
	<div ng-controller="Pane1Controller as ctrl1">
		<input  ng-model="ctrl1.colorItem">
		<button ng-click="ctrl1.addColorItem()" >Add Color</button>
	</div>
	<div ng-controller="Pane2Controller as ctrl2">
		<ul>
			<li ng-repeat="colorItem in ctrl2.colorItems">{{colorItem}}</li>
		</ul>
	</div>
</div>