function ContactsController ($filter, $state) {
	var ctrl = this
  ctrl.$onInit = function () {
    var contacts = ctrl.contacts // Firebase Array
    ctrl.filteredContacts = $filter('contactsFilter')(contacts, ctrl.filter)
  }

	ctrl.goToContact = function (event) { // allows to go to a contact which we click on
		$state.go('contact', {
			id: event.contactId
		})
	}
}

angular
	.module('components.contact')
	.controller('ContactsController', ContactsController)
