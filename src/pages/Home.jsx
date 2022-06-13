import React from "react";
import Banner from "../components/common/Banner";
import About from "../components/common/About";
import Services from "../components/common/Services";
import Features from "../components/common/Features";
import Work from "../components/common/Work";
import Plans from "../components/common/Plans";
import { useLocation } from "react-router";
import MainLayout from "./../components/Layouts/MainLayout";
const Home = () => {
  const path = useLocation();
  return (
    <MainLayout>
      {path.pathname === "/" ? <Banner /> : null}
      <About />
      <Services />
      <Features />
      <Work />
      <Plans />
    </MainLayout>
  );
};

export default Home;
