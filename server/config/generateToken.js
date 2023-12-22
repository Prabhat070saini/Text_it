const jwt = require("jsonwebtoken");

module.exports.generateToken = (id) => {
    console.log(id);
    console.log('Using JWT Secret:', process.env.JWT_SECRET);
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};