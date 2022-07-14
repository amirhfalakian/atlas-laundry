import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <div className="container-fluid bg-primary text-white mt-5 pt-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <Link to={"/"}>
              <h1 className="text-secondary mb-3">
                <span className="text-white">AT</span>LAS
              </h1>
            </Link>
            <p>
              ما ارائه دهنده خدمات با کیفیت در شهر شما هستیم ما ارائه دهنده
              خدمات با کیفیت در شهر شما هستیم ما ارائه دهنده خدمات با کیفیت در
              شهر شما هستیم
            </p>
            <div className="d-flex justify-content-end mt-4">
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: "38px", height: "38px" }}
                href="/"
              >
                <i className="fab fa-telegram"></i>
              </a>
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: "38px", height: "38px" }}
                href="/"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: "38px", height: "38px" }}
                href="/whatsapp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: "38px", height: "38px" }}
                href="/"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white mb-4">در تماس باشید</h4>
            <p>ارائه دهنده خدمات با کیفیت در شهر شما</p>
            <p>
              <i className="fa fa-map-marker-alt mr-2"></i> گیلان، چابکسر
            </p>
            <p>
              <i className="fa fa-phone-alt mr-2"></i>
              <a className="text-white mb-2" href="tel:+0134 267 0081">
                {" "}
                +0134 267 0081
              </a>{" "}
            </p>
            <p>
              <i className="fa fa-envelope mr-2"></i>
              <a
                className="text-white mb-2"
                href="mailto:atlaslaundry@gmail.com"
              >
                {" "}
                atlaslaundry@gmail.com
              </a>
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white mb-4">لینک ها</h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white mb-2" href="/">
                صفحه اصلی <i className="fa fa-angle-left ml-2"></i>
              </a>
              <a className="text-white mb-2" href="/about">
                درباره ما <i className="fa fa-angle-left ml-2"></i>
              </a>
              <a className="text-white mb-2" href="/services">
                خدمات ما<i className="fa fa-angle-left ml-2"></i>
              </a>
              <a className="text-white mb-2" href="/pricing">
                قیمت ها<i className="fa fa-angle-left ml-2"></i>
              </a>
              <a className="text-white" href="/contact">
                تماس با ما<i className="fa fa-angle-left ml-2"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white mb-4">خبرنامه</h4>
            <form action="">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="نام"
                  required="required"
                  style={{ textAlign: "right" }}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control border-0"
                  placeholder="ایمیل"
                  required="required"
                  style={{ textAlign: "right" }}
                />
              </div>
              <div>
                <button
                  className="btn btn-lg btn-secondary btn-block border-0"
                  type="submit"
                >
                  ارسال
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white py-4 px-sm-3 px-md-5">
        <p className="m-0 text-center text-white">
          &copy;{" "}
          <a className="text-white font-weight-medium" href="/">
            Atlas Laundry
          </a>
          . All Rights Reserved. Designed by
          <a className="text-white font-weight-medium" href="#">
            Amirhossein Falakian
          </a>
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
