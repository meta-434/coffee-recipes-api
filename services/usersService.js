import {FULL_USERS} from "../queries/users";

const usersService = {
    async createUser(username, password) {
        console.log('piss in my ass');
        return await FULL_USERS;
    },
    async signIn(username, password) {
        return await username;
    },
    async deleteUser(username) {
        return username;
    }
};

module.exports = usersService;
