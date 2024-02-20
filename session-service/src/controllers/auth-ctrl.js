class AuthController {
    static auth(req, res) {
        res.status(200).json({message: 'Auth service'});
    }
}

module.exports = AuthController;