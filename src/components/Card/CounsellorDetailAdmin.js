import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "./CounsellorDetailAdmin.css";
import { delCounsellorById } from "../../api";
import { useNavigate } from "react-router-dom";

const CounsellorDetailAdmin = ({
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
}) => {
  const [modalShow, setModalShow] = useState(false);
  const [delShowModel, setDelShowModel] = useState(false);
  const navigate = useNavigate();

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
                <Row name="Email" value={counsellorsEmail} />
                <Row name="Phone Number" value={counsellorsPhoneNumber} />
                <Row name="License Number" value={counsellorsLicenseNumber} />
                <Row name="Qualifications" value={counsellorsQualification} />
                <Row name="Domain" value={counsellorsDomain} />
                <Row name="Hourly Rate" value={`${counsellorsHourlyRate} $`} />
                <Row name="Starting Time" value={counsellorsTimeFrom} />
                <Row name="Ending Time" value={counsellorsTimeTo} />
                <Row name="Country" value={counsellorsCountry} />
                <Row name="Experience" value={counsellorsExperience} />
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

  const handleCloseDelModel = () => setDelShowModel(false);
  const handleShowDelModel = () => setDelShowModel(true);

  const deleteCounsellorHandler = async (id) => {
    const { data } = await delCounsellorById(id);
    // console.log(data);
    navigate("/");
  };

  return (
    <div className="my-4 counsellor-admin">
      <div className="counsellor-admin-content">
        <img
          src={counsellorsImage}
          alt={counsellorsName}
          className="counsellor-admin-image"
        />
        <div>
          <h6 className="ms-2">{counsellorsName}</h6>
          <p className="ms-2">{counsellorsDomain}</p>
        </div>
      </div>
      <div className="">
        <Button
          variant="outline-info"
          className="btn-round-full"
          onClick={() => setModalShow(true)}
        >
          View More
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

        {/* Delete Button */}

        <Button
          variant="outline-danger"
          className="btn-round-full ms-2"
          onClick={handleShowDelModel}
        >
          Delete
        </Button>

        <Modal show={delShowModel} onHide={handleCloseDelModel}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Counsellor</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="text-danger">
              Are you Sure ? You want to Delete this Counsellor{" : "}
              {counsellorsName}
            </p>{" "}
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex">
              <Button
                variant="info"
                className="btn-round-full fs-1 me-2"
                onClick={handleCloseDelModel}
              >
                Cancel
              </Button>
              <Button
                variant="danger"
                className="btn-round-full fs-1"
                onClick={() => deleteCounsellorHandler(counsellorsId)}
              >
                Confirm
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default CounsellorDetailAdmin;
