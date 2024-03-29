
angular.module('app.controllers', [])

.controller('newsfeedCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams, $http) {
    $scope.items = []
    $http.get('data/newsfeed_data.json').success(function(data) {
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

    $scope.fundData = [{
            "fund": "General",
            "goal": "10000",
            "raised": "4650",
            "link": "#general"
        }];
  }
])

.controller('volunteerCtrl', ['$scope', '$stateParams', '$http', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams, $http, $ionicLoading) {

    google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
 
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });
 
        $scope.map = map;
    });

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

.controller('donateCtrl', ['$scope', '$stateParams', '$http', '$window', '$location',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $window, $location) {
  $scope.hashmap = {};
  $scope.items = [];
  $scope.passions = [];
  $http.get('data/donate_data.json').success(function(data) {
      var set = new Set()
      var hashmap = {}
      var bool = true;
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

        if(item.values.id+"" === $stateParams.charity+"") {
          $scope.mySelect = item.values.passion;
          $scope.charitySelect = item.str;
          bool = false;
        }
        $scope.items.push(item)
      }
      console.log(set)
      var newStupidArray = [] //I hate angular for this
      set.forEach(function(value) {
        newStupidArray.push(value)
      })
      $scope.passions = newStupidArray;
      $scope.hashmap = hashmap;
      console.log(hashmap)
      console.log($scope.passions)

    });
    $scope.testFunc = function(val) { console.log(val); $scope.charitySelect = $scope.hashmap[val][0] }
    $scope.selectedValue = 5;

    $scope.select5 = function() {
      $scope.selectedValue = 5;
      $scope.customValue.test = ''
      $scope.button50 = false;
    }

    $scope.select50 = function() {
      $scope.selectedValue = 50;
      $scope.customValue.test = ''
    }

    $scope.select100 = function() {
      $scope.selectedValue = 100;
      $scope.customValue.test = ''
    }

    $scope.customValue = {}
    $scope.selectCustom = function() {
      $scope.selectedValue = $scope.customValue.test;
      console.log($scope.selectedValue);
    }

    $scope.confirm = function() {
      var url = "http://" + $window.location.host + '/#/page1/donationConfirmation'
      $window.location.href = url
      console.log($window.location.href)
    }

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

.controller('loginCtrl', ['$scope', '$stateParams', '$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
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
