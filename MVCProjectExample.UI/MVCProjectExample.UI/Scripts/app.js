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
            templateUrl: '/MVCProjectExample.UI/Partials/CustomDirective/CustomDirective.html',
            link: function (scope, element, attrs, controller) {
                scope.showUp = true;
                scope.Close = function ($event) {
                    scope.showUp = false;
                }
            }
        }
    })
    .controller("mainController", function ($scope) {
        $scope.UserDetails = [];

        for (var i = 0; i < 3; i++) {
            $scope.UserDetails.push({
                UserId: 'USER001' + (i + 1).toString(),
                UserName: 'USER' + (i + 1).toString(),
                ItemCount: 0
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