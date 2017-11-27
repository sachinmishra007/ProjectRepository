(function () {

    "use stritc";
    angular.module("customerPolicyApp", [])
    .service('lookupService', function ($http) {

        this.GetMenuOption = function () {
            return [{
                MenuName: 'Funds',
                MenuClassName: 'list-group-item',
                IncludeFile: "'/MVCProjectExample.UI/Partials/CustomerPolicy/Funds.html'"
            }, {
                MenuName: 'Customer',
                MenuClassName: 'list-group-item',
                IncludeFile: '/MVCProjectExample.UI/Partials/CustomerPolicy/Customer.html'
            }, {
                MenuName: 'Nominee',
                MenuClassName: 'list-group-item',
                IncludeFile: '/MVCProjectExample.UI/Partials/CustomerPolicy/Nominee.html'
            }]
        };
    })
    .controller("customerPolicyController", function ($scope, lookupService) {


        $scope.Menu = lookupService.GetMenuOption();

        $scope.MenuItem = {
            MenuSelectedIndex: 0,
            MenuIncludeFileName: "'/MVCProjectExample.UI/Partials/CustomerPolicy/Funds.html'"
        };

        $scope.SelectedOption = function (index, menu) {
            $scope.MenuItem = {
                MenuSelectedIndex: index,
                MenuIncludeFileName: menu.IncludeFile
            }
        }
    })
    .controller("customerFundInformation", function ($scope, lookupService) {


    })

})();