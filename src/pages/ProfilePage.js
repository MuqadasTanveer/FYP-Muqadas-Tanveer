import { Fragment, useState, useEffect, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useAppContext } from "../context/appContext";
import "./ProfilePage.css";
// import appointmentData from "../util/data/appointmentData.json";
import AppointmentDetailCard from "../components/Card/AppointmentDetailCard";
import { Link } from "react-router-dom";
import {
  getAppointmentById,
  getCounseleeById,
  getCounsellorById,
} from "../api";

const ProfilePage = () => {
  const [modalShow, setModalShow] = useState(false);
  const [isCounselor, setIsCounselor] = useState(false);
  const [fetchedCommingAppoitmentData, setFetchedCommingAppoitmentData] =
    useState([]);
  const [fetchedHistoryAppoitmentData, setFetchedHistoryAppoitmentData] =
    useState([]);

  const {
    counseleeEmail,
    counseleeImage,
    counseleeName,
    counsellorsEmail,
    counsellorsImage,
    counsellorsName,
    type,
    setEditProfileTrue,
    id,
    counsellorsId,
    handleError,
    userAuthenticated,
  } = useAppContext();

  /////////////////////////
  //// Date Now locally
  const tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
  const localISOTime = new Date(Date.now() - tzoffset)
    .toISOString()
    .slice(0, 13);

  useEffect(() => {
    const getAppointmentData = async (id) => {
      try {
        let response;
        if (type === "Counselor") {
          response = await getAppointmentById(
            `GetAppointmentByCounsellorId?counsellorId=${id}`
          );
          // console.log(response);
        } else {
          response = await getAppointmentById(
            `GetAppointmentByCounselleeId?counselleeId=${id}`
          );
        }

        const { data } = response;

        // console.log(data);
        const getLatestData = data.filter((d) => d.date >= localISOTime);
        setFetchedCommingAppoitmentData(getLatestData);
        const getOldData = data.filter((d) => d.date < localISOTime);
        setFetchedHistoryAppoitmentData(getOldData);
        // console.log(getLatestData);
        // console.log(getOldData);
      } catch (error) {
        console.log(error);
        console.log(error.response.data);
        handleError(error.response.data);
      }
    };
    getAppointmentData(id);
  }, [id]);

  useEffect(() => {
    if (type === "Counselor") {
      setIsCounselor(true);
    }
    if (type === "Counselee") {
      setIsCounselor(false);
    }
  }, [type]);

  const getProfile = useCallback(async () => {
    try {
      if (type === "Counselor") {
        // console.log(counsellorsId);
        // console.log(id);
        const { data } = await getCounsellorById(id || counsellorsId);
        // console.log(data[0]);
        userAuthenticated(data[0]);
        // localStorage.setItem("profile", JSON.stringify(data[0]));
        handleError("");
      } else {
        const { data } = await getCounseleeById(id);
        // console.log(data);
        // console.log(data[0]);
        userAuthenticated(data[0]);
        handleError("");
      }
    } catch (error) {
      // console.log(err);
      console.log(error.response.data);
      handleError(error.response.data);
    }
  }, [id, type, counsellorsId]);
  useEffect(() => {
    getProfile();
  }, [getProfile]);

  const Row = ({ name, value }) => {
    return (
      <div className="mt-3">
        <span className="fw-bold">{name}</span>:{" "}
        <span className="fw-bold text-black">{value}</span>
      </div>
    );
  };

  return (
    <Fragment>
      {/* //////////////////// */}
      {/* Profile */}
      <section className="page-title bg-2">
        <div className="overlay"></div>
        <div className="container content">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center ">
                <span className="text-white">About You</span>
                <h1 className="text-capitalize mb-5 text-lg text-white">
                  Profile
                </h1>
              </div>

              {isCounselor && (
                <Link to={`/counselor-form`} className="text-white mb-2">
                  <Button
                    className="btn btn-round-full fs-1"
                    onClick={() => setEditProfileTrue()}
                  >
                    Edit profile
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="my-5 profile-content ">
        <div className="profile-personal">
          <h3>{isCounselor ? "Counselor Detail" : "Counselee Detail"}</h3>
          {isCounselor && (
            <img
              src={isCounselor ? counsellorsImage : counseleeImage}
              className="img-fluid  btn-round-full mt-2"
              style={{ width: "100px", height: "100px" }}
              alt=""
            />
          )}
          <Row
            name="User Name"
            value={isCounselor ? counsellorsName : counseleeName}
          />
          <Row
            name="User Email"
            value={isCounselor ? counsellorsEmail : counseleeEmail}
          />
        </div>
        <div
          className="profile-info "
          style={{
            maxHeight: "600px",
            overflow: "auto",
            padding: "0px 30px",
            overflowX: "hidden",
            scrollBehavior: "auto",
          }}
        >
          {fetchedCommingAppoitmentData.length > 0 && (
            <div>
              <h3 className="mt-4 mt-sm-0">Appointment Detail</h3>
              <div className="mt-4">
                {fetchedCommingAppoitmentData.map((appointmentData) => (
                  <AppointmentDetailCard
                    key={appointmentData.id}
                    {...appointmentData}
                    isCounselor={isCounselor}
                    localISOTime={localISOTime}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="history text-center my-5">
        <Button variant="light" onClick={() => setModalShow(true)}>
          Show History
        </Button>

        {modalShow && (
          <Modal
            show
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body>
              <h2 className="mt-3 mb-4"> Appointment History</h2>
              {fetchedHistoryAppoitmentData &&
                fetchedHistoryAppoitmentData.map((data) => {
                  return (
                    <div key={data.id} className="history-card">
                      <h6>
                        {isCounselor ? "Counselee ID" : "Counsellor Id"} :{" "}
                        {isCounselor ? data.counselee_Id : data.counsellorsId}
                      </h6>
                      <h6>Appointment ID : {data.id}</h6>
                      <p> Date : {data.date}</p>
                    </div>
                  );
                })}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="light" onClick={() => setModalShow(false)}>
                Close History
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </Fragment>
  );
};

export default ProfilePage;
