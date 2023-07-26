import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDashboard from "../pages/UserDashboard";
import ViewProposal from "./ViewProposal";
import UserProposals from "./UserDashboard/UserProposals";
import Home from "../pages/Home";
import { VendorDashboard } from "../pages/VendorDashboard";
import VendorProposals from "./VendorProposals";
import "../styles/App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="vendor-dashboard" element={<VendorDashboard />}>
            <Route path="" element={<VendorProposals />} />
          </Route>
          <Route path="user-dashboard" element={<UserDashboard />}>
            <Route path="" element={<UserProposals />} />
            <Route path="view-proposal/:id" element={<ViewProposal />} />
          </Route>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
