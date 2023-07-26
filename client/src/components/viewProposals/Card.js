import React from "react";

function Card({ proposalToView }) {
  return (
    <div className="proposal-dec-card">
      <div className="proposal-dec-card-img-container">
        <img
          src={
            proposalToView.images[0]
              ? proposalToView.images[0]
              : "https://www.suffolk.com/wp-content/themes/suffolk-theme/img/default-img.jpg"
          }
        />
      </div>
      <div className="proposal-dec-card-proposal-id">
        ID : {proposalToView._id}
      </div>
      <div className="proposal-dec-card-details">
        <div>
          <span className="label">Name : </span> {proposalToView.vendor_name}
        </div>
        <div>
          <span className="label">Email : </span> {proposalToView.vendor_email}
        </div>
        <div className="proposal-timeline">
          <div>
            <span className="label">Start Date:</span>{" "}
            {proposalToView.event_from_date}
          </div>
          <div>
            <span className="label">End Date:</span>{" "}
            {proposalToView.event_to_date}
          </div>
        </div>
        <div className="event-specs">
          <div>
            <div className="proposal-desc-grid-event-spec-type">Event Type</div>
            <div className="proposal-desc-grid-event-type-value">
              {proposalToView.event_type}
            </div>
          </div>
          <div>
            <div className="proposal-desc-grid-event-spec-type">
              Event Class
            </div>
            <div>Class A</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
