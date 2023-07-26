import React, { useEffect, useState } from "react";
import "../../styles/Home/Login.css";

function Login({ usernameRef, passwordRef }) {
  const [show, setShow] = useState(false);
  return (
    <div className="enter-details">
      <div className="sign-form-header">Login to your Account</div>
      <div>
        <input ref={usernameRef} placeholder="Phone / Email" />
      </div>
      <div className="password">
        <input
          type={show ? "text" : "password"}
          ref={passwordRef}
          placeholder="Password"
        />
        <i
          onClick={() => {
            setShow((show) => !show);
          }}
          class="fa-solid fa-eye"
        ></i>
      </div>
    </div>
  );
}

export default Login;
