const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      required: true,
      minLenght: [3, "firstName must be of leat 3 characters"],
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLenght: [5, "email length should be of length at least 5 characters"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
});
userSchema.methods.generateAuthToken =  async function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return  await token;
};
userSchema.methods.comparePassword = async function (passward) {
  return await bcrypt.compare(passward, this.passward);
};
userSchema.statics.hashPassword = async function (passward) {
  return await bcrypt.hash(passward, 10);
};

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
