const express = require("express");
const router = express.Router();
const {
  getAllProposals,
  getVendorProposals,
  createNewProposal,
  editProposal,
  deleteProposal,
} = require("../controllers/proposalController");
const { protect } = require("../middleware/authMiddleware");

router
  .route("/")
  .get(protect, getAllProposals)
  .post(protect, createNewProposal);
router.get("/my", protect, getVendorProposals);
router.route("/:id").put(protect, editProposal).delete(protect, deleteProposal);

module.exports = router;
