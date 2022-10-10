import React, { Fragment, useState } from "react";
import { postcontacts } from "../api";
import { useNavigate } from "react-router-dom";
import FormRow from "../components/Form/FormRow/FormRow";
import { useAppContext } from "../context/appContext";

import "./Contact.css";

const Contact = () => {
  const { handleError, error, handleSuccess, successMessage } = useAppContext();
  const navigate = useNavigate();
  const initialState = {
    name: "",
    email: "",
    topic: "",
    number: "",
    message: "",
  };
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, email, topic, number, message } = values;

    const userData = {
      name,
      email,
      topic,
      phoneNumber: number,
      message,
    };

    // console.log(userData);
    try {
      const data = await postcontacts(userData);
      handleSuccess("Message Sent Successfully");
      setTimeout(() => {
        navigate("/");
        handleSuccess("");
      }, 2000);
      handleError("");
    } catch (err) {
      // const { errors } = err.response.data;
      // const error = Object.values(errors).toString();
      // handleError(error);
      console.log(err);
    }
  };

  return (
    <Fragment>
      {/* //////////////////// */}
      {/* Contact US */}
      <section className="page-title bg-2">
        <div className="overlay"></div>
        <div className="container content">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center ">
                <span className="text-white">Contact Us</span>
                <h1 className="text-capitalize mb-5 text-lg text-white">
                  Contact Us
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* //////////////////// */}
      {/* contact us */}
      <section className="section contact-info pb-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-block mb-4 mb-lg-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="skyBlue"
                  className="bi bi-headset mb-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                </svg>
                <h5>Call Us</h5>
                +00-000-0000
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-block mb-4 mb-lg-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="skyBlue"
                  className="bi bi-envelope-fill mb-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
                <h5>Email Us</h5>
                contact@mail.com
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="contact-block mb-4 mb-lg-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="skyBlue"
                  className="bi bi-map mb-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
                  />
                </svg>
                <h5>Location</h5>
                Islamabad,Pakistan
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Form */}
      <div className="contact-form-container">
        <div className="contact-form-card">
          {/* /////////////// */}
          {/* Form Title */}
          <div className="d-flex  justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="text-md mb-2">Contact us</h2>
                <div className="divider mx-auto my-4"></div>
                <p className="mx-5">
                  Laboriosam exercitationem molestias beatae eos pariatur,
                  similique, excepturi mollitia sit perferendis maiores ratione
                  aliquam?
                </p>
              </div>
            </div>
          </div>
          {/* /////////////// */}
          {/* Form */}
          <form className="contact-form mb-5" onSubmit={onSubmit}>
            <div className="row">
              <div className="col-lg-6 mb-2">
                <FormRow
                  type="text"
                  name="name"
                  handleChange={handleChange}
                  placeholder="Your Full Name"
                />
              </div>
              <div className="col-lg-6 mb-2">
                <FormRow
                  type="email"
                  name="email"
                  handleChange={handleChange}
                  placeholder="Your Email Address"
                />
              </div>
              <div className="col-lg-6 mb-2">
                <FormRow
                  type="text"
                  name="topic"
                  handleChange={handleChange}
                  placeholder="Your Query Topic"
                />
              </div>
              <div className="col-lg-6 mb-2">
                <FormRow
                  type="text"
                  name="number"
                  handleChange={handleChange}
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="form-group-2 mb-4">
                <textarea
                  name="message"
                  className="form-control"
                  rows="6"
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              {/* {error && <p className="text-danger">{error}</p>} */}
              {successMessage && <p className="text-info">{successMessage}</p>}
              <div className="col-lg-6 mb-2">
                <button className="btn btn-main btn-round-full">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* /////////////////////// */}
      {/* Google Map */}

      <iframe
        className="map"
        title="UOG Sub Campus Rawalpindi"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3706.78756716167!2d73.06599179388544!3d33.64414189647179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df958aa8e2a9e3%3A0x2e874dda3024459!2sUOG%20Sub%20Campus%20Rawalpindi!5e0!3m2!1sen!2s!4v1658909938312!5m2!1sen!2s"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Fragment>
  );
};

export default Contact;
