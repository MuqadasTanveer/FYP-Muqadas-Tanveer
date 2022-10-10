import "./CustomCard.css";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import ChatPopup from "../ChatPopup/ChatPopup";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import { getRating } from "../../api";

function CustomCard({
  counsellorsId,
  counsellorsName,
  counsellorsEmail,
  counsellorsPhoneNumber,
  counsellorsLicenseNumber,
  counsellorsQualification,
  counsellorsExperience,
  counsellorsTimeFrom,
  counsellorsTimeTo,
  counsellorsImage,
  counsellorsCountry,
  counsellorsHourlyRate,
  counsellorsDomain,
  counsellorsPassword,
  counsellorsCreatedAt,
  counsellorsUpdatedAt,
}) {
  const [modalShow, setModalShow] = useState(false);
  const [rating, setRating] = useState("");
  const { handleChange } = useAppContext();

  useEffect(() => {
    const fetchCounsellorRating = async (id) => {
      try {
        const { data } = await getRating(id);
        // console.log(data.length);
        const fetchedRating = data.reduce((total, rating) => {
          total += Number(rating.rating);

          return total;
        }, 0);

        if (fetchedRating === 0) return;
        // console.log(fetchedRating);
        ////////////////////// sum of rating / max rating  / number of user has given / max rating
        const ratingAverage = (fetchedRating / 5 / data.length) * 5;

        setRating(ratingAverage.toFixed(1));
      } catch (error) {
        console.log(error);
      }
    };
    fetchCounsellorRating(counsellorsId);
  }, [counsellorsId]);

  // Here we refer counselor ID in global state
  // then send it with appointment form
  const counsellorDataHandler = () => {
    handleChange({ name: "counselorReferId", value: counsellorsId });
    handleChange({ name: "availabilityTimeFrom", value: counsellorsTimeFrom });
    handleChange({ name: "availabilityTimeTo", value: counsellorsTimeTo });
    handleChange({
      name: "hourlyRate",
      value: counsellorsHourlyRate,
    });
  };

  const Row = ({ name, value }) => {
    return (
      <div className="mt-3">
        <span className="fw-bold">{name}</span>:{" "}
        <span className="fw-bold text-black">{value}</span>
      </div>
    );
  };

  /////////////////
  // Model Handler
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {counsellorsName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="service-block">
            <div className="d-flex flex-column flex-sm-row ">
              <img src={counsellorsImage} alt="" className="mb-2 modelImg " />
              <div className="counselorInfo">
                <h3>Counselor Info</h3>
                <Row name="Counselor Name" value={counsellorsName} />
                <Row name="Qualifications" value={counsellorsQualification} />
                <Row name="Domain" value={counsellorsDomain} />
                <Row name="Hourly Rate" value={`${counsellorsHourlyRate} $`} />
                <Row name="Starting Time" value={counsellorsTimeFrom} />
                <Row name="Ending Time" value={counsellorsTimeTo} />
                <Row name="Country" value={counsellorsCountry} />
              </div>
            </div>
            {/* <p>{description}</p> */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="light"
            style={{ background: "skyblue", color: "white" }}
            onClick={props.onHide}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <Card
      className="col-lg-4 col-md-6 col-sm-4 my-4 mx-4"
      style={{ width: "18rem" }}
    >
      <Card.Body>
        <img src={counsellorsImage} className="cardImg mt-2 mb-2" alt="" />
        {rating && (
          <div className="ratingIcon d-flex ">
            {rating}/5{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="skyBlue"
              className="bi bi-star-fill ms-2"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </div>
        )}
        <Card.Title>{counsellorsName}</Card.Title>
        <Row name="Qualification" value={counsellorsQualification} />
        <Row name="Domain" value={counsellorsDomain} />
        <Row name="Experience" value={counsellorsExperience} />

        {/* <p>{description.slice(0, 50)}...</p> */}
        <div className="d-flex flex-column  mt-2">
          <Link to={`/appointment-form`} className="text-white mb-2">
            <Button
              className="btn btn-round-full fs-1"
              onClick={counsellorDataHandler}
            >
              Get Appointment
            </Button>
          </Link>
          {/* <ChatPopup
            buttonName="Chat"
            // counselorImg={counselorImg}
            docName={counsellorsName}
          /> */}

          <div>
            <Button
              variant="outline-info"
              className="btn-icon btn-round-full my-2"
              onClick={() => setModalShow(true)}
            >
              Read More
            </Button>
          </div>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
