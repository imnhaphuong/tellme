const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    //all users in conversation
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    

    //FOR GROUP CHAT
    // chatName: {
    //   type: String,
    //   trim: true,
    // },
    // //
    // isGroup: {
    //   type: Boolean,
    //   default: false,
    // },
    // groupAdmin: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("conversation", ConversationSchema);
