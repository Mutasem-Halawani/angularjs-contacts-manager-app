var contacts = {
	bindings: {
		contacts: '<' // Given from the ui router
	},
	templateUrl: './contacts.html',
	controller: 'ContactsController'
}

angular
	.module('components.contact')
	.component('contacts', contacts)
	.config(function ($stateProvider) {
		$stateProvider
			.state('contacts', {
				parent: 'app',
				url: '/contacts',
				component: 'contacts',
				resolve: {
					contacts: function (ContactService) {
						// $loaded() means the list is ready to be displayed in the DOM
						return ContactService.getContactList().$loaded()
					}
				}
			})
	})
