var app = angular.module("myApp");

app.controller("Pane1Controller", function(sharedList){
	var self = this;
	self.colorItem = '';
	self.addColorItem = function (){
		sharedList.addColor(self.colorItem);
		self.colorItem = '';
	}
});

app.controller("Pane2Controller", function(sharedList){
	var self = this;
	self.colorItems = sharedList.getColorList();
});