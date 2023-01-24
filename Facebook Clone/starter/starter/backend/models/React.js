const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const reactSchema = mongoose.Schema(
  {
    react: {
      type: String,
      enum: ["like", "love", "haha", "sad", "angry", "wow"],
    },
    postRef: {
      type: ObjectId,
      ref: "Post",
    },
    reactBy: {
      type: ObjectId,
      ref: "User",
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("React", reactSchema);
