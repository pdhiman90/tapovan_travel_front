// "use client";
// import React from "react";
// import {useState} from "react"
// function Payment() {
//   const [paymentStatus, setPaymentStatus] =  useState("");
//   const [showPaymentLink, setShowPaymentLink] = useState(false);

//   const paymentLink = `upi://pay?pa=9991624086@ibl&pn=Punjab%20National%20Bank&am=1500&cu=INR&tn=Seat%20Booking%20Payment`;

//   const handleCopyUPI = () => {
//     navigator.clipboard.writeText("9991624086@ibl");
//   };

//   const handleCopyPaymentLink = () => {
//     navigator.clipboard.writeText(paymentLink);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
//       {/* Header */}
//       <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 mb-4">
//         <div className="text-center mb-6">
//           <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
//             <span className="text-white font-bold text-xl">₹</span>
//           </div>
//           <h1 className="text-xl font-semibold text-gray-800 mb-2">
//             Punjab National Bank - 7594
//           </h1>
//           <p className="text-gray-600 text-sm">
//             Primary account for receiving money
//           </p>
//         </div>

//         {/* QR Code */}
//         <div className="flex justify-center mb-6">
//           <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
//             <img
//               src="https://ucarecdn.com/eba930c5-8ec7-4b03-a3cf-7e9a74945d85/-/format/auto/"
//             // src="C:\Users\Arrow\Desktop\Tapovan Travels\Frontend\public\images\qrforpay.png"

//             alt="Payment QR Code"
//               className="w-64 h-64 object-contain"
//             />
//           </div>
//         </div>

//         {/* UPI ID */}
//         <div className="bg-gray-100 rounded-lg p-3 mb-6">
//           <div className="flex items-center justify-between">
//             <span className="text-gray-600 text-sm">UPI ID:</span>
//             <div className="flex items-center">
//               <span className="text-gray-800 font-mono text-sm">
//                 9991624086@ibl
//               </span>
//               <button
//                 onClick={handleCopyUPI}
//                 className="ml-2 text-blue-500 hover:text-blue-700"
//               >
//                 <i className="fas fa-copy"></i>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Amount Section */}
//         <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
//           <div className="text-center">
//             <p className="text-blue-800 text-sm font-medium mb-1">
//               Seat Booking Amount
//             </p>
//             <p className="text-blue-900 text-3xl font-bold">₹1,500</p>
//           </div>
//         </div>

//         {/* Payment Link Section */}
//         <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
//           <div className="flex items-center justify-between mb-2">
//             <span className="text-green-800 text-sm font-medium">
//               Payment Link:
//             </span>
//             <button
//               onClick={() => setShowPaymentLink(!showPaymentLink)}
//               className="text-green-600 hover:text-green-800 text-sm"
//             >
//               {showPaymentLink ? "Hide" : "Show"}
//             </button>
//           </div>
//           {showPaymentLink && (
//             <div className="flex items-center justify-between">
//               <span className="text-green-700 text-xs font-mono break-all mr-2">
//                 {paymentLink}
//               </span>
//               <button
//                 onClick={handleCopyPaymentLink}
//                 className="text-green-600 hover:text-green-800 flex-shrink-0"
//               >
//                 <i className="fas fa-copy"></i>
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Payment Status */}
//         <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
//           <h3 className="text-gray-800 font-semibold text-sm mb-3">
//             Payment Status:
//           </h3>
//           <div className="space-y-2">
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={paymentStatus === "success"}
//                 onChange={() =>
//                   setPaymentStatus(paymentStatus === "success" ? "" : "success")
//                 }
//                 className="mr-2 text-green-600"
//               />
//               <span className="text-green-700 text-sm">Payment Success</span>
//             </label>
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={paymentStatus === "failed"}
//                 onChange={() =>
//                   setPaymentStatus(paymentStatus === "failed" ? "" : "failed")
//                 }
                
