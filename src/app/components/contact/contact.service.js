function ContactService (AuthService, $firebaseRef, $firebaseArray) {
	// firebaseRef is a reference for a firebase database
	// .contacts is located in auth.module
	var ref = $firebaseRef.contacts
	var uid = AuthService.getUser().uid

	return {
		createNewContact: function (contact) {
			return $firebaseArray(ref.child(uid)).$add(contact)
		}
	}
}

angular
	.module('components.contact')
	.factory('ContactService', ContactService)