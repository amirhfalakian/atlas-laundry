import React, { Fragment } from "react";

const Work = () => {
  return (
    <Fragment>
      <div className="container-fluid pt-5">
        <div className="container">
          <h4 className="text-secondary text-uppercase text-center font-weight-medium mb-3">
            فرآیند کار
          </h4>
          <h1 className="display-4 text-center mb-5">چگونه کار می کنیم</h1>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderWidth: "15px !important",
                  }}
                >
                  <h2 className="display-2 text-secondary m-0">1</h2>
                </div>
                <h3 className="font-weight-bold m-0 mt-2">محل سفارش</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderWidth: "15px !important",
                  }}
                >
                  <h2 className="display-2 text-secondary m-0">2</h2>
                </div>
                <h3 className="font-weight-bold m-0 mt-2">دریافت سریع</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderWidth: "15px !important",
                  }}
                >
                  <h2 className="display-2 text-secondary m-0">3</h2>
                </div>
                <h3 className="font-weight-bold m-0 mt-2">خشک شویی</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderWidth: "15px !important",
                  }}
                >
                  <h2 className="display-2 text-secondary m-0">4</h2>
                </div>
                <h3 className="font-weight-bold m-0 mt-2">ارسال سریع</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Work;
