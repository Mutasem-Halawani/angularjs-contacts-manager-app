function ContactDetailController () {
<<<<<<< HEAD
  var ctrl = this
  ctrl.$onInit = function () {
    ctrl.isNewContact = !ctrl.contact.$id
  }
  ctrl.saveContact = function () {
    ctrl.onSave({ // pushing an event up to the parent
      $event: {
        contact: ctrl.contact
      }
    })
  }
  ctrl.updateContact = function () {
    ctrl.onUpdate({ // pushing an event up to the parent
      $event: {
        contact: ctrl.contact
      }
    })
  }
  ctrl.deleteContact = function () {
    ctrl.onDelete({ // pushing an event up to the parent
      $event: {
        contact: ctrl.contact
      }
    })
  }
  ctrl.tagChange = function (event) {
    ctrl.contact.tag = event.tag
    ctrl.updateContact() // update the contact when the tag changes - in firebase
  }
}

angular
  .module('components.contact')
  .controller('ContactDetailController', ContactDetailController)
=======
	var ctrl = this
	ctrl.$onInit = function () {
		ctrl.isNewContact = !ctrl.contact.$id
	}
	ctrl.saveContact = function () {
		ctrl.onSave({ // pushing an event up to the parent
			$event: {
				contact: ctrl.contact
			}
		})
	}
	ctrl.updateContact = function () {
		ctrl.onUpdate({ // pushing an event up to the parent
			$event: {
				contact: ctrl.contact
			}
		})
	}
	ctrl.deleteContact = function () {
		ctrl.onDelete({ // pushing an event up to the parent
			$event: {
				contact: ctrl.contact
			}
		})
	}
	ctrl.tagChange = function (event) {
		ctrl.contact.tag = event.tag
		ctrl.updateContact() // update the contact when the tag changes - in firebase
	}
}

angular
	.module('components.contact')
	.controller('ContactDetailController', ContactDetailController)
>>>>>>> bb61f591b2de833ebcbbf111bfb7bced3a565aa8
