const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const codeSchema = mongoose.Schema(
  {
    code: {
      type: String,
    },
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Code", codeSchema);
