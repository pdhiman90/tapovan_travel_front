// "use client";
// import React from "react";
// import { useState } from "react";
// import { Link } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const token = localStorage.getItem('token')
  
//   return (
//     <div className="relative">
//       <nav className="bg-gray-800 shadow-md p-4">
//         <div className="flex items-center justify-between">
//           <div className="text-xl font-bold font-poppins text-white">
//             <Link to="/" className="text-white hover:text-blue-400">
//               Tapovan Travels
//             </Link>
//           </div>

//           {/* {!token&& <div className="hidden md:flex space-x-4">
//             <Link to="/" className="text-white hover:text-blue-400">
//               Home
//             </Link>
//             <Link to="/signup" className="text-white hover:text-blue-400">
//               Sign Up
//             </Link>
//           </div>} */}

//           <div className="hidden md:flex gap-4">
//             <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
//               Login
//             </Link>
//             <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
//               Register
//             </Link>
//           </div>

//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden text-white"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>

//         {isMenuOpen && (
//           <div className="md:hidden mt-4 space-y-2">
//             <Link
//               to="/"
//               onClick={() => setIsMenuOpen(false)}
//               className="block text-white hover:text-blue-400 py-2 px-4 rounded-md transition-colors"
//             >
//               Home
//             </Link>
//             <Link
//               to="/login"
//               onClick={() => setIsMenuOpen(false)}
//               className="block bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-md transition-colors"
//             >
//               Login
//             </Link>
//             <Link
//               to="/signup"
//               onClick={() => setIsMenuOpen(false)}
//               className="block bg-white text-gray-800 hover:bg-gray-100 py-2 px-4 rounded-md transition-colors"
//             >
//               Register
//             </Link>
//           </div>
//         )}
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div
//           className="md:hidden absolute top-15 left-0 right-0 bg-gray-800 shadow-md z-50"
//           style={{
//             animation: isMenuOpen ? "slideIn 0.3s ease-out" : "slideOut 0.3s ease-in"
//           }}
//         >
//           <div className="flex flex-col p-4 space-y-4">
//             <button
//               className="w-full py-2 text-white border border-white rounded hover:bg-gray-700"
//               style={{
//                 animation: isMenuOpen ? "fadeIn 0.3s ease-out" : "fadeOut 0.3s ease-in"
//               }}
//             >
//               Login
//             </button>
//             <button
//               className="w-full py-2 bg-white text-gray-800 rounded hover:bg-gray-100"
//               style={{
//                 animation: isMenuOpen ? "fadeIn 0.3s ease-out 0.1s" : "fadeOut 0.3s ease-in 0.1s"
//               }}
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>
//       )}
//       <style>{`
//         @keyframes slideIn {
//           0% {
//             transform: translateY(-100%);
//           }
//           100% {
//             transform: translateY(0);
//           }
//         }
//         @keyframes slideOut {
//           0% {
//             transform: translateY(0);
//           }
//           100% {
//             transform: translateY(-100%);
//           }
//         }
//         @keyframes fadeIn {
//           0% {
//             opacity: 0;
//           }
//           100% {
//             opacity: 1;
//           }
//         }
//         @keyframes fadeOut {
//           0% {
//             opacity: 1;
//           }
//           100% {
//             opacity: 0;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Navbar;



