import axios from "axios";
import React, { useEffect, useState } from "react";

const UseProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("../appsData.json")
      .then((data) => setProducts(data.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};

export default UseProducts;
