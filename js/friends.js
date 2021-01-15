	      $(function(){
	    $("#addClass ,#addClass2, #addClass3, #addClass4, #addClass5, #addClass6").click(function () {
	             $('#qnimate').addClass('popup-box-on');
	               });
	             
	               $("#removeClass").click(function () {
	             $('#qnimate').removeClass('popup-box-on');
	               });
	     })



var app = angular.module('app',[])
app.controller("control", function($scope){
  var friends = [
    "Kurt Nyberg","Ingeborg Holmberg","Rolf Ren", "Berit Olsson", "Märta Blom", "Håkan Håkansson"



    
  ];
  $scope.friends=friends;
  $scope.remove = function(friend) { 
   var index = $scope.friends.indexOf(friend);
   $scope.friends.splice(index, 1); 
   $scope.numberOf = $scope.numberOf - 1;
   };
  
 $scope.addNewFriend = function() {
        $scope.friends.push($scope.newFriend);
        $scope.newFriend='';
        $scope.numberOf = $scope.numberOf + 1;
    };
   $scope.numberOf = $scope.friends.length;
   
 

});