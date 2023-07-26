const accountModel = require("../models/account");

const getMyDetails = async (req, res) => {
  try {
    res.json({
      details: req.user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getUserSelection = async (req, res) => {
  try {
    const proposals = req.user.proposals;
    res.json({
      user_selections: proposals,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateUserSelection = async (req, res) => {
  try {
    const user_id = req.user._id;
    const new_selection = req.body.new_selection;
    await accountModel.findByIdAndUpdate(user_id, { proposals: new_selection });
    res.json({
      message: "updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { updateUserSelection, getUserSelection, getMyDetails };
