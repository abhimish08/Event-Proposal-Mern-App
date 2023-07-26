import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/UserProposals.css";
import ProposalTile from "../ProposalTile";
import { useAccountInfo } from "../../contexts/accountContext";
import { useOutletContext } from "react-router-dom";
import SelectedProposals from "./SelectedProposals";

const all_proposals_api =
  "https://event-proposal-backend-k9e3.onrender.com/eventapp/api/v1/proposal";

function UserProposals() {
  const context = useAccountInfo();
  const { proposals, setProposalToView, selected } = useOutletContext();

  return (
    <>
      <div className="banner">
        <img src="./banner.jpg" alt="banner" />
      </div>
      {selected.length !== 0 &&
      new Set(proposals.map((p) => p._id)).has(selected[0]) ? (
        <SelectedProposals
          proposals={proposals}
          selected={selected}
          setProposalToView={setProposalToView}
        />
      ) : (
        ""
      )}

      <div className="user-proposals-container">
        <div className="all-proposals-header">Proposals</div>
        <div className="all-proposals-grid">
          {proposals.length !== 0
            ? proposals
                .filter((proposal) => {
                  if (proposal._id !== selected[0]) return proposal;
                })
                .sort((a, b) => {
                  return a.event_name < b.event_name ? -1 : 1;
                })
                .map((proposal, index) => {
                  return (
                    <ProposalTile
                      key={index}
                      proposal={proposal}
                      setProposalToView={setProposalToView}
                      selected={selected}
                    />
                  );
                })
            : ""}
        </div>
      </div>
    </>
  );
}

export default UserProposals;
