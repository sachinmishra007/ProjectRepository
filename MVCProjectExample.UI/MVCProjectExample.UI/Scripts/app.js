/// <reference path="C:\Practice Projects\MVCProjectExample.UI\MVCProjectExample.UI\Partials/CustomDirective/CustomDirective.html" />
/// <reference path="C:\Practice Projects\MVCProjectExample.UI\MVCProjectExample.UI\Partials/CustomDirective/CustomDirective.html" />
(function () {

    "use strict";

    angular.module("mainApp", [])
    .directive("customDirective", function () {
        return {
            restrict: 'EA',
            replace: true,
            transclude: false,
            scope: {
                username: '=',
                title: '='
            },
            templateUrl: '/MVCProjectExample.UI/Partials/CustomDirective/CustomDirective.html',
            link: function (scope, element, attrs, controller) {

            }
        }
    })
    .controller("mainController", function ($scope) {
        $scope.UserDetails = {};

        $scope.UserDetails.UserId = "ADMIN1234";
        $scope.UserDetails.Controller1 = "User1";
        $scope.UserDetails.Controller2 = "User2";
        $scope.UserDetails.Controller3 = "User3";

    })
    .controller("Controller1", function ($scope) {

    })
    .controller("Controller2", function ($scope) {

    })
    .controller("Controller3", function ($scope) {
    })

})();