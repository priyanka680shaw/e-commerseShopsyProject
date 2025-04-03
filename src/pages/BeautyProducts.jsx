import React, { useEffect, useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { setAddtoCard } from "../redux/slice/addToCart";
import beautyproductsData from "../data/beautyproductss.json"
import "react-toastify/dist/ReactToastify.css";

const BeautyProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
console.log(beautyproductsData)
const dispatch = useDispatch()
  useEffect(() => {
    const fetchBeautyProducts = async () => {
      try {
        const response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBeautyProducts();
  }, []);

  return (
    <div className= " dark:bg-gray-950 py-4">
      <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false} closeOnClick pauseOnHover draggable  />
      
      
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        
        <h1 className="text-3xl font-bold dark:text-gray-400">Beauty Products 💄💅  </h1>
        <p className="text-3xl text-primary">Top Beauty Products for You</p>
        <p className="text-xl text-gray-400">Explore the best beauty products from Maybelline.</p>
      </div>

      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
        {loading ? (
         <>
         <div
     
      className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-md p-4 flex flex-col items-center animate-pulse min-h-[300px] w-full"
    >
      {/* Image Placeholder */}
      <div className="h-[180px] w-full bg-gray-300 rounded-md"></div>

      {/* Title Placeholder */}
      <div className="mt-3 w-[80%] h-6 bg-gray-300 rounded"></div>

      {/* Rating Placeholder */}
      <div className="w-[50%] h-4 bg-gray-300 rounded mt-2"></div>

      {/* Price Placeholder */}
      <div className="w-[40%] h-5 bg-gray-300 rounded mt-2"></div>

      {/* Button Placeholder */}
      <div className="w-[90%] h-10 bg-gray-300 rounded-full mt-3"></div>
    </div>
    <div
     
      className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-md p-4 flex flex-col items-center animate-pulse min-h-[300px] w-full"
    >
      {/* Image Placeholder */}
      <div className="h-[180px] w-full bg-gray-300 rounded-md"></div>

      {/* Title Placeholder */}
      <div className="mt-3 w-[80%] h-6 bg-gray-300 rounded"></div>

      {/* Rating Placeholder */}
      <div className="w-[50%] h-4 bg-gray-300 rounded mt-2"></div>

      {/* Price Placeholder */}
      <div className="w-[40%] h-5 bg-gray-300 rounded mt-2"></div>

      {/* Button Placeholder */}
      <div className="w-[90%] h-10 bg-gray-300 rounded-full mt-3"></div>
    </div>
    <div
     
      className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-md p-4 flex flex-col items-center animate-pulse min-h-[300px] w-full"
    >
      {/* Image Placeholder */}
      <div className="h-[180px] w-full bg-gray-300 rounded-md"></div>

      {/* Title Placeholder */}
      <div className="mt-3 w-[80%] h-6 bg-gray-300 rounded"></div>

      {/* Rating Placeholder */}
      <div className="w-[50%] h-4 bg-gray-300 rounded mt-2"></div>

      {/* Price Placeholder */}
      <div className="w-[40%] h-5 bg-gray-300 rounded mt-2"></div>

      {/* Button Placeholder */}
      <div className="w-[90%] h-10 bg-gray-300 rounded-full mt-3"></div>
    </div>
    <div
     
      className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-md p-4 flex flex-col items-center animate-pulse min-h-[300px] w-full"
    >
      {/* Image Placeholder */}
      <div className="h-[180px] w-full bg-gray-300 rounded-md"></div>

      {/* Title Placeholder */}
      <div className="mt-3 w-[80%] h-6 bg-gray-300 rounded"></div>

      {/* Rating Placeholder */}
      <div className="w-[50%] h-4 bg-gray-300 rounded mt-2"></div>

      {/* Price Placeholder */}
      <div className="w-[40%] h-5 bg-gray-300 rounded mt-2"></div>

      {/* Button Placeholder */}
      <div className="w-[90%] h-10 bg-gray-300 rounded-full mt-3"></div>
    </div>
    <div
     
      className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-md p-4 flex flex-col items-center animate-pulse min-h-[300px] w-full"
    >
      {/* Image Placeholder */}
      <div className="h-[180px] w-full bg-gray-300 rounded-md"></div>

      {/* Title Placeholder */}
      <div className="mt-3 w-[80%] h-6 bg-gray-300 rounded"></div>

      {/* Rating Placeholder */}
      <div className="w-[50%] h-4 bg-gray-300 rounded mt-2"></div>

      {/* Price Placeholder */}
      <div className="w-[40%] h-5 bg-gray-300 rounded mt-2"></div>

      {/* Button Placeholder */}
      <div className="w-[90%] h-10 bg-gray-300 rounded-full mt-3"></div>
    </div>
    
     </>
        ) : (
          beautyproductsData.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-md p-4 flex flex-col items-center">
              <img src={item.image_link} alt={item.name} className="h-[200px] w-[150px] object-cover rounded-md" />
              <div className="mt-3 text-center">
                <h3 className="font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <IoStarSharp className="text-yellow-400" />
                  <span className="text-gray-600 dark:text-gray-300">{item.rating || 'N/A'}</span>
                </div>
                <p className="text-lg font-bold mt-1 text-primary">Brand: {item.brand}</p>

                <button
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
                  onClick={() => {
                    dispatch(setAddtoCard(item))
                     toast.success( 'added to cart! 🛒' , {
                                            position: "top-right",
                                            autoClose: 500,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            theme: "light",
                                          });
                  }}
                >
                  🛍️ Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BeautyProducts;