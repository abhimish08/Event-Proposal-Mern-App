const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accountSchema = new Schema({
  account_type: { type: String, enum: ["USER", "VENDOR"], required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  contact: { type: String, required: true },
  proposals: [{ type: String }],
});

const accountModel = mongoose.model("accounts", accountSchema);

module.exports = accountModel;
