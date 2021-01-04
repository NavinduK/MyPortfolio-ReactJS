import React from "react";
import "../components/assets/css/profile.css";
import Contact from "./Contact";
import introimg from '../components/assets/img/profile.jpg'

const Profile = ({ data }) => {
  return (
    <div className="profile-page">
      <div className="parallaxProf">
        <div className="marginAdd container">
          <div className="main main-raised">
            <div className="profile-content">
              <div>
                <div className="col-md-6 ml-auto mr-auto">
                  <div className="profile">
                    <div className="avatar">
                      <img
                        src={data[1]?.image || introimg} 
                        alt="Navindu Kavishka Rajamanthree"
                        className="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <div className="name">
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
              <div className="text-center">
                <p>
                  B.Sc. (Honours) in Statistics & Operations Research -
                  University Of Peradeniya
                </p>
                <a
                  href={data[1]?.uniProf}
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{color:"#9C30B5"}}
                >
                  University Student Profile
                </a>
              </div>

              <div
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
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
