(function () {
    'use strict';

    angular
        .module('angular-image-size', [])
        .service('ImageSize', ImageSize);

    ImageSize.$inject = ['$q'];
    
    function ImageSize($q) {

        this.details = function (file) {
            var defer = $q.defer();
            try {
                var width = 0;
                var height = 0;

                var img = new Image();

                img.src = window.URL.createObjectURL(file);

                img.onload = function () {
                    width = img.naturalWidth;
                    height = img.naturalHeight;
                    window.URL.revokeObjectURL(img.src);
                    defer.resolve({ width: width, height: height, type: file.type });
                };
            } catch (e) {
                defer.reject(e);
            }
            return defer.promise;
        };

    }

}());