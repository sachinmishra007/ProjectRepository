/// <reference path="C:\Practice Projects\MVCProjectExample.UI\MVCProjectExample.UI\Partials/CustomDirective/CustomDirective.html" />
/// <reference path="C:\Practice Projects\MVCProjectExample.UI\MVCProjectExample.UI\Partials/CustomDirective/CustomDirective.html" />
(function () {

    "use strict";

    angular.module("mainApp", [])
    .directive("customDirective", function () {
        return {
            restrict: 'EA',
            replace: false,
            transclude: false,
            scope: {
                userdetails: '=',

            },
            templateUrl: '/Partials/CustomDirective/CustomDirective.html',
            link: function (scope, element, attrs, controller) {
                scope.showUp = true;
                scope.Close = function ($event) {
                    scope.showUp = false;
                }
            }
        }
    })
    .directive('ngCustomFormatter', function () {
        return {
            restrict: 'A',
            replace: false,
            transclude: false,
            require: 'ngModel',
            link: function (scope, element, attrs, controller) {
                //controller.$parsers.push(function (inputValue) {
                //    var transformedInput;
                //    if (isNaN(inputValue) || inputValue == null || inputValue < 0) {
                //        transformedInput = 0;
                //    }
                //    if (transformedInput != inputValue) {
                //        controller.$setViewValue(transformedInput);
                //        controller.$render();
                //    }
                //    return transformedInput;
                //});

                scope.AddNumbertoBucket = function () {
                    scope.userdetails.ItemCount += 1;
                };

                element.on('keydown', function (event) {
                    var $input = $(this);
                    var value = $input.val();

                    value = value.replace(/[^0-9]+\.?[0-9]*$/g, '')
                    $input.val(value);
                    if (event.which == 64 || event.which == 16) {
                        // to allow numbers  
                        return false;
                    } else if (event.which >= 48 && event.which <= 57) {
                        // to allow numbers  
                        return true;
                    } else if (event.which >= 96 && event.which <= 105) {
                        // to allow numpad number  
                        return true;
                    } else if ([8, 13, 27, 37, 38, 39, 40, 46].indexOf(event.which) > -1) {
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
    })
    .controller("mainController", function ($scope) {
        $scope.UserDetails = [];

        for (var i = 0; i < 3; i++) {
            $scope.UserDetails.push({
                title: 'USER00' + (i + 1).toString(),
                UserName: 'USER' + (i + 1).toString(),
                ItemCount: i
            });
        }

    })
    .controller("Controller1", function ($scope) {

    })
    .controller("Controller2", function ($scope) {

    })
    .controller("Controller3", function ($scope) {
    })

})();