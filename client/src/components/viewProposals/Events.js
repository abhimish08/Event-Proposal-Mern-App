import React from "react";

function Events({ proposalToView }) {
  return (
    <div className="food-grid-item">
      <div>Events</div>
      <div>{proposalToView.events}</div>
    </div>
  );
}

export default Events;
