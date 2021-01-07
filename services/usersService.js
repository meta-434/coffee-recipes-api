const firebase = require('../firebase');

const fb = firebase.database();
const ref = fb.ref('/users');

const usersService = {
    async createUser(username, password) {
        let err = '';
        let UUID = '';
        const fbReq = await ref.orderByChild("username").equalTo(username).once("value", snap => {
            if (snap.exists()) {
                err = "user already exists!";
            } else {
                console.log('\nusername not present in DB, proceeding...\n');
               UUID = ref.push({
                    username,
                    password
                }, (e) => {
                    if (e) {
                        err += new Error(e);
                    } else {
                        console.log('\nuser successfully created!\n');
                    }
                });
            }
        });

        if (!!err) throw err
        else return UUID.key;
    },
    async signIn(username, password) {
        return await username;
    },
    async deleteUser(username) {
        return username;
    }
};

module.exports = usersService;