import React from "react";
import "../../styles/viewProposals/Food.css";

function Food({ proposalToView }) {
  return (
    <div className="food-grid-item">
      <div>Food Preferences</div>
      <div>{proposalToView.food_prefs}</div>
    </div>
  );
}

export default Food;
