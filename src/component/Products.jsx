import React, { useEffect, useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setProduct , setOriginalProduct } from "../redux/slice/homeSlice";
import { setAddtoCard } from "../redux/slice/addToCart";
// ✅ Import Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
const products = useSelector((state)=>state.home.product)
    // console.log("productsdata", products)
    const original = useSelector((state)=>state.home)
    // console.log("orignal", products)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        setProductData(data);
        setLoading(false);
        dispatch(setProduct(data));
        dispatch(setOriginalProduct(data))
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="mt-14 mb-12 w-full">
        {/* ✅ Toast Container (MUST be inside the component) */}
        <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} closeOnClick pauseOnHover draggable theme="dark" />

        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-3xl text-primary">Top Selling Products for you</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-xl text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam suscipit excepturi eius ullam.
          </p>
        </div>

        {/* Products Grid */}
        <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
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
            products.map((product) => (
              <div key={product.id} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-md p-4 flex flex-col items-center">
                <img src={product.image} alt="productImage" className="h-[200px] w-[150px] object-cover rounded-md" />
                <div className="mt-3 text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{product.title}</h3>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <IoStarSharp className="text-yellow-400" />
                    <span className="text-gray-600 dark:text-gray-300">{product.rating.rate}</span>
                  </div>
                  <p className="text-lg font-bold mt-1 text-primary">₹{product.price}</p>

                  {/* ✅ Add to Cart Button with Toastify Notification */}
                  <button
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
                    onClick={() => {
                      dispatch(setAddtoCard(product)); // ✅ Add product to Redux store
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

export default Products;
