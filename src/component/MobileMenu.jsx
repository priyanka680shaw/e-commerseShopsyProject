import React from 'react'
import { Link } from 'react-router-dom';
const MobileMenu = () => {

    const menu = [
        { path: '/', label: 'Home' },
        { path: '/beautyProducts', label: 'Beauty Products' },
        // { path: '/kidswear', label: 'Kids Wear' },
        { path: '/womenswear', label: 'Womens Wear' },
        { path: '/menswear', label: 'Mens Wear' },
        {path  : '/sunglasses' , label : 'Sunglasses'}
     
    ];
  return (
    <>
                    <div className='dark:bg-gray-950 sm:flex justify-center  dark:text-white py-2 shadow-md absolute right-0 w-[70%] h-[80vh] bg-gray-200'>
                    <ul className='flex  gap-6 flex-col'>
                        {menu.map((data, idx) => (
                            <li key={idx}>
                                <Link to={data.path} className='inline-block px-4 hover:text-primary duration-200 font-bold text-md'>
                                    {data.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
    </>
  )
}

export default MobileMenu