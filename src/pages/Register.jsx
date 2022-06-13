import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div id="home-page">
      <div className="page-header container-fluid bg-secondary pt-2 pt-lg-5 pb-2 mb-5">
        <div className="container py-5">
          <div className="row align-items-center py-4">
            <div className="col-md-6 text-center text-md-left">
              <h1 className="mb-4 mb-md-0 text-white">ثبت نام</h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="d-inline-flex align-items-center">
                <NavLink className="btn text-white" to={"/"}>
                  صفحه اصلی
                </NavLink>
                <i className="fas fa-angle-right text-white"></i>
                <NavLink className="btn text-white disabled" to={"/register"}>
                  ثبت نام
                </NavLink>
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
          <div className="form-outline mb-4">
            <input
              type="text"
              id="form2Example1"
              className="form-control"
              style={{ padding: "1rem 2rem" }}
            />
            <label className="form-label" for="form2Example1">
              نام کاربری
            </label>
          </div>
          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <input
              type="email"
              id="form2Example1"
              className="form-control"
              style={{ padding: "1rem 2rem" }}
            />
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
              style={{ padding: "1rem 2rem" }}
            />
            <label className="form-label" for="form2Example2">
              رمز ورود
            </label>
          </div>

          {/* <!-- 2 column grid layout for inline styling --> */}
          <div className="row mb-4">
            <div className="col d-flex ">{/* <!-- Checkbox --> */}</div>
          </div>
          {/* 
<!-- Submit button --> */}
          <button type="button" class="btn btn-primary btn-block mb-4">
            ثبت نام
          </button>

          {/* <!-- Register buttons --> */}
          <div className="text-center">
            <p>:ثبت نام با</p>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
