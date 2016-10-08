angular.module('app.controllers', [])

.controller('newsfeedCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams, $http) {
    $scope.items = []
    $http.get('data/newsfeed_data.json').success(function(data) {
      console.log(data)
      for (var i in data.newsfeed) {
        var item = {}
        item.values = data.newsfeed[i]
        item.str = "";
        if (item.values.donate) {
          item.str = item.values.name + " has donated " + item.values.value + " dollars to " + item.values.event_Name
        } else {
          item.str = item.values.name + " has volunteered for " + item.values.value + " hours at " + item.values.event_Name
        }
        console.log(item)
        $scope.items.push(item)
      }
    });
  }
])

.controller('volunteerCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams, $http) {

    $scope.items = []
    $http.get('data/volunteer_data.json').success(function(data) {
      for (var i in data.volunteeringevents) {
        var item = {}
        item.values = data.volunteeringevents[i]
        item.str = "";
        item.name = item.values.event_Name
        item.date = item.values.date
        item.time = item.values.timeOf
        item.fb = item.values.fb_url

        console.log(item)
        $scope.items.push(item)
      }
    });

  }
])

.controller('donateCtrl', ['$scope', '$stateParams', '$http',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
  $scope.items = []
    $http.get('data/donate_data.json').success(function(data) {
      var set = new Set()
      var hashmap = {}
      for (var i in data.donationcharities) {
        var item = {}
        item.values = data.donationcharities[i]
        item.str = item.values.charityName
        set.add(item.values.passion)

        if(hashmap[item.values.passion] === undefined) {
          hashmap[item.values.passion] = []
          hashmap[item.values.passion].push(item.str)
        } else {
          hashmap.push(item.str)
        }

        $scope.items.push(item)
      }

      $scope.passions = Array.from(set)
      $scope.hashmap = hashmap
      console.log(hashmap)
      console.log($scope.passions)
    });
    
    $scope.mySelect = "education";
    $scope.testFunc = function(val) { console.log(val); $scope.charitySelect = $scope.hashmap[val][0] }
}])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams) {


  }
])

.controller('aboutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams) {


  }
])

.controller('contactInfoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams) {


  }
])

.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams) {


  }
])

.controller('loginCtrl', ['$scope', '$stateParams','$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams, $location) {
      $scope.logIn = function() {
          $location.url("templates/newsfeed.html");
      }
  }
])

.controller('confirmDonationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams) {


  }
])
