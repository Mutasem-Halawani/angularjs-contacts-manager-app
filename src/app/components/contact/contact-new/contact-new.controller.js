function ContactNewController (ContactService, $state) {
<<<<<<< HEAD
  var ctrl = this
  ctrl.$onInit = function () {
=======
 var ctrl = this
 ctrl.$onInit = function () {
>>>>>>> bb61f591b2de833ebcbbf111bfb7bced3a565aa8
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
<<<<<<< HEAD
  }
}

angular
  .module('components.contact')
=======
 }
}

angular
	.module('components.contact')
>>>>>>> bb61f591b2de833ebcbbf111bfb7bced3a565aa8
  .controller('ContactNewController', ContactNewController)
