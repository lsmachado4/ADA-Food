const yup = require("yup");
const RegisterService = require("../services/register-service");

class RegisterController {
    static async create(req, res) {
        
    try {
        const schema = yup.object({
            name: yup.string().required(),
            email: yup.string().email().required(),
            cpf: yup.string().required(),
            street: yup.string().required(),
            number: yup.number().required(),
            neighborhood: yup.string().required(),
            city: yup.string().required(),
            state: yup.string().required(),
            country: yup.string().required(),
        });
        if (!(await schema.isValid(req.body))) {
            throw { status: 400, message: "Validation Fails" };
        }
        const data = req.body
        const { name, email, cpf, street, number, neighborhood, city, state, country } = data;
        const { id } = await RegisterService.createUser({  name, email, cpf, street, number, neighborhood, city, state, country})
       res.status(201).json({id, user: `Usuário ${name} criado com sucesso!`});
    } catch (error) {
        console.log(error)
        res.status(error.status || 500).json({error: error.message || 'Server Error'})
    }
  }
}

module.exports = RegisterController;