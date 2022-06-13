import React, { Fragment } from "react";
import TopNav from "./../common/TopNav";
import Footer from "./../common/Footer";

const MainLayout = (props) => {
  return (
    <Fragment>
      <TopNav />
      <main id="home-page">{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
