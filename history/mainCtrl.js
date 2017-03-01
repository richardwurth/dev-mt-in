angular.module('central').controller('mainController', function($scope, mainService) {
  let friendsVis = false;
  let updateVis = false;
  let vis = true;
  let findVis = false;

  $scope.softReset = function () {
    friendsVis = false;
    updateVis = false;
    findVis = false;
    vis = true;
    setTimeout(function(){
      $('.main-content').fadeIn();
    },500);
    $('.update-main').fadeOut(500);
    $('#friendsParent').fadeOut(500);
    $('#findFriendsParent').fadeOut(500);
  };
  $scope.custFadeOut = function (){
    if (vis === true) {
      $('.main-content').fadeOut(500);
      vis = false;
      // } else {
      //   $('.main-content').fadeIn();
      //   vis = true;
    }
  };
  $scope.friendsFadeIn = function (){
    if (friendsVis === false) {
      friendsVis = true;
      findVis = false;
      updateVis = false;
      setTimeout(function(){
        $('#friendsParent').fadeIn(500);
      },500);
      $('.update-main').fadeOut(500);
      $('#findFriendsParent').fadeOut(500);
    }
  };

  $scope.updateFadeIn = function (){
    if (updateVis === false) {
      updateVis = true;
      findVis = false;
      friendsVis = false;
      setTimeout(function(){
        $('.update-main').fadeIn(500);
      },500);
      $('#friendsParent').fadeOut(500);
      $('#findFriendsParent').fadeOut(500);
    }
  };
  $scope.findFriendsFadeIn = function (){
    if (findVis === false) {
      findVis = true;
      friendsVis = false;
      updateVis = false;
      setTimeout(function(){
        $('#findFriendsParent').fadeIn(500);
      },500);
      $('#friendsParent').fadeOut(500);
      $('.update-main').fadeOut(500);
    }
  };
  $scope.underline = function () {
    if (updateVis === true) {
        $('#updateLink').addClass('section-underline');
      $('#findLink').removeClass('section-underline');
      $('#friendsLink').removeClass('section-underline');
    }  else if (friendsVis === true) {
      $('#friendsLink').addClass('section-underline');
      $('#findLink').removeClass('section-underline');
      $('#updateLink').removeClass('section-underline');
    } else if (findVis === true) {
      $('#findLink').addClass('section-underline');
      $('#friendsLink').removeClass('section-underline');
      $('#updateLink').removeClass('section-underline');
    } else if (findVis === false && updateVis === false && friendsVis === false) {
      $('#findLink').removeClass('section-underline');
      $('#friendsLink').removeClass('section-underline');
      $('#updateLink').removeClass('section-underline');
    }
  };
});
