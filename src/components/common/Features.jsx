import React, { Fragment } from "react";

const Features = () => {
  return (
    <Fragment>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 m-0 my-lg-5 pt-0 pt-lg-5 pr-lg-5">
              <h4 className="text-secondary text-uppercase font-weight-medium mb-3">
                ویژگی های ما
              </h4>
              <h1 className="mb-4">چرا ما را انتخاب کنید</h1>
              <p>
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
                      قیمت های مناسب
                    </p>
                    <i className="fa fa-check text-primary m-2"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="d-flex flex-column align-items-center justify-content-center bg-secondary h-100 py-5 px-3">
                <i className="fa fa-5x fa-certificate text-white mb-5"></i>
                <h1 className="display-1 text-white mb-3">10+</h1>
                <h1 className="text-white m-0">سال تجربه</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Features;
