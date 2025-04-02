import React from "react";
import { useState, useEffect } from "react";
import { IoStarSharp } from "react-icons/io5";
import img1 from "/images/bestProduct1.png";
import img2 from "/images/bestProduct2.png";
import img3 from "/images/bestProduct3.png";

const BestProducts = () => {
  const [loding, setLoding] = useState(true);
  const bestProducts = [
    {
      id: 1,
      image: img1, // ✅ Remove curly braces
      title: "Casual Wear",
      description: "Lorem ipsum dolor sit amet...",
      rating: 4.9,
    },
    {
      id: 2,
      image: img2,
      title: "Printed Wear",
      description: "Lorem ipsum dolor sit amet...",
      rating: 4.8,
    },
    {
      id: 3,
      image: img3,
      title: "Women's Shirt",
      description: "Lorem ipsum dolor sit amet...",
      rating: 4.7,
    },
  ];

  return (
    <>
     
        <div className="mb-10 w-full ">
          {/* header section */}
          <div className="text-start mb-20 max-w-[600] mx-auto w-[90%] ">
              <p className="text-sm text-primary " data-aos = "fade-up">
                Top Best Selling Products for you
              </p>
              <h1 className="text-3xl font-bold " data-aos = "fade-up">Best Products</h1>
              <p className="text-md text-gray-400" data-aos = "fade-up">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                aperiam suscipit excepturi eius ullam quod soluta rerum est
                possimus ad eligendi debitis tempora quaerat distinctio quos,
                facilis optio commodi facere.
              </p>
            </div>

            <div> 
            {/* Body Section */}
            
              <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-20 md:gap-5  place-items-center  ">
                {/* card Section */}
                {bestProducts?.map((data) => {
                  return (
                    <div
                      className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 cursor-pointer dark:hover:bg-primary  hover:text-white relative shadow-xl duration-300 group max-w-[300px]  h-[270px]"
                      key={data.id}
                    >
                      {/* image  Section */}
                      <div className="absolute -top-14 left-9 ">
                        <img
                          src={data.image}
                          alt="productImage"
                          className="max-w-[140px] hover:w-[200px] block mx-auto transform  group-hover:scale-105 duration-300 drop-shadow-md "
                          data-aos="flip-right"
                        />
                      </div>

                      {/* details Section */}
                     
                      <div className="px-4 relative top-36 text-center">
                       
                        <div className="flex items-center gap-1 justify-center">
                          <IoStarSharp
                            className="text-yellow-400 "
                           
                          />
                          <IoStarSharp
                            className="text-yellow-400 "
                           
                          />
                          <IoStarSharp
                            className="text-yellow-400 "
                           
                          />
                          <IoStarSharp
                            className="text-yellow-400 "
                           
                          />
                          <IoStarSharp
                            className="text-yellow-400 "
                           
                          />
                          {/* <span data-aos="fade-up" className="dark:text-white">{data.rating}</span> */}
                        </div>
                        <h3 className="font-semibold dark:text-white">
                          {data.title}
                        </h3>
                        <p className="text-gray-500 group-hover:text-white duration-300 text-sm ">{data.description}</p>
                        <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary text-bold"> 
                          Order Now
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          
        </div>
     
    </>
  );
};

export default BestProducts;
