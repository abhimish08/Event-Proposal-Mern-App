import axios from "axios";

const register_api =
  "https://event-proposal-backend-k9e3.onrender.com/eventapp/api/v1/account/register";

const register = async (
  accountType,
  name,
  email,
  contact,
  password,
  navigate,
  clearRegisterForm,
  setDefaultView,
  setLoading,
  toastSuccess,
  toastError
) => {
  try {
    const res = await axios.post(register_api, {
      account_type: accountType.toUpperCase(),
      name,
      email,
      password,
      contact,
    });
    toastSuccess("Registered successfully");
    setLoading(false);
    clearRegisterForm();
    setDefaultView();
  } catch (error) {
    toastError(error.response.data.message);
    setLoading(false);
  }
};

export default register;
