(function() {
    'use strict';

    angular
        .module('app')
        .factory('collection', getCollection);

    function getCollection(apiHost, $log, $http, $q) {

        var service = {
            apiHost: apiHost,
            getCollection: getCollection,
            removeCard: removeCard
        };

        return service;

        function getCollection(id) {

            var deferred = $q.defer(),
                collection;

                $http.get(apiHost + '/api/collection/' + id)
                    .success(function(response){
                        collection = getComplete(response.data);                    
                        deferred.resolve(collection);
                    })
                    .error(function(error){
                        deferred.reject(error);
                        getFailed(error);
                    });

            return deferred.promise;

            function getComplete(data) {
                return data;
            }

            function getFailed(error) {
                $log.error('XHR Failed for getCollection.\n' + angular.toJson(error.data, true));
            }

        }


        function removeCard(id){

            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: apiHost + '/api/removeCard',
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
