(function () {

    'use strict';

    angular.module('app')
        .service('EntityManager', ['$http', '$q', EntityManager])

    function EntityManager($http, $q) {


        this.create = function(uri, data){

            var deferred = $q.defer();

            $http.post(uri, data)
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (err) {
                    deferred.reject(null);
                });

            return deferred.promise;
        };



        this.list = function(uri, body){

            var deferred = $q.defer();

            $http.get(uri)
                .success( function(response, status, headers, config) {
                    deferred.resolve(response);
                })
                .error(function(err) {
                    deferred.reject(null);
                });

            return deferred.promise;
        };



        this.find = function(uri){

            var deferred = $q.defer();

            $http.get(uri)
                .success( function(response, status, headers, config) {
                    deferred.resolve(response);
                })
                .error(function(err) {
                    deferred.reject(null);
                });

            return deferred.promise;
        };



        this.update = function(uri, data){

            var deferred = $q.defer();

            $http.put(uri, data)
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (err) {
                    deferred.reject(null);
                });

            return deferred.promise;
        };



        this.delete = function(uri){

            var deferred = $q.defer();

            $http.delete(uri)
                .success( function(response, status, headers, config) {
                    deferred.resolve(response);
                })
                .error(function(err) {
                    deferred.reject(null);
                });

            return deferred.promise;
        };


        return this;
    }


})();
