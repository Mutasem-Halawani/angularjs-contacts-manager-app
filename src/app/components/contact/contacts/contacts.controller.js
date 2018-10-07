function ContactsController ($filter, $state) {
<<<<<<< HEAD
  var ctrl = this
=======
	var ctrl = this
>>>>>>> bb61f591b2de833ebcbbf111bfb7bced3a565aa8
  ctrl.$onInit = function () {
    var contacts = ctrl.contacts // Firebase Array
    ctrl.filteredContacts = $filter('contactsFilter')(contacts, ctrl.filter)
  }

<<<<<<< HEAD
  ctrl.goToContact = function (event) { // allows to go to a contact which we click on
    $state.go('contact', {
      id: event.contactId
    })
  }
}

angular
  .module('components.contact')
  .controller('ContactsController', ContactsController)
=======
	ctrl.goToContact = function (event) { // allows to go to a contact which we click on
		$state.go('contact', {
			id: event.contactId
		})
	}
}

angular
	.module('components.contact')
	.controller('ContactsController', ContactsController)
>>>>>>> bb61f591b2de833ebcbbf111bfb7bced3a565aa8
