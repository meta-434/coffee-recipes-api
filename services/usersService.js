const firebase = require('../firebase');

const usersService = {
    createUser(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            //console.error(`error in createUser() => ${errorCode} : ${errorMessage}`);
            return new Error(`{message: error in createUser() => ${errorCode} : ${errorMessage}`);
        })
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