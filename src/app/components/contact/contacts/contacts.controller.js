function ContactsController ($state) {
	var ctrl = this
	ctrl.goToContact = function (event) { // allows to go to a contact which we click on
		$state.go('contact', {
			id: event.contactId
		}) 
	}
}

angular
	.module('components.contact')
	.controller('ContactsController', ContactsController)
