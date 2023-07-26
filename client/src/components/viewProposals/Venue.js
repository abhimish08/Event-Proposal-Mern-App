import React from "react";
import "../../styles/viewProposals/Venue.css";

function Venue({ proposalToView }) {
  return (
    <div className="food-grid-item">
      <div>Venue and Arrangements</div>
      <div>{proposalToView.event_place}</div>
    </div>
  );
}

export default Venue;
