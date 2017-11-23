(function () {

    "use strict";
    angular.module("CustomerApp", [])
        .service("CustomerService", function ($http) {

            this.GetCustomerInformation = function () {
                return $http({
                    url: '/api/customer/GetCustomer',
                    method: 'GET'
                });
            }
        })
    .controller("CustomerController", function ($scope, CustomerService) {
        $scope.showLoading = true;
        $scope.CustomerInfo = [];
        CustomerService
            .GetCustomerInformation()
            .success(function (_result) {
                $scope.CustomerInfo = _result;
                $scope.showLoading = false;
                //console.log($scope.CustomerInfo);
            })
            .error(function (_error) {
                console.log(_error);
            })

    });

})();