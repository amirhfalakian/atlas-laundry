import React, { Fragment } from "react";

const Services = () => {
  return (
    <Fragment>
      <div className="container-fluid pt-5 pb-3">
        <div className="container">
          <h4 className="text-secondary text-uppercase text-center font-weight-medium mb-3">
            خدمات ما
          </h4>
          <h1 className="display-4 text-center mb-5">
            خدماتی که ما ارائه میدیم
          </h1>
          <div className="row">
            <div className="col-lg-3 col-md-6 pb-1">
              <div
                className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4"
                style={{ height: "300px" }}
              >
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4"
                  style={{ width: "100px", height: "100px" }}
                >
                  <i className="fa fa-3x fa-cloud-sun text-secondary"></i>
                </div>
                <h4 className="font-weight-bold m-0">خشک شویی</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 pb-1">
              <div
                className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4"
                style={{ height: "300px" }}
              >
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4"
                  style={{ width: "100px", height: "100px" }}
                >
                  <i className="fas fa-3x fa-soap text-secondary"></i>
                </div>
                <h4 className="font-weight-bold m-0">شستشوی لباس</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 pb-1">
              <div
                className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4"
                style={{ height: "300px" }}
              >
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4"
                  style={{ width: "100px", height: "100px" }}
                >
                  <i className="fa fa-3x fa-burn text-secondary"></i>
                </div>
                <h4 className="font-weight-bold m-0">شستشوی پرده</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 pb-1">
              <div
                className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4"
                style={{ height: "300px" }}
              >
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4"
                  style={{ width: "100px", height: "100px" }}
                >
                  <i className="fa fa-3x fa-tshirt text-secondary"></i>
                </div>
                <h4 className="font-weight-bold m-0">اتو انواع لباس</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
