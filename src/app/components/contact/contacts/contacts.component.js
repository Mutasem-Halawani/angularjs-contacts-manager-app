var contacts = {
<<<<<<< HEAD
  bindings: {
    contacts: '<', // Given from the ui router
    filter: '<'
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
        url: '/contacts?filter',
        component: 'contacts',
        params: {
          filter: {
            value: 'none'
          }
        },
        resolve: {
          contacts: function (ContactService) {
            // $loaded() means the list is ready to be displayed in the DOM
            return ContactService.getContactList().$loaded()
          },
          filter: function ($transition$) {
            return $transition$.params()
          }
        }
      })
  })
=======
	bindings: {
		contacts: '<', // Given from the ui router
		filter: '<'
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
				url: '/contacts?filter',
				component: 'contacts',
				params: {
					filter: {
						value: 'none'
					}
				},
				resolve: {
					contacts: function (ContactService) {
						// $loaded() means the list is ready to be displayed in the DOM
						return ContactService.getContactList().$loaded()
					},
					filter: function ($transition$) {
						return $transition$.params()
					}
				}
			})
	})
>>>>>>> bb61f591b2de833ebcbbf111bfb7bced3a565aa8
