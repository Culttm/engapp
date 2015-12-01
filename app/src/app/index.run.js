(function() {
  'use strict';

  angular
    .module('app')
    .run(runBlock);

  /** @ngInject */

  runBlock.$inject = ['$log'];

  function runBlock($log) { 
    $log.debug('runBlock end');
  }

})();
