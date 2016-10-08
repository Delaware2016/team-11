angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    .state('tabsController.newsfeed', {
    url: '/newsfeed',
    views: {
      'tab1': {
        templateUrl: 'templates/newsFeed.html',
        controller: 'newsfeedCtrl'
      }
    }
  })

  .state('tabsController.volunteer', {
    url: '/volunteer',
    views: {
      'tab2': {
        templateUrl: 'templates/volunteer.html',
        controller: 'volunteerCtrl'
      }
    }
  })

  .state('tabsController.donate', {
    url: '/donate/{charity}',
    views: {
      'tab3': {
        templateUrl: 'templates/donate.html',
        controller: 'donateCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract: true
  })

  .state('about', {
    url: '/about',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

  .state('contactInfo', {
    url: '/contact',
    templateUrl: 'templates/contactInfo.html',
    controller: 'contactInfoCtrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('login', {
      url: '/login',
          templateUrl: 'templates/login.html',
          controller: 'loginCtrl'
  })

  .state('tabsController.confirmDonation', {
    url: '/donationConfirmation',
    views: {
      'tab3': {
        templateUrl: 'templates/confirmDonation.html',
        controller: 'confirmDonationCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/page1/newsfeed')



});
