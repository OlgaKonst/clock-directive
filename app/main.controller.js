angular.module('myApp')
    .controller('MainController',['$scope', function($scope) {
        $scope.options = ['HH:mm:ss', 'HH-mm-ss', 'HH/mm/ss'];
        $scope.format = 'HH/mm/ss';
       // $scope.$watch('format', function(newVal){console.log('newVal',newVal)});
    }])
