import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    trim: true,
    require: true,
  },
  password: { type: String, require: true },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
