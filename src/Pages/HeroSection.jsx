import React from "react";
import playStorImg from "../assets/PlayStor.png";
import appleStorImg from "../assets/AppleStor.png";
import heroImg from "../assets/hero.png";

const HeroSection = () => {
  return (
    <div className="text-center space-y-4 mt-6">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">
          We Build <br /> <span className="text-[#9F62F2]">Productive</span>{" "}
          Apps
        </h1>
        <p>
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
      </div>
      <div className="flex justify-center gap-2">
        <a href="https://play.google.com/store/games?hl=en">
          <button className="btn font-bold">
            <img src={playStorImg} alt="" /> Google Play
          </button>
        </a>
        <a href="https://www.apple.com/app-store/">
          <button className="btn font-bold">
            <img src={appleStorImg} alt="" /> App Stor
          </button>
        </a>
      </div>
      <div>
        <img className="w-[500px] mx-auto" src={heroImg} alt="" />

        <div className="shadow bg-gradient-to-br from-[#632EE3] to-[#9F62F2] p-8 ">
          <h1 className="text-4xl text-white font-bold">
            Trusted by Millions, Built for You
          </h1>
          <div className="text-white w-full flex justify-center items-center flex-wrap md:flex-nowrap">
            <div className="stat">
              <div className="stat-title text-white">Total Downloads</div>
              <div className="stat-value text-white">29.6M</div>
              <div className="stat-desc text-white">
                21% More Than Last Month
              </div>
            </div>

            <div className="stat">
              <div className="stat-title text-white">Total Reviews</div>
              <div className="stat-value text-white">906K</div>
              <div className="stat-desc text-white">
                46% More Than Last Month
              </div>
            </div>

            <div className="stat">
              <div className="stat-title text-white">Active Apps</div>
              <div className="stat-value text-white">132+</div>
              <div className="stat-desc text-white">31 More Will Launch</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;