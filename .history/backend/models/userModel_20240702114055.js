//Taken from https://medium.com/@sanjanashivananda07/mastering-user-authentication-mern-stack-login-page-part-1-backend-107ef537f8e6
// Importing necessary modules
const mongoose = require("mongoose");
var crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");

//Defining the User Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 30,
      minLength: 2,
    },
    mcr: {
      type: String,
      required: true,
      unique: true, //unique to each doctor
      trim: true,
      maxLength: 10,
      minLength: 7, //could be max 7 also
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    encrypted_password: {
      type: String,
      required: true,
    },
    salt: String,
  },
  { timestamps: true }
);
//Creating a "virtua" field that will take in password and encrypt it
userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv4();
    this.encrypted_password = this.securedPassword(password);
  })
  .get(function () {
    return this._password;
  });
//Defining some methods associated with user schema
userSchema.method({
  //To check if the password is correct
  authenticate: function (plainpassword) {
    return this.securedPassword(plainpassword) === this.encrypted_password;
  },

  //To encrpty the password
  securedPassword: function (plainpassword) {
    if (!plainpassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "Error in hashing the password";
    }
  },
});
//Export the userSchema as User
module.exports = mongoose.model("User", userSchema);
