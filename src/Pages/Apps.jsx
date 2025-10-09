import React, { useState } from "react";
import UseProducts from "../Hook/UseProducts";
import AppsCard from "./AppsCard";

const Apps = () => {
  const { products } = UseProducts();

  //   Search Field
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchProducts = term
    ? products.filter((p) => p.title.toLocaleLowerCase().includes(term))
    : products;

  return (
    <div>
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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5 ">
        {term && searchProducts.length === 0 ? (
          <h1 className="text-center text-xl font-semibold col-span-full">
            Not Found 😔
          </h1>
        ) : (
          searchProducts.map((product) => (
            <AppsCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Apps;
