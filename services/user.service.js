const { ZodFirstPartyTypeKind } = require("zod");
const userModel = require("../models/user.model");

module.exports.createUser = async ({
  firstName,
  lastName,
  password,
  email,
}) => {
  if (!firstName || !password || !email) {
    throw new Error("All the above fields are required");
  }
  const user = userModel.create({
    fullName: {
      firstName,
      lastName,
    },
    password,
    email,
  });
  return user;
};
