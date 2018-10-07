function ContactService (AuthService, $firebaseRef, $firebaseArray, $firebaseObject) {
<<<<<<< HEAD
  // firebaseRef is a reference for a firebase database
  // .contacts is located in auth.module
  var ref = $firebaseRef.contacts
  var uid = AuthService.getUser().uid

  return {
    createNewContact: function (contact) {
      return $firebaseArray(ref.child(uid)).$add(contact)
=======
	// firebaseRef is a reference for a firebase database
	// .contacts is located in auth.module
	var ref = $firebaseRef.contacts
	var uid = AuthService.getUser().uid

	return {
		createNewContact: function (contact) {
			return $firebaseArray(ref.child(uid)).$add(contact)
>>>>>>> bb61f591b2de833ebcbbf111bfb7bced3a565aa8
	    },
	    getContactById: function (id) {
     		return $firebaseObject(ref.child(uid).child(id))
	    },
	    getContactList: function () {
	    	return $firebaseArray(ref.child(uid))
	    },
	    updateContact: function (contact) {
	    	return contact.$save() // $save is part of the firebase object that is return to us
	    },
	    deleteContact: function (contact) {
	    	return contact.$remove() // $remove - removes from firebase database
	    }
<<<<<<< HEAD
  }
}

angular
  .module('components.contact')
  .factory('ContactService', ContactService)
=======
	}
}

angular
	.module('components.contact')
	.factory('ContactService', ContactService)
>>>>>>> bb61f591b2de833ebcbbf111bfb7bced3a565aa8
