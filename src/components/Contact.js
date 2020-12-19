import React from 'react';
import "./assets/css/contact.css"

const Contact = () => {
    return (
        <div className="formcon container-contact100">
                <div className="wrap-contact100">
                  <form className="contact100-form validate-form">
                    <span className="contact100-form-title">
                      CONTACT ME
                    </span>
                    <div
                      className="wrap-input100 validate-input"
                      data-validate="Please enter your name"
                    >
                      <input
                        className="input100"
                        type="text"
                        name="name"
                        placeholder="Full Name"
                      />
                      <span className="focus-input100" />
                    </div>
                    <div
                      className="wrap-input100 validate-input"
                      data-validate="Please enter your email: e@a.x"
                    >
                      <input
                        className="input100"
                        type="text"
                        name="email"
                        placeholder="E-mail"
                      />
                      <span className="focus-input100" />
                    </div>
                    <div
                      className="wrap-input100 validate-input"
                      data-validate="Please enter your phone"
                    >
                      <input
                        className="input100"
                        type="text"
                        name="phone"
                        placeholder="Phone"
                      />
                      <span className="focus-input100" />
                    </div>
                    <div
                      className="wrap-input100 validate-input"
                      data-validate="Please enter your message"
                    >
                      <textarea
                        className="input100"
                        name="message"
                        placeholder="Your Message"
                        defaultValue={""}
                      />
                      <span className="focus-input100" />
                    </div>
                    <div className="container-contact100-form-btn">
                      <button className="contact100-form-btn">
                        <span>
                          Send
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
    );
};

export default Contact;