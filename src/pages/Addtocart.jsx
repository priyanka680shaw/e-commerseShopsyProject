import React from "react";
import cartImage from "/images/shopping.jpg";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { setAddtoCard, setRemoveFromCart, setRemoveItemFromCart } from "../redux/slice/addToCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Addtocart = () => {
  const cartItems = useSelector((state) => state.cart.cardDataItems || []);
  console.log("cartItems" , cartItems)
  const dispatch = useDispatch();

  

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center p-6">

       <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} closeOnClick pauseOnHover draggable theme="dark" />
      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center text-center">
          <img src={cartImage} alt="Shopping Cart" className="w-60 h-60 object-contain mb-6" />
          <h1 className="font-bold text-4xl text-red-700">
            Your Shopping Cart is Empty! <br /> Fill it with Amazing Products.
          </h1>
        </div>
      ) : (
        <div className="w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
              >
                {/* Product Image */}
                {/* <img src={item.image || item.image_link} alt={item.title || item.name || item.images[0]} className="w-20 h-20 object-contain" /> */}
                
                <img src={item.image || item.image_link || (item.images && item.images[0])} alt={item.title || item.name}  className="w-20 h-20 object-contain"/>


                {/* Product Details */}
                <div className="flex-1 ml-4">
                  <h3 className="font-semibold text-lg">{item.title || item.name}</h3>
                  <p className="text-primary font-bold">₹{item.price}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      dispatch(setRemoveFromCart(item.id))

                      
                    toast.error("Item Decrease from cart! 🛒", {
                      position: "top-right",
                      autoClose: 500,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      theme: "light",
                    });
                    }}
                    className="bg-gray-300 p-2 rounded-md hover:bg-gray-400"
                  >
                    <AiOutlineMinus size={20} />
                  </button>
                  <span className="font-bold">{item.quantity}</span>
                  <button
                    onClick={() => {dispatch(setAddtoCard(item))
                      
                    toast.success("One More Item from cart! 🛒", {
                      position: "top-right",
                      autoClose: 500,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      theme: "light",
                    });
                    }}
                    className="bg-gray-300 p-2 rounded-md hover:bg-gray-400"
                  >
                    <AiOutlinePlus size={20} />
                  </button>
                </div>

                {/* ❌ Remove Item Completely */}
                <button
                  onClick={() =>{
                    dispatch(setRemoveItemFromCart(item.id))

                    toast.warning("Removed from cart! 🛒", {
                      position: "top-right",
                      autoClose: 500,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      theme: "light",
                    });
                  } 



                    
                  } // ✅ Remove product on click
                  className="text-red-500 hover:text-red-700 ml-4"
                >
                  <AiOutlineClose size={24} />
                </button>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="mt-6 text-xl font-bold">
            Total: ₹
            {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Addtocart;
