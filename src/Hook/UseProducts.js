import axios from "axios";
import { useEffect, useState } from "react";

const UseProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("/appsData.json")
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};

export default UseProducts;
