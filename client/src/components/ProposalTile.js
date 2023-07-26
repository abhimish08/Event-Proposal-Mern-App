import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProposalTile.css";

function ProposalTile({ proposal, setProposalToView, selected }) {
  const navigate = useNavigate();
  const { vendor_name, event_name, images, budget, event_place } = proposal;
  return (
    <div
      className="proposal-tile"
      onClick={() => {
        setProposalToView(proposal);
        navigate(`view-proposal/${proposal._id}`);
      }}
    >
      <div className="proposal-thumbnail-container">
        <img
          src={
            images[0]
              ? images[0]
              : "https://www.suffolk.com/wp-content/themes/suffolk-theme/img/default-img.jpg"
          }
          alt="proposal-thumbnail"
        />
      </div>
      <div
        style={{
          backgroundColor: selected[0] === proposal._id ? "#34A853" : "",
        }}
        className="tile-info"
      >
        <div>{event_name}</div>
        <div>
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            Vendor :
          </span>{" "}
          {vendor_name}
        </div>
        <div>
          <div>{event_place}</div>
          <div>{new Intl.NumberFormat().format(budget) + "/-"}</div>
        </div>
      </div>
    </div>
  );
}

export default ProposalTile;
