angular.module('central').controller('mainController', function($scope, mainService) {
  let friendsVis = false;
  let updateVis = false;
  let vis = true;

  $scope.softReset = function () {
    friendsVis = false;
    updateVis = false;
    vis = true;
    setTimeout(function(){
    $('.main-content').fadeIn();
  },1000);
    $('.update-main').fadeOut(1000);
    $('.friends-main').fadeOut(1000);

  }
  $scope.custFadeOut = function (){
    if (vis === true) {
      $('.main-content').fadeOut();
      vis = false;
    // } else {
    //   $('.main-content').fadeIn();
    //   vis = true;
    }
  }
  $scope.friendsFadeIn = function (){
    if (friendsVis === false) {
      friendsVis = true;
      setTimeout(function(){
      $('.friends-main').fadeIn(1000);
      updateVis = false;
    },1000);
      $('.update-main').fadeOut(1000);
    }
  }

$scope.updateFadeIn = function (){
  if (updateVis === false) {
    setTimeout(function(){
    $('.update-main').fadeIn(1000);
    updateVis = true;
  },1000);
    friendsVis = false;
    $('.friends-main').fadeOut(1000);
  }
}
});