//                 className="mr-2 text-red-600"
//               />
//               <span className="text-red-700 text-sm">Payment Failed</span>
//             </label>
//           </div>
//           {paymentStatus === "success" && (
//             <div className="mt-3 p-2 bg-green-100 border border-green-300 rounded text-green-800 text-sm">
//               <i className="fas fa-check-circle mr-2"></i>
//               Payment completed successfully!
//             </div>
//           )}
//           {paymentStatus === "failed" && (
//             <div className="mt-3 p-2 bg-red-100 border border-red-300 rounded text-red-800 text-sm">
//               <i className="fas fa-times-circle mr-2"></i>
//               Payment failed. Please try again.
//             </div>
//           )}
//         </div>

//         {/* Instructions */}
//         <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
//           <h3 className="text-yellow-800 font-semibold text-sm mb-2">
//             <i className="fas fa-info-circle mr-2"></i>
//             How to Pay:
//           </h3>
//           <ol className="text-yellow-700 text-sm space-y-1">
//             <li>1. Open any UPI app ( GPay, Paytm, etc.)</li>
//             <li>2. Scan the QR code above</li>
//             <li>3. Amount ₹1,500 will be prefilled</li>
//             <li>4. Complete the payment</li>
//             <li>5. Check the your payment is success or failed</li>
//             <li>5. If link is not working, take screenshot of qr code then pay the amount</li>
//           </ol>
//         </div>

//         {/* Action Buttons */}
//         {/* <div className="flex flex-col sm:flex-row gap-3">
//           <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center">
//             <i className="fas fa-download mr-2"></i>
//             Download QR
//           </button>
//           <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center">
//             <i className="fas fa-share mr-2"></i>
//             Share
//           </button>
//         </div> */}

//         {/* Supported Apps */}
//         <div className="mt-6 pt-4 border-t border-gray-200">
//           <p className="text-gray-500 text-xs text-center mb-3">
//             Supported on all UPI apps
//           </p>
//           <div className="flex justify-center items-center space-x-4">
//             <span className="text-gray-400 text-xs">PhonePe</span>
//             <span className="text-gray-400 text-xs">BHIM</span>
//             <span className="text-gray-400 text-xs">GPay</span>
//             <span className="text-gray-400 text-xs">Paytm</span>
//           </div>
//           <p className="text-gray-400 text-xs text-center mt-2">
//             Powered by UPI
//           </p>
//         </div>
//       </div>

//       {/* Footer Note */}
//       <div className="w-full max-w-md text-center">
//         <p className="text-gray-500 text-xs">
//           Secure payment powered by UPI. Your payment is protected.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Payment;



// "use client";
// import React, { useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import { updatePaymentStatus } from "../../Services/payment.js"; // adjust if path differs

// function Payment() {
//   const [paymentStatus, setPaymentStatus] = useState("");
//   const [showPaymentLink, setShowPaymentLink] = useState(false);

//   const paymentLink = `upi://pay?pa=9991624086@ibl&pn=Punjab%20National%20Bank&am=1500&cu=INR&tn=Seat%20Booking%20Payment`;

//   const handleCopyUPI = () => {
//     navigator.clipboard.writeText("9991624086@ibl");
//   };

//   const handleCopyPaymentLink = () => {
//     navigator.clipboard.writeText(paymentLink);
//   };

//   const handleStatusChange = async (newStatus) => {
//     const updatedStatus = paymentStatus === newStatus ? "" : newStatus;
//     setPaymentStatus(updatedStatus);

//     if (updatedStatus) {
//       try {
//         const token  =  localStorage.getItem("token");
//         const decoded = jwtDecode(token);
//         const paymentId = localStorage.getItem("paymentId");
//        console.log(decoded)
//        const userId = decoded.user_id;

//         const response = await updatePaymentStatus(updatedStatus,paymentId);
//         console.log("Payment status updated:", response);
//         alert("Payment status updated successfully.");
//       } catch (error) {
//         alert("Failed to update payment status.");
//         console.error(error);
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 mb-4">
//         <div className="text-center mb-6">
//           <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
//             <span className="text-white font-bold text-xl">₹</span>
//           </div>
//           <h1 className="text-xl font-semibold text-gray-800 mb-2">
//             Punjab National Bank - 7594
//           </h1>
//           <p className="text-gray-600 text-sm">
//             Primary account for receiving money
//           </p>
//         </div>

//         <div className="flex justify-center mb-6">
//           <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
//             <img
//               src="https://ucarecdn.com/eba930c5-8ec7-4b03-a3cf-7e9a74945d85/-/format/auto/"
//               alt="Payment QR Code"
//               className="w-64 h-64 object-contain"
//             />
//           </div>
//         </div>

