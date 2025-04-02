import React, { useEffect, useState } from "react";
import { IoStarSharp } from "react-icons/io5";

const TopSellingProducts = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.log("Error fetching Data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="mt-14 mb-12 w-full">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">Top Selling Products for you</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            aperiam suscipit excepturi eius ullam.
          </p>
        </div>

        {/* Products Grid */}
        <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {loading ? (
            <p className="text-center col-span-full">Loading products...</p>
          ) : (
            productData.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-md p-4 flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[200px] w-[150px] object-cover rounded-md"
                />
                <div className="mt-3 text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {product.title}
                  </h3>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <IoStarSharp className="text-yellow-400" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {product.rating?.rate ?? "N/A"}
                    </span>
                  </div>
                  <p className="text-lg font-bold mt-1 text-primary">
                    ₹{product.price}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="mt-10 cursor-pointer bg-primary text-white py-2 px-6 rounded-md hover:bg-opacity-80 transition">
            View All Products
          </button>
        </div>
      </div>
    </>
  );
};

export default TopSellingProducts;
