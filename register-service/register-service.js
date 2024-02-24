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

module.exports = mongoose.model("User", UserSchema);

class NotificationService {
  static sendEmailConfirmation(email) {
    console.log(`Enviando email de confirmação para ${email}`);
  }
}

module.exports = NotificationService;

// routes.js
const express = require("express");
const User = require("./models/User");
const NotificationService = require("./services/NotificationService");

const router = express.Router();

router.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();

  NotificationService.sendEmailConfirmation(user.email);

  res.status(201).send(user);
});

module.exports = router;
