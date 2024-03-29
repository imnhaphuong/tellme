const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default:
        "https://tse2.mm.bing.net/th?id=OIP.f1IszCjHtBlCEXYmy9hsQwHaHa&pid=Api&P=0",
    },
    contacts: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'user'
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
