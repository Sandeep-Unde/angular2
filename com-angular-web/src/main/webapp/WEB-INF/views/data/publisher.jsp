<body ng-App="myApp">
<div  ng-controller="publishController">

<input type="text" ng-model="firstName" />
<br> Input First Name is : <strong>{{firstName}}</strong>

</div>
<script src="<c:url value='/js/model/shared-data-model.js' />"></script>
<script src="<c:url value='/js/controller/data-publish-controller.js' />"></script>
<script src="<c:url value='/js/controller/data-receive-controller.js' />"></script>
</body>