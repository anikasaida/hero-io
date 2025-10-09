import React from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/logo.png";
import { Github } from "lucide-react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/" className="font-semibold">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/apps" className="font-semibold">
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink to="/installation" className="font-semibold">
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="text-xl font-bold flex justify-center items-center gap-2"
        >
          <span>
            <img className="h-[40px]" src={logoImg} alt="" />
          </span>
          <span>HERO.IO</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className="font-semibold">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/apps" className="font-semibold">
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink to="/installation" className="font-semibold">
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/anikasaida"
          className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
        >
          <span className="border rounded-4xl bg-white p-1">
            <Github size={13} color="blue" />
          </span>{" "}
          Contribute
        </a>
      </div>
    </div>
  );
};

export default NavBar;
