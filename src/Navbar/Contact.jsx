import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTwitter, FaInstagramSquare, FaYoutube, FaFacebook } from 'react-icons/fa';
import Footer from '../Footer/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBooking = () => {
    toast.success("Your booking has been successfully submitted!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <div className="container mx-auto p-6 bg-gray-100 mt-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <h2 className="text-xl font-semibold text-gray-600 mt-2">How to Get in Touch?</h2>
          <p className="text-lg text-gray-500 mt-4">This section proves that you are approachable and ready to accept reviews and prior bookings. People love to associate with businesses that are friendly and communicate well. Encourage them to get in touch with you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold text-gray-800">Address</h1>
            <p className="text-lg text-gray-600 mt-2">123 Main Street, Southuppakam, Melmaruvathur</p>
            <h1 className="text-2xl font-semibold text-gray-800 mt-4">Phone</h1>
            <p className="text-lg text-gray-600 mt-2">+91 1234567890</p>
            <h1 className="text-2xl font-semibold text-gray-800 mt-4">E-mail address</h1>
            <p className="text-lg text-gray-600 mt-2">kalpanachandrasekar@gmail.com</p>
            <h1 className="text-2xl font-semibold text-gray-800 mt-4">Follow me</h1>
            <p className="text-lg text-gray-600 mt-2">Follow on social media:</p>
            <div className="flex justify-center gap-5 text-black text-3xl cursor-pointer">
              <FaFacebook className="hover:scale-125 transition-all duration-200 ease-in-out" />
              <FaTwitter className="hover:scale-125 transition-all duration-200 ease-in-out" />
              <FaInstagramSquare className="hover:scale-125 transition-all duration-200 ease-in-out" />
              <FaYoutube className="hover:scale-125 transition-all duration-200 ease-in-out" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold text-gray-800">Your Details</h1>
            <div className="mt-4">
              <div className="mb-4">
                <label className="block text-lg text-gray-600">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg text-gray-600">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg text-gray-600">Product Name</label>
                <input
                  type="text"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter product name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg text-gray-600">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter quantity"
                />
              </div>
              <button
                onClick={handleBooking}
                className="w-full py-3 mt-4 bg-orange-400 text-white text-xl font-semibold rounded-lg hover:bg-orange-600 focus:outline-none transition duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        <ToastContainer />

      </div>
      <Footer />
    </div>
  );
};

export default Contact;






