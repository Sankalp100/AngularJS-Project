(function () {
    'use strict';

    angular.module("LunchCheck", [])
        .controller('LunchCheckController', LunchCheackController);

    LunchCheackController.$inject = ['$scope'];

    function LunchCheackController($scope) {
        $scope.items = "";
        $scope.message1 = "";
        $scope.message2 = "";
        $scope.messageEmpty = false;

        $scope.checkLunch = function(){
            if ($scope.items.length === 0){
                $scope.messageEmpty = true;
                $scope.message1 = "Please enter data first";
                
            }else {
                $scope.messageEmpty = false;
                var arrayItems = $scope.items.split(',');
                if( arrayItems.length <= 3 ){
                    $scope.message2 = "Enjoy!";
                }else {
                    $scope.message2 = "Too much!";
                }
            }
        }
    }
        
})();