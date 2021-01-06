import React from 'react';
import "./assets/css/contact.css"
import firebase from 'firebase';
import { useForm } from "react-hook-form";
import AOS from 'aos';
AOS.init();

const Contact = () => {

  const [send, setSend] = React.useState('Send');

  const { handleSubmit, register, errors } = useForm({
    mode: "onBlur"
  });

  const onSubmithandle = (event,e) => {
    const db = firebase.firestore();
    db.collection('contact').add({
      name: event.name,
      email: event.email,
      phone: event.phone,
      mgs: event.message
    });
    e.target.reset();
    setSend('Thank You!');
  }

  return (
    <div data-aos="zoom-in-down" data-aos-duration="1500"  data-aos-offset="250"  className="formcon container-contact100">
      <div className="wrap-contact100">
        <form onSubmit={handleSubmit(onSubmithandle)} className="contact100-form validate-form">
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
              aria-invalid={errors.email ? "true" : "false"}
              ref={register({
                required: "Name is required",
              })}
            />
            <span className="focus-input100" />
          </div>
          <div
            className="wrap-input100 validate-input"
            data-validate="Please enter your email: e@a.x"
          >
            <input
              className="input100"
              type="email"
              name="email"
              placeholder="E-mail"
              aria-invalid={errors.email ? "true" : "false"}
              ref={register({
                required: "Email is required",
              })}
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
              aria-invalid={errors.email ? "true" : "false"}
              ref={register({
                required: "Phone Number is required",
              })}
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
              aria-invalid={errors.email ? "true" : "false"}
              ref={register({
                required: "Please type your message here",
              })}
            />
            <span className="focus-input100" />
          </div>
          <div className="container-contact100-form-btn">
            <button id="buttonsend" type="submit" className="contact100-form-btn">
              {send}
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;