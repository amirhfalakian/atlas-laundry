import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div className="container-fluid py-5">
        <div className="container pt-0 pt-lg-4">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img className="img-fluid" src="img/about.jpg" alt="" />
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0 pl-lg-5">
              <h4 className="text-secondary text-uppercase font-weight-medium mb-3">
                درباره ما بدانید
              </h4>
              <h1 className="mb-4">
                ما ارائه دهنده خدمات با کیفیت در شهر چابکسر هستیم
              </h1>
              <h5 className="font-weight-medium font-italic mb-4">
                ما ارائه دهنده خدمات با کیفیت در شهر شما هستیم ما ارائه دهنده
                خدمات با کیفیت در شهر شما هستیم
              </h5>
              <p className="mb-2">
                ما ارائه دهنده خدمات با کیفیت در شهر شما هستیم ما ارائه دهنده
                خدمات با کیفیت در شهر شما هستیم ما ارائه دهنده خدمات با کیفیت در
                شهر شما هستیم
              </p>
              <div className="row">
                <div className="col-sm-6 pt-3">
                  <div className="d-flex align-items-center justify-content-end">
                    <p className="text-secondary font-weight-medium m-0">
                      خدمات خشکشویی با کیفیت
                    </p>
                    <i className="fa fa-check text-primary m-2"></i>
                  </div>
                </div>
                <div className="col-sm-6 pt-3">
                  <div className="d-flex align-items-center justify-content-end">
                    <p className="text-secondary font-weight-medium m-0">
                      تحویل سریع
                    </p>
                    <i className="fa fa-check text-primary m-2"></i>
                  </div>
                </div>
                <div className="col-sm-6 pt-3">
                  <div className="d-flex align-items-center justify-content-end">
                    <p className="text-secondary font-weight-medium m-0">
                      پرسنل حرفه ای
                    </p>
                    <i className="fa fa-check text-primary m-2"></i>
                  </div>
                </div>
                <div className="col-sm-6 pt-3">
                  <div className="d-flex align-items-center justify-content-end">
                    <p className="text-secondary font-weight-medium m-0">
                      رضایت 100 درصدی
                    </p>
                    <i className="fa fa-check text-primary m-2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
