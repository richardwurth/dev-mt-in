angular.module('central').controller('mainController', function($scope, mainService, $timeout){
  $scope.underline = function ($event){
    $('.foot-link').removeClass('section-underline');
    $($event.target).addClass('section-underline');
  };
});
