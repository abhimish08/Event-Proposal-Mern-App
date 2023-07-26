import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ViewProposal.css";
import Card from "./viewProposals/Card";
import Venue from "./viewProposals/Venue";
import Food from "./viewProposals/Food";
import Album from "./viewProposals/Album";
import Loader from "./Loader";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router";
import { useAccountInfo } from "../contexts/accountContext";
import Events from "./viewProposals/Events";
import VendorContact from "./viewProposals/VendorContact";

const updateSelectionApi =
  "https://event-proposal-backend-k9e3.onrender.com/eventapp/api/v1/account";

function ViewProposal() {
  const context = useAccountInfo();
  const { proposalToView, selected, setSelected } = useOutletContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const updateSelection = async (id) => {
    await axios.put(
      updateSelectionApi,
      { new_selection: id !== null ? [id] : [] },
      { headers: { Authorization: `Bearer ${localStorage.token}` } }
    );
    id === null ? setSelected([]) : setSelected([id]);
    setLoading(false);
  };

  return (
    <>
      {proposalToView === "empty" ? (
        navigate("/user-dashboard")
      ) : (
        <div className="view-proposal-container">
          <div className="top-bar">
            <div
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              Proposals
              <i className="fa-solid fa-less-than"></i>
              <div>
                {proposalToView !== "" ? proposalToView.vendor_name : ""}
              </div>
            </div>
            {proposalToView._id === selected[0] ? (
              <div className="selected-alert">Selected</div>
            ) : (
              ""
            )}

            <div className="top-bar-buttons">
              <button
                style={{
                  opacity: loading ? "0.75" : "1",
                }}
                disabled={loading ? true : false}
                onClick={() => {
                  navigate(-1);
                }}
              >
                Back
              </button>
              {proposalToView._id === selected[0] ? (
                <button
                  style={{
                    opacity: loading ? "0.75" : "1",
                  }}
                  disabled={loading ? true : false}
                  onClick={() => {
                    setLoading(true);
                    updateSelection(null);
                  }}
                >
                  Remove {loading ? <Loader /> : ""}
                </button>
              ) : (
                <button
                  style={{
                    opacity: loading ? "0.75" : "1",
                  }}
                  disabled={loading ? true : false}
                  onClick={() => {
                    setLoading(true);
                    updateSelection(proposalToView._id);
                  }}
                >
                  Select {loading ? <Loader /> : ""}
                </button>
              )}
            </div>
          </div>
          <div className="proposal-desc-grid">
            <Card
              proposalToView={proposalToView !== "" ? proposalToView : ""}
            />
            <Album
              images={proposalToView !== "" ? proposalToView.images : ""}
            />
            <VendorContact proposalToView={proposalToView} />
            <Venue proposalToView={proposalToView} />
            <Food proposalToView={proposalToView} />
            <Events proposalToView={proposalToView} />
          </div>
        </div>
      )}
    </>
  );
}

export default ViewProposal;
