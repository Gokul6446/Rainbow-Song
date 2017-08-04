var app=angular.module("myapp",[]);
app.controller("firstctrl",function($scope,$rootscope)
{
	$scope.name1="Gokul";
	$rootscope.name2="Ganesh";
});

app.controller("secondctrl",function($scope)
{
	$scope.names="Sathish";
});