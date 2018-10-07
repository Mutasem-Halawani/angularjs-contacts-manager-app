function ContactController () {
<<<<<<< HEAD
  var ctrl = this
  ctrl.selectContact = function () {
    ctrl.onSelect({
      $event: {
        contactId: ctrl.contact.$id // $id comes from firebase
      }
    })
  }
}

angular
  .module('components.contact')
  .controller('ContactController', ContactController)
=======
	var ctrl = this
	ctrl.selectContact = function () {
		ctrl.onSelect({
			$event: {
				contactId: ctrl.contact.$id // $id comes from firebase
			}
		})
	}
}

angular
	.module('components.contact')
	.controller('ContactController', ContactController)
>>>>>>> bb61f591b2de833ebcbbf111bfb7bced3a565aa8
