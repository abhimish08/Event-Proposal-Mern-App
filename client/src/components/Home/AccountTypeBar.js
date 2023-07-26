import React, { useState } from "react";
import "../../styles/Home/AccountTypeBar.css";

function AccountTypeBar({ accountType, setAccountType }) {
  return (
    <div className="account-type-bar">
      <div
        style={{
          fontWeight: accountType === "vendor" ? "bold" : "normal",
          color: accountType === "vendor" ? "white" : "black",
          backgroundColor: accountType === "vendor" ? "#4285f4" : ""
        }}
        className="account-type account-type-vendor"
        onClick={() => {
          setAccountType("vendor");
        }}
      >
        Vendor
      </div>
      {/* <div className="wall"></div> */}
      <div
        style={{
          fontWeight: accountType === "user" ? "bold" : "normal",
          color: accountType === "user" ? "white" : "black",
          backgroundColor: accountType === "user" ? "#4285f4" : ""
        }}
        className="account-type account-type-user"
        onClick={() => {
          setAccountType("user");
        }}
      >
        User
      </div>
    </div>
  );
}

export default AccountTypeBar;
