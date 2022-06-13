import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <Fragment>
      <div id="home-page">
        <div className="page-header container-fluid bg-secondary pt-2 pt-lg-5 pb-2 mb-5">
          <div className="container py-5">
            <div className="row align-items-center py-4">
              <div className="col-md-6 text-center text-md-left">
                <h1 className="mb-4 mb-md-0 text-white"> ورود</h1>
              </div>
              <div className="col-md-6 text-center text-md-right">
                <div className="d-inline-flex align-items-center">
                  <NavLink className="btn text-white" to={"/"}>
                    صفحه اصلی
                  </NavLink>
                  <i className="fas fa-angle-right text-white"></i>
                  <a className="btn text-white disabled" href="">
                    ورود
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className=""
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <form>
            {/* <!-- Email input --> */}

            <div className="form-outline mb-4">
              <input type="email" id="form2Example1" className="form-control" />
              <label className="form-label" for="form2Example1">
                ایمیل
              </label>
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
              <input
                type="password"
                id="form2Example2"
                className="form-control"
              />
              <label className="form-label" for="form2Example2">
                رمز ورود
              </label>
            </div>

            {/* <!-- 2 column grid layout for inline styling --> */}
            <div className="row mb-4">
              <div className="col d-flex justify-content-center"></div>
            </div>
            {/* 
  <!-- Submit button --> */}
            <button type="button" class="btn btn-primary btn-block mb-4">
              ورود
            </button>

            {/* <!-- Register buttons --> */}
            <div className="text-center">
              <p>
                عضو نیستید؟ <NavLink to="/register">ثبت نام</NavLink>
              </p>
              <p>:عضویت با</p>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
