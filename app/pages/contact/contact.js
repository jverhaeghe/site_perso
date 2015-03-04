/**
 * Created by Julien Verhaeghe => jverhaeghe.dev@gmail.com on 04/03/2015.
 */
(function() {
    'use strict';

    angular.module('jverhaeghePortfolio.contact')
        .controller('Contact', Contact);

    function Contact($scope,$rootScope){
        $scope.pageClass = "contact";
        $rootScope.menuIsOpen = "";
    }
})();