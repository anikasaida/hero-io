import React from "react";
import HeroSection from "./HeroSection";
import UseProducts from "../Hook/UseProducts"; 
import AppsCard from "./AppsCard"; 


const Home = () => {
  const { products, loading, error } = UseProducts();
  const featuredProducts = products.slice(0, 8);

  if (loading) return <h1 className="text-center py-10">Loading...</h1>;
  if (error) return <h1 className="text-center py-10 text-red-500">Error: {error.message}</h1>;

  return (
    <div>
      <HeroSection />

      <div className="text-center py-8 space-y-3">
        <h1 className="text-3xl font-bold">Trending Apps</h1>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5">
        {featuredProducts.map((product) => (
          <AppsCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center py-5">
        <button
          onClick={() => (window.location.href = "/apps")} 
          className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default Home;
