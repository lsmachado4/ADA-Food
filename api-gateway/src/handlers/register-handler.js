const axios = require("axios");

class RegisterHandler {
  static async create(req, res) {
    try {
      const { data } = await axios.post(
        `${process.env.REGISTER_SERVICE_URL}/register`,
        req.body
      );
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res
        .status(error?.response?.status || 500)
        .json({ error: error?.responde?.data?.error || "Server Error" });
    }
  }
}

module.exports = RegisterHandler;
