import { Fragment } from "react";
import { Link } from "react-router-dom";
import ServicesModel from "../components/Model/ServicesModel";
import ServicesData from "../util/data/servicesDate.json";
import "./Services.css";

const Services = () => {
  return (
    <Fragment>
      {/* //////////////////// */}
      {/* Services Top */}
      <section className="page-title bg-3">
        <div className="overlay"></div>
        <div className="container content">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center ">
                <span className="text-white">Services</span>
                <h1 className="text-capitalize mb-5 text-lg text-white">
                  Services
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section service-2">
        <div className="container">
          <div className="row">
            {ServicesData.map((service) => {
              return <ServicesModel key={service.id} {...service} />;
            })}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="section cta-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="cta-content">
                <div className="divider mb-4"></div>
                <h2 className="mb-5 text-lg">
                  We are pleased to offer you the{" "}
                  <span className="title-color">
                    chance to have the healthy
                  </span>
                </h2>
                <Link
                  to="/counselors"
                  className="btn btn-main-2 btn-round-full"
                >
                  Get appoinment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Services;
