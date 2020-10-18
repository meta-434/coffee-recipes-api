const admin = require('../firebase');

const usersService = {
    createUser(displayName, photo, email, password) {
        return admin.auth().createUser({
            email: email,
            emailVerified: false,
            password: password,
            displayName: displayName || 'John Doe',
            disabled: false
        })
            .then(function(userRecord) {
                // See the UserRecord reference doc for the contents of userRecord.
                console.log('Successfully created new user:', userRecord.uid);
                return userRecord.uid;
            })
            .catch(function(error) {
                console.log('Error creating new user:', error);
            });
    },
    signIn(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`error in signIn() => ${errorCode} : ${errorMessage}`);
        })
    },
    signOut() {
        firebase.auth().signOut().then(function() {
            console.log('signOut() successful');
        }).catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`error in signOut() => ${errorCode} : ${errorMessage}`);
        })
    }
};

module.exports = usersService;