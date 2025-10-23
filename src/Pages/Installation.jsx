import React, { useEffect, useState } from "react";
import InstallationCard from "./InstallationCard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installation = () => {
  const [installed, setInstalled] = useState([]);
  const [sortInstall, setSortInstall] = useState("none");

  useEffect(() => {
    const savedApp = JSON.parse(localStorage.getItem("install"));
    if (savedApp) {
      setInstalled(savedApp);
    }
  }, []);

  const getNumber = (num) => {
    if (!num) return 0;
    const str = num.toString().toLowerCase();
    if (str.includes("k")) return parseFloat(str) * 1000;
    if (str.includes("m")) return parseFloat(str) * 1000000;
    return parseFloat(str);
  };

  const sortedItem = (() => {
    if (sortInstall === "install-asc") {
      return [...installed].sort(
        (a, b) => getNumber(a.downloads) - getNumber(b.downloads)
      );
    } else if (sortInstall === "install-desc") {
      return [...installed].sort(
        (a, b) => getNumber(b.downloads) - getNumber(a.downloads)
      );
    } else {
      return installed;
    }
  })();

  const handleUninstall = (id) => {
    toast(
      <div role="alert" className="flex items-center text-red-500 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>App uninstall successfully!</span>
      </div>
    );

    const existingList = JSON.parse(localStorage.getItem("install"));
    let updateList = existingList.filter((p) => p.id !== id);
    setInstalled(updateList);
    localStorage.setItem("install", JSON.stringify(updateList));
  };

  return (
    <div className="max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12">
    
      <div className="text-center py-8 space-y-3">
        <h1 className="text-3xl font-bold">Your Installed Apps</h1>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Sort & Count */}
      <div className="flex justify-between items-center py-8">
        <h1 className="text-xl font-bold">{sortedItem.length} Apps Found</h1>
        <label className="form-control w-[150px] max-w-xs">
          <select
            value={sortInstall}
            onChange={(e) => setSortInstall(e.target.value)}
            className="select select-bordered"
          >
            <option value="none">Sort By Size</option>
            <option value="install-asc">Low-&gt;High</option>
            <option value="install-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>

      {/* Installed Apps List */}
      <div>
        {sortedItem.map((product) => (
          <InstallationCard
            key={product.id}
            product={product}
            handleUninstall={handleUninstall}
          />
        ))}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Installation;