// import React, { useEffect, useState, useContext } from "react";
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/authContext'; // ✅ import context
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import jwt_decode from 'jwt-decode';

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { token, logout } = useContext(AuthContext); // ✅ use token and logout from context
//   const [user,setUser]=useState({ firstName: "", lastName: "" });
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (token) {
//       const decodedToken = jwt_decode(token);
//       setUser({
//         firstName: decodedToken.firstName || "",
//         lastName: decodedToken.lastName || "",
//       });
//     }
//   }, [token]);

//   const handleLogout = () => {
//     logout(); // clear context & localStorage
//     navigate('/login'); // redirect
//   };

//   return (
//     <div className="relative">
//       <nav className="bg-gray-800 shadow-md p-4">
//         <div className="flex items-center justify-between">
//           <div className="text-xl font-bold font-poppins text-white">
//             <Link to="/" className="text-white hover:text-blue-400">
//               Tapovan Travels
//             </Link>
//           </div>

//           <div className="hidden md:flex gap-4">
            // {/* <Link to="/" className="text-white hover:text-blue-400">
            //   Home
            // </Link> */}
//             {!token ? (
//               <>
//                 <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
//                   Login
//                 </Link>
//                 <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
//                   Register
//                 </Link>
//               </>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
//               >
//                 Logout
//               </button>
//             )}
//           </div>

//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden text-white"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden mt-4 space-y-2">
//             <Link to="/" className="block text-white py-2 px-4 hover:text-blue-400">Home</Link>

//             {!token ? (
//               <>
//                 <Link
//                   to="/login"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/signup"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block bg-white text-gray-800 py-2 px-4 rounded hover:bg-gray-100"
//                 >
//                   Register
//                 </Link>
//               </>
//             ) : (
//               <button
//                 onClick={() => {
//                   handleLogout();
//                   setIsMenuOpen(false);
//                 }}
//                 className="block bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full text-left"
//               >
//                 Logout
//               </button>
//             )}
//           </div>
//         )}
//       </nav>

//       {/* Optional Animation Styles */}
//       <style>{`
//         @keyframes slideIn {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(0); }
//         }
//         @keyframes slideOut {
//           0% { transform: translateY(0); }
//           100% { transform: translateY(-100%); }
//         }
//         @keyframes fadeIn {
//           0% { opacity: 0; }
//           100% { opacity: 1; }
//         }
//         @keyframes fadeOut {
//           0% { opacity: 1; }
//           100% { opacity: 0; }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Navbar;




import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {jwtDecode} from 'jwt-decode';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token, logout } = useContext(AuthContext);
  const [user, setUser] = useState({ firstName: "", lastName: "" });
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);
        setUser({
          firstName: decodedToken.FirstName || "",
          lastName: decodedToken.LastName || "",
        });
      } catch (err) {
        console.error("Invalid token:", err);
      }
    }
  }, [token]);

  const handleLogout = () => {
    setLoading(true);
    logout();
    navigate('/login');
    setLoading(false);
  };

  return (
    <div className="relative">
      <nav className="bg-gray-800 shadow-md p-4 fixed top-0 w-full z-50">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold font-poppins text-white">
           <Link to={!token?"/":"/bookingcard"} className="text-white hover:text-blue-400">
              Tapovan Travels
            </Link>
          </div>

          <div className="hidden md:flex gap-4 items-center">
           <Link to="/" className="text-white hover:text-blue-400 mx-auto">
             Home
            </Link> 
            <Link to="/contact" className="text-white hover:text-blue-400 mx-auto">
             Contact us
            </Link> 
            {token && (
              <span className="text-white mr-2">
                Welcome, {user.firstName} {user.lastName}
              </span>
            )}

            {!token ? (
              <>
                <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  Login
                </Link>
                <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  Register
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                ) : (
                  'Logout'
                )}
              </button>
            )}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link to="/" className="block text-white py-2 px-4 hover:text-blue-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>Home</Link>
            <Link to="/contact" className="block text-white py-2 px-4 hover:text-blue-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>Contact us</Link>
            {token && (
              <div className="block text-white py-2 px-4">
                Welcome, {user.firstName} {user.lastName}
              </div>
            )}

            {!token ? (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-white text-gray-800 py-2 px-4 rounded hover:bg-gray-100"
                >
                  Register
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="block bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full text-left"
              >
                  {loading ? (
                  <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                ) : (
                  'Logout'
                )}
              </button>
            )}
          </div>
        )}
      </nav>

      <style>{`
        @keyframes slideIn {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(0); }
        }
        @keyframes slideOut {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes fadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default Navbar;
