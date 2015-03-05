(function() {
    'use strict';

    angular.module('jverhaeghePortfolio.accueil')
        .controller('Accueil', Accueil);

    Accueil.$inject = ["$scope","$rootScope"];
    function Accueil($scope,$rootScope){
        $scope.pageClass = "accueil";
        $rootScope.menuIsOpen = "";
    }
})();
