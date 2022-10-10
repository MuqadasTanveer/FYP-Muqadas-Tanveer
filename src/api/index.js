import axios from "axios";

const url = "http://telecounseling.somee.com/api/";

const api = axios.create({
  baseURL: url,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

///////////////
////// Authentication Routes
export const login = async (formValues) => api.get(formValues);
export const signup = async (formValues) =>
  api.post("Login/SignUp", formValues);

//////////////////////
////// Counsellor Routes
export const registerCounsellor = async (formValues) =>
  api.post("Counsellors/PostCounsellors", formValues);
export const getAllCounsellors = async (formValues) =>
  api.get("Counsellors", formValues);
export const getCounsellorById = async (id) => api.get(`Counsellors/${id}`);
export const editCounsellors = async (id, formValues) => {
  // console.log(id);
  return api.put(`Counsellors/${id}`, formValues);
};
export const delCounsellorById = async (id) => api.delete(`Counsellors/${id}`);

//////////////////////
////// Counselee Routes
export const registerCounselees = async (formValues) =>
  api.post("Counselees", formValues);
export const getAllCounselees = async (formValues) =>
  api.get("Counselees", formValues);
export const getCounseleeById = async (id) => api.get(`Counselees/${id}`);
export const editCounselees = async (id, formValues) =>
  api.put(`Counselees/${id}`, formValues);
export const delCounseleeById = async (id) => api.delete(`Counselees/${id}`);

//////////////////////
////// Appointment Routes
export const getAllAppointment = async () =>
  api.get(`BookAppointment/GetAllAppointment`);
export const bookAppointment = async (formValues) =>
  api.post("BookAppointment", formValues);
export const getAppointmentById = async (formValues) =>
  api.get(`BookAppointment/${formValues}`);
export const getAppointmentCounsellorDetail = async (id) =>
  api.get(`BookAppointment/${id}`);
export const dellAppointmentbyId = async (id) =>
  api.delete(`BookAppointment/${id}`);

//////////////////////
//////  Contacts Us
export const getContacts = async () => api.get("Contacts");
export const postcontacts = async (formValues) =>
  api.post("Contacts", formValues);

//////////////////////
////// Rating API
export const getRating = async (id) => api.get(`Ratings/${id}`);
export const postRating = async (formValues) => {
  return api.post(`Ratings`, formValues);
};

//////////////////////
////// Email APi
export const sendEmail = async (formValues) => api.post(formValues);
