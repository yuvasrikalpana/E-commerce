import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSearch } from "react-icons/fa";
import Footer from '../Footer/Footer';

const Menu = () => {
  const handleClick = () => {
    toast.success("Your order has been placed!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const [quantities, setQuantities] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const food = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTWxuA6FX2OKRNFz_4MLNiHdYWq3rqdIpEPg&s",
      title: "Onion Samosa",
      price: "15$",
    },
    {
      img: "https://wallpapers.com/images/hd/samosaswith-chutneys-61vnlhkcnwcjjyr6-61vnlhkcnwcjjyr6.png",
      title: "Potato Samosa",
      price: "15$",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2B2zoFJ_jFe4mw_kEVwozaywDdFqZ8blyg&s",
      title: "Chicken Samosa",
      price: "20$",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSBBluAqTnXkW3WZ9ztHhVkVOKM3pqKjuXUw&s",
      title: "Mushroom Samosa",
      price: "15$",
    },
    {
      img: "https://www.pngkit.com/png/full/257-2577683_paneer-samosa.png",
      title: "Paneer Samosa",
      price: "15$",
    },
    {
      img: "https://thomsonline.in/wp-content/uploads/2020/07/Thoms-chicken-samosa-122.jpg",
      title: "Meal Maker Samosa",
      price: "15$",
    },
  ];

  const updateQuantity = (itemTitle, operation) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[itemTitle] || 0;
      let newQuantity = currentQuantity;

      if (operation === 'increment') {
        newQuantity = currentQuantity + 1;
      } else if (operation === 'decrement' && currentQuantity > 0) {
        newQuantity = currentQuantity - 1;
      }

      return {
        ...prevQuantities,
        [itemTitle]: newQuantity,
      };
    });
  };

  const toggleFavorite = (title) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(title)) {
        return prevFavorites.filter((item) => item !== title);
      } else {
        return [...prevFavorites, title];
      }
    });
  };

  const filteredFood = food.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="container mx-auto p-10 pl-5 bg-gray-100 mt-8">
        <div className='flex justify-between items-center mb-8 pb-10'>
          <h1 className="text-4xl font-bold">Our Menu</h1>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 p-2 rounded-md mr-2"
            />
            <FaSearch className="text-2xl" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 pl-15">
          {filteredFood.map((item, index) => (
            <div key={index} className="bg-orange-300 shadow-md rounded-lg p-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-full object-cover rounded-md mb-4 h-80"
              />
              <h2 className="text-2xl font-semibold mb-2 text-center">{item.title}</h2>
              <p className="text-lg text-gray-600 text-center">{item.price}</p>

              <div className="flex flex-col items-center mt-4">
                <button
                  className={`w-full py-2 text-blck font-semibold rounded-md ${favorites.includes(item.title) ? 'bg-orange-400' : 'bg-orange-600'}`}
                  onClick={() => toggleFavorite(item.title)}
                >
                  <FaHeart className={`inline-block ${favorites.includes(item.title) ? 'text-orange-400' : 'text-orange-600'}`} />
                  {favorites.includes(item.title) ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>

                <div className="flex items-center justify-center space-x-4 mt-4">
                  <button
                    onClick={() => updateQuantity(item.title, 'decrement')}
                    className="bg-red-500 text-white px-4 py-2 rounded-full"
                  >
                    Remove -
                  </button>
                  <span className="text-xl">{quantities[item.title] || 0}</span>
                  <button
                    onClick={() => updateQuantity(item.title, 'increment')}
                    className="bg-green-500 text-white px-4 py-2 rounded-full"
                  >
                    Quty Add+
                  </button>
                </div>

                <button
                  onClick={handleClick}
                  className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-400 transition duration-300 mt-4"
                >
                  Order Now
                </button>

              </div>
            </div>
          ))}
        </div>

        <ToastContainer />

      </div>
      <Footer />
    </div>
  );
};

export default Menu;
