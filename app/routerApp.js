var routerApp = angular.module('central',['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider


    .state('home', {
      name: 'home',
      url: '/home',
      templateUrl: 'about_me.html'



    });
      $urlRouterProvider.otherwise('/');
});
