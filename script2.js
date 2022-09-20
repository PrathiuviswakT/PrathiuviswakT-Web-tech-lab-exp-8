var app = angular.module("myApp",[]);
app.controller("control",function($scope){
    $scope.add = function() {
        $scope.items=[];
        $scope.additems = function(){
            $scope.items.push({productname:$scope.name,pricevalue:$scope.price})
        }

        $scope.removeitems = function($index){
            $scope.items.splice($index)
        }
        
    }
});