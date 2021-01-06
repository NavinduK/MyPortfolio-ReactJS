import React from "react";
import "../components/assets/css/profile.css";
import Contact from "./Contact";
import introimg from '../components/assets/img/profile.jpg'
import AOS from 'aos';
AOS.init();

const Profile = ({ data }) => {
  return (
    <div className="profile-page">
      <div className="parallaxProf">
        {
          data[1]?.image
            ?
            <div className="marginAdd container">
              <div style={{ minHeight: '100vh' }} className="main main-raised">
                <div className="profile-content">
                  <div>
                    <div className="col-md-6 ml-auto mr-auto">
                      <div className="profile">
                        <div data-aos="flip-down" data-aos-duration="1500" className="avatar">
                          <img
                            src={data[1]?.image || introimg}
                            alt="Navindu Kavishka Rajamanthree"
                            className="img-raised rounded-circle img-fluid"
                          />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500" data-aos-offset="-500" className="name">
                          <h3 className="title">Navindu Kavishka Rajamanthree</h3>
                          <h6>{data[2]?.jobtitle}</h6>
                          <div className="socoal-buttons">
                            <a
                              href={data[0]?.github}
                              className="btn btn-just-icon btn-link btn-dribbble"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <i className="fa fa-github" />
                            </a>
                            <a
                              href={data[0]?.linkedin}
                              className="btn btn-just-icon btn-link btn-dribbble"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <i className="fa fa-linkedin" />
                            </a>
                            <a
                              href={data[0]?.twitter}
                              className="btn btn-just-icon btn-link btn-twitter"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <i className="fa fa-twitter" />
                            </a>
                            <a
                              href={data[0]?.instagram}
                              className="btn btn-just-icon btn-link btn-twitter"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <i className="fa fa-instagram" />
                            </a>
                            <a
                              href={data[0]?.stack}
                              className="btn btn-just-icon btn-link btn-twitter"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <i className="fa fa-stack-overflow" />
                            </a>
                            <a
                              href={data[0]?.fb}
                              className="btn btn-just-icon btn-link btn-pinterest"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <i className="fa fa-facebook" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500" data-aos-offset="-500" className="text-center">
                    <p>
                      B.Sc. (Honours) in Statistics & Operations Research -
                      University Of Peradeniya
                    </p>
                    <a
                      href={data[1]?.uniProf}
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ color: "#9C30B5" }}
                    >
                      University Student Profile
                    </a>
                  </div>

                  <div data-aos="fade-up" data-aos-delay="900" data-aos-duration="1500" data-aos-offset="-500"
                    style={{
                      marginTop: "20px",
                    }}
                    className="description text-center"
                  >
                    <p>
                      {data[1]?.['bio']}
                    </p>
                  </div>
                  <hr
                    style={{
                      width: "80%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "30px",
                    }}
                  />
                  <Contact/>
                </div>
              </div>
            </div>
            :
            <div style={{ height: '100vh', background: 'rgba(255, 255, 255, 0.6)' }} className="row justify-content-center align-content-center">
              <div style={{ color: '#A73AC1' }} className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
        }
      </div>
    </div>
  );
};

export default Profile;