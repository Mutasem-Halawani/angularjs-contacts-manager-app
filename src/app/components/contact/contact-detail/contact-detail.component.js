var contactDetail = {
	// add bindings - stateless components have an input and an output
	bindings: {
		contact: '<',
		onSave: '&'
	},
	templateUrl: './contact-detail.html',
	controller: 'ContactDetailController'
}

angular
	.module('components.contact')
	.component('contactDetail', contactDetail)