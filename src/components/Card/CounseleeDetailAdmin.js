import "./CounseleeDetailAdmin.css";

import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { delCounseleeById } from "../../api";
import { useNavigate } from "react-router-dom";

const CounseleeDetailAdmin = ({
  counseleeId,
  counseleeName,
  counseleeEmail,
  counseleePhoneNumber,
  counseleeImage,
}) => {
  const [delShowModel, setDelShowModel] = useState(false);
  const navigate = useNavigate();

  const handleCloseDelModel = () => setDelShowModel(false);
  const handleShowDelModel = () => setDelShowModel(true);

  const deleteCounseleeHandler = async (id) => {
    const { data } = await delCounseleeById(id);
    // console.log(data);
    navigate("/");
  };

  return (
    <div className="my-4 counselee-admin">
      <div className="Counselee-admin-content">
        <img
          src={`https://dummyimage.com/50x50/2be3e0/595959&text=${counseleeName?.slice(
            0,
            1
          )}`}
          alt=""
          style={{ borderRadius: "50%" }}
          className="mb-2 modelImg "
        />
      </div>
      <div>
        <div>
          <h6 className="ms-2">{counseleeName}</h6>
          <h6 className="ms-2">{counseleeEmail}</h6>
          <h6 className="ms-2">{counseleePhoneNumber}</h6>
        </div>
        {/* Delete Button */}
        <Button
          variant="outline-danger"
          className="btn-round-full"
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
              Are you Sure ? You want to Delete this Counselee{" : "}
              {counseleeName}
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
                onClick={() => deleteCounseleeHandler(counseleeId)}
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

export default CounseleeDetailAdmin;
