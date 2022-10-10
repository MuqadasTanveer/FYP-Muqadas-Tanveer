import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import "./TopHead.css";

const TopHead = () => {
  const { isLoggedIn, logOutUser, isAdmin } = useAppContext();
  return (
    <header>
      {/* top head */}
      <div className="header-top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <ul className="top-bar-info list-inline-item pl-0 mb-0">
                <li className="list-inline-item">
                  <a href="mailto:support@gmail.com">
                    <svg
                      className="me-2 bi bi-envelope"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                    support@support.com
                  </a>
                </li>
                <li className="list-inline-item ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-building me-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                    />
                    <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                  </svg>
                  Address B#341/A, Islamabad, Pakistan
                </li>
              </ul>
            </div>
            <div className="col-lg-4 ms-auto callNow">
              <div className="text-lg-right top-right-bar mt-lg-0 mx-4">
                <a href="tel:+23-345-67890">
                  <span>Call Now : </span>
                  <span className="h4">051-0000-000</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand className="logo">
            <Link to="/">
              <img
                src="https://www.drupal.org/files/styles/grid-3-2x/public/project-images/medical.png?itok=rLaTqW4z"
                alt=""
                className="img-fluid logoImg"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="ms-auto menu"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="ms-lg-auto text-center">
              <Nav className="me-auto">
                {isAdmin && (
                  <Nav.Link as={Link} to="/dashboard">
                    Dashboard
                  </Nav.Link>
                )}
                {isAdmin && (
                  <Nav.Link as={Link} to="/contactUsAdmin">
                    Contact Us
                  </Nav.Link>
                )}

                {!isAdmin && (
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                )}
                {!isAdmin && (
                  <Nav.Link as={Link} to="/services">
                    Services
                  </Nav.Link>
                )}
                {!isAdmin && (
                  <Nav.Link as={Link} to="/counselors">
                    Counselors
                  </Nav.Link>
                )}

                {!isAdmin && (
                  <Nav.Link as={Link} to="/contact">
                    Contact us
                  </Nav.Link>
                )}
                {!isAdmin && (
                  <Nav.Link as={Link} to="/about">
                    About us
                  </Nav.Link>
                )}
                {!isLoggedIn && (
                  <Nav.Link as={Link} to="/auth">
                    Sign up &#47; Log in
                  </Nav.Link>
                )}
                {/* {!isLoggedIn && (
                  <Nav.Link as={Link} to="/admin-auth">
                    Admin Panel
                  </Nav.Link>
                )} */}
                {isLoggedIn && !isAdmin && (
                  <Nav.Link as={Link} to="/profile-page">
                    Profile
                  </Nav.Link>
                )}
                {isLoggedIn && (
                  <Nav.Link
                    onClick={() => {
                      logOutUser();
                    }}
                  >
                    Log Out
                  </Nav.Link>
                )}
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default TopHead;
