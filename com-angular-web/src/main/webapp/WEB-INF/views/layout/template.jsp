<!DOCTYPE html>
<html class="no-js">
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="viewport" content="width=device-width" />
<script type="text/javascript" src="${pageContext.request.contextPath}/js/first.js"></script>
 <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.js"></script>
 <script type ="text/Javascript" src="${pageContext.request.contextPath}/js/lib/jquery/jquery-2.1.1.min.js"></script>
<script type ="text/Javascript" src="${pageContext.request.contextPath}/js/lib/jquery/jquery-ui.min.js"></script>
<script type ="text/Javascript" src="${pageContext.request.contextPath}/js/lib/jquery/jquery.event.drag-2.2.js"></script>
<script type ="text/Javascript" src="${pageContext.request.contextPath}/js/lib/jquery/jquery.mousewheel.min.js"></script>
<script type ="text/Javascript" src="${pageContext.request.contextPath}/js/lib/jquery/jquery.jscrollpane-custom.js"></script>
<script type ="text/Javascript" src="${pageContext.request.contextPath}/js/lib/jquery/jquery.numeric.js"></script>
<script type ="text/Javascript" src="${pageContext.request.contextPath}/js/lib/jquery/jquery.japanese-input-change.js"></script>
<script type ="text/Javascript" src="${pageContext.request.contextPath}/js/lib/jquery/jquery.i18n.properties.js"></script>
<c:set var="titleKey">
    <tiles:insertAttribute name="title" ignore="true" />
</c:set>
<title><spring:message code="${titleKey}" text="com-angular" /></title>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/app/css/styles.css">
<style>
           .username.ng-valid {
          background-color: lightgreen;
      }
      .username.ng-dirty.ng-invalid-required {
          background-color: red;
      }
      .username.ng-dirty.ng-invalid-minlength {
          background-color: yellow;
      }

      .email.ng-valid {
          background-color: lightgreen;
      }
      .email.ng-dirty.ng-invalid-required {
          background-color: red;
      }
      .email.ng-dirty.ng-invalid-email {
          background-color: yellow;
      }
        
      input {
      border: none;
      }

    </style>
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
     <link href="<c:url value='/css/app.css' />" rel="stylesheet"></link>
     <script src="<c:url value='/js/common/message-util.js' />"></script>
     <script src="<c:url value='/js/external/dirPagination.js' />"></script>
     
</head>
<body>
    <div class="container">
        <tiles:insertAttribute name="header" />
        <tiles:insertAttribute name="body" />
        <hr>
        <p style="text-align: center; background: #e5eCf9;">Copyright &copy; 20XX CompanyName</p>
    </div>
</body>
</html>