import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <Fragment>

      {/* /////////////////////// */}
      {/* Banner */}
      <section className="banner">

        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xl-7">
              <div className="block">
                <div className="divider mb-3"></div>
                <span className="text-uppercase text-sm letter-spacing ">
                  Total Mind Health care solution
                </span>
                <h1 className="mb-3 mt-3">
                 get the care you deserve
                </h1>

                <p className="mb-4 pr-5">
                  <b>We know what we are, but know not what we may be.</b>
                </p>
                <div className="btn-container">
                  <Link
                    to="/appointment-form"
                    className="btn btn-main-2 btn-icon btn-round-full"
                  >
                    Make appoinment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /////////////////////// */}
      {/* Features */}

      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="feature-block d-lg-flex">
                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      className="bi bi-person"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                  </div>
                  <span>24 Hours Service</span>
                  <h4 className="mb-3">Online Appoinment</h4>
                  <p className="mb-4">
                   get All time support and attention full care and future goals.
                   Its time to make your life easier or full of freedom 
                  </p>
                  <Link
                    to="/appointment-form"
                    className="btn btn-main btn-round-full"
                  >
                    Make appoinment
                  </Link>
                </div>

                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      className="bi bi-clock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                  </div>
                  <span>24&#47;7 Support</span>
                  <h4 className="mb-3">Online Appoinment</h4>
                  <p className="mb-4">
                    We connect you with the best doctors in Pakistan who are
                    experts in their relevant fields via in-person appointments
                    or video consultations.
                  </p>
                </div>

                <div className="feature-item mb-5 mb-lg-0">
                  <div className="feature-icon mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      className="bi bi-shield-check"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                      <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                  </div>
                  <span>Free Trail</span>
                  <h4 className="mb-3">+051-678-889</h4>
                  <p>
                    You can use our app to instantly get a free trail
                    appointment for your mind health
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* //////////////////// */}
      {/* About  */}
      <section className="section about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-sm-6">
              <div className="about-img">
                {/* <img
                  src="https://media.istockphoto.com/photos/smiling-doctor-listens-to-patients-heart-picture-id1271562576?k=20&m=1271562576&s=612x612&w=0&h=cM0P7rGDFvgtserAbgNAZ89P28nv95aT4IHRcxx4wOs="
                  alt="Hello"
                  className="img-fluid"
                /> */}
                <img
                  src="https://images.pexels.com/photos/4101137/pexels-photo-4101137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Hello"
                  className="img-fluid"
                />
                <img
                  src="https://media.istockphoto.com/videos/professional-female-therapist-in-facemask-checking-lungs-of-old-video-id1310737200?b=1&k=20&m=1310737200&s=640x640&h=fEmzbhVKqtHsotqJ_4ahKhC02lg9kbMUGPG6Di1DWcs="
                  alt=""
                  className="img-fluid mt-4"
                />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="about-img mt-4 mt-lg-0">
                {/* <img
                  src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000"
                  alt=""
                  className="img-fluid"
                /> */}
                {/* https://img.freepik.com/free-photo/woman-with-stethoscope-holding-clipboard_1098-2502.jpg?w=360&t=st=1658811164~exp=1658811764~hmac=d0a7d72efed7f3ea368959439da08f54caec5c295b66c90ab19800b2ed3c9b39 
                    https://img.freepik.com/free-photo/saleswoman-car-showroom-selling-cars_1303-25484.jpg?w=360&t=st=1658810944~exp=1658811544~hmac=9969ffda785c9debce78f215c454c5d8eae4bcccad0a57cfd04396cc6d85fd25*/}
                <img
                  src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?w=360&t=st=1658811135~exp=1658811735~hmac=b1bb7bc5500dfa1993524d03d922fd97f39697a5babf6264ebe62603e92b6829"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-content pl-4 mt-4 mt-lg-0">
                <h2 className="title-color">Mission</h2>
                <p className="mt-4 mb-5">
                  Provide a professional counselling service to the client.
                  Doorstep services on the behalf of technology. Stepwise
                  counselling by one to one session focusing on minor or major
                  future forecast. Help clients to set the goal, remove the
                  hurdles, achieve the goal. One you are here, you are always
                  there on our behalf.
                </p>
                <h2 className="title-color">Vission</h2>
                <p>
                  Acts like a mirror to reflect your inside abilities. We build
                  our clients by putting a missing piece of past resulting in
                  what he/she could be.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* //////////////////// */}
      {/* Stats  */}
      <section className="cta-section ">
        <div className="container">
          <div className="cta position-relative">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <span className="h3">10</span>k
                  <p className="d-flex justify-content-center align-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="white"
                      className="bi bi-emoji-smile me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                    </svg>
                    Happy People
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <span className="h3">500</span>+
                  <p className="d-flex justify-content-center align-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="white"
                      className="bi bi-check-circle me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                    </svg>
                    Surgery Comepleted
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <span className="h3">100</span>+
                  <p className="d-flex justify-content-center align-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="white"
                      className="bi bi-check-circle me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    Expert counselors
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <span className="h3">20</span>
                  <p className="d-flex justify-content-center align-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="white"
                      className="bi bi-check-circle me-2"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                      />
                      <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                    </svg>
                    Worldwide Branch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* //////////////////// */}
      {/* Services  */}
      <section className="section service gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <h2>Award winning counselee care</h2>
                <div className="divider mx-auto my-4"></div>
                <p>
                  Lets know moreel necessitatibus dolor asperiores illum
                  possimus sint voluptates incidunt molestias nostrum
                  laudantium. Maiores porro cumque quaerat.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className=" d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                  <h4 className="mt-3 mb-3">Education Counseling</h4>
                </div>

                <div className="content">
                  <p className="mb-4">
                    Educational Counselling mainly refers to providing
                    assistance and guidance to students in making the right
                    choices in their studies and career.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className=" d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <h4 className="mt-3 mb-3">Substance Abuse counseling</h4>
                </div>
                <div className="content">
                  <p className="mb-4">
                    Substance abuse counselors provide a necessary support
                    system for individuals recovering drug and alcohol issues,
                    and other behavioral issues..
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className=" d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  <h4 className="mt-3 mb-3">Cognitive counseling</h4>
                </div>
                <div className="content">
                  <p className="mb-4">
                    {" "}
                    Generally helps in state of confusion,loss of
                    memory,difficulty recognising people,places or
                    things,changes to mood.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* //////////////////// */}
      {/* Partner  */}
      <section className="section clients">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center">
                <h2>Partners who support us</h2>
                <div className="divider mx-auto my-4"></div>
                <p>
                  Lets know moreel necessitatibus dolor asperiores illum
                  possimus sint voluptates incidunt molestias nostrum
                  laudantium. Maiores porro cumque quaerat.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="row text-center">
            <div className="col-lg-2">
              <h1>On Doc</h1>
            </div>
            <div className="col-lg-2">
              <h1>E-Doc</h1>
            </div>
            <div className="col-lg-2">
              <h1>Al Shifa</h1>
            </div>
            <div className="col-lg-2">
              <h1>Pak Doc</h1>
            </div>
            <div className="col-lg-2">
              <h1>CMH</h1>
            </div>
            <div className="col-lg-2">
              <h1>IDK</h1>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
