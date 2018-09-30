function ContactNewController (ContactService, $state) {
 var ctrl = this
 ctrl.$onInit = function () {
 	ctrl.contact = {
 		name: '',
 		email: '',
 		job: '',
 		location: '',
 		social: {
 			facebook: '',
 			github: '',
 			twitter: '',
 			linkedin: ''
 		},
 		tag: 'none'
 	}

 	ctrl.createNewContact = function (event) {
 		return ContactService // return a firebase promise object will be accessed with then
 			.createNewContact(event.contact)
 			.then(function (contact) {
 				// success
 				$state.go('contact', {
 					id: contact.key // firbase hash key
 				})
 			})
 	}
 }
}

angular
	.module('components.contact')
  .controller('ContactNewController', ContactNewController)
