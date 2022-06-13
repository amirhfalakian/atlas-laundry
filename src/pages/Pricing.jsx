import React from "react";
import Plans from "../components/common/Plans";
import MainLayout from "../components/Layouts/MainLayout";

const Pricing = () => {
  return (
    <MainLayout>
      <div className="page-header container-fluid bg-secondary pt-2 pt-lg-5 pb-2 mb-5">
        <div className="container py-5">
          <div className="row align-items-center py-4">
            <div className="col-md-6 text-center text-md-left">
              <h1 className="mb-4 mb-md-0 text-white">قیمت ها</h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="d-inline-flex align-items-center">
                <a className="btn text-white" href="/">
                  صفحه اصلی
                </a>
                <i className="fas fa-angle-right text-white"></i>
                <a className="btn text-white disabled" href="/pricing">
                  قیمت ها
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Plans />
    </MainLayout>
  );
};

export default Pricing;
