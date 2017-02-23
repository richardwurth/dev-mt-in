angular.module('central').controller('mainController', function($scope, mainService, $timeout){
  $scope.underline = function (){
    $('#friendsLink').addClass('section-underline');
  }
});
