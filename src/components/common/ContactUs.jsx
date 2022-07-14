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
                    <a
                      href="https://goo.gl/maps/w8WHQAuc1qWx85PV9"
                      target="_blank"
                    >
                      گیلان، چابکسر
                    </a>
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
                    <a href="mailto:atlaslaundry@gmail.com">
                      {" "}
                      atlaslaundry@gmail.com
                    </a>
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
                    <a href="tel:+0134 267 0081"> +0134 267 0081</a>
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
                        placeholder="نام"
                        required="required"
                        data-validation-required-message="Please enter your name"
                        style={{ direction: "rtl" }}
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
                        placeholder="ایمیل"
                        required="required"
                        data-validation-required-message="Please enter your email"
                        style={{ direction: "rtl" }}
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
                    placeholder="موضوع"
                    required="required"
                    data-validation-required-message="Please enter a subject"
                    style={{ direction: "rtl" }}
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control"
                    rows="6"
                    id="message"
                    placeholder="متن پیام"
                    required="required"
                    data-validation-required-message="Please enter your message"
                    style={{ direction: "rtl" }}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    className="btn btn-primary py-3 px-5"
                    type="submit"
                    id="sendMessageButton"
                  >
                    ارسال
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
