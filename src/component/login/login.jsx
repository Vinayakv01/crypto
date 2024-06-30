import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";

const Login = ({ onClose }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleLoginSuccess = async (data) => {
    const { token, userId } = data;
    localStorage.setItem('authToken', token);
    localStorage.setItem('userId', userId);
    setIsModalOpen(false);
    onClose();
    navigate('/dashboard');
    window.location.reload();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new URLSearchParams();
    formData.append('login', login);
    formData.append('password', password);

    try {
      const response = await axios.post('http://apiweb.urbandiners.com/api/login', formData.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      console.log('Login successful', response.data);
      handleLoginSuccess(response.data);
    } catch (error) {
      console.error('Login failed', error);
      setError('Login failed. Please check your login and password.');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#111826] rounded-lg p-8 relative w-full max-w-md">
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 m-4 text-gray-500 hover:text-red-700"
            >
              <RxCross2 size={24} />
            </button>
            <h2 className="text-3xl text-center text-white mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-white">
                  User ID
                  <input
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-white">
                  Password
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                  />
                </label>
              </div>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className=" text-white hover:text-black px-8 py-2 text-xl rounded-full hover:bg-gray-200 focus:outline-none"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