//         <div className="bg-gray-100 rounded-lg p-3 mb-6">
//           <div className="flex items-center justify-between">
//             <span className="text-gray-600 text-sm">UPI ID:</span>
//             <div className="flex items-center">
//               <span className="text-gray-800 font-mono text-sm">
//                 9991624086@ibl
//               </span>
//               <button
//                 onClick={handleCopyUPI}
//                 className="ml-2 text-blue-500 hover:text-blue-700"
//               >
//                 📋
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-center">
//           <p className="text-blue-800 text-sm font-medium mb-1">
//             Seat Booking Amount
//           </p>
//           <p className="text-blue-900 text-3xl font-bold">₹1,500</p>
//         </div>

//         <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
//           <div className="flex items-center justify-between mb-2">
//             <span className="text-green-800 text-sm font-medium">
//               Payment Link:
//             </span>
//             <button
//               onClick={() => setShowPaymentLink(!showPaymentLink)}
//               className="text-green-600 hover:text-green-800 text-sm"
//             >
//               {showPaymentLink ? "Hide" : "Show"}
//             </button>
//           </div>
//           {showPaymentLink && (
//             <div className="flex items-center justify-between">
//               <span className="text-green-700 text-xs font-mono break-all mr-2">
//                 {paymentLink}
//               </span>
//               <button
//                 onClick={handleCopyPaymentLink}
//                 className="text-green-600 hover:text-green-800 flex-shrink-0"
//               >
//                 📋
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Payment Status Checkboxes */}
//         <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
//           <h3 className="text-gray-800 font-semibold text-sm mb-3">
//             Payment Status:
//           </h3>
//           <div className="space-y-2">
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={paymentStatus === "success"}
//                 onChange={() => handleStatusChange("success")}
//                 className="mr-2 text-green-600"
//               />
//               <span className="text-green-700 text-sm">Payment Success</span>
//             </label>
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={paymentStatus === "failed"}
//                 onChange={() => handleStatusChange("failed")}
//                 className="mr-2 text-red-600"
//               />
//               <span className="text-red-700 text-sm">Payment Failed</span>
//             </label>
//           </div>
//           {paymentStatus === "success" && (
//             <div className="mt-3 p-2 bg-green-100 border border-green-300 rounded text-green-800 text-sm">
//               <i className="fas fa-check-circle mr-2"></i>
//               Payment completed successfully!
//             </div>
//           )}
//           {paymentStatus === "failed" && (
//             <div className="mt-3 p-2 bg-red-100 border border-red-300 rounded text-red-800 text-sm">
//               <i className="fas fa-times-circle mr-2"></i>
//               Payment failed. Please try again.
//             </div>
//           )}
//         </div>
//           {/* Instructions */}
//           <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
//           <h3 className="text-yellow-800 font-semibold text-sm mb-2">
//             <i className="fas fa-info-circle mr-2"></i>
//             How to Pay:
//           </h3>
//           <ol className="text-yellow-700 text-sm space-y-1">
//             <li>1. Open any UPI app (PhonePe, GPay, Paytm, etc.)</li>
//             <li>2. Scan the QR code above</li>
//             <li>3. Amount ₹1,500 will be prefilled</li>
//             <li>4. Complete the payment</li>
//           </ol>
//         </div>


//       </div>
//     </div>
//   );
// }

// export default Payment;



"use client";
import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { updatePaymentStatus } from "../../Services/payment.js"; // adjust if path differs
import { useNavigate } from "react-router-dom";
function Payment() {
  const navigate = useNavigate();
  const [paymentStatus, setPaymentStatus] = useState("");
  const [showPaymentLink, setShowPaymentLink] = useState(false);

  const paymentLink = 'intent://pay?pa=9991624086@ibl&pn=PAWAN%20KUMAR&am=1500&cu=INR&tn=Booking#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end;'
  // `upi://pay?pa=9991624086@ibl&pn=Punjab%20National%20Bank&am=1500&cu=INR&tn=Seat%20Booking%20Payment`;

  const handleCopyUPI = () => {
    navigator.clipboard.writeText("9991624086@ibl");
  };

  const handleCopyPaymentLink = () => {
    navigator.clipboard.writeText(paymentLink);
  };

  const handleStatusChange = async (newStatus) => {
    const updatedStatus = paymentStatus === newStatus ? "" : newStatus;
    setPaymentStatus(updatedStatus);
    navigate("/successpayment");

    if (updatedStatus) {
      try {
        const token  =  localStorage.getItem("token");
        const decoded = jwtDecode(token);
        const paymentId = localStorage.getItem("paymentId");
        const userId = decoded.user_id;

        const response = await updatePaymentStatus(updatedStatus, paymentId);
        console.log("Payment status updated:", response);
        alert("Payment status updated successfully.");
      } catch (error) {
        alert("Failed to update payment status.");
        console.error(error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 mb-4">
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">₹</span>
          </div>
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            Punjab National Bank - 7594
          </h1>
          <p className="text-gray-600 text-sm">
            Primary account for receiving money
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
            <img
              src="https://ucarecdn.com/eba930c5-8ec7-4b03-a3cf-7e9a74945d85/-/format/auto/"
              alt="Payment QR Code"
              className="w-64 h-64 object-contain"
            />
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-3 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-sm">UPI ID:</span>
            <div className="flex items-center">
              <span className="text-gray-800 font-mono text-sm">
                9991624086@ibl
              </span>
              <button
                onClick={handleCopyUPI}
                className="ml-2 text-blue-500 hover:text-blue-700"
              >
                📋
              </button>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-center">
          <p className="text-blue-800 text-sm font-medium mb-1">
            Seat Booking Amount
          </p>
          <p className="text-blue-900 text-3xl font-bold">₹1,500</p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-green-800 text-sm font-medium">
              Payment Link:
            </span>
            <button
              onClick={() => setShowPaymentLink(!showPaymentLink)}
              className="text-green-600 hover:text-green-800 text-sm"
            >
              {showPaymentLink ? "Hide" : "Show"}
            </button>
          </div>

          {/* ✅ CLICKABLE UPI LINK ADDED HERE */}
          {showPaymentLink && (
            <div className="flex flex-col items-start gap-2">
              <a
                href={paymentLink}
                className="text-green-700 text-xs font-mono underline break-all"
              >
                {paymentLink}
              </a>
              <button
                onClick={handleCopyPaymentLink}
                className="text-green-600 hover:text-green-800 text-sm"
              >
                📋 Copy Link
              </button>
            </div>
          )}
        </div>

        {/* Payment Status Checkboxes */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          <h3 className="text-gray-800 font-semibold text-sm mb-3">
            Payment Status:
          </h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={paymentStatus === "success"}
                onChange={() => handleStatusChange("success")}
                className="mr-2 text-green-600"
              />
              <span className="text-green-700 text-sm">Payment Success</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={paymentStatus === "failed"}
                onChange={() => handleStatusChange("failed")}
                className="mr-2 text-red-600"
              />
              <span className="text-red-700 text-sm">Payment Failed</span>
            </label>
          </div>
          {paymentStatus === "success" && (
            <div className="mt-3 p-2 bg-green-100 border border-green-300 rounded text-green-800 text-sm">
              <i className="fas fa-check-circle mr-2"></i>
              Payment completed successfully!
            </div>
          )}
          {paymentStatus === "failed" && (
            <div className="mt-3 p-2 bg-red-100 border border-red-300 rounded text-red-800 text-sm">
              <i className="fas fa-times-circle mr-2"></i>
              Payment failed. Please try again.
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h3 className="text-yellow-800 font-semibold text-sm mb-2">
            <i className="fas fa-info-circle mr-2"></i>
            How to Pay:
          </h3>
          <ol className="text-yellow-700 text-sm space-y-1">
            <li>1. Open any UPI app (PhonePe, GPay, Paytm, etc.)</li>
            <li>2. Scan the QR code above or click the payment link</li>
            <li>3. Amount ₹1,500 will be prefilled</li>
            <li>4. Complete the payment</li>
            <li>5. Update the payment status by checking the checkboxes</li>
            <li>6. If payment is successful, the payment status will be updated to success</li>
            <li>7. If payment is failed, the payment status will be updated to failed</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Payment;
