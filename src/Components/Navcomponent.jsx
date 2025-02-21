import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const Navcomponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-orange-600 p-4 pl-5 sticky shadow-lg h-20 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center pb-7">
        <div className='flex items-center gap-3'>
          <img src='https://i.pinimg.com/736x/ab/ff/d8/abffd8d99ebc0d1ff3b15257320a0007.jpg'
            className='h-15 w-20 pl-5' alt="Logo" />
          <h1 className='font-bold text-3xl text-white font-serif'>Melody Bites</h1>
        </div>

        <div className="block md:hidden">
          <FaBars className="text-white text-2xl cursor-pointer" onClick={toggleMobileNav} />
        </div>

        <ul className={`flex md:flex-row flex-col md:space-x-6 gap-20 md:gap-0 md:items-center mt-5 md:mt-0 ${isNavOpen ? 'block' : 'hidden'} transition-all ease-in-out duration-300`}>
          <li>
            <Link to={"/"} className="text-white hover:text-black transition-colors">Home</Link>
          </li>
          <li className="flex items-center space-x-2 relative" ref={menuRef}>
            <Link to={"/menu"} className="text-white hover:text-black transition-colors">Menu</Link>

            {isMenuOpen && (
              <div className="absolute bg-white shadow-lg mt-2 rounded-md w-48 text-center py-2">
                <h1 className="text-gray-800">Onion Samosa</h1>
                <h1 className="text-gray-800">Potato Samosa</h1>
                <h1 className="text-gray-800">Chicken Samosa</h1>
                <h1 className="text-gray-800">Mushroom Samosa</h1>
                <h1 className="text-gray-800">Panner Samosa</h1>
                <h1 className="text-gray-800">Mealmaker Samosa</h1>
              </div>
            )}
          </li>
          <li>
            <Link to={"/contact"} className="text-white hover:text-black transition-colors">Contact</Link>
          </li>
          <li>
            <Link to={"/profile"} className="text-white hover:text-black transition-colors">Profile</Link>
          </li>
        </ul>

        <div className="hidden md:flex space-x-6">
          <Link to={"/"} className="text-white hover:text-black transition-colors">Home</Link>
          <Link to={"/menu"} className="text-white hover:text-black transition-colors">Menu</Link>
          <Link to={"/contact"} className="text-white hover:text-black transition-colors">Contact</Link>
          <Link to={"/profile"} className="text-white hover:text-black transition-colors">Profile</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navcomponent;
