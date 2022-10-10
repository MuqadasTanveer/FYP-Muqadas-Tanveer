import React, { createContext, useContext, useReducer } from "react";

const profile = JSON.parse(localStorage.getItem("profile"));

let counselorType;
if (profile?.counsellorsId) {
  counselorType = "Counselor";
}

const initialState = {
  id: profile?.counsellorsId || profile?.id || "",
  counsellorsId: profile?.counsellorsId || profile?.id || "",
  counsellorMeetingID: "",
  counseleeMeetingID: "",
  name: "",
  email: "",
  type: profile ? counselorType || profile?.type : "",
  roleType: "",
  isLoggedIn: profile ? true : false,
  isAdmin: profile?.admin ? true : false,
  phoneNumber: "",
  licenseNumber: "",
  qualification: "",
  domain: "",
  experience: "",
  cardNumber: "",
  expiryDate: "",
  securityCode: "",
  availabilityTimeFrom: "",
  availabilityTimeTo: "",
  avatar: "",
  password: "",
  createdAt: "",
  updatedAt: "",
  message: "",
  hourlyRate: "",
  meetingHour: "",
  meetingEmail: "",
  meetingCounsellor: "",
  country: "",
  appointmentTiming: "",
  counselorName: "",
  error: "",
  successMessage: "",
  counselorReferId: "",
  isActive: false,
  isProfileEdit: false,
  appointmentDelId: "",
  paymentDone: false,
};
const AppContext = createContext(initialState);
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN_USER":
      return { ...state, isLoggedIn: true, ...payload };
    case "LOGOUT_USER":
      localStorage.clear("profile");
      return { isLoggedIn: false, name: "", email: "", type: "" };
    case "HANDLE_CHANGE":
      return {
        ...state,
        [payload.name]: payload.value,
      };

    case "HANDLE_ERROR":
      return {
        ...state,
        error: payload,
      };
    case "HANDLE_SUCCESS":
      return {
        ...state,
        successMessage: payload,
      };
    case "SET_EDIT_PROFILE_TRUE":
      return {
        ...state,
        isProfileEdit: true,
      };
    case "SET_EDIT_PROFILE_FALSE":
      return {
        ...state,
        isProfileEdit: false,
      };

    default:
      return state;
  }
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const userAuthenticated = (payload) => {
    dispatch({ type: "LOGIN_USER", payload });
  };

  const logOutUser = () => {
    dispatch({ type: "LOGOUT_USER" });
  };
  const handleChange = ({ name, value }) => {
    dispatch({ type: "HANDLE_CHANGE", payload: { name, value } });
  };
  const handleError = (value) => {
    dispatch({ type: "HANDLE_ERROR", payload: value });
  };
  const handleSuccess = (value) => {
    dispatch({ type: "HANDLE_SUCCESS", payload: value });
  };
  const setEditProfileTrue = () => {
    dispatch({ type: "SET_EDIT_PROFILE_TRUE" });
  };
  const setEditProfileFalse = () => {
    dispatch({ type: "SET_EDIT_PROFILE_FALSE" });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        userAuthenticated,
        logOutUser,
        handleChange,
        handleError,
        handleSuccess,
        setEditProfileTrue,
        setEditProfileFalse,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => {
  return useContext(AppContext);
};
export { useAppContext, AppProvider };
