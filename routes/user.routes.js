const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/users.controllers");

router.post("/register",
  [
    body("email").isEmail().withMessage("invalid Email"),
    body("fullName.firstName").isLength({min:3}).withMessage("firstName must have at least 3 characters!"),
    body("password").isLength({ min: 6 }).withMessage("Password must be atleast 6 character long"),
  ],
  userController.registerUser
)

module.exports = router;
