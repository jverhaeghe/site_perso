(function() {
    'use strict';

    angular.module('jverhaeghePortfolio', [
        /*
         * Order is not important. Angular makes a
         * pass to register all of the modules listed
         * and then when app.dashboard tries to use app.data,
         * it's components are available.
         */

        /*
         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */
       /* '',
        'app.widgets',*/
        'jverhaeghePortfolio.core',
        'ngRoute',
        'ngAnimate',
        /*
         * Feature areas
         */

        'jverhaeghePortfolio.mapDirective',
        /* 'app.avengers',
         'app.dashboard',
         'app.layout'*/
        'jverhaeghePortfolio.layout',
        'jverhaeghePortfolio.accueil',
        'jverhaeghePortfolio.cv',
        'jverhaeghePortfolio.portfolio',
        'jverhaeghePortfolio.contact'
    ]);

})();