/**
 * Created by praneeth on 9/2/2016.
 */
define(['angular'], function (angular) {
    'use strict';
    var home = angular.module('app.homeMod', []);


    // return ng.module('app.controllers', []);
    home.controller('mainCtrl',['$scope', function($scope) {
        $scope.name='Boo';
    }]);
    return home;
});