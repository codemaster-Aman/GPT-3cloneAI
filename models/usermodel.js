const mongoose = require("mongoose");
//we will create a funn for hashing pasword

const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const cookie = require("cookie");


//modles
//wer are creating scheme or data requirements

const userScheme = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: [6, "password length should be 6 char long"],
  },
  customerId: {
    type: String,
    default: "",
  },
  subscription: {
    type: String,
    default: "",
  },
});
//hashed password function
userScheme.pre("save", async function (next) {
  //update
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
//match password
userScheme.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
//sign token
userScheme.methods.getSignedToken = function (res) {
  const accesToken = JWT.sign({ id: this._id }.process.env.JWT_ACCESS_SECRET, {
    expiresIn: JWT_ACCESS_EXPIREIN,
  });
  const refereshToken = JWT.sign(
    { id: this._id },
    process.env.JWT_REFERESH_TOKEN,
    { expiresIn: process.envJWT_REFERESH }
  );
  res.cookie("refreshToken", `${refereshToken}`, {
    maxAge: 86400 * 7000,
    httpOnly: true,
  }); 
};

const user = mongoose.model("user", userScheme);

module.exports = user;
