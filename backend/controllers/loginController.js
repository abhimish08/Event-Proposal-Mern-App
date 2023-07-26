const accountModel = require("../models/account");
const generateToken = require("../utils/jwt");
const { match } = require("../utils/passHash");

const sendResponse = (account, password, res) => {
  if (account.length) {
    if (match(password, account[0].password)) {
      res.json({
        token: generateToken(account[0]._id),
      });
    } else {
      res.status(401).json({ message: "wrong password" });
    }
  } else {
    res.status(400).json({ message: "user not found" });
  }
};

const login = async (req, res) => {
  try {
    const { accountType, identifier_type, identifier, password } = req.body;
    if (identifier_type === "contact") {
      const account = await accountModel.find({ contact: identifier });
      if (!account.length) {
        res.status(400).json({ message: "User not found" });
      } else if (accountType !== account[0].account_type) {
        res.status(400).json({ message: "user not found" });
      } else {
        sendResponse(account, password, res);
      }
    } else if (identifier_type === "email") {
      const account = await accountModel.find({ email: identifier });
      if (!account.length) {
        res.status(400).json({ message: "User not found" });
      } else if (accountType !== account[0].account_type) {
        res.status(400).json({ message: "user not found" });
      } else {
        sendResponse(account, password, res);
      }
    } else {
      res.status(400).json({
        message: "invalid identifier",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = login;
