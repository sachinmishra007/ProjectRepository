(function () {

    "use stritc";
    angular.module("customerPolicyApp", [])
    .constant('ApplicationSetting', {

        URL: 'http://sachinmishra007.azurewebsites.net/',
        //URL: 'http://localhost/MVCProjectExample.UI/',
        PageUrl: '/'
        //PageUrl: '/MVCProjectExample.UI/'
    })
    .directive('loader', ['ApplicationSetting', function (ApplicationSetting) {
        return {
            restrict: 'EA',
            transclude: false,
            replace: false,
            scope: {
                showLoading: '=',
                arrayLength: '='
            },
            templateUrl: ApplicationSetting.PageUrl + 'Partials/CustomDirective/Loader.html',
            link: function (scope, element, attrs, controller) {

            }
        };
    }])
    .directive('allowOnlyNumbers', ['ApplicationSetting', function (ApplicationSetting) {
        return {
            restrict: 'A',
            link: function (scope, elements, attrs, ctrl) {
                elements.on('keydown', function (event) {
                    var $input = $(this);
                    var value = $input.val();
                    //value = value.replace(/[^0-9]/g, '')
                    $input.val(value);
                    //console.log(event.which);
                    if (event.which == 64 || event.which == 110 || event.which == 16) {
                        // to allow numbers  
                        return false;
                    } else if (event.which >= 48 && event.which <= 57) {
                        // to allow numbers  
                        return true;
                    } else if (event.which >= 96 && event.which <= 105) {
                        // to allow numpad number  
                        return true;
                    } else if ([8, 13, 27, 37, 38, 39, 40].indexOf(event.which) > -1) {
                        // to allow backspace, enter, escape, arrows  
                        return true;
                    } else {
                        event.preventDefault();
                        // to stop others  
                        //alert("Sorry Only Numbers Allowed");  
                        return false;
                    }
                });
            }
        }
    }])
    .directive('notificationDisplay', ['ApplicationSetting', function (ApplicationSetting) {
        return {
            restrict: 'EA',
            transclude: false,
            replace: false,
            scope: {
                divid: '@',
                action: '&',
                modaltext: '='
            },
            templateUrl: ApplicationSetting.PageUrl + 'Partials/CustomDirective/Notification.html',
            link: function (scope, element, attrs, controller) {

            }
        };
    }])
    .service('lookupService', ['$http', 'ApplicationSetting',
        function ($http, ApplicationSetting) {

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
    .service('fundService', ['$http', 'ApplicationSetting',
        function ($http, ApplicationSetting) {
            this.GetFundDetails = function () {
                return $http({
                    method: 'GET',
                    url: ApplicationSetting.URL + 'api/FundDetails/GetFundDetails',
                    cache: false
                });
            }

            this.DeleteFundDetails = function (_fundDetails) {
                return $http({
                    method: 'POST',
                    data: _fundDetails,
                    url: ApplicationSetting.URL + 'api/FundDetails/DeleteFundDetails/',
                    cache: false
                });
            }

            this.InsertFundDetails = function (_fundDetails) {
                return $http({
                    method: 'POST',
                    data: _fundDetails,
                    url: ApplicationSetting.URL + 'api/FundDetails/InsertFundDetails/',
                    cache: false
                });
            }

            this.UpdateFundDetails = function (_fundDetails) {
                return $http({
                    method: 'POST',
                    data: _fundDetails,
                    url: ApplicationSetting.URL + 'api/FundDetails/UpdateFundDetails/',
                    cache: false
                });
            }
        }])
    .service('customerDetailsService', ['$http', 'ApplicationSetting',
        function ($http, ApplicationSetting) {
            this.InsertCustomerDetails = function (_customerDetails) {
                return $http({
                    method: 'POST',
                    data: _customerDetails,
                    url: ApplicationSetting.URL + 'api/CustomerDetails/InsertCustomerDetails',
                    cache: false
                });
            }

            this.GetCustomerDetails = function () {
                return $http({
                    method: 'GET',
                    url: ApplicationSetting.URL + 'api/CustomerDetails/GetCustomerDetails',
                    cache: false
                });
            }

            this.DeleteCustomerDetails = function (customerDetails) {
                return $http({
                    method: 'POST',
                    data: customerDetails,
                    url: ApplicationSetting.URL + 'api/CustomerDetails/DeleteCustomerDetails',
                    cache: false
                });
            }

        }])
    .controller("customerPolicyController", ['$scope', 'lookupService', 'fundService', 'ApplicationSetting',
        function ($scope, lookupService, fundService, ApplicationSetting) {


            $scope.Menu = lookupService.GetMenuOption();


            $scope.MenuItem = {
                MenuSelectedIndex: 0,
                MenuIncludeFileName: ApplicationSetting.PageUrl
                    + "Partials/CustomerPolicy/Funds.html"
            };

            $scope.SelectedOption = function (index, menu) {
                $scope.MenuItem = {
                    MenuSelectedIndex: index,
                    MenuIncludeFileName: menu.IncludeFile
                }
            };


        }])
        .controller('FundController', ['fundService', '$scope',
            function (fundService, $scope) {
                $scope.btnTitle = "Save";
                $scope.selectedFund = {};
                $scope.showLoading = false;
                $scope.EditModeIndex = -1;
                $scope.Fund = [];
                $scope.modalDisplay = {
                    Header: 'Funds',
                    Message: 'Do you really want to delete the record ? ',
                    btnTitle: 'Save'
                };

                $scope.GetFundDetails = function () {
                    $scope.showLoading = true;
                    fundService
                        .GetFundDetails()
                        .success(function (_result) {
                            $scope.Fund = _result;
                            $scope.showLoading = false;
                            //$scope.Fund = [];
                            //console.log($scope.Fund);
                        })
                        .error(function (_error) {
                            console.log(_error);
                        })
                };

                $scope.Init = function () {
                    $scope.GetFundDetails();
                };

                $scope.ClickOnFund = function (param) {
                    $scope.showLoading = true;
                    $scope.Fund = [];
                    $('#object1').modal('hide');
                    fundService
                        .DeleteFundDetails(param)
                        .success(function (_result) {
                            $scope.selectedFund = {};
                            $scope.ShowDialog('object1', {
                                Header: 'Funds',
                                Message: 'Record deleted successfully !',
                                btnTitle: ''
                            });
                            $scope.GetFundDetails();
                        })
                        .error(function (_error) {
                            console.log(_error);
                        })
                        .finally(function () {

                        });


                }

                $scope.InsertFundDetails = function (param) {
                    $scope.btnTitle = 'Please wait ! Saving.....';
                    fundService
                        .InsertFundDetails(param)
                        .success(function (_result) {
                            $('#object1').modal('hide');
                            $scope.selectedFund = {};
                            $scope.ShowDialog('object1', {
                                Header: 'Funds',
                                Message: 'Record Inserted successfully !',
                                btnTitle: ''
                            });
                            $scope.GetFundDetails();
                            $scope.btnTitle = 'Save';
                            $scope.funds = {};

                        })
                        .error(function (_error) {
                            console.log(_error);
                        })
                        .finally(function () {

                        });
                };


                $scope.delete = function (objectName, fu) {

                    $scope.selectedFund = fu;
                    $scope.modalDisplay = {
                        Header: 'Funds',
                        Message: 'Do you really want to delete the record ? ',
                        btnTitle: 'Delete'
                    };
                    $scope.ShowDialog(objectName, $scope.modalDisplay);
                };

                $scope.ShowDialog = function (objectName, message) {
                    $scope.modalDisplay = {
                        Header: message.Header || 'Funds',
                        Message: message.Message || 'Do you really want to delete the record ? ',
                        btnTitle: message.btnTitle || ''
                    };
                    $('#' + objectName).modal('show');
                }

                $scope.EditFund = function (objectName, fundDetails, index) {
                    $scope.fundDetails = fundDetails;
                    $scope.EditModeIndex = index;
                };

                $scope.ClickOnCancelBtn = function (fu, index) {

                    fundService
                            .UpdateFundDetails(fu)
                            .success(function (_result) {

                            })
                            .error(function (_error) {
                                $('#object1').modal('hide');
                                $scope.selectedFund = {};
                                $scope.ShowDialog('object1', {
                                    Header: 'Funds',
                                    Message: 'Record Updated successfully !',
                                    btnTitle: ''
                                });
                                $scope.GetFundDetails();
                                $scope.funds = {};
                                $scope.EditModeIndex = -1;
                            })
                            .finally(function () {

                            })

                }

                $scope.Init();
            }])
         .controller('customerController', ['$scope', 'ApplicationSetting', 'customerDetailsService',
             function ($scope, ApplicationSetting, customerDetailsService) {
                 $scope.showLoading = false;
                 $scope.btnTitle = 'Save';
                 $scope.CustomerDetails = [];
                 $scope.customer = {
                     addressDetails: []
                 };
                 $scope.ClickOnCustomer = function (param) {
                     console.log('Clicked in Customer', param);
                 };

                 $scope.AddAddress = function (addressDetails) {
                     $scope.customer.addressDetails.push(addressDetails);
                     $scope.addressDetails = [];
                 }

                 $scope.SaveCustomerDetails = function (customer) {
                     $scope.btnTitle = 'Please Wait ! Saving......';
                     customerDetailsService
                            .InsertCustomerDetails(customer)
                            .success(function (_result) {
                                $('#object2').modal('hide');
                                $scope.selectedFund = {};
                                $scope.ShowDialog('object2', {
                                    Header: 'Customer',
                                    Message: 'Record Inserted successfully !',
                                    btnTitle: ''
                                });

                                $scope.btnTitle = 'Save';
                                $scope.funds = {};
                                $scope.Display = 2;
                                $scope.GetCustomerDetails();
                            })
                            .error(function (_error) {

                            });
                 }

                 $scope.GetCustomerDetails = function () {
                     $scope.showLoading = true;
                     customerDetailsService
                         .GetCustomerDetails()
                         .success(function (_result) {
                             $scope.CustomerDetails = _result;
                             $scope.showLoading = false;
                             // $scope.CustomerDetails = [];
                         })
                        .error(function (_error) {


                        })
                 }

                 $scope.ShowDialog = function (objectName, message) {

                     $scope.modalDisplay = {
                         Header: message.Header || 'Customer',
                         Message: message.Message || 'Do you really want to delete the record ? ',
                         btnTitle: message.btnTitle || ''
                     };
                     $('#' + objectName).modal('show');
                 }

                 $scope.Init = function () {
                     $scope.GetCustomerDetails();
                 }


                 $scope.deleteCustomer = function (customer) {
                     $scope.deleteCustomerRecord = customer;
                     $scope.ShowDialog('object2', {
                         Header: 'Customer',
                         Message: 'Do you really want to delete the Record  ? ',
                         btnTitle: 'Yes'
                     });
                 };

                 $scope.ClickOnCustomer = function () {
                     $('#object2').modal('hide');
                     customerDetailsService
                            .DeleteCustomerDetails($scope.deleteCustomerRecord)
                            .success(function () {
                                $scope.ShowDialog('object2', {
                                    Header: 'Customer',
                                    Message: 'Record deleted Successfully ! ',
                                    btnTitle: ''
                                });
                                $scope.deleteCustomerRecord = {};

                            })
                            .error(function () {

                                $scope.GetCustomerDetails();
                            })

                 }

                 $scope.Init();
             }])
         .controller("customerFundInformation", ['$scope', 'lookupService',
function ($scope, lookupService) {


}]);

})();