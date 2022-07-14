import React from "react";
import About from "../components/common/About";
import Features from "../components/common/Features";
import Work from "../components/common/Work";
import MainLayout from "./../components/Layouts/MainLayout";

const AboutUs = () => {
  return (
    <MainLayout>
      <div className="page-header container-fluid bg-secondary pt-2 pt-lg-5 pb-2 mb-5">
        <div className="container py-5">
          <div className="row align-items-center py-4">
            <div className="col-md-6 text-center text-md-left">
              <h1 className="mb-4 mb-md-0 text-white">درباره ما</h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="d-inline-flex align-items-center">
                <a className="btn text-white disabled" href="">
                  درباره ما
                </a>
                <i className="fas fa-angle-left text-white"></i>
                <a className="btn text-white" href="/">
                  صفحه اصلی
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Work />
      <Features />
    </MainLayout>
  );
};

export default AboutUs;
