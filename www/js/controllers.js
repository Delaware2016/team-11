angular.module('app.controllers', [])

.controller('newsFeedCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
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

.controller('donateCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams) {


  }
])

.controller('userProfileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams) {


  }
])

.controller('volunteeringCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function($scope, $stateParams) {


  }
])
