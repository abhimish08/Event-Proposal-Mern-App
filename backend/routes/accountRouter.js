const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const login = require("../controllers/loginController");
const register = require("../controllers/registerController");
const {
  getMyDetails,
  getUserSelection,
  updateUserSelection,
} = require("../controllers/accountController");
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/my-details", protect, getMyDetails); // To get a account details
router.get("/my-selections", protect, getUserSelection); // To get a user's proposal selection history
router.put("/", protect, updateUserSelection); // To update a user's proposal selection history

module.exports = router;
