// import React from 'react'
// import { useState } from 'react'
// import auth from '../../Services/auth';

// const SignUp = () => {
//     const [FirstName, setFirstName] = useState('');
//     const [LastName, setLastName] = useState('');
//     const [Mobile, setMobile] = useState('');
//     const [Password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [Age, setAge] = useState('');
//     const [Gender, setGender] = useState('');
//     const [error, setError] = useState('');
//     const [Otp, setOtp] = useState('');
//     const [otpSent, setOtpSent] = useState(false);
//     const payload = {
//         FirstName,
//         LastName,
//         Mobile,
//         Password,
//         confirmPassword,
//         Age,
//         Gender,
//     }
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await auth.signup(payload);
//             console.log(response);
//             // console.log(response);
//         } catch (error) {
//             console.error('Error signing up:', error);
//             setError('Sign up failed');
//         }
//     }
//     const handleSendOtp = async (e) => {
//         e.preventDefault();
//         try {
//             if(Mobile.length !== 10){
//                 setError('Mobile number must be 10 digits');
//                 return;
//             }
//             if(Mobile.length === 0){
//                 setError('Mobile number is required');
//                 return;
//             }
//             const response = await auth.sendOtp({ Mobile: Mobile });
//             console.log(response);
//             if(response.status){
//                 setOtpSent(true);
//             }
//         } catch (error) {
//             console.error('Error sending OTP:', error);
//             setError('Error sending OTP');
//         }
//     }
//   return (
//     <div className='flex justify-center items-center h-screen w-screen bg-gray-100 border-2 border-gray-200 '>
       
//         <form className='flex flex-col gap-3 p-10 bg-white rounded-lg shadow-lg w-1/3 h-[500px]'>
//         <h2 className='text-2xl font-bold text-center'>Sign Up</h2>
//             <input type="text" required className='border border-gray-200 rounded-lg p-1' placeholder="First Name" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
//             <input type="text" required className='border border-gray-200 rounded-lg p-1' placeholder="Last Name" value={LastName} onChange={(e) => setLastName(e.target.value)} />
//             <input type="text" required className='border border-gray-200 rounded-lg p-1' placeholder="Mobile" value={Mobile} onChange={(e) => setMobile(e.target.value)} />
//             <div className='flex gap-4 items-center'>
//                 <input type="text" required className='border border-gray-200 rounded-lg p-1 w-1/2' placeholder="Otp" value={Otp} onChange={(e) => setOtp(e.target.value)} />
//             {!otpSent ? <button className='bg-blue-500 text-white p-1 rounded-lg h-10 cursor-pointer' onClick={handleSendOtp}>Send OTP</button> : <button className='bg-green-500 text-white p-1 rounded-lg h-8 disabled text-sm cursor-not-allowed' disabled>OTP Sent Successfully</button>}
                
//                 </div>
//             <input type="password" required className='border border-gray-200 rounded-lg p-1' placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
//             <input type="password" required className='border border-gray-200 rounded-lg p-1' placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//             <input type="number" required className='border border-gray-200 rounded-lg p-1' placeholder="Age" value={Age} onChange={(e) => setAge(e.target.value)} />
//             <input type="text" required placeholder="Gender" className='border border-gray-200 rounded-lg p-1' value={Gender} onChange={(e) => setGender(e.target.value)} />
//             <button type="submit" className='bg-blue-500 text-white p-1 rounded-xl' onClick={handleSubmit}>Sign Up</button>
          
//         </form>
//     </div>
//   )
// }

// export default SignUp



// import React, { useState } from 'react';
// import auth from '../../Services/auth';

// const SignUp = () => {
//   const [FirstName, setFirstName] = useState('');
//   const [LastName, setLastName] = useState('');
//   const [Mobile, setMobile] = useState('');
//   const [Password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [Age, setAge] = useState('');
//   const [Gender, setGender] = useState('');
//   const [Otp, setOtp] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const validateInputs = () => {
//     if (!FirstName || !LastName || !Mobile || !Password || !confirmPassword || !Age || !Gender || !Otp) {
//       setError('All fields are required.');
//       return false;
//     }
//     if (!/^\d{10}$/.test(Mobile)) {
//       setError('Mobile number must be 10 digits.');
//       return false;
//     }
//     if (Password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return false;
//     }
//     if (Password !== confirmPassword) {
//       setError('Passwords do not match.');
//       return false;
//     }
//     if (isNaN(Age) || Age <= 0) {
//       setError('Enter a valid age.');
//       return false;
//     }
//     setError('');
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateInputs()) return;

//     try {
//       const payload = {
//         FirstName,
//         LastName,
//         Mobile,
//         Password,
//         confirmPassword,
//         Age,
//         Gender,
//         Otp
//       };
//       const response = await auth.signup(payload);
//       console.log(response);
//       setSuccessMessage('Signup successful!');
//       // Reset form if needed
//     } catch (error) {
//       console.error('Error signing up:', error);
//       setError('Sign up failed. Please try again.');
//     }
//   };

//   const handleSendOtp = async (e) => {
//     e.preventDefault();
//     if (!Mobile) {
//       setError('Mobile number is required.');
//       return;
//     }
//     if (!/^\d{10}$/.test(Mobile)) {
//       setError('Mobile number must be 10 digits.');
//       return;
//     }

//     try {
//       const response = await auth.sendOtp({ Mobile });
//       console.log(response);
//       if (response.status) {
//         setOtpSent(true);
//         setError('');
//       } else {
//         setError('Failed to send OTP.');
//       }
//     } catch (error) {
//       console.error('Error sending OTP:', error);
//       setError('Error sending OTP. Try again.');
//     }
//   };

//   return (
//     <div className='flex justify-center items-center h-screen w-screen bg-gray-100 border-2 border-gray-200'>
//       <form className='flex flex-col gap-3 p-10 bg-white rounded-lg shadow-lg w-1/3 h-[550px]' onSubmit={handleSubmit}>
//         <h2 className='text-2xl font-bold text-center'>Sign Up</h2>

//         {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//         {successMessage && <p className="text-green-500 text-sm text-center">{successMessage}</p>}

//         <input type="text" className='border border-gray-200 rounded-lg p-1' placeholder="First Name" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
//         <input type="text" className='border border-gray-200 rounded-lg p-1' placeholder="Last Name" value={LastName} onChange={(e) => setLastName(e.target.value)} />
//         <input type="text" className='border border-gray-200 rounded-lg p-1' placeholder="Mobile" value={Mobile} onChange={(e) => setMobile(e.target.value)} />

//         <div className='flex gap-4 items-center'>
//           <input type="text" className='border border-gray-200 rounded-lg p-1 w-1/2' placeholder="Otp" value={Otp} onChange={(e) => setOtp(e.target.value)} />
//           {!otpSent ? (
//             <button className='bg-blue-500 text-white p-1 rounded-lg h-10 hover:bg-blue-600 cursor-pointer' onClick={handleSendOtp}>Send OTP</button>
//           ) : (
//             <button className='bg-green-500 text-white p-1 rounded-lg h-10 cursor-not-allowed' disabled>OTP Sent</button>
//           )}
//         </div>

//         <input type="password" className='border border-gray-200 rounded-lg p-1' placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
//         <input type="password" className='border border-gray-200 rounded-lg p-1' placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//         <input type="number" className='border border-gray-200 rounded-lg p-1' placeholder="Age" value={Age} onChange={(e) => setAge(e.target.value)} />
//         <input type="text" className='border border-gray-200 rounded-lg p-1' placeholder="Gender" value={Gender} onChange={(e) => setGender(e.target.value)} />

//         <button type="submit" className='bg-blue-500 text-white p-1 rounded-xl cursor-pointer hover:bg-blue-600'>Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;



// import React, { useState } from 'react';
// import auth from '../../Services/auth';
// import { useNavigate } from 'react-router-dom';

// const SignUp = () => {
//   const [FirstName, setFirstName] = useState('');
//   const [LastName, setLastName] = useState('');
//   const [Mobile, setMobile] = useState('');
//   const [Password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [Age, setAge] = useState('');
//   const [Gender, setGender] = useState('');
//   const [Otp, setOtp] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [token,setToken]=useState('')
// const navigate = useNavigate();
//   const validateInputs = () => {
//     if (!FirstName || !LastName || !Mobile || !Password || !confirmPassword || !Age || !Gender || !Otp) {
//       setError('All fields are required.');
//       return false;
//     }
//     if (!/^\d{10}$/.test(Mobile)) {
//       setError('Mobile number must be 10 digits.');
//       return false;
//     }
//     if (Password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return false;
//     }
//     if (Password !== confirmPassword) {
//       setError('Passwords do not match.');
//       return false;
//     }
//     if (isNaN(Age) || Age <= 0) {
//       setError('Enter a valid age.');
//       return false;
//     }
//     setError('');
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateInputs()) return;

