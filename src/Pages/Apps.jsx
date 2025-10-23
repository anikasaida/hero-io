import React, { useEffect, useState } from "react";
import UseProducts from "../Hook/UseProducts";
import AppsCard from "./AppsCard";
import appErrorImg from "../assets/App-Error.png";
import { Link, useNavigation } from "react-router";
import LoadingSkeleton from "./LoadingSkeleton";
import LoadingText from "./LoadingText";

const Apps = () => {
  const { products, loading } = UseProducts();
  const navigation = useNavigation(); 

  // Search Field
  const [search, setSearch] = useState("");
  const [loadingSearching, setLoadingSearching] = useState(false);

  const term = search.trim().toLowerCase();
  const searchProducts = term
    ? products.filter((p) => p.title.toLowerCase().includes(term))
    : products;

  useEffect(() => {
    if (term) {
      setLoadingSearching(true);
      const timeout = setTimeout(() => {
        setLoadingSearching(false);
      }, 500);
      return () => clearTimeout(timeout);
    } else {
      setLoadingSearching(false);
    }
  }, [term]);

 
  const isRouteLoading = navigation.state === "loading";

  
  const isLoading = loading || loadingSearching || isRouteLoading;

  return (
    <div className="max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12">
     
      <div className="text-center py-8 space-y-3">
        <h1 className="text-3xl font-bold">Our All Applications</h1>
        <p className="text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* Search Section */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold">
          ( {searchProducts.length} ) Apps Found
        </h1>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search Apps"
          />
        </label>
      </div>

      {/* Main Content */}
      <div className="mt-5">
        {isLoading ? (
        
          <LoadingText />
        ) : term && searchProducts.length === 0 ? (
        
          <div className="text-center py-8 space-y-4">
            <img src={appErrorImg} alt="" className="mx-auto h-[300px]" />
            <h1 className="text-3xl font-bold">No Apps found!</h1>
            <p>The page you are looking for is not available.</p>
            <Link to="/">
              <button className="btn bg-blue-600">Go Back!</button>
            </Link>
          </div>
        ) : (
        
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5">
            {searchProducts.map((product) => (
              <AppsCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
