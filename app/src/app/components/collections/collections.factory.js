(function() {
    'use strict';

    angular
        .module('app')
        .factory('сollections', getCollections);

    function getCollections(apiHost, $log, $http, $q,  $injector) {

        var service = {
            apiHost: apiHost,
            getCollections: getCollections,
            deleteCollection: deleteCollection
        };

        $log.info( $injector )

        return service;

        function getCollections(){

            var deferred = $q.defer(),
                collections;

            $http.get(apiHost + '/api/collections')
                .success(function(response){
                    collections = getComplete(response.data);
                    deferred.resolve(collections);
                })
                .error(function(error){
                    deferred.reject(error);
                    getFailed(error);
                });

            return deferred.promise;


            function getComplete(data) {
                return data;
            }

            function getFailed(response, error) {
                $log.error('XHR Failed for getList.\n' + angular.toJson(error.data, true));
            }

        }


        function deleteCollection(id){

            var deferred = $q.defer();


            $http({
                method: 'POST',
                url: apiHost + '/api/removeCollection',
                data: $.param({id: id}),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .success(function(response){
                deferred.resolve(response);
            })
            .error(function(error){
                deferred.reject(error);
            });

            return deferred.promise;

        }



    }

})();
