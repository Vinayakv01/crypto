import React, { useState, useEffect } from 'react';
import Login from '../login/login'; // Assuming Login component is in a file named Login.jsx
import logo from "../../assets/crylogo.png";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track mobile menu state
  const navigate = useNavigate();

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setIsLoggedIn(true); // Set login state to true if authToken exists
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear authToken from localStorage
    setIsLoggedIn(false); // Update login state
    navigate('/'); // Redirect to home or login page
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md p-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className={`flex items-center ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
          <img src={logo} alt="Logo" className='w-20' />
        </div>
        <div className="flex items-center md:hidden">
          <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <div className={`flex-col md:flex md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 ${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex absolute top-0 left-0 w-full bg-white p-4 md:static md:w-auto md:bg-transparent`}>
          {isMobileMenuOpen && (
            <div className="flex justify-between w-full">
              <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          )}
          <a href="/" className="text-black hover:bg-gray-800 hover:text-white text-lg rounded-lg px-4 py-2 transition duration-300">Home</a>
          {isLoggedIn && (
            <>
              <button onClick={() => navigate('/dashboard')} className="text-black hover:bg-gray-800 hover:text-white text-lg rounded-lg px-4 py-2 transition duration-300">
                Dashboard
              </button>
              <button onClick={handleLogout} className="text-black hover:bg-gray-800 hover:text-white text-lg rounded-lg px-4 py-2 transition duration-300">
                Logout
              </button>
            </>
          )}
          {!isLoggedIn && (
            <button onClick={openLoginModal} className="text-black hover:bg-gray-800 hover:text-white text-lg rounded-lg px-4 py-2 transition duration-300">
              Login
            </button>
          )}
        </div>
      </div>
      {isLoginOpen && <Login onClose={closeLoginModal} />}
    </header>
  );
};

export default Header;















// import React, { useState, useEffect } from 'react';
// import Login from '../login/login'; // Assuming Login component is in a file named Login.jsx
// import logo from "../../assets/crylogo.png";
// import { useNavigate } from 'react-router-dom';

// const Header = () => {
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
//   const navigate = useNavigate();

//   const openLoginModal = () => {
//     setIsLoginOpen(true);
//   };

//   const closeLoginModal = () => {
//     setIsLoginOpen(false);
//   };

//   useEffect(() => {
//     const authToken = localStorage.getItem('authToken');
//     if (authToken) {
//       setIsLoggedIn(true); // Set login state to true if authToken exists
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('authToken'); // Clear authToken from localStorage
//     setIsLoggedIn(false); // Update login state
//     navigate('/'); // Redirect to home or login page
//   };

//   return (
//     <header className="bg-white shadow-md p-4">
//       <div className="container mx-auto">
//         <nav className="flex items-center justify-between">
//           <div className="flex items-center">
//             <img src={logo} alt="" className='w-20' />
//           </div>
//           <div className="flex items-center space-x-4">
//             <a href="/" className="text-black hover:bg-gray-600 hover:text-white text-xl rounded-full px-4 py-2">Home</a>
//             {isLoggedIn && (
//               <>
//                 <button onClick={() => navigate('/dashboard')} className="text-black hover:bg-gray-600 hover:text-white text-xl rounded-full px-4 py-2 ml-2">
//                   Dashboard
//                 </button>
//                 <button onClick={handleLogout} className="text-black hover:bg-gray-600 hover:text-white text-xl rounded-full px-4 py-2">
//                   Logout
//                 </button>
//               </>
//             )}
//             {!isLoggedIn && (
//               <button onClick={openLoginModal} className="text-black hover:bg-gray-600 hover:text-white text-xl rounded-full px-4 py-2">
//                 Login
//               </button>
//             )}
//           </div>
//         </nav>
//       </div>
//       {isLoginOpen && <Login onClose={closeLoginModal} />}
//     </header>
//   );
// };

// export default Header;











// import React, { useState, useEffect } from 'react';
// import Login from '../login/login'; // Assuming Login component is in a file named Login.jsx
// import logo from "../../assets/crylogo.png";
// import { useNavigate } from 'react-router-dom';

// const Header = () => {
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
//   const navigate = useNavigate();

//   const openLoginModal = () => {
//     setIsLoginOpen(true);
//   };

//   const closeLoginModal = () => {
//     setIsLoginOpen(false);
//   };

//   useEffect(() => {
//     const authToken = localStorage.getItem('authToken');
//     if (authToken) {
//       setIsLoggedIn(true); // Set login state to true if authToken exists
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('authToken'); // Clear authToken from localStorage
//     setIsLoggedIn(false); // Update login state
//     navigate('/'); // Redirect to home or login page
//   };

//   return (
//     <header className="bg-[#111826] p-4">
//       <div className="container mx-auto">
//         <nav className="flex items-center justify-between">
//           <div className="flex items-center">
//             <img src={logo} alt="" className='w-20' />
//           </div>
//           <div className="flex items-center">
//             <a href="/" className="text-white hover:text-gray-200 px-3 py-2">Home</a>
//             {isLoggedIn ? (
//               <>
//                 <button onClick={handleLogout} className="text-white hover:text-gray-200 px-3 py-2">
//                   Logout
//                 </button>
//                 <button onClick={() => navigate('/dashboard')} className="text-white hover:text-gray-200 px-3 py-2 ml-2">
//                   Dashboard
//                 </button>
//               </>
//             ) : (
//               <button onClick={openLoginModal} className="text-white hover:text-gray-200 px-3 py-2">
//                 Login
//               </button>
//             )}
//           </div>
//         </nav>
//       </div>
//       {isLoginOpen && <Login onClose={closeLoginModal} />}
//     </header>
//   );
// };

// export default Header;
