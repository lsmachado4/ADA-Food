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
