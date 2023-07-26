import React from "react";
import { useAccountInfo } from "../../contexts/accountContext";
import "../../styles/UserDashboard/SelectedProposals.css";
import ProposalTile from "../ProposalTile";

function SelectedProposals({ proposals, selected, setProposalToView }) {
  const context = useAccountInfo();
  return (
    <div className="user-selected-proposals-container">
      <div className="selected-proposals-header">Selected</div>
      <div className="selected-proposals-grid">
        {proposals.length !== 0
          ? proposals
              .filter((p) => {
                if (p._id === selected[0]) return p;
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
  );
}

export default SelectedProposals;
