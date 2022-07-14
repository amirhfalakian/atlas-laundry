import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  return (
    <Fragment>
      <div className="container-fluid bg-primary py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <NavLink to="/login" className="text-white pr-3">
                  ورود
                </NavLink>
                <span className="text-white">|</span>
                <NavLink to="/register" className="text-white px-3">
                  ثبت نام
                </NavLink>
              </div>
            </div>
            <div className="col-md-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <a className="text-white px-3" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="text-white px-3" href="">
                  <i className="fab  fa-whatsapp"></i>
                </a>
                <a className="text-white px-3" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="text-white pl-3" href="">
                  <i className="fab fa-telegram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid position-relative nav-bar p-0">
        <div
          className="container-lg position-relative p-0 px-lg-3"
          style={{ zIndex: "9" }}
        >
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 pl-3 pl-lg-5">
            <NavLink to="/" className="navbar-brand">
              <h1 className="m-0 text-secondary">
                <span className="text-primary">AT</span>LAS
              </h1>
            </NavLink>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between px-3"
              id="navbarCollapse"
            >
              <div className="navbar-nav ml-auto py-0">
                <NavLink to="/contact" className="nav-item nav-link">
                  تماس با ما
                </NavLink>
                <NavLink to="/pricing " className="nav-item nav-link">
                  قیمت ها
                </NavLink>
                <NavLink to="/services" className="nav-item nav-link">
                  خدمات
                </NavLink>
                <NavLink to="/about" className="nav-item nav-link">
                  درباره ما
                </NavLink>

                <NavLink to="/" className="nav-item nav-link">
                  صفحه اصلی
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};

export default TopNav;
