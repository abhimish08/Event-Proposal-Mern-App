import React from "react";
import "../../styles/viewProposals/Contact.css";

function VendorContact({ proposalToView }) {
  return (
    <div className="contact-grid-item">
      <div className="title">Contact</div>
      <div className="profile-picture">
        <i className="fa-solid fa-user"></i>
      </div>
      <div className="number">{proposalToView.vendor_contact}</div>
    </div>
  );
}

export default VendorContact;
