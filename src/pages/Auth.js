import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormRow from "../components/Form/FormRow/FormRow";
import { useAppContext } from "../context/appContext";
import "./Auth.css";
// import { v4 } from "uuid";
import { login, signup } from "../api";

const Auth = () => {
  const {
    userAuthenticated,
    handleError,
    error,
    handleSuccess,
    successMessage,
    handleChange,
  } = useAppContext();
  const navigate = useNavigate();

  const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: false,
    type: "",
    createdAt: new Date().toGMTString(),
  };
  const [values, setValues] = useState(initialState);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const localHandleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, isMember, type, createdAt } = values;

    let roleType;
    if (type === "Counselee") {
      roleType = 1;
    } else {
      roleType = 2;
    }
    // ///////////////////////
    ////////// SignUP section
    if (!isMember) {
      const userData = {
        name,
        email,
        password,
        type,
        roleType,
      };

      // Signup Counsellor
      if (values.type === "Counselor") {
        // Save value in Context
        handleChange({ name: "name", value: name });
        handleChange({ name: "email", value: email });
        handleChange({ name: "password", value: password });
        handleChange({ name: "type", value: type });
        handleChange({ name: "roleType", value: roleType });

        // Get Counselor more data like Experience , Age , etc then send backend Request
        navigate("/counselor-form");
      }
      // Signup Counselee
      else {
        try {
          // send request  signUp section
          const { data } = await signup(userData);

          handleSuccess(data);
          localStorage.setItem(
            "profile",
            JSON.stringify({ id: data, type, roleType })
          );

          setTimeout(() => {
            userAuthenticated({
              name,
              email,
              type,
              createdAt,
              password,
              id: data,
            });

            handleSuccess("");
            handleError("");
            // Redirect
            navigate("/counselors");
          }, 2000);
        } catch (err) {
          console.log(err);
          const { errors } = err.response.data;
          let error;
          if (errors) {
            error = Object.values(errors).toString();
          } else {
            error = err.response.data;
          }
          handleError(error);
        }
      }

      // ///////////////////////
      ////////// Login section
    } else {
      // fetch request Login section
      try {
        const { data } = await login(
          `Login/?email=${email}&password=${password}&role=${roleType}`
        );

        handleSuccess(data.toString());
        localStorage.setItem(
          "profile",
          JSON.stringify({ id: data, type, roleType })
        );
        handleError("");
        
        setTimeout(() => {
          userAuthenticated({
            name,
            type,
            email,
            createdAt,
            password,
            id: data,
          });
          handleSuccess("");
          // Redirect
          navigate("/profile-page");
        }, 2000);
      } catch (error) {
        console.log(error);
        // console.log(error.response.data.toString());
        handleError(error.response.data.toString());
      }
    }
  };

  return (
    <Fragment>
      <div className="auth-form">
        <form className="form" onSubmit={onSubmit}>
          <h3>{values.isMember ? "Log in" : "Sign up"}</h3>
          {!values.isMember && (
            <FormRow
              type="text"
              name="name"
              handleChange={localHandleChange}
              label="User Name"
            />
          )}
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

          <div className="mb-3">
            <label className="text text-body">Counselor / Counselee</label>
            <div className="mt-0 mb-2">
              <label>
                <input
                  type="radio"
                  value="Counselor"
                  name="type"
                  onChange={localHandleChange}
                  required
                />
                Counselor
              </label>
              <label>
                <input
                  type="radio"
                  className="ms-2"
                  value="Counselee"
                  name="type"
                  onChange={localHandleChange}
                  required
                />
                Counselee
              </label>
            </div>
          </div>
          {error && <p className="text-danger">{error}</p>}
          {successMessage && <p className="text-info">{successMessage}</p>}
          {/* ////////////////////////////// */}
          {/*  Signup or Login Handler */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              {values.isMember ? "Log in" : "Sign up"}
            </button>
          </div>
          <p className="forgot-password text-right">
            {values.isMember ? "New Register" : "Already registered"} &#63;{" "}
            <span onClick={toggleMember} className="text-black" role="button">
              {values.isMember ? "Sign up" : "Log in"}
            </span>
          </p>
        </form>
      </div>
    </Fragment>
  );
};

export default Auth;
