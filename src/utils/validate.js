import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const validation = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid)
    return toast("Email is not valid", {
      position: "top-center",
      type: "error",
      theme: "dark",
      autoClose: 3000,
    });
  if (!isPasswordValid)
    return toast("Password is not valid", {
      position: "top-center",
      type: "error",
      theme: "dark",
      autoClose: 3000,
    });

  return null;
};
