(function() {
  'use strict';

  angular
    .module('app')
    .directive('collectionSingle', CollectionDirective);

    /** @ngInject */
    function CollectionDirective(){

        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/collectionSingle/collection.html',
            scope: {},
            controller: CollectionController,
            controllerAs: 'vm',
            bindToController: true,
            replace: true
        };

        function CollectionController(apiHost, collection, $stateParams, $log) {

            var vm = this;
                vm.collection = [];
                vm.collectionTest = [];
                vm.collectionTitle;
                vm.host = apiHost;
                vm.id = $stateParams.id;
                vm.removeCard = removeCard

            activate();


            function activate() {
                getCollectionRespond(vm.id);
            }


            function getCollectionRespond(id) {

                collection.getCollection(id).then(function(response){
                    vm.collectionTitle = response[0].title;
                    vm.collection = response;

                    $log.info('vm.collection ', vm.collection);
                
                });

            }

            function removeCard(id) {

                collection.removeCard(id).then(function(response){
                    activate();
                    $log.info(response);
                });

            }

        }


        return directive;
        
    }



})();
