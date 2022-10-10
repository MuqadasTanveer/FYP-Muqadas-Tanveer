import { Fragment } from "react";
import { useAppContext } from "../../context/appContext";
import FormRow from "./FormRow/FormRow";
import "./CounselorForm.css";
import FileBase64 from "react-file-base64";
import { useNavigate } from "react-router-dom";
import { editCounsellors, registerCounsellor } from "../../api";

const CounselorForm = () => {
  const navigate = useNavigate();

  const {
    id,
    counsellorsId,
    name,
    email,
    phoneNumber,
    licenseNumber,
    qualification,
    domain,
    experience,
    availabilityTimeFrom,
    availabilityTimeTo,
    country,
    avatar,
    hourlyRate,
    password,
    handleChange,
    handleError,
    error,
    handleSuccess,
    successMessage,
    isProfileEdit,
    setEditProfileFalse,
    userAuthenticated,
  } = useAppContext();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  const cancelProfileEdit = () => {
    setEditProfileFalse();
    navigate("/profile-page");
  };

  const imageChangeHandler = (e) => {
    const base64 = e.base64;
    return handleChange({ name: "avatar", value: base64 });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const counsellorData = {
      name,
      email,
      phoneNumber,
      licenseNumber,
      qualification,
      domain,
      experience: +experience,
      timeFrom: availabilityTimeFrom,
      timeTo: availabilityTimeTo,
      country,
      image: avatar,
      hourlyRate: +hourlyRate,
      password,
    };

    // console.log(counsellorData);

    // register further info
    try {
      if (isProfileEdit) {
        // console.log(id);
        // console.log(counsellorsId);
        // console.log(counsellorData);
        const { data } = await editCounsellors(counsellorsId, counsellorData);
        // console.log(data);

        handleSuccess("Counselor Updated");
        userAuthenticated(data);
        setTimeout(() => {
          // Redirect
          navigate("/profile-page");
          handleSuccess("");
          setEditProfileFalse();
        }, 2000);
        handleError("");
      } else {
        const { data } = await registerCounsellor(counsellorData);
        handleError("");
        handleSuccess("Counselor Registered");
        userAuthenticated(data);

        localStorage.setItem("profile", JSON.stringify(data));
        setTimeout(() => {
          // Redirect
          navigate("/profile-page");
          handleSuccess("");
        }, 2000);
      }
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
  };
  return (
    <Fragment>
      <section className="section counselor-container">
        <div className="container counselor-card">
          <div className="row ">
            <div className="col-lg-6  ">
              <div className="appointment-content">
                <img
                  src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-10 mx-auto   col-lg-6 col-md-10 ">
              <div className="appointment-wrap mt-5 mt-lg-0">
                <div className="d-flex  align-items-center">
                  <h2 className="mb-2 title-color">Complete Profile</h2>

                  {avatar && (
                    <img
                      className="ms-4"
                      src={avatar}
                      alt=""
                      style={{ width: "60px", height: "60px" }}
                    />
                  )}
                </div>
                {/* Profile */}
                <div className="col-lg-6 mb-2 profile-input">
                  <div className="form-group ">
                    <label>
                      Select image for profile{" "}
                      <FileBase64
                        required
                        type="file"
                        multiple={false}
                        onDone={imageChangeHandler}
                      />
                    </label>
                  </div>
                </div>
                <form className="appointment-form" onSubmit={submitHandler}>
                  <div className="row">
                    {/* Name */}
                    <div className="col-lg-6 mb-2">
                      <div className="form-group ">
                        <FormRow
                          type="text"
                          name="name"
                          value={name}
                          handleChange={handleInput}
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    {/* Email */}
                    <div className="col-lg-6 mb-2">
                      <div className="form-group ">
                        <FormRow
                          type="email"
                          name="email"
                          value={email}
                          handleChange={handleInput}
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    {/* Password */}
                    <div className="col-lg-6 mb-2">
                      <div className="form-group ">
                        <FormRow
                          type="password"
                          name="password"
                          value={password}
                          handleChange={handleInput}
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    {/* phone number */}
                    <div className="col-lg-6 mb-2">
                      <div className="form-group ">
                        <FormRow
                          type="tel"
                          name="phoneNumber"
                          value={phoneNumber}
                          handleChange={handleInput}
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>

                    {/* Country */}
                    <div className="col-lg-6 mb-2">
                      <div className="form-group ">
                        <FormRow
                          type="text"
                          name="country"
                          value={country}
                          handleChange={handleInput}
                          placeholder="Country..."
                        />
                      </div>
                    </div>

                    {/* licenseNumber */}
                    <div className="col-lg-6 mb-2">
                      <div className="form-group ">
                        <FormRow
                          type="text"
                          name="licenseNumber"
                          value={licenseNumber}
                          handleChange={handleInput}
                          placeholder="license Number"
                        />
                      </div>
                    </div>

                    {/* Qualification */}
                    <div className="col-lg-6 mb-2">
                      <div className="form-group ">
                        <FormRow
                          type="text"
                          name="qualification"
                          value={qualification}
                          handleChange={handleInput}
                          placeholder="Qualification"
                        />
                      </div>
                    </div>

                    {/* Domain */}
                    <div className="col-lg-6 mb-2">
                      <div className="form-group ">
                        <select
                          className="form-control"
                          name="domain"
                          value={domain}
                          onChange={handleInput}
                          placeholder="Domain"
                          required
                        >
                          <option>Choose Domain</option>
                          <option>Education</option>
                          <option>Substance Abuse</option>
                          <option>Cognitive</option>
                          <option>Mental health</option>
                          <option>Child therapy</option>
                        </select>
                      </div>
                    </div>

                    {/* Availability Time From */}
                    <div className="col-lg-6 mb-2">
                      <div className="form-group ">
                        <FormRow
                          type="datetime-local"
                          label="Availability Time From"
                          name="availabilityTimeFrom"
                          value={availabilityTimeFrom}
                          handleChange={handleInput}
                          placeholder="Availability Time From"
                        />
                      </div>
                    </div>
                    {/* Availability Time To */}
                    <div className="col-lg-6 mb-2">
                      <div className="form-group ">
                        <FormRow
                          type="datetime-local"
                          label="Availability Time To"
                          name="availabilityTimeTo"
                          value={availabilityTimeTo}
                          handleChange={handleInput}
                          placeholder="Availability Time To"
                        />
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="col-lg-6 mb-2">
                      <div className="form-group ">
                        <FormRow
                          type="number"
                          label="Experience in number"
                          name="experience"
                          value={experience}
                          handleChange={handleInput}
                          placeholder="Experience"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-2">
                      <div className="form-group ">
                        <FormRow
                          type="number"
                          label="Hourly rate in $"
                          name="hourlyRate"
                          value={hourlyRate}
                          handleChange={handleInput}
                          placeholder="Hourly rate..."
                        />
                      </div>
                    </div>
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  {successMessage && (
                    <p className="text-info">{successMessage}</p>
                  )}

                  <button className="btn btn-main btn-round-full">
                    Register Now
                  </button>
                </form>
                {isProfileEdit && (
                  <button
                    onClick={cancelProfileEdit}
                    className="btn btn-round-full mt-2"
                    style={{ background: "skyBlue" }}
                  >
                    Cancel Profile Editing
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CounselorForm;
