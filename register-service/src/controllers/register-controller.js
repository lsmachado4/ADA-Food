const RegisterService = require('./register-service');

async function registerUser(req, res) {
  const { username, email } = req.body;

  try {
    await RegisterService.registerUser(username, email);
    res.send('Usuário registrado com sucesso');
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).send('Erro ao registrar usuário');
  }
}

module.exports = {
  registerUser,
};


// const yup = require("yup");
// const UserService = require('../services/user-service');

// class RegisterController {
//     static async create(req, res) {
//         try {
//             // Define o esquema de validação utilizando o Yup
//             const schema = yup.object({
//                 username: yup.string().required(),
//                 email: yup.string().email().required(),
//                 password: yup.string().required().min(6) // Exemplo: a senha deve ter pelo menos 6 caracteres
//             });

//             // Valida os dados recebidos na requisição com o esquema definido
//             if (!(await schema.isValid(req.body))) {
//                 throw { status: 400, message: "Validation Fails" };
//             }

//             // Verifica se o usuário já existe no sistema pelo email
//             const { username, email, password } = req.body;
//             const userExists = await UserService.userExistsByEmail(email);

//             // Se o usuário já existir, retorna um erro
//             if (userExists) {
//                 throw { status: 400, message: "User already exists" };
//             }

//             // Cria o usuário no banco de dados utilizando o serviço UserService
//             await UserService.createUser(username, email, password);

//             // Retorna uma resposta de sucesso
//             res.status(201).json({ message: "User registered successfully" });
//         } catch (error) {
//             // Captura e trata os erros
//             console.error(error);
//             res.status(error.status || 500).json({ error: error.message || 'Server Error' });
//         }
//     }
// }

// module.exports = RegisterController;
