angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.newsFeed', {
    url: '/newsfeed',
    views: {
      'tab1': {
        templateUrl: 'templates/newsFeed.html',
        controller: 'newsFeedCtrl'
      }
    }
  })

  .state('tabsController.donate', {
    url: '/donate',
    views: {
      'tab2': {
        templateUrl: 'templates/donate.html',
        controller: 'donateCtrl'
      }
    }
  })

  .state('tabsController.userProfile', {
    url: '/profile',
    views: {
      'tab3': {
        templateUrl: 'templates/userProfile.html',
        controller: 'userProfileCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.volunteering', {
    url: '/volunteering',
    views: {
      'tab4': {
        templateUrl: 'templates/volunteering.html',
        controller: 'volunteeringCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/newsfeed')

  

});