(function () {

    "use strict";

    angular.module("NomineeApp", [])
    .constant('NomineeApplicationConstant', {
        //AppUrl: '/MVCProjectExample.UI/',
        //AppServiceUrl: 'http://localhost/MVCProjectExample.UI/'
        AppUrl: '/',
        AppServiceUrl:'/'
    })
    .directive('showLoader', ['NomineeApplicationConstant', function (NomineeApplicationConstant) {
        return {
            restrict: 'EA',
            replace: 'false',
            scope: {
                showLoading: '='
            },
            templateUrl: NomineeApplicationConstant.AppUrl + 'Partials/CustomDirective/showLoader.html',
            link: function (scope, element, attrs, controller) {

            }
        }
    }])
    .service('NomineeService', ['$http', 'NomineeApplicationConstant',
        function ($http, NomineeApplicationConstant) {
            this.GetSupplierInformation = function () {
                return $http({
                    method: 'GET',
                    url: NomineeApplicationConstant.AppServiceUrl + '/api/DI/GetNomineeDetails',
                    cache: false
                });
            }

            this.GetSupplierSibblingInformation = function () {
                return $http({
                    method: 'GET',
                    url: NomineeApplicationConstant.AppServiceUrl + '/api/DI/GetNomineeSiblingDetails',
                    cache: false
                });
            }
        }])
    .controller('NomineeDetailsController', ['NomineeService', '$scope', '$q',
        function (NomineeService, $scope, $q) {
            $scope.Title;
            $scope.showLoading = true;

            $scope.GetSupplierInformation = function () {

 
                NomineeService
                        .GetSupplierInformation()
                        .success(function (_result) {
                            $scope.Title = _result[0];
                            $scope.showLoading = false;
                            defferedPromise.resolve(_result[0]);
                        })
                        .error(function (_error) {
                            console.log(_error);
                            defferedPromise.reject(_error);
                        })


               
            }

            $scope.Init = function () {




                $scope.GetSupplierInformation();
            }

            $scope.Init();
        }])
    .controller('NomineeSiblingDetailsController', ['NomineeService', '$scope', '$q',
        function (NomineeService, $scope, $q) {
            $scope.Title;
            $scope.showLoading = true;

            $scope.GetSupplierSibblingInformation = function () {
                NomineeService
                        .GetSupplierSibblingInformation()
                        .success(function (_result) {
                            $scope.Title = _result[0];
                            $scope.showLoading = false;
                        })
                        .error(function (_error) {
                            console.log(_error);
                        })
            }

            $scope.Init = function () {
                $scope.GetSupplierSibblingInformation();
            }

            $scope.Init();;

        }]);

})();