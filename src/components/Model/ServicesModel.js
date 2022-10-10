import { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ServicesModel = ({ ...data }) => {
  const [modalShow, setModalShow] = useState(false);
  const { img, title, description, listHead, lists } = data;

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div className="service-block">
            <img src={img} alt="" className="img-fluid mb-2" />
            <h4>{title}</h4>
            <p>{description}</p>
            {listHead && <h6>{listHead}:</h6>}
            {lists && lists.map((list, idx) => <li key={idx}>{list}</li>)}
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
    <Fragment>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="service-block mb-5">
          <img src={img} alt="" className="img-fluid" />
          <div className="content">
            <h4 className="mt-4 mb-2  title-color">{title}</h4>
            <p className="mb-4">{description.slice(0, 100)}...</p>
          </div>
          <Button
            variant="light"
            style={{ background: "skyblue", color: "white" }}
            onClick={() => setModalShow(true)}
          >
            Read More
          </Button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ServicesModel;
