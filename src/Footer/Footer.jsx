import React from 'react';
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-orange-600 shadow-lg pt-6 pb-3 max-w-full h-auto mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-4">
        <div className="text-black text-2xl font-semibold cursor-pointer">
          <h1 className="hover:scale-125">Melody Bites</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-7 text-black text-lg gap-7 cursor-pointer">
          <Link to={'/Privacy'}><h1>Privacy Policy</h1></Link>
          <Link to={'Terms'}><h1>Terms and Conditions</h1></Link>
          <Link to={'/Contact'}><h1>Contact Us</h1></Link>
        </div>

        <div className="flex justify-center gap-5 text-black text-3xl cursor-pointer">
          <MdOutlineFacebook className='hover:scale-125 transition-all duration-200 ease-in-out' />
          <FaTwitter className='hover:scale-125 transition-all duration-200 ease-in-out' />
          <FaInstagramSquare className='hover:scale-125 transition-all duration-200 ease-in-out' />
          <FaYoutube className='hover:scale-125 transition-all duration-200 ease-in-out' />
        </div>
      </div>

      <hr className="my-6 border-white" />

      <div className="text-center">
        <h1 className="text-black text-sm">© 2025 Melody Bites. All rights reserved.</h1>
      </div>
    </div>
  );
}

export default Footer;
