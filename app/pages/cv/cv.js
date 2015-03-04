(function() {
    'use strict';

    angular.module('jverhaeghePortfolio.cv')
        .controller('Cv', Cv);

    Cv.$inject = ["$scope"];
    function Cv($scope){
        $scope.pageClass = "cv";
    }

})();
