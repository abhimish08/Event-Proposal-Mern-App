import React, { useRef, useState } from "react";
import "../../styles/Home/Sign.css";
import Login from "./Login";
import Register from "./Register";
import AccountTypeBar from "./AccountTypeBar";
import ButtonBar from "./ButtonBar";

function Sign() {
  const [accountType, setAccountType] = useState("vendor");
  const [view, setView] = useState("login");
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const contactRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  function setDefaultView() {
    setAccountType("vendor");
    setView("login");
  }

  return (
    <div className="sign-container">
      <AccountTypeBar
        accountType={accountType}
        setAccountType={setAccountType}
      />
      {view === "login" ? (
        <Login usernameRef={usernameRef} passwordRef={passwordRef} />
      ) : (
        <Register
          nameRef={nameRef}
          emailRef={emailRef}
          contactRef={contactRef}
          passwordRef={passwordRef}
          confirmPasswordRef={confirmPasswordRef}
        />
      )}
      <ButtonBar
        accountType={accountType}
        nameRef={nameRef}
        emailRef={emailRef}
        contactRef={contactRef}
        usernameRef={usernameRef}
        passwordRef={passwordRef}
        confirmPasswordRef={confirmPasswordRef}
        view={view}
        setView={setView}
        setDefaultView={setDefaultView}
      />
    </div>
  );
}

export default Sign;
