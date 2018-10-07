function lengthCheck () {
<<<<<<< HEAD
  return {
    restrict: 'A',
    require: 'ngModel',
    compile: function ($element) { // opposed to the link function this will add the class only once
      $element.addClass('dynamic-input')
      return function ($scope, $element, $attrs, $ctrl) {
        // $ctrl will correspond the ngModel
        var dynamicClass = 'dynamic-input--no-contents'
        $scope.$watch(function () {
          return $ctrl.$viewValue // return the current viewValue of the input it's bound to
        }, function (newValue) {
          if (newValue) {
            $element.removeClass(dynamicClass)
          } else {
            $element.addClass(dynamicClass)
          }
        })
      }
 		}
  }
}

angular
  .module('components.contact')
  .directive('lengthCheck', lengthCheck)
=======
	return {
		restrict: 'A',
		require: 'ngModel',
		compile: function ($element) { // opposed to the link function this will add the class only once
			$element.addClass('dynamic-input')
			return function ($scope, $element, $attrs, $ctrl) {
				// $ctrl will correspond the ngModel
				var dynamicClass = 'dynamic-input--no-contents'
				$scope.$watch(function () {
					return $ctrl.$viewValue // return the current viewValue of the input it's bound to
				}, function (newValue) {
					if (newValue) {
						$element.removeClass(dynamicClass)
					} else {
						$element.addClass(dynamicClass)
					}
				})
			}
 		}
	}
}

angular
	.module('components.contact')
	.directive('lengthCheck', lengthCheck)
>>>>>>> bb61f591b2de833ebcbbf111bfb7bced3a565aa8
