const yup = require("yup");
const RegisterService = require("../services/register-service");
const {sendNotification} = require("../config/rabbitmq.js");

class RegisterController {
    static async create(req, res) {
    try {
        const schema = yup.object().shape(
            {
                name: yup.string().required(),
                email: yup.string().email().required(),
                cpf: yup.string().required(),
                street: yup.string().required(),
                number: yup.number().required(),
                neighborhood: yup.string().required(),
                city: yup.string().required(),
                state: yup.string().required(),
                country: yup.string().required(),
            }
        )
        if (!(await schema.isValid(req.body))) {
            throw { status: 400, message: "Validation Fails" };
        }
        const { id, email } = await RegisterService.createUser(req.body)
        sendNotification('User Created', req.body.email)
       res.status(201).json({id, user: `Usuário ${req.body.name} criado com sucesso!`});
    } catch (error) {
        console.log(error)
        res.status(error.status || 500).json({error: error.message || 'Server Error'})
    }
  }
}

module.exports = RegisterController;