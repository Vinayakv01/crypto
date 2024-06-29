import React, { useState, useEffect } from 'react';
import Login from '../login/login'; // Assuming Login component is in a file named Login.jsx
import logo from "../../assets/crylogo.png";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
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

  return (
    <header className="bg-[#111826] p-4">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="" className='w-20' />
          </div>
          <div className="flex items-center space-x-4">
            <a href="/" className="text-white hover:bg-gray-200 hover:text-black text-xl rounded-full px-4 py-2">Home</a>
            {isLoggedIn && (
              <>
                <button onClick={() => navigate('/dashboard')} className="text-white hover:bg-gray-200 hover:text-black text-xl rounded-full px-4 py-2 ml-2">
                  Dashboard
                </button>
                <button onClick={handleLogout} className="text-white hover:bg-gray-200 hover:text-black text-xl rounded-full px-4 py-2">
                  Logout
                </button>
              </>
            )}
            {!isLoggedIn && (
              <button onClick={openLoginModal} className="text-white  hover:bg-gray-200 hover:text-black text-xl rounded-full px-4 py-2">
                Login
              </button>
            )}
          </div>
        </nav>
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
