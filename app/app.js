
var routerApp = angular.module('routerApp',['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {


  $urlRouterProvider.otherwise('/');
  $stateProvider


    .state('home', {
      url: '/home',
      templateUrl: 'about_me.html'



    });
});
angular.module('central',['ngAnimate','routerApp']);
