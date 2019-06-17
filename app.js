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
                $scope.message1 = "Please enter data first";
                $scope.messageEmpty = true;
            }else {
                var arrayItems = $scope.items.split(',');
                if( arrayItems.length <= 3 ){
                    $scope.message2 = "Enjoy!";
                }else {
                    $scope.message2 = "Too much!";
                }
            }
        }
    }
            



            // $scope.displayNumeric = function() {
            //     var totalNameValue = 
            //     calculateNumericForString($scope.name);
            //     $scope.totalValue = totalNameValue; 
            // };

            // function calculateNumericForString(string) {
            //     var totalStringValue = 0;
            //     for (var i = 0; i < string.length; i++){
            //         totalStringValue += string.charCodeAt(i);
            //     }

            //     return totalStringValue;
            // }
        
})();