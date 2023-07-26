import React, { useState } from "react";
import "../styles/VendorProposalTile.css";
import Loader from "./Loader";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
function VendorProposalTile({
  proposal,
  setbtnname,
  setEditProposal,
  setModalContent,
}) {
  const [loading, setLoading] = useState(false);
  const { getVendorProposals, proposalLoading, setProposalLoading } =
    useOutletContext();
  const {
    event_name,
    description,
    event_type,
    proposal_type,
    event_from_date,
    event_to_date,
    budget,
  } = proposal;
  async function deleteProposal() {
    await axios({
      method: "delete",
      url: "https://event-proposal-backend-k9e3.onrender.com/eventapp/api/v1/proposal/" + proposal._id,
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
      data: {},
    });
    setLoading(false);
    setProposalLoading(true);
    // window.location.reload(true);
    getVendorProposals();
  }
  return (
    <>
      <div className="vendor-tile-container">
        <div className="unique-top-bar">
          <div className="tile-event-name">{event_name}</div>
          <div className="tile-description">{description}</div>
        </div>

        <div className="unique-bottom-bar">
          <div className="left">
            <div className="tile-event-type">
              <label className="vendor-tile-label">Event Type</label>
              {event_type}
            </div>
            <div className="tile-proposal_type">
              <label className="vendor-tile-label">Proposal Type</label>
              {proposal_type}
            </div>
            <div className="tile-event_from_date">
              <label className="vendor-tile-label">From Date</label>
              {event_from_date}
            </div>
            <div className="tile-event_to_date">
              <label className="vendor-tile-label">To Date</label>
              {event_to_date}
            </div>
            <div className="tile-budget">
              <label className="vendor-tile-label">Budget</label>
              {budget}
            </div>
          </div>
          <div className="right">
            <i
              className="fa-solid fa-pen"
              id="tile-edit"
              onClick={() => {
                setbtnname("Edit");
                setEditProposal(proposal);
                setModalContent(proposal);
              }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            ></i>
            {loading ? (
              <Loader />
            ) : (
              <i
                className="fa-solid fa-trash-can"
                id="tile-delete"
                onClick={() => {
                  setLoading(true);
                  deleteProposal();
                }}
              ></i>
            )}
            {/* <div className="tile-icons"></div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default VendorProposalTile;
