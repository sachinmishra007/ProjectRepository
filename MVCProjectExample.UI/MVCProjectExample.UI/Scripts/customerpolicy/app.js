(function () {

    "use stritc";
    angular.module("customerPolicyApp", [])
    .constant('ApplicationSetting', {

        URL: 'http://sachinmishra007.azurewebsites.net/',
        PageUrl: '/'
        //PageUrl: '/MVCProjectExample.UI/'
    })
    .service('lookupService', ['$http','ApplicationSetting', function ($http, ApplicationSetting) {

        this.GetMenuOption = function () {
            return [{
                MenuName: 'Funds',
                MenuClassName: 'list-group-item',
                IncludeFile: ApplicationSetting.PageUrl + "Partials/CustomerPolicy/Funds.html"
            }, {
                MenuName: 'Customer',
                MenuClassName: 'list-group-item',
                IncludeFile: ApplicationSetting.PageUrl + "Partials/CustomerPolicy/Customer.html"
            }, {
                MenuName: 'Nominee',
                MenuClassName: 'list-group-item',
                IncludeFile: ApplicationSetting.PageUrl + "Partials/CustomerPolicy/Nominee.html"
            }]
        };
    }])
    .service('fundService', ['$http', 'ApplicationSetting', function ($http, ApplicationSetting) {
        this.GetFundDetails = function () {
            return $http({
                method: 'GET',
                url: ApplicationSetting.URL + 'api/FundDetails/GetFundDetails',
                cache: false
            });
        }

    }])
    .controller("customerPolicyController", ['$scope', 'lookupService', 'fundService', function ($scope, lookupService, fundService) {


        $scope.Menu = lookupService.GetMenuOption();


        $scope.MenuItem = {
            MenuSelectedIndex: 0,
            MenuIncludeFileName: "/MVCProjectExample.UI/Partials/CustomerPolicy/Funds.html"
        };

        $scope.SelectedOption = function (index, menu) {
            $scope.MenuItem = {
                MenuSelectedIndex: index,
                MenuIncludeFileName: menu.IncludeFile
            }
        };


    }])
        .controller('FundController', ['fundService', '$scope', function (fundService, $scope) {
            $scope.showLoading = true;
            $scope.Fund = [];

            $scope.GetFundDetails = function () {
                fundService
                    .GetFundDetails()
                    .success(function (_result) {
                        $scope.Fund = _result;
                        $scope.showLoading = false;
                        //console.log($scope.Fund);
                    })
                    .error(function (_error) {
                        console.log(_error);
                    })
            };

            $scope.Init = function () {
                $scope.GetFundDetails();
            };
            $scope.Init();
        }])
    .controller("customerFundInformation", ['$scope', 'lookupService', function ($scope, lookupService) {


    }]);

})();