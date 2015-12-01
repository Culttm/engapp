(function() {
  'use strict';

  angular
    .module('app')
    .directive('collectionsList', collectionsDirective);

    /** @ngInject */
    function collectionsDirective(){

        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/collections/collections.html',
            scope: {},
            controller: СollectionsController,
            controllerAs: 'vm',
            bindToController: true,
            replace: true
        };

        function СollectionsController(apiHost, сollections, $log) {

            var vm = this;
                vm.cardCollections = [];
                vm.host = apiHost;
                vm.deleteCollection = deleteCollection;

            // activate();


            (function activate() {
                getCollections();
            })();


            function getCollections() {
                сollections.getCollections().then(function(response){
                    vm.cardCollections = response;
                });
            }

            function deleteCollection (id) {

                сollections.deleteCollection(id).then(function(response){
                    vm.deleteMessage = response;
                });

            }

        }


        return directive;
        
    }



})();
