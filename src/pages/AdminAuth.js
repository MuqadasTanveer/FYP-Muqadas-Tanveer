import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormRow from "../components/Form/FormRow/FormRow";
import { useAppContext } from "../context/appContext";
import "./Auth.css";

import { login } from "../api";

const Auth = () => {
  const {
    userAuthenticated,
    handleError,
    error,
    handleSuccess,
    successMessage,
  } = useAppContext();
  const navigate = useNavigate();

  const initialState = {
    email: "",
    password: "",
  };
  const [values, setValues] = useState(initialState);

  const localHandleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = values;

    try {
      const { data } = await login(`Login?email=${email}&password=${password}`);
      // console.log(data);

      localStorage.setItem("profile", JSON.stringify({ admin: data }));

      handleError("");
      handleSuccess(data);

      setTimeout(() => {
        userAuthenticated({ isAdmin: true });
        handleSuccess("");
        // Redirect
        navigate("/dashboard");
      }, 1000);
    } catch (err) {
      // console.log(err);
      const { errors } = err.response.data;
      let error;
      if (errors) {
        error = Object.values(errors).toString();
      } else {
        error = err.response.data.toString();
      }
      handleError(error);
    }
  };

  return (
    <Fragment>
      <div className="auth-form">
        <form className="form" onSubmit={onSubmit}>
          <h3>Admin Log In</h3>

          <FormRow
            type="email"
            name="email"
            handleChange={localHandleChange}
            label="Email address"
          />
          <FormRow
            type="password"
            name="password"
            handleChange={localHandleChange}
            label="Enter password"
          />

          {error && <p className="text-danger">{error}</p>}
          {successMessage && <p className="text-info">{successMessage}</p>}
          {/* ////////////////////////////// */}
          {/*  Signup or Login Handler */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Log in
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Auth;
