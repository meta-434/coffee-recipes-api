const firebase = require('../firebase');

const fb = firebase.database();
const ref = fb.ref('/users');


// ref.push({
//     value: 'lost like tears in the rain'
// })
//
// ref.once('value', (snap) => {
//     const data = snap.val();
//     console.log('data', data);
// })

const usersService = {
    createUser(username, password) {
        const newUserRef = ref.push({
            username,
            password
        }, (e) => {
            if (e) {
                throw new Error(`error: ${e}`);
            } else {
                console.log(`success`);
            }
        });

        return newUserRef.key;
    },
    signIn(email, password) {

    },
    signOut() {
       // is this even necessary?
    }
};

module.exports = usersService;