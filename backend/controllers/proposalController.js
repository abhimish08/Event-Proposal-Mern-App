const proposalModel = require("../models/proposal");

const getAllProposals = async (req, res) => {
  try {
    const data = await proposalModel.find();
    res.status(200);
    res.json({
      data,
    });
  } catch (err) {
    res.status(500);
    res.json({ message: err.message });
  }
};

const getVendorProposals = async (req, res) => {
  try {
    const data = await proposalModel.find({ vendor: req.user._id });
    res.status(200);
    res.json({
      data,
    });
  } catch (err) {
    res.status(500);
    res.json({ message: err.message });
  }
};

const createNewProposal = async (req, res) => {
  try {
    const data = await proposalModel.create({
      vendor: req.user._id,
      vendor_name: req.user.name,
      vendor_email: req.user.email,
      vendor_contact: req.user.contact,
      ...req.body,
    });
    res.status(201);
    res.json({
      status: "success",
      data,
    });
  } catch (e) {
    res.status(500);
    res.json({
      status: "failed",
      message: e.message,
    });
  }
};

const editProposal = async (req, res) => {
  try {
    const proposal = await proposalModel.findById(req.params.id);
    if (req.user._id.equals(proposal.vendor)) {
      const data = await proposalModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.status(201);
      res.json({
        status: "success",
        data,
      });
    } else {
      res.status(403).json({
        message: "forbidden",
      });
    }
  } catch (e) {
    res.status(500);
    res.json({
      status: "failed",
      message: e.message,
    });
  }
};

const deleteProposal = async (req, res) => {
  try {
    const proposal = await proposalModel.findById(req.params.id);
    if (req.user._id.equals(proposal.vendor)) {
      const data = await proposalModel.findByIdAndDelete(req.params.id);
      res.status(200);
      res.json({
        status: "success",
        message: "Deleted Proposal",
      });
    } else {
      res.status(403).json({
        message: "forbidden",
      });
    }
  } catch (e) {
    res.status(500);
    res.json({
      status: "failed",
      message: e.message,
    });
  }
};

module.exports = {
  getAllProposals,
  getVendorProposals,
  createNewProposal,
  editProposal,
  deleteProposal,
};
