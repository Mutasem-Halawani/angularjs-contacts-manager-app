var contactDetail = {
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
