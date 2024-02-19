const userDb = require("../../db/user.json");

class UserService {
    static async userExistsByEmail(email){
        return userDb.find(user => user.email === email)
    }

    static checkPassword(password, shouldMatchPassword){
        return password === shouldMatchPassword
    }
}

module.exports = UserService;