//     try {
//       const payload = {
//         FirstName,
//         LastName,
//         Mobile,
//         Password,
//         confirmPassword,
//         Age,
//         Gender,
//         Otp,
//       };
//       const response = await auth.signup(payload);
//       console.log(response);
//       setToken(response.token);
//       setSuccessMessage('Signup successful!');
//       navigate('/');
//     } catch (error) {
//       console.error('Error signing up:', error);
//       setError('Sign up failed. Please try again.');
//     }
//   };

//   const handleSendOtp = async (e) => {
//     e.preventDefault();
//     if (!Mobile) {
//       setError('Mobile number is required.');
//       return;
//     }
//     if (!/^\d{10}$/.test(Mobile)) {
//       setError('Mobile number must be 10 digits.');
//       return;
//     }

//     try {
//       const response = await auth.sendOtp({ Mobile });
//       if (response.status) {
//         setOtpSent(true);
//         setError('');
//       } else {
//         setError('Failed to send OTP.');
//       }
//     } catch (error) {
//       console.error('Error sending OTP:', error);
//       setError('Error sending OTP. Try again.');
//     }
//   };

//   return (
//     <div className='flex justify-center items-center min-h-screen w-full bg-gray-100 p-4'>
//       <form
//         className='flex flex-col gap-3 p-6 sm:p-10 bg-white rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3'
//         onSubmit={handleSubmit}
//       >
//         <h2 className='text-2xl font-bold text-center'>Sign Up</h2>

//         {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//         {successMessage && <p className="text-green-500 text-sm text-center">{successMessage}</p>}

//         <input type="text" className='border border-gray-200 rounded-lg p-2' placeholder="First Name" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
//         <input type="text" className='border border-gray-200 rounded-lg p-2' placeholder="Last Name" value={LastName} onChange={(e) => setLastName(e.target.value)} />
//         <input type="text" className='border border-gray-200 rounded-lg p-2' placeholder="Mobile" value={Mobile} onChange={(e) => setMobile(e.target.value)} />

//         <div className='flex flex-col sm:flex-row gap-2 items-stretch'>
//           <input type="text" className='border border-gray-200 rounded-lg p-2 w-full sm:w-1/2' placeholder="Otp" value={Otp} onChange={(e) => setOtp(e.target.value)} />
//           {!otpSent ? (
//             <button className='bg-blue-500 text-white p-2 rounded-lg w-full sm:w-1/2' onClick={handleSendOtp}>Send OTP</button>
//           ) : (
//             <button className='bg-green-500 text-white p-2 rounded-lg w-full sm:w-1/2 cursor-not-allowed' disabled>OTP Sent</button>
//           )}
//         </div>

//         <input type="password" className='border border-gray-200 rounded-lg p-2' placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
//         <input type="password" className='border border-gray-200 rounded-lg p-2' placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//         <input type="number" className='border border-gray-200 rounded-lg p-2' placeholder="Age" value={Age} onChange={(e) => setAge(e.target.value)} />
//         <input type="text" className='border border-gray-200 rounded-lg p-2' placeholder="Gender" value={Gender} onChange={(e) => setGender(e.target.value)} />

//         <button type="submit" className='bg-blue-500 text-white p-2 rounded-lg mt-2 cursor-pointer '>Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;




import React, { useState, useContext } from 'react';
import auth from '../../Services/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext'; // ✅ Import context
import {Link} from 'react-router-dom'

