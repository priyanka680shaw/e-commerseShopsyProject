import React, { useEffect, useState } from "react";

const KidsWear = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("makeup", data);

        // Currently, no kids' products are available
        setProducts([]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {/* <div className="w-full h-[350px] dark:bg-gray-950 flex items-center justify-center">
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : products.length === 0 ? (
          <p className="text-white">Kids' products are not available now.</p>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product.id} className="text-white">{product.title}</li>
            ))}
          </ul>
        )}
      </div> */}
      <div  className="w-full h-[350px] dark:bg-gray-950 flex items-center justify-center">
        <h1 className="dark:text-gray-400 text-red-900 text-3xl font-bold">Product not avilable Now !!!</h1>
      </div>
    </>
  );
};

export default KidsWear;
