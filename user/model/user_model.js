const mongoose = require("mongoose");
const config = require("../../common/.env.config");
mongoose.connect(
  config.dbConnect,
  { useNewUrlParser: true }
);
const userSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  level: { type: Number, default: 0 }
});

const User = mongoose.model("User", userSchema);

exports.createUser = userData => {
  const user = new User(userData);
  return user.save();
};
