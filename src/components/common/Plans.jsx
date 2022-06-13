import React, { Fragment } from "react";
import { GiWashingMachine } from "react-icons/gi";
import { MdIron } from "react-icons/md";
import { AiOutlineBgColors } from "react-icons/ai";
const Plans = () => {
  return (
    <Fragment>
      <div className="container-fluid pt-5 pb-3">
        <div className="container">
          <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">
            قیمت گذاری ما
          </h6>
          <h1 className="display-4 text-center mb-5">بهترین قیمت</h1>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="bg-light text-center mb-2 pt-4">
                <div
                  className="d-inline-flex flex-column align-items-center justify-content-center bg-secondary rounded-circle shadow mt-2 mb-4"
                  style={{
                    width: "200px",
                    height: "200px",
                    border: "15px solid #ffffff",
                  }}
                >
                  <h3 className="text-white">خشکشویی</h3>
                  <h1 className="display-4 text-white mb-0">
                    <GiWashingMachine />
                  </h1>
                </div>
                <div className="d-flex flex-column align-items-center py-3">
                  <h5>شلوار</h5>
                  <h5>پیراهن سفید</h5>
                  <h5>کت</h5>
                  <h5>پتو یکنفره</h5>
                </div>
                <a href="" className="btn btn-secondary py-2 px-4">
                  مشاهده همه
                </a>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="bg-light text-center mb-2 pt-4">
                <div
                  className="d-inline-flex flex-column align-items-center justify-content-center bg-primary rounded-circle shadow mt-2 mb-4"
                  style={{
                    width: "200px",
                    height: "200px",
                    border: "15px solid #ffffff",
                  }}
                >
                  <h3 className="text-white">اتو</h3>
                  <h1 className="display-4 text-white mb-0">
                    <MdIron />
                  </h1>
                </div>
                <div className="d-flex flex-column align-items-center py-3">
                  <h5>مانتو </h5>
                  <h5>پیراهن</h5>
                  <h5>کت</h5>
                  <h5>پالتو </h5>
                </div>
                <a href="" className="btn btn-primary py-2 px-4">
                  مشاهده همه
                </a>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="bg-light text-center mb-2 pt-4">
                <div
                  className="d-inline-flex flex-column align-items-center justify-content-center bg-secondary rounded-circle shadow mt-2 mb-4"
                  style={{
                    width: "200px",
                    height: "200px",
                    border: "15px solid #ffffff",
                  }}
                >
                  <h3 className="text-white">لکه بری</h3>
                  <h1 className="display-4 text-white mb-0">
                    <AiOutlineBgColors />
                  </h1>
                </div>
                <div className="d-flex flex-column align-items-center py-3">
                  <h5>تی شرت</h5>
                  <h5>پیراهن</h5>
                  <h5>مانتو</h5>
                  <h5>شلوار</h5>
                </div>
                <a href="" className="btn btn-secondary py-2 px-4">
                  مشاهده همه
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Plans;
