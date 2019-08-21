HomeComponent.$inject = ['$rootScope', '$scope', 'Logger', 'ImageSize'];

function HomeComponent($rootScope, $scope, Logger, ImageSize) {

    var vm = this;

    vm.upload = function(file) {
        Logger.log('Raw File', file);

        ImageSize
            .details(file)
            .then(function(res){
                Logger.log('Image Detail', res);
            }, function(err){

            });
    };

}