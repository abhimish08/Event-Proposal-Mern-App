import React, { useContext, useState } from "react";

const AccountContext = React.createContext();

export function useAccountInfo() {
  return useContext(AccountContext);
}

export function AccountProvider({ children }) {
  const [token, setToken] = useState("");
  const [accountType, setAccountType] = useState("");
  const [accountDetails, setAccountDetails] = useState("");

  return (
    <AccountContext.Provider
      value={{
        token,
        changeToken: (new_token) => {
          setToken(new_token);
        },
        accountType,
        changeAccountType: (new_account_type) => {
          setAccountType(new_account_type);
        },
        accountDetails,
        changeAccountDetails: (new_details) => {
          setAccountDetails({ ...new_details });
        },
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}
