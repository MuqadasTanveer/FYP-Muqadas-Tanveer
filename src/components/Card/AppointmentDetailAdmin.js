import { useState } from "react";

import { dellAppointmentbyId } from "../../api";
import { useNavigate } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./AppointmentDetailAdmin.css";

const AppointmentDetailAdmin = ({
  id,
  counselee_Id,
  counselee_Name,
  counsellors_Id,
  counsellors_Name,
  date,
  message,
  payment,
}) => {
  const [delShowModel, setDelShowModel] = useState(false);
  const handleCloseDelModel = () => setDelShowModel(false);
  const handleShowDelModel = () => setDelShowModel(true);
  const navigate = useNavigate();

  const deleteCounseleeHandler = async (id) => {
    const { data } = await dellAppointmentbyId(id);
    console.log(data);
    navigate("/");
  };

  const Row = ({ name, value }) => {
    return (
      <div className="mt-1">
        <span className="fw-bold">{name}</span>:{" "}
        <span className="fw-bold text-black">{value}</span>
      </div>
    );
  };
  return (
    <div className="appointmentAdmin">
      <Row name="Appointment ID" value={id} />
      <Row name="Counselee Name" value={counselee_Name} />
      <Row name="Counselee Id" value={counselee_Id} />
      <Row name="Counsellor Name" value={counsellors_Name} />
      <Row name="Counsellor Id" value={counsellors_Id} />
      <Row name="Appointment Date" value={date} />
      <Row name="Message" value={message} />
      {/* Delete Button */}
      <Button
        variant="outline-danger"
        className="btn-round mt-2"
        onClick={handleShowDelModel}
      >
        Delete
      </Button>
      <Modal show={delShowModel} onHide={handleCloseDelModel}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Counselee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-danger">
            Are you Sure ? You want to Delete this Appointment{" : "}
            {counselee_Name}
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
              onClick={() => deleteCounseleeHandler(id)}
            >
              Confirm
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AppointmentDetailAdmin;
