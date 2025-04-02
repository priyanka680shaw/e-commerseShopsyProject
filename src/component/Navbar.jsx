import React, { useState, useEffect } from 'react';
import logo from "/images/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import { setProduct , setOriginalProduct , setResetProduct } from '../redux/slice/homeSlice';
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import MobileMenu from './MobileMenu';

const Navbar = () => {
    const [mobileMenuOPen , setMobileMenuOpen] = useState(false)
    console.log(mobileMenuOPen)
    const menu = [
        { path: '/', label: 'Home' },
        { path: '/beautyProducts', label: 'Beauty Products' },
        // { path: '/kidswear', label: 'Kids Wear' },
        { path: '/womenswear', label: 'Womens Wear' },
        { path: '/menswear', label: 'Mens Wear' },
        {path  : '/sunglasses' , label : 'Sunglasses'}
     
    ];
    const dispatch = useDispatch()
    const [isDarkModeTrue, setIsDarkModeTrue] = useState(false);
   
    // card added or remooved Items
    const cardData = useSelector((state)=>state.cart.cartCount)
    
  
// SEARCH FUNCTION
const allProducts = useSelector((state) => state.home.originalProducts); // Get full product list

function searchProduct(e) {
    const query = e.target.value.toLowerCase().trim();
    console.log(query);

    if (!Array.isArray(allProducts) || allProducts.length === 0) return;

    if (query === "") {
        dispatch(setResetProduct()); // Reset to full list when input is empty
    } else {
        // Fix: Return filtered products
        const searchedData = allProducts.filter((data) =>
            data.category.toLowerCase().includes(query)
        );
        dispatch(setProduct(searchedData)); // Update Redux with filtered data
    }
}
    useEffect(() => {
        if (isDarkModeTrue) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkModeTrue]);

    return (
        <>
            {/* Navbar */}
            <div className='fixed top-0 left-0 w-full z-50 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200'>
                
                {/* Upper Navbar */}
                <div className='bg-primary/40 py-2'>
                    <div className='container flex justify-between items-center mx-auto w-[90%]'>
                        {/* Logo */}
                        <div>
                            <Link to="/" className='font-bold text-2xl sm:text-3xl flex gap-2 items-center'>
                                <img src={logo} alt="logo" className='w-10' />
                                <span>Shopsy</span>
                            </Link>
                        </div>

                        {/* Search & Order Button */}
                        <div className='flex justify-between items-center gap-4'>
                            <div className='relative group hidden sm:block'>
                                <input
                                    type="text"
                                    placeholder='Search'
                                    onChange={searchProduct}
                                    className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1'
                                />
                                <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
                            </div>

                            {/* Cart Button */}
                            <button className='relative  transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group dark:bg-gray-800 bg-gradient-to-r from-primary to-secondary'>
                                <span className='group-hover:block hidden transition-all duration-200 font-bold'>Order</span>
                                <Link to="/addtocart">
                                    <FaShoppingCart className='text-xl text-white drop-shadow-sm cursor-pointer ' />
                                </Link>
                                <span className='text-white font-bold text-xl'>{cardData}</span>
                            </button>

                            {/* Dark Mode Switch */}
                            <div 
                                className='cursor-pointer bg-gradient-to-r from-primary to-secondary rounded-full p-2 '
                                onClick={() => setIsDarkModeTrue(prev => !prev)}
                            >
                                {isDarkModeTrue ? <FaMoon className='text-white text-2xl font-bold' /> : <FaSun className='text-white text-2xl font-bold' />}
                            </div>
                            <div 
                                className='text-white font-extrabold text-2xl cursor-pointer bg-gradient-to-r from-primary to-secondary rounded-full p-2 rotate-90 md:hidden'
                                // onClick={() => setIsDarkModeTrue(prev => !prev)}
                            >
                                    <HiOutlineAdjustmentsVertical onClick ={()=>
                                        setMobileMenuOpen((prev)=>!prev)
                                    }/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lower Navbar */}
                <div className='flex justify-center bg-white dark:bg-gray-900 py-2 shadow-md'>
                    <ul className='md:flex hidden items-center gap-6'>
                        {menu.map((data, idx) => (
                            <li key={idx}>
                                <Link to={data.path} className='inline-block px-4 hover:text-primary duration-200 font-bold text-md'>
                                    {data.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                

                <div className=''>
                    {
                        mobileMenuOPen && <MobileMenu/>
                    }
                </div>
            </div>
          

            {/* Prevent Content Overlap - Ensure Bottom Content is Not Hidden */}
            <div className='pt-[80px] sm:pt-[100px] dark:bg-gray-950'></div>
        </>
    );
};

export default Navbar;
