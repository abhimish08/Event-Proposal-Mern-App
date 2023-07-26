import React, { useState } from "react";
import "../../styles/Home/Register.css";

function Register({
  nameRef,
  emailRef,
  contactRef,
  passwordRef,
  confirmPasswordRef,
}) {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="enter-details">
      <div className="sign-form-header">Register your Account</div>
      <div>
        <input ref={nameRef} placeholder="Name" />
      </div>
      <div>
        <input ref={emailRef} placeholder="Email" type="email" />
      </div>
      <div>
        <input ref={contactRef} placeholder="Contact" />
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
      <div className="password">
        <input
          type={showConfirm ? "text" : "password"}
          ref={confirmPasswordRef}
          placeholder="Confirm Password"
        />
        <i
          onClick={() => {
            setShowConfirm((showConfirm) => !showConfirm);
          }}
          class="fa-solid fa-eye"
        ></i>
      </div>
    </div>
  );
}

export default Register;
