import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <Fragment>
      <div className="container-fluid p-0">
        <div
          id="header-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h3 className="text-white text-uppercase mb-md-3">
                    خشکشویی و لباسشویی
                  </h3>

                  <h1 className="display-2 font-bold">اطلس</h1>

                  <h1 className="display-4 text-white mb-md-4">
                    ارائه بهتریت خدمات
                  </h1>
                  <NavLink
                    to={"/about"}
                    className="btn btn-primary py-md-3 px-md-5 mt-2"
                  >
                    درباره ما
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h3 className="text-white text-uppercase mb-md-3">
                    خشکشویی و لباسشویی
                  </h3>
                  <h1 className="display-2 font-bold">اطلس</h1>
                  <h2 className="display-4 text-white mb-md-4">
                    پرسنل حرفه ای
                  </h2>
                  <NavLink
                    to={"/about"}
                    className="btn btn-primary py-md-3 px-md-5 mt-2"
                  >
                    درباره ما
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#header-carousel"
            data-slide="prev"
          >
            <div
              className="btn btn-secondary"
              style={{ width: "45px", height: "45px" }}
            >
              <span className="carousel-control-prev-icon mb-n2"></span>
            </div>
          </a>
          <a
            className="carousel-control-next"
            href="#header-carousel"
            data-slide="next"
          >
            <div
              className="btn btn-secondary"
              style={{ width: "45px", height: "45px" }}
            >
              <span className="carousel-control-next-icon mb-n2"></span>
            </div>
          </a>
        </div>
      </div>
      <div className="container-fluid contact-info mt-5 mb-4">
        <div className="container" style={{ padding: "0 30px" }}>
          <div className="row">
            <div
              className="col-md-4 d-flex align-items-center justify-content-center bg-secondary mb-4 mb-lg-0"
              style={{ height: "100px" }}
            >
              <div className="d-inline-flex">
                <div className="d-flex flex-column align-items-end">
                  <h5 className="text-white font-weight-medium">مکان ما</h5>
                  <a
                    className="m-0 text-white"
                    href="https://goo.gl/maps/w8WHQAuc1qWx85PV9"
                    target="_blank"
                  >
                    گیلان، چابکسر
                  </a>
                </div>
                <i className="fa fa-2x fa-map-marker-alt text-white m-0 ml-3"></i>
              </div>
            </div>
            <div
              className="col-md-4 d-flex align-items-center justify-content-center bg-primary mb-4 mb-lg-0"
              style={{ height: "100px" }}
            >
              <div className="d-inline-flex text-right">
                <div className="d-flex flex-column align-items-end">
                  <h5 className="text-white font-weight-medium">ایمیل</h5>
                  <a
                    className="m-0 text-white"
                    href="mailto:atlaslaundry@gmail.com"
                  >
                    atlaslaundry@gmail.com
                  </a>
                </div>
                <i className="fa fa-2x fa-envelope text-white m-0 ml-3"></i>
              </div>
            </div>
            <div
              className="col-md-4 d-flex align-items-center justify-content-center bg-secondary mb-4 mb-lg-0"
              style={{ height: "100px" }}
            >
              <div className="d-inline-flex text-right">
                <div className="d-flex flex-column align-items-end">
                  <h5 className="text-white font-weight-medium">تماس</h5>
                  <a className="m-0 text-white" href="tel:+0134 267 0081">
                    +0134 267 0081
                  </a>
                </div>
                <i className="fa fa-2x fa-phone-alt text-white m-0 ml-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
