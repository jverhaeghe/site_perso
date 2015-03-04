(function() {
    'use strict';

    angular.module('jverhaeghePortfolio.accueil')
        .controller('Accueil', Accueil);


    function Accueil($scope,$rootScope){
        $scope.pageClass = "accueil";
        $rootScope.menuIsOpen = "";
    }
})();
