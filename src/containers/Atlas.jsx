import React, { Fragment } from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router";
import AboutUs from "../pages/AboutUs";
import Service from "../pages/Service";
import Pricing from "../pages/Pricing";
import OurBlog from "../pages/OurBlog";
import Contact from "../pages/Contact";
import BlogDetail from "../pages/BlogDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Helmet } from "react-helmet";
import BacktoTop from "../components/common/BacktoTop";

const Atlas = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Atlas</title>
        <meta name="description" content="خشکسویی و لباسشویی اطلس" />
      </Helmet>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" exact element={<AboutUs />} />
        <Route path="/services" exact element={<Service />} />
        <Route path="/pricing" exact element={<Pricing />} />
        <Route path="/blog" exact element={<OurBlog />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/blogdetail" exact element={<BlogDetail />} />
      </Routes>
      <BacktoTop />
    </Fragment>
  );
};

export default Atlas;
