import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import logo from "/images/logo.png";

const Footer = () => {
  const footerLinks = [
    { title: "Home", link: "/#" },
    { title: "About", link: "/#" },
    { title: "Contact", link: "/#" },
    { title: "Blog", link: "/#" },
  ];

  return (
<div className="overflow-x-hidden bg-primary/40 dark:bg-gray-800 dark:text-white transition-colors duration-200 w-full">


    {/* // <div className="overflow-x-hidden dark:bg-gray-950 dark:text-white duration-200 bg-primary w-full h-5" style={{ background: "#f8D6A4" }}> */}
      <div className="container mx-auto py-8 px-6 w-[90%]">
        {/* Footer Content */}
        <div className=" flex-wrap xl:flex  lg:flex-row lg:justify-between gap-y-10"> 
  {/* Company Details */}
  <div className="w-full md:w-1/3">
    <h1 className="sm:text-3xl text-xl font-bold flex items-center gap-3">
      <img src={logo} alt="logo" className="w-12" />
      Shopsy
    </h1>
    <p className="mt-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
      dolore quam nobis nesciunt modi, vitae repellat repudiandae nemo
      beatae numquam sequi quasi excepturi eius sunt molestias alias
      delectus quae voluptatibus.
    </p>
  </div>

  {/* Links and Contact */}
  <div className="sm:flex flex-wrap justify-between w-full md:w-2/3 gap-y-8 sm:flex-col">
    {/* Important Links */}
    <div className="w-1/3">
      <h1 className="sm:text-2xl text-xl font-bold mb-3">Important Links</h1>
      <ul className="flex flex-col gap-2">
        {footerLinks.map((link) => (
          <li key={link.title} className="cursor-pointer hover:text-primary hover:translate-x-1 transition duration-300">
            {link.title}
          </li>
        ))}
      </ul>
    </div>

    {/* More Links */}
    <div className="w-1/3">
      <h1 className="sm:text-2xl text-xl font-bold mb-3">More Links</h1>
      <ul className="flex flex-col gap-2">
        {footerLinks.map((link) => (
          <li key={link.title} className="cursor-pointer hover:text-primary hover:translate-x-1 transition duration-300">
            {link.title}
          </li>
        ))}
      </ul>
    </div>

    {/* Contact Section */}
    <div className="w-1/3">
      <h1 className="sm:text-2xl text-xl font-bold mb-3">Contact Us</h1>
      <ul className="flex flex-col gap-3">
        <li className="flex items-center gap-2 cursor-pointer hover:text-primary hover:translate-x-1 transition duration-300">
          <FaEnvelope className="text-lg cursor-pointer hover:text-primary hover:translate-x-1 transition duration-300" /> priyanka680@gmail.com
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-primary hover:translate-x-1 transition duration-300">
          <FaPhone className="text-lg cursor-pointer hover:text-primary hover:translate-x-1 transition duration-300" /> +91 8777493783
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-primary hover:translate-x-1 transition duration-300">
          <FaMapMarkerAlt className="text-lg cursor-pointer hover:text-primary hover:translate-x-1 transition duration-300" /> Kolkata, India
        </li>
      </ul>
    </div>

     {/* More Links */}
     <div className="w-1/3">
      <h1 className="sm:text-2xl text-xl font-bold mb-3">More Links</h1>
      <ul className="flex flex-col gap-2">
        {footerLinks.map((link) => (
          <li key={link.title} className="cursor-pointer hover:text-primary hover:translate-x-1 transition duration-300">
            {link.title}
          </li>
        ))}
      </ul>
    </div>

  </div>
</div>


        {/* Social Icons */}
   
        <div className="mt-10 mb-6 border-t border-gray-700 pt-4 sm:flex justify-between items-center sm:flex-col sm:gap-3">
          <p className="sm:my-4">© 2025 Shopsy. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary text-2xl ">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-primary text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-primary text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-primary text-2xl">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-primary text-2xl">
              <FaYoutube />
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
