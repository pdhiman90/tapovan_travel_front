// "use client";

// import React from 'react';
// import { useState } from 'react';

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('/api/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password }),
//             });
//             if (!response.ok) {
//                 throw new Error('Login failed');
//             }
//             const data = await response.json();
//             console.log(data);
//         } catch (error) {
//             console.error('Login error:', error);
//             setError('Login failed');
//         }
//     };
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96 top-0 transform " >
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <form className="space-y-4">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border-2 border-gray-200 p-2'
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border-2 border-gray-200 p-2"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 border-2 border-gray-200 p-2"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


// "use client";

// import React, { useState } from 'react';
// import auth from '../../Services/auth';
// import { useNavigate } from 'react-router-dom';
// function Login() {
//     const [mobile, setMobile] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //   try {
//     //     const response = await auth.login({ mobile, password });
//     //     console.log(response);
//     //     if(response.status === true){
//     //         setError(response.message);
          
//     //     }
        
//     //   } catch (error) {
        
//     //   }
//     // };


//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       setError('');
//       const payload={
//         Mobile:mobile,
//         Password:password
//       }
  
//       if (!mobile || !password) {
//         setError('All fields are required');
//         return;
//       }
//       try {
//         if (!/^\d{10}$/.test(mobile)) {
//           setError('Mobile number must be 10 digits');
//           return;
//         }
//           const response = await auth.login(payload);
//           console.log(response);
  
//           if (response.status === true) {
//               // Store token and user info
//               localStorage.setItem('token', response.token);
//               localStorage.setItem('user_id', response.user_id);
  
//               // Optional: store more data like FirstName, LastName, etc.
//               localStorage.setItem('firstName', response.FirstName || '');
//               localStorage.setItem('lastName', response.LastName || '');
  
//               // Redirect user to dashboard or home page
//               navigate('/'); // or navigate('/dashboard');
//           } else {
//               // Login failed, show message
//               setError(response.message || 'Login failed');
//           }
//       } catch (error) {
//           console.error('Login error:', error);
//           setError('An unexpected error occurred. Please try again.');
//       }
//   };
  

//     return (
//         <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
//             <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//                 <form className="space-y-4" onSubmit={handleSubmit}>
//                     <div>
//                         <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
//                             Mobile Number
//                         </label>
//                         <input
//                             type="tel"
//                             id="mobile"
//                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border-2 border-gray-200 p-2"
//                             placeholder="Enter your mobile number"
//                             value={mobile}
//                             onChange={(e) => setMobile(e.target.value)}
//                             pattern="[0-9]{10}"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border-2 border-gray-200 p-2"
//                             placeholder="Enter your password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>

//                     {error && <p className="text-red-500 text-sm">{error}</p>}

//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                     >
//                         Login
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Login;




"use client";

import React, { useState, useContext } from 'react';
import auth from '../../Services/auth';
import { useNavigate,Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext'; // ✅ Import context

function Login() {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { login } = useContext(AuthContext); // ✅ Get login from context

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const payload = {
      Mobile: mobile,
      Password: password
    };

    if (!mobile || !password) {
      setError('All fields are required');
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      setError('Mobile number must be 10 digits');
      return;
    }

    try {
      setLoading(true);
      const response = await auth.login(payload);
      console.log("Login response:", response);

      if (response.status === true) {
        // ✅ Store via AuthContext (not just localStorage)
        login(response.token); // triggers context update
        // Optional: store additional info if needed
        console.log(response.token);
        // localStorage.setItem('token1', response.token);
        // localStorage.setItem('user_id', response.user_id);
        // localStorage.setItem('firstName', response.FirstName || '');
        // localStorage.setItem('lastName', response.LastName || '');

        // Redirect after successful login
        navigate('/bookingcard');
      } else {
        setError(response.message || 'Login failed');
      }
      setLoading(false);
    } catch (error) {
      console.error('Login error:', error);
      setError('An unexpected error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-1">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border-2 border-gray-200 p-1"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              pattern="[0-9]{10}"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border-2 border-gray-200 p-1"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 p-1"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            ) : (
              'Login'
            )}
          </button>
          <div className="flex justify-center items-center mt-2">
          <p className="text-sm">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
          
        </div>
        <div  className="flex justify-center items-center mt-2">
        <Link to="/signup" className="text-blue-500 hover:underline text-sm">
              Forget-Password
            </Link>
        </div>
        
        </form>
      </div>
    </div>
  );
}

export default Login;


