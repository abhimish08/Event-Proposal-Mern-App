const { hashed } = require("../utils/passHash");
const accountModel = require("../models/account");

const register = async (req, res) => {
  try {
    const accountWithEmail = await accountModel.find({ email: req.body.email });
    const accountWithContact = await accountModel.find({
      contact: req.body.contact,
    });
    if (accountWithEmail.length || accountWithContact.length) {
      res.status(400).json({
        message: "user already exists",
      });
    } else {
      const hashedPass = hashed(req.body.password);
      const new_account = await accountModel.create({
        ...req.body,
        password: hashedPass,
      });
      res.status(201).json(new_account);
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

module.exports = register;
