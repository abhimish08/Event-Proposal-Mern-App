import React, { useState } from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { useAccountInfo } from "../contexts/accountContext";
import "../styles/Navbar.css";

function Navbar() {
  const [loading, setLoading] = useState(false);
  const context = useAccountInfo();
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    setTimeout(() => {
      setLoading(false);
      navigate("/", { replace: true });
    }, 1500);
  }

  return (
    <nav className="navbar-custom">
      <div className="navbar-logo">EVENTURA</div>
      <div className="navbar-title">
        {context.accountType === "USER" ? "User" : "Vendor"} Dashboard
      </div>
      <div className="navbar-profile">
        <div className="username">{context.accountDetails.name}</div>
        <div className="profile-picture">
          <i className="fa-solid fa-user"></i>
        </div>
        <div>
          <button
            onClick={() => {
              setLoading(true);
              logout();
            }}
            className="logout-button"
          >
            Logout{" "}
            {!loading ? (
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            ) : (
              <Loader />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
