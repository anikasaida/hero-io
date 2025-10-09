import React, { useEffect, useState } from "react";
import UseProducts from "../Hook/UseProducts";
import { useParams } from "react-router";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Download, Star, ThumbsUp } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";

const AppsDetailsCard = () => {
  const { id } = useParams();
  const parsIntId = parseInt(id);
  const { products, loading } = UseProducts();
  // console.log(typeof parsIntId)

  const [isInstalled, setIsInstalled] = useState(false);
  // const product = products.find((p) => p.id === parsIntId);
  // console.log(product);
  useEffect(() => {
    const product = products.find((p) => p.id === parsIntId);
    if (!product) return;

    const installList = JSON.parse(localStorage.getItem("install")) || [];
    const isAlreadyInstall = installList.some((p) => p.id === product.id);
    setIsInstalled(isAlreadyInstall);
  }, [products, parsIntId]);
  if (loading) return <p>loading....</p>;

  const product = products.find((p) => p.id === parsIntId);
  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    // size,
    ratings,
    description,
  } = product;

  const handleInstall = () => {
    toast(
      <div role="alert" className="flex items-center text-green-500 gap-2">
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>App Install!</span>
      </div>
    );
    const existingList = JSON.parse(localStorage.getItem("install")) || [];
    // let updateList = [];
    const isDuplicate = existingList.some((p) => p.id === product.id);

    if (isDuplicate) {
      toast("Already Added");
      return;
    }
    const updateList = [...existingList, product];
    localStorage.setItem("install", JSON.stringify(updateList));
    setIsInstalled(true);
  };

  // Uninstall Button
  const handleUninstall = () => {
    const existingList = JSON.parse(localStorage.getItem("install")) || [];
    const updateList = existingList.filter((p) => p.id !== product.id);
    localStorage.setItem("install", JSON.stringify(updateList));
    setIsInstalled(false);
  };

  return (
    <div>
      <div className="bg-base-200 shadow p-5">
        <div className="flex gap-12 flex-col md:flex-row">
          <img
            src={image}
            className="max-w-sm rounded-lg shadow-2xl h-[300px]"
          />
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="py-6 border-b-1">
              Developed by <span className="text-[#9F62F2]">{companyName}</span>
            </p>
            <div className="flex justify-between  gap-12 space-y-5 pt-6">
              <p>
                <span>
                  <Download size={25} color="green" />
                </span>
                Downloads <br />
                <span className="text-3xl font-bold">{downloads}</span>
              </p>
              <p>
                <Star size={25} color="#FF8811" />
                Average Ratings <br />
                <span className="text-3xl font-bold">{ratingAvg}</span>
              </p>
              <p>
                <ThumbsUp size={25} color="blue" />
                Total Reviews <br />
                <span className="text-3xl font-bold">{reviews}</span>
              </p>
            </div>
            <button
              onClick={isInstalled ? handleUninstall : handleInstall}
              disabled={isInstalled}
              className={`btn mt-6 text-white ${
                isInstalled ? "bg-gray-500" : "bg-green-500"
              }`}
            >
              <ToastContainer />
              {isInstalled ? "Uninstall" : ` Install Now ({size} MB) `}
            </button>
          </div>
        </div>
      </div>

      {/* Bar Chart Start */}

      <div className="bg-base-200 p-5 mt-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4 text-center sm:text-left">
          Ratings
        </h2>
        <div className="w-full h-[250px] sm:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={ratings}
              layout="vertical"
              margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
            >
              <XAxis type="number" tick={{ fontSize: 12 }} />
              <YAxis
                dataKey="name"
                type="category"
                width={60}
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                cursor={{ fill: "rgba(0,0,0,0.05)" }}
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                }}
              />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Bar dataKey="count" fill="#ff9800" barSize={25} radius={0} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold mb-4 text-center sm:text-left my-5">
          Description
        </h1>
        <p className="text-[#627382]">{description}</p>
      </div>
    </div>
  );
};

export default AppsDetailsCard;
