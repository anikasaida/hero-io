import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <NavBar />
      <div className="flex-1 max-w-screen-xl mx-auto w-full px-4 md:px-8 lg-px-12 py-4 md:py-8 lg-py-12">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