const SignUp = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [Age, setAge] = useState('');
  const [Gender, setGender] = useState('');
  const [Otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [otpsendLoading, setOtpsendLoading] = useState(false);
  const [otpVerifyLoading, setOtpVerifyLoading] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const { login } = useContext(AuthContext); // ✅ use login from context
  const navigate = useNavigate();

  const validateInputs = () => {
    if (!FirstName || !LastName || !Mobile || !Password || !confirmPassword || !Age || !Gender || !Otp) {
      setError('All fields are required.');
      return false;
    }
    if (!/^\d{10}$/.test(Mobile)) {
      setError('Mobile number must be 10 digits.');
      return false;
    }
    if (Password.length < 6) {
      setError('Password must be at least 6 characters.');
      return false;
    }
    if (Password !== confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }
    if (Otp.length !== 4) {
      setError('OTP must be 4 digits.');
      return false;
    }
    if (isNaN(Age) || Age <= 0) {
      setError('Enter a valid age.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    try {
      setIsLoading(true);
      const payload = {
        FirstName,
        LastName,
        Mobile,
        Password,
        confirmPassword,
        Age,
        Gender,
        Otp,
      };

      const response = await auth.signup(payload);
      console.log(response);

      if (response.status) {
        login(response.token); // ✅ Set context token
        localStorage.setItem('user_id', response.user_id);
        localStorage.setItem('firstName', response.FirstName || '');
        localStorage.setItem('lastName', response.LastName || '');

        setSuccessMessage('Signup successful!');
        navigate('/bookingcard');
      } else {
        setError(response.message || 'Signup failed. Please try again.');
      }
        } catch (error) {
      console.error('Error signing up:', error);
      setError('Sign up failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setOtpsendLoading(true);
    if (!Mobile) {
      setError('Mobile number is required.');
      return;
    }
    if (!/^\d{10}$/.test(Mobile)) {
      setError('Mobile number must be 10 digits.');
      return;
    }

    try {
      const response = await auth.sendOtp({ Mobile });
      if (response.status) {
        setOtpSent(true);
        setError('');
      } else {
        setError(response.message || 'Failed to send OTP.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      setError('Error sending OTP. Try again.');
    } finally {
      setOtpsendLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setOtpVerifyLoading(true);
    if (!Otp) {
      setError('OTP is required.');
      return;
    }
    if (Otp.length !== 4) {
      setError('OTP must be 4 digits.');
      return;
    }

    try {
        const payload = {
            Mobile:Mobile,
            Otp:Otp
        }
      const response = await auth.verifyOtp(payload);
      console.log(response);
      if (response.status) {
        setOtpVerified(true);
        setError('');
      } else {
        setError(response.message || 'Failed to verify OTP.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setError('Error verifying OTP. Try again.');
    } finally {
      setOtpVerifyLoading(false);
    }
  };

  return (
    
    <div className='flex justify-center items-center w-full bg-gray-100 p-2'>
      <form
        className='flex flex-col gap-3 p-2 sm:p-10 bg-white rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/4 h-[540px] mt-10 mb-10'
        onSubmit={handleSubmit}
      >
        <h2 className='text-2xl font-bold text-center'>Sign Up</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {successMessage && <p className="text-green-500 text-sm text-center">{successMessage}</p>}

        <input type="text" className='border border-gray-200 rounded-lg p-1' placeholder="First Name" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" className='border border-gray-200 rounded-lg p-1' placeholder="Last Name" value={LastName} onChange={(e) => setLastName(e.target.value)} />
        <input type="text" className='border border-gray-200 rounded-lg p-1' placeholder="Mobile" value={Mobile} onChange={(e) => setMobile(e.target.value)} />

        <div className='flex flex-col sm:flex-row gap-2 items-stretch'>
          <input type="text" className='border border-gray-200 rounded-lg p-1 w-full sm:w-1/2' placeholder="Otp" value={Otp} onChange={(e) => setOtp(e.target.value)} />
          {!otpSent ? (
            <button className='bg-blue-500 text-white p-1 rounded-lg w-full sm:w-1/2' onClick={handleSendOtp} disabled={otpsendLoading || Mobile.length === 0}>
              {otpsendLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              ) : (
                'Send OTP'
              )}
            </button>
          ) : (
            <button className='bg-blue-500 text-white text-xs p-1 rounded-lg w-full sm:w-1/2 cursor-not-allowed' onClick={handleVerifyOtp} disabled={otpVerifyLoading}>
              {otpVerifyLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              ) : otpVerified ? (
                'OTP Verified Successfully'
              ) : (
                'Verify OTP'
              )}
            </button>
          )}
        </div>

        <input type="password" className='border border-gray-200 rounded-lg p-1' placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" className='border border-gray-200 rounded-lg p-1' placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <input type="number" className='border border-gray-200 rounded-lg p-1' placeholder="Age" value={Age} onChange={(e) => setAge(e.target.value)} />
        <input type="text" className='border border-gray-200 rounded-lg p-1' placeholder="Gender" value={Gender} onChange={(e) => setGender(e.target.value)} />

        <button type="submit" className='bg-blue-500 text-white p-1 rounded-lg mt-2 cursor-pointer ' disabled={isLoading}>
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            'Sign Up'
          )}
        </button>
        <div className="flex justify-center items-center mt-2">
          <p className="text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log In
            </Link>
          </p>
        
        </div>
      </form>

    </div>
  );
};

export default SignUp;

