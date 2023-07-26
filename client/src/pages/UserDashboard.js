import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import { useAccountInfo } from "../contexts/accountContext";
import Navbar from "../components/Navbar";

const all_proposals_api =
  "https://event-proposal-backend-k9e3.onrender.com/eventapp/api/v1/proposal";
const my_details_api =
  "https://event-proposal-backend-k9e3.onrender.com/eventapp/api/v1/account/my-details";

function UserDashboard() {
  const navigate = useNavigate();
  const context = useAccountInfo();
  const [proposals, setProposals] = useState([]);
  const [proposalToView, setProposalToView] = useState("empty");
  const [selected, setSelected] = useState([]);

  const getAccountDetails = async () => {
    const res = await axios.get(my_details_api, {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    });
    const details = res.data.details;
    context.changeAccountDetails(details);
    context.changeAccountType(details.account_type);
    setSelected([...details.proposals]);
  };

  const getAllProposals = async () => {
    const res = await axios.get(all_proposals_api, {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    });
    const data = res.data.data;
    setProposals([...data]);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/");
    else {
      navigate("/user-dashboard");
      getAccountDetails();
      getAllProposals();
    }
  }, []);

  return (
    <>
      <Navbar />
      <Outlet
        context={{
          proposals,
          proposalToView,
          setProposalToView,
          selected,
          setSelected,
        }}
      />
    </>
  );
}

export default UserDashboard;
