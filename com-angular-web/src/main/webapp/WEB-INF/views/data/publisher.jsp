
<script src="<c:url value='/js/controller/data-publish-controller.js' />"></script>
<script src="<c:url value='/js/model/shared-data-model.js' />"></script>

<body ng-App="myApp">
<div  ng-controller="FirstCtrl">

<input type="text" ng-model="Alpha.firstName" />
<br> Input First Name is : <strong>{{Alpha.firstName}}</strong>

</div>

<div ng-controller="SecondCtrl">

    Second {{Beta.firstName}}
</div>

</body>