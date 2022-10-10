import { useState, useEffect, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import { useAppContext } from "../../context/appContext";
import "./AppointmentDetailCard.css";
import {
  dellAppointmentbyId,
  getAppointmentCounsellorDetail,
  getCounseleeById,
} from "../../api";

const AppointmentDetailCard = ({
  counsellorsId,
  counselee_Id,
  date,
  id,
  message,
  isCounselor,
  localISOTime,
}) => {
  const [showModel, setShowModel] = useState(false);
  const [IsTodayMeet, setIsTodayMeet] = useState(false);
  const [fetchedAppoitmentDetail, setFetchedAppoitmentDetail] = useState([]);
  const navigate = useNavigate();
  const { handleChange, handleError } = useAppContext();

  const deleteAppintmentHandler = async (id) => {
    const { data } = await dellAppointmentbyId(id);
    // console.log(data);
    navigate("/counselors");
  };

  useEffect(() => {
    const getAppointmentDetail = async (id) => {
      try {
        let response;
        if (isCounselor) {
          response = await getCounseleeById(id);
        } else {
          response = await getAppointmentCounsellorDetail(id);
        }
        const { data } = response;
        setFetchedAppoitmentDetail(data[0]);
        // console.log(data);
      } catch (error) {
        console.log(error);
        // console.log(error.response.data);
        handleError(error.response.data);
      }
    };
    if (isCounselor) {
      getAppointmentDetail(counselee_Id);
    } else {
      getAppointmentDetail(counsellorsId);
    }
  }, [counsellorsId, counselee_Id, isCounselor, handleError]);

  // ///////////////
  //// function to check is today meeting
  useEffect(() => {
    if (localISOTime === date.slice(0, 13)) return setIsTodayMeet(true);
  }, [date]);

  const handleCloseModel = () => setShowModel(false);
  const handleShowModel = () => setShowModel(true);

  const meetingHandler = () => {
    handleChange({
      name: "meetingCounsellor",
      value: fetchedAppoitmentDetail.name,
    });
    handleChange({
      name: "meetingEmail",
      value: fetchedAppoitmentDetail.email,
    });
    navigate("/video-meeting");
  };

  return (
    <Fragment>
      <div className="appointmentDetailCard">
        {IsTodayMeet && !isCounselor && (
          <div className="active-counselee">
            <p
              onClick={meetingHandler}
              style={{
                cursor: "pointer",
              }}
            >
              Today, Click to Start
            </p>
          </div>
        )}
        {IsTodayMeet && isCounselor && (
          <div className="active-counselee">
            <p>Today, Check your Gmail</p>
          </div>
        )}
        <img
          src={`https://dummyimage.com/400x400/2be3e0/595959&text=${
            isCounselor
              ? fetchedAppoitmentDetail?.counseleeName?.slice(0, 1)
              : fetchedAppoitmentDetail?.name?.slice(0, 1)
          }`}
          alt=""
          style={{ width: "50px", height: "100%", borderRadius: "50%" }}
        />
        <div className="mx-2">
          <h6>
            {isCounselor
              ? fetchedAppoitmentDetail.counseleeName
              : fetchedAppoitmentDetail.name}
          </h6>
          <h6>{date}</h6>
          {!isCounselor && (
            <h6>Domain :{fetchedAppoitmentDetail?.domain}</h6>
          )}{" "}
          <p>{message.slice(0, 100)}</p>
        </div>
      </div>
      <div className="ms-2 "></div>
      {!isCounselor && (
        <div className="mb-5">
          <Button
            variant="primary"
            className="btn btn-round-full fs-1 bg-danger"
            onClick={handleShowModel}
          >
            Cancel Appointment
          </Button>

          <Modal show={showModel} onHide={handleCloseModel}>
            <Modal.Header closeButton>
              <Modal.Title>Appointment Cancellation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className="text-danger">
                Are you Sure ? You want to cancel this Appointment {id}
              </p>{" "}
            </Modal.Body>
            <Modal.Footer>
              <div className="d-flex">
                <Button
                  variant="info"
                  className="btn-round-full fs-1 me-2"
                  onClick={handleCloseModel}
                >
                  Cancel
                </Button>
                <Button
                  variant="danger"
                  className="btn-round-full fs-1"
                  onClick={() => deleteAppintmentHandler(id)}
                >
                  Confirm
                </Button>
              </div>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </Fragment>
  );
};

export default AppointmentDetailCard;
