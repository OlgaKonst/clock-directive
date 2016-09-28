    angular.module('myApp')
        .directive('clock', function($interval) {
            return {
                templateUrl: './app/directives/clock.html',
                scope: {
                    format: '='
                },
                link: function($scope, elem, attrs){
                    $scope.time = new Date();
                    console.log($scope.format);
                    $interval(function() {
                        $scope.time = new Date();
                    }, 1000);
                }
            }
        });


