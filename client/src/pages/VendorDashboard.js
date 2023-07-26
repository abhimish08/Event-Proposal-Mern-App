import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAccountInfo } from "../contexts/accountContext";

const get_vendor_proposals_api =
  "https://event-proposal-backend-k9e3.onrender.com/eventapp/api/v1/proposal/my";
const my_details_api =
  "https://event-proposal-backend-k9e3.onrender.com/eventapp/api/v1/account/my-details";

function VendorDashboard() {
  const navigate = useNavigate();
  const context = useAccountInfo();
  const [proposals, setProposals] = useState([]);
  const [proposalLoading, setProposalLoading] = useState(false);

  const getAccountDetails = async () => {
    const res = await axios.get(my_details_api, {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    });
    const details = res.data.details;
    context.changeAccountDetails(details);
    context.changeAccountType(details.account_type);
  };

  const getVendorProposals = async () => {
    const res = await axios.get(get_vendor_proposals_api, {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    });
    const data = res.data.data;
    setProposals([...data]);
    setProposalLoading(false);
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/");
    else {
      navigate("/vendor-dashboard");
      setProposalLoading(true);
      getAccountDetails();
      getVendorProposals();
    }
  }, []);
  return (
    <>
      <Navbar />
      <Outlet
        context={{
          proposals,
          getVendorProposals,
          proposalLoading,
          setProposalLoading,
        }}
      />
    </>
  );
}

export { VendorDashboard };
