angular.module('app.controllers', [])
<<<<<<< HEAD

.controller('newsfeedCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams, $http) {
    $scope.items = []
    $http.get('data/newsfeed_data.json').success(function(data) {
      for (var i in data.array) {
        var item = {}
        item.values = data.array[i]
        item.str = "";
        if(item.values.donate) {
          item.str = item.values.name + " has donated " + item.values.value + " dollars to " + item.values.event_Name
        }
        else {
          item.str = item.values.name + " has volunteered for " + item.values.value + " hours at " + item.values.event_Name
        }
        console.log(item)
        $scope.items.push(item)
      }
    });
  }
])

.controller('volunteerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
=======

.controller('newsfeedCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams, $http) {
    $scope.items = []
    $http.get('data/newsfeed_data.json').success(function(data) {
      for (var i in data.array) {
        var item = {}
        item.values = data.array[i]
        item.str = "";
        if(item.values.donate) {
          item.str = item.values.name + " has donated " + item.values.value + " dollars to " + item.values.event_Name
        }
        else {
          item.str = item.values.name + " has volunteered for " + item.values.value + " hours at " + item.values.event_Name
        }
        console.log(item)
        $scope.items.push(item)
      }
    });
  }
])

.controller('volunteerCtrl', ['$scope', '$stateParams', '$http',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
>>>>>>> 8fc6208a53c333f1fb598127f13e2a53233f218b
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
  $scope.items = []
    $http.get('data/volunteer_data.json').success(function(data) {
      for (var i in data.volunteeringevents) {
        var item = {}
        item.values = data.volunteeringevents[i]
        item.str = "";
        item.name = item.values.event_Name
        item.date = item.values.date
        item.time = item.values.timeOf
        

        console.log(item)
        $scope.items.push(item)
      }
    });

}])

.controller('donateCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.items = []
    $http.get('data/donate_data.json').success(function(data) {
      for (var i in data.donationcharities) {
        var item = {}
        item.values = data.donationcharities[i]
        item.str = "";
        if(item.values.donate) {
          item.str = item.values.name + " has donated " + item.values.value + " dollars to " + item.values.event_Name
        }
        else {
          item.str = item.values.name + " has volunteered for " + item.values.value + " hours at " + item.values.event_Name
        }
        console.log(item)
        $scope.items.push(item)
      }
    });

}])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('aboutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('contactInfoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('confirmDonationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
