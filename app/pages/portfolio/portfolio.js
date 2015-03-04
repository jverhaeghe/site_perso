(function() {
    'use strict';

    angular.module('jverhaeghePortfolio.portfolio')
        .controller('Portfolio', Portfolio);

    Portfolio.$inject = ["$scope"];
    function Portfolio($scope){
        $scope.pageClass = "portfolio";
    }

})();
