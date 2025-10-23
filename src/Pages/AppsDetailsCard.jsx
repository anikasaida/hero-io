import React, { useEffect, useState } from "react";
import UseProducts from "../Hook/UseProducts";
import { useParams, Link } from "react-router";
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

  const [isInstalled, setIsInstalled] = useState(false);

  // Check if app is installed
  useEffect(() => {
    const product = products.find((p) => p.id === parsIntId);
    if (!product) return;

    const installList = JSON.parse(localStorage.getItem("install")) || [];
    setIsInstalled(installList.some((p) => p.id === product.id));
  }, [products, parsIntId]);

  // Show loading skeleton or text while fetching products
  if (loading) return <p className="text-center py-20 text-xl">Loading...</p>;

  // Find the product
  const product = products.find((p) => p.id === parsIntId);

  // Handle invalid ID (Not Found)
  if (!product) {
    return (
      <div className="text-center py-20 space-y-4">
  <img
    src="https://i.ibb.co/99HTRhVs/App-Error.png" 
    alt="App Not Found"
    className="mx-auto max-w-sm rounded-lg shadow-2xl h-[300px]"
  />
  <h1 className="text-3xl font-bold">App not found!</h1>
  <p>The app you are looking for does not exist.</p>
  <Link to="/apps">
    <button className="btn bg-blue-600 mt-4">Go Back</button>
  </Link>
</div>

    );
  }

  
  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
    description,
  } = product;

  // Install app
  const handleInstall = () => {
    const existingList = JSON.parse(localStorage.getItem("install")) || [];
    if (existingList.some((p) => p.id === product.id)) {
      toast("Already Installed!");
      return;
    }
    localStorage.setItem("install", JSON.stringify([...existingList, product]));
    setIsInstalled(true);
    toast.success("App Installed!");
  };

  // Uninstall app
  const handleUninstall = () => {
    const existingList = JSON.parse(localStorage.getItem("install")) || [];
    const updateList = existingList.filter((p) => p.id !== product.id);
    localStorage.setItem("install", JSON.stringify(updateList));
    setIsInstalled(false);
    toast.info("App Uninstalled!");
  };

  return (
    <div className="space-y-6">
      {/* App Info */}
      <div className="bg-base-200 shadow p-5 flex flex-col md:flex-row gap-12">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl h-[300px]" />
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="py-6 border-b-1">
            Developed by <span className="text-[#9F62F2]">{companyName}</span>
          </p>
          <div className="flex justify-between gap-12 pt-6">
            <p>
              <Download size={25} color="green" /> Downloads <br />
              <span className="text-3xl font-bold">{downloads}</span>
            </p>
            <p>
              <Star size={25} color="#FF8811" /> Avg Ratings <br />
              <span className="text-3xl font-bold">{ratingAvg}</span>
            </p>
            <p>
              <ThumbsUp size={25} color="blue" /> Reviews <br />
              <span className="text-3xl font-bold">{reviews}</span>
            </p>
          </div>
          <button
            onClick={isInstalled ? handleUninstall : handleInstall}
            className={`btn mt-6 text-white ${isInstalled ? "bg-gray-500" : "bg-green-500"}`}
          >
            <ToastContainer />
            {isInstalled ? "Uninstall" : `Install Now (${size}MB)`}
          </button>
        </div>
      </div>

      {/* Ratings */}
      <div className="bg-base-200 p-5 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4 text-center sm:text-left">Ratings</h2>
        <div className="w-full h-[250px] sm:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ratings} layout="vertical" margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
              <XAxis type="number" tick={{ fontSize: 12 }} />
              <YAxis dataKey="name" type="category" width={60} tick={{ fontSize: 12 }} />
              <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #ddd" }} />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Bar dataKey="count" fill="#ff9800" barSize={25} radius={0} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Description */}
      <div>
        <h1 className="text-xl font-bold mb-4 text-center sm:text-left my-5">Description</h1>
        <p className="text-[#627382]">{description}</p>
      </div>
    </div>
  );
};

export default AppsDetailsCard;
