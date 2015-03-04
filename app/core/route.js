(function() {
    'use strict';

    angular
        .module('jverhaeghePortfolio')
        .config(['$routeProvider', function($routeProvider ) {
            $routeProvider.when('/accueil', {
                templateUrl: './pages/accueil/accueil.html',
                controller: 'Accueil'
            });
            $routeProvider.when('/portfolio', {
                templateUrl: './pages/portfolio/portfolio.html',
                controller: 'Portfolio'
            });
            $routeProvider.when('/cv', {
                templateUrl: './pages/cv/cv.html',
                controller: 'Cv'
            });
            $routeProvider.when('/contact', {
                templateUrl: './pages/contact/contact.html',
                controller: 'Contact'
            });
            $routeProvider.otherwise({
                redirectTo: '/accueil'
            });
        }])


})();
