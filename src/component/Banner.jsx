import React from "react";
import bannerImg from "/images/product2.jpg";
import { GrSecure } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
const Banner = () => {
    return (
        <>
            <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gag-6 items-center ">
                        {/* image Section */}
                        <div data-aos="zoom-in">
                            <img
                                src={bannerImg}
                                alt="Banner image"
                                className="max-w-[440px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1) object-cover"
                            />
                        </div>
                        {/* text details */}
                        <div className="flex flex-col justify-center gap-6 sm:pt-0">
                            <h1 className="text-3xl sm:text-4xl font-bold ">
                                Winter Sale is Up to 50% off!
                            </h1>
                            <p className="text-md text-gray-400 tracking-wide leading-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                                corporis nemo! Dolorem cum architecto, minima iusto quam eaque
                                quo fuga dicta soluta mollitia cupiditate unde, optio eveniet
                                ipsa, omnis voluptatem.
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4" data-aos="fade-up">
                                    <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />

                                    <p>Quality Products</p>
                                </div>
                                <div className="flex items-center gap-4" data-aos="fade-up">
                                    <TbTruckDelivery className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />

                                    <p>Fast Delivery</p>
                                </div>
                                <div className="flex items-center gap-4" data-aos="fade-up">
                                    <MdOutlinePayments className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />

                                    <p>Easy Payment Method</p>
                                </div>
                                <div className="flex items-center gap-4" data-aos="fade-up">
                                    <BiSolidOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                                    <p>Get Offers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
