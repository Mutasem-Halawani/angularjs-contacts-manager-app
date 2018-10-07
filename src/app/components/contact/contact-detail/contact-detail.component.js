var contactDetail = {
<<<<<<< HEAD
  // add bindings - stateless components have an input and an output
  bindings: {
    contact: '<',
    onSave: '&',
    onUpdate: '&',
    onDelete: '&'
  },
  templateUrl: './contact-detail.html',
  controller: 'ContactDetailController'
}

angular
  .module('components.contact')
  .component('contactDetail', contactDetail)
=======
	// add bindings - stateless components have an input and an output
	bindings: {
		contact: '<',
		onSave: '&',
		onUpdate: '&',
		onDelete: '&'
	},
	templateUrl: './contact-detail.html',
	controller: 'ContactDetailController'
}

angular
	.module('components.contact')
	.component('contactDetail', contactDetail)
>>>>>>> bb61f591b2de833ebcbbf111bfb7bced3a565aa8
