import React, { useState } from 'react';
import { CiLock, CiUnlock } from 'react-icons/ci';
import { FaUserLarge } from 'react-icons/fa6';
import Footer from '../Footer/Footer';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://your-api-endpoint/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Registration successful!');
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Login functionality will be implemented.');
  };

  return (
    <div>
      <div className="flex justify-evenly items-center p-6 bg-gray-100 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">{isRegister ? 'Register' : 'Member Login'}</h1>

          {isRegister ? (
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label className="block text-gray-600 text-lg">Username</label>
                <div className="flex items-center border border-gray-300 rounded-lg mt-2">
                  <input
                    type="text"
                    placeholder="Enter a username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <FaUserLarge className="text-gray-500 mx-2" />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-lg">Email</label>
                <div className="flex items-center border border-gray-300 rounded-lg mt-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-lg">Password</label>
                <div className="flex items-center border border-gray-300 rounded-lg mt-2">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <CiLock className="text-gray-500 mx-2" />
                  <CiUnlock className="text-gray-500 mx-2" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-400 transition duration-300"
              >
                Register
              </button>
            </form>
          ) : (
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-600 text-lg">Username</label>
                <div className="flex items-center border border-gray-300 rounded-lg mt-2">
                  <input
                    type="text"
                    placeholder="Enter a username"
                    className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <FaUserLarge className="text-gray-500 mx-2" />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-lg">Password</label>
                <div className="flex items-center border border-gray-300 rounded-lg mt-2">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <CiLock className="text-gray-500 mx-2" />
                  <CiUnlock className="text-gray-500 mx-2" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-400 transition duration-300 cursor-pointer"
              >
                Login
              </button>
            </form>
          )}

          <div className="mt-4 text-center">
            <h2
              onClick={() => setIsRegister(!isRegister)}
              className="text-sm text-gray-600 cursor-pointer hover:underline"
            >
              {isRegister ? 'Already have an account? Login' : 'Forget password?'}
            </h2>
            {!isRegister && (
              <h2
                onClick={() => setIsRegister(true)}
                className="text-sm text-gray-600 mt-2 cursor-pointer hover:underline"
              >
                Don't have an account? Register
              </h2>
            )}
          </div>
        </div>

        <div className="w-1/3 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Quick Service Shop</h1>
          <p className="text-lg text-gray-600 mb-4">Your Perfect Place to Taste Delicious Snacks</p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbVPtvrT13OyM_cQvM7j1hqAk7LZhzessYEQ&s"
            alt="Restaurant Image"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;



