import { Fragment } from "react";
import "./About.css";
const AboutUs = () => {
  return (
    <Fragment>
      {/* //////////////////// */}
      {/* About US */}
      <section className="page-title bg-1">
        <div className="overlay"></div>
        <div className="container content">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center ">
                <span className="text-white">About Us</span>
                <h1 className="text-capitalize mb-5 text-lg text-white">
                  About Us
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section about-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="title-color">
                Personal care for your healthy living
              </h2>
            </div>
            <div className="col-lg-8">
              <p>
                {" "}
                Counseling provided by trained professionals can make a profound
                impact on the lives of individuals, families and
                communities.This service helps people navigate difficult life
                situations, such as the death of a loved one, divorce, natural
                disasters, school stress and the loss of a job.
              </p>
              <img src="images/about/sign.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      {/* //////////////////// */}
      {/* Feature */}
      <section className="fetaure-page ">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="about-block-item mb-5 mb-lg-0">
                <img
                  src="https://images.pexels.com/photos/7176297/pexels-photo-7176297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="img-fluid w-100"
                />
                <h4 className="mt-3">Counseling for Kids</h4>
                <p>
                  Behavior therapy teaches children and their families how to
                  strengthen positive child behaviors and eliminate or reduce
                  unwanted or problem behaviors.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="about-block-item mb-5 mb-lg-0">
                <img
                  src="https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="img-fluid w-100"
                />
                <h4 className="mt-3">Depression Counseling</h4>
                <p>
                  Depression is among the most treatable of mental disorders.
                  Between 80% and 90% percent of people with depression
                  eventually respond well to treatment.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="about-block-item mb-5 mb-lg-0">
                <img
                  src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="img-fluid w-100"
                />
                <h4 className="mt-3">Modern Equipments</h4>
                <p>
                  Voluptate aperiam esse possimus maxime repellendus, nihil quod
                  accusantium .
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="about-block-item">
                <img
                  src="https://images.pexels.com/photos/8070693/pexels-photo-8070693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="img-fluid w-100"
                />
                <h4 className="mt-3">Qualified Counselors</h4>
                <p>
                  Our Qualified Counselors can help to live better and provide
                  services online 24/7.Your mental stability and future sucess
                  is our first priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* //////////////////// */}
      {/* Team */}
      <section className="section team">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="mb-4">Meet Our Specialist</h2>
                <div className="divider mx-auto my-4"></div>
                <p>
                  Today’s users expect effortless experiences. Don’t let
                  essential people and processes stay stuck in the past. Speed
                  it up, skip the hassles
                </p>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="team-block mb-5 mb-lg-0">
                <img
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="img-fluid w-100"
                />

                <div className="content">
                  <h4 className="mt-4 mb-0">
                    <a href="doctor-single.html">John Marshal</a>
                  </h4>
                  <p>Scholarship counselor</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team-block mb-5 mb-lg-0">
                <img
                  src="https://images.pexels.com/photos/4427610/pexels-photo-4427610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="img-fluid w-100"
                />

                <div className="content">
                  <h4 className="mt-4 mb-0">
                    <a href="doctor-single.html">Marshal Root</a>
                  </h4>
                  <p>Career counselor</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team-block mb-5 mb-lg-0">
                <img
                  src="https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="img-fluid w-100"
                />

                <div className="content">
                  <h4 className="mt-4 mb-0">
                    <a href="doctor-single.html">Siamon john</a>
                  </h4>
                  <p>Post Traumaric stress disorder counselor</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team-block">
                <img
                  src="https://images.pexels.com/photos/4098260/pexels-photo-4098260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="img-fluid w-100"
                />

                <div className="content">
                  <h4 className="mt-4 mb-0">
                    <a href="doctor-single.html">Rishat Ahmed</a>
                  </h4>
                  <p>Schizophrenia counselor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutUs;
