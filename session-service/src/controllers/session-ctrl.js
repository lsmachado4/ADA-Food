const yup = require("yup");
const UserService = require('../services/user-service');
const SessionService = require("../services/session-service");
class SessionController {
    static async create(req, res) {
        try {
            const schema = yup.object({
                email: yup.string().email().required(),
                name: yup.string().required()
            });
            if (!(await schema.isValid(req.body))) {
                throw { status: 400, message: "Validation Fails" };
            }

            const user = await UserService.userExistsByEmail(req.body.email)
            console.log(user)
            const token = SessionService.create(user)
            res.status(200).json({token})
        } catch (error) {
            console.log(error)
            res.status(error.status || 500).json({error: error.message || 'Server Error'})
        }
    }
}


module.exports = SessionController;