var contactNew = {
<<<<<<< HEAD
  templateUrl: './contact-new.html',
  controller: 'ContactNewController'
}

angular
  .module('components.contact')
  .component('contactNew', contactNew)
  .config(function ($stateProvider) {
    $stateProvider
      .state('new', {
        parent: 'app',
        url: '/new',
        component: 'contactNew'
      })
  })
=======
	templateUrl: './contact-new.html',
	controller: 'ContactNewController'
}

angular
	.module('components.contact')
	.component('contactNew', contactNew)
	.config(function ($stateProvider) {
		$stateProvider
			.state('new', {
				parent: 'app',
				url: '/new',
				component: 'contactNew'
			})
	})
>>>>>>> bb61f591b2de833ebcbbf111bfb7bced3a565aa8
