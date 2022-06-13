import React from "react";

const ContactUs = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container" style={{ maxWidth: "900px" }}>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-md-4">
                <div className="d-flexclassstyle flex-column align-items-center justify-content-center text-center mb-5">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderWidth: "15px !important",
                    }}
                  >
                    <i className="fa fa-2x fa-map-marker-alt text-secondary"></i>
                  </div>
                  <h5 className="font-weight-medium m-0 mt-2">
                    123 Street, New York, USA
                  </h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderWidth: "15px !important",
                    }}
                  >
                    <i className="fa fa-2x fa-envelope-open text-secondary"></i>
                  </div>
                  <h5 className="font-weight-medium m-0 mt-2">
                    info@example.com
                  </h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderWidth: "15px !important",
                    }}
                  >
                    <i className="fa fa-2x fa-phone-alt text-secondary"></i>
                  </div>
                  <h5 className="font-weight-medium m-0 mt-2">
                    +0134 267 0081
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="contact-form">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" novalidate="novalidate">
                <div className="form-row">
                  <div className="col-md-6">
                    <div className="control-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required="required"
                        data-validation-required-message="Please enter your name"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="control-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        required="required"
                        data-validation-required-message="Please enter your email"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                    required="required"
                    data-validation-required-message="Please enter a subject"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control"
                    rows="6"
                    id="message"
                    placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter your message"
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div>
                  <button
                    className="btn btn-primary py-3 px-5"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
