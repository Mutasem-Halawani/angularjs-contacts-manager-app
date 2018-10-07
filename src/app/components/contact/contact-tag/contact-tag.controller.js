function ContactTagController () {
<<<<<<< HEAD
  var ctrl = this
  ctrl.$onInit = function () {
    ctrl.tags = [
      'friends', 'family', 'acquaintances', 'following'
    ]
  }
  ctrl.$onChanges = function (changes) {
    if (changes.tag) {
      ctrl.tag = angular.copy(ctrl.tag) // make a copy before the component is actually instantiated
    }
  }
  ctrl.updateTag = function (tag) {
    ctrl.onChange({
      $event: {
        tag: tag
      }
    })
  }
}

angular
  .module('components.contact')
  .controller('ContactTagController', ContactTagController)
=======
	var ctrl = this
	ctrl.$onInit = function () {
		ctrl.tags = [
			'friends', 'family', 'acquaintances', 'following'
		]
	}
	ctrl.$onChanges = function (changes) {
		if (changes.tag) {
			ctrl.tag = angular.copy(ctrl.tag) // make a copy before the component is actually instantiated
		}
	}
	ctrl.updateTag = function (tag) {
		ctrl.onChange({
			$event: {
				tag: tag
			}
		})
	}
}

angular
	.module('components.contact')
	.controller('ContactTagController', ContactTagController)
>>>>>>> bb61f591b2de833ebcbbf111bfb7bced3a565aa8
