import { Fragment, useState, useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import FormRow from "./FormRow/FormRow";
import { useNavigate } from "react-router-dom";

import "./AppointmentForm.css";
import { bookAppointment } from "../../api";

const AppointmentForm = () => {
  const navigate = useNavigate();
  const [appointmentFormSent, setAppointmentFormSent] = useState("");

  const {
    id,
    message,
    handleChange,
    appointmentTiming,
    counselorReferId,
    availabilityTimeFrom,
    availabilityTimeTo,
    hourlyRate,
    meetingHour,
    handleError,
    error,
    isAppointmentEdit,
    appointmentEditHandle,
  } = useAppContext();

  useEffect(() => {
    if (!counselorReferId) {
      navigate("/counselors");
    }
  }, [counselorReferId]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  const cancelEditAppointment = () => {
    appointmentEditHandle("");
    navigate("/profile-page");
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      counsellorsId: counselorReferId,
      date: appointmentTiming,
      message,
      appointmnet_By: id.toString(),
      payment: true,
    };
    // console.log(userData);

    // register further info
    try {
      const { data } = await bookAppointment(userData);
      // console.log(data);
      setAppointmentFormSent("Appointment Booked");
      handleError("");
      setTimeout(() => {
        navigate("/profile-page");
      }, 2000);
    } catch (err) {
      setAppointmentFormSent("");
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
  };
  return (
    <Fragment>
      <section className="section appointment-container">
        <div className="container appointment-card">
          <div className="row  ">
            <div className="col-lg-6">
              <div className="appointment-content">
                <img
                  src="https://images.pexels.com/photos/5699486/pexels-photo-5699486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className=""
                />
                <div className="emergency">
                  <h2 className="text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      className="bi bi-telephone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                    <span> +00 000 0000</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-10 mx-auto   col-lg-6 col-md-10 ">
              <div className="appointment-wrap mt-5 mt-lg-0">
                <h2 className="mb-2 title-color">Book Appointment</h2>
                <p className="mb-4">
                  Add your info to get a video appointment with your choosen
                  counselor
                </p>
                <form className="appointment-form" onSubmit={submitHandler}>
                  <div className="row">
                    {/* //////// */}
                    {/* Appointment Timing */}
                    <div className="col-lg-6 mb-2">
                      <div className="form-group ">
                        <FormRow
                          type="datetime-local"
                          label="Seleted Counsellor Appointment Timing"
                          name="appointmentTiming"
                          value={appointmentTiming}
                          min={availabilityTimeFrom}
                          max={availabilityTimeTo}
                          handleChange={handleInput}
                          placeholder="Appointment Timing"
                        />
                      </div>
                    </div>
                    {/* //////// */}
                    {/* Counsellor Hourly Rate*/}
                    <div className="col-lg-6 mb-2">
                      <div className="form-group ">
                        <FormRow
                          type="number"
                          label={`Counsellor Hourly Rate ${hourlyRate}$ for Per Hour`}
                          name="meetingHour"
                          value={meetingHour}
                          min={1}
                          handleChange={handleInput}
                          placeholder="Please select hour"
                        />
                      </div>
                    </div>

                    {/* //////////////// */}
                    {/* Message*/}
                    <div className="form-group-2 mb-4">
                      <textarea
                        name="message"
                        className="form-control"
                        rows="6"
                        onChange={handleInput}
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  {error && (
                    <div>
                      <p className="text-danger">{error}</p>
                    </div>
                  )}
                  <button className="btn btn-main btn-round-full">
                    Book appointment
                  </button>
                </form>
                {isAppointmentEdit && (
                  <button
                    onClick={cancelEditAppointment}
                    className="btn btn-round-full mt-2"
                    style={{ background: "skyBlue" }}
                  >
                    Cancel Edit
                  </button>
                )}
                {appointmentFormSent && (
                  <div>
                    <h4 className="mt-4 ps-2" style={{ color: "skyBlue" }}>
                      {appointmentFormSent}
                    </h4>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AppointmentForm;
