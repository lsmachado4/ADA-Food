const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  cpf: String,
  street: String,
  number: String,
  neighborhood: String,
  city: String,
  state: String,
  country: String,
});

module.exports.User = mongoose.model("User", UserSchema);

class NotificationService {
  static sendEmailConfirmation(email) {
    console.log(`Enviando email de confirmação para ${email}`);
  }
}

module.exports.NotificationService = NotificationService;
