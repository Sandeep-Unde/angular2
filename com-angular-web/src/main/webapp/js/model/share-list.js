var app = angular.module("myApp");

app.factory("sharedList", function(){
	var list = [];
	
	return {
		addColor : addColor,
		getColorList : getColorList
	}
	
	function addColor(colorItem){
		alert('1');
		list.push(colorItem);
	}
	function getColorList(){
		return list;
	}

});