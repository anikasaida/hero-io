import React from "react";
import { Link, useRouteError } from "react-router";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import errorImg from "../assets/error-404.png";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <div className="text-center py-8 space-y-4">
        <img src={errorImg} alt="" className="mx-auto h-[300px]" />
        <p>{error.message} <br /></p>
        <h1 className="text-3xl font-bold">Oops, page not found!</h1>
        <p>The page you are looking for is not available.</p>
        <Link to="/">
          <button className="btn bg-blue-600">Go Back!</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
