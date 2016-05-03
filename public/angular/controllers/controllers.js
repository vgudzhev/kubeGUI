kubeGUI.controller('HeaderController', function($scope, $location) {
  $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
  };
});

kubeGUI.controller('homeController', function($scope) {
  $scope.message = 'Home';
});

kubeGUI.controller('podsController', function($scope) {
  $scope.message = 'Pods';
});

kubeGUI.controller('rcController', function($scope) {
  $scope.message = 'Replicationcontrollers';
});

kubeGUI.controller('servicesController', function($scope) {
  $scope.message = 'Services';
});