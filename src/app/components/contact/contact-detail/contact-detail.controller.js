function ContactDetailController() {
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
}

angular
	.module('components.contact')
	.controller('ContactDetailController', ContactDetailController)