(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/pages/index.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/pages/about.html'
      })
      .state('contacts', {
        url: '/contacts',
        templateUrl: 'app/pages/contacts.html'
      })
      .state('collections', {
        url: '/collections',
        templateUrl: 'app/pages/collections.html'
      })
      .state('collection', {
        url: '/collection/:id',
        templateUrl: 'app/pages/collection.html'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/profile/profile.html'
      });

    $urlRouterProvider.otherwise('/home');
  }

})();
