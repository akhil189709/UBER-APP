const { validationResult } = require("express-validator");
const userModel = require("../models/user.model");
const userService = require("../services/user.service");

module.exports.registerUser = async function (req, res, next) {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstName, lastName, password, email } = req.body;
  const hashPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    password: hashPassword,
    email,
  });
  const token = user.generateAuthToken();
  res.status(201).json({ token, user });
};
