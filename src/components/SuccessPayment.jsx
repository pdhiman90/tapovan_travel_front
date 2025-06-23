"use client";
import React from "react";


function SuccessPayment() {
  const [showDetails, setShowDetails] = React.useState(false);

  const paymentDetails = {
    transactionId:
      "TXN" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    amount: "₹1,500",
    paymentMethod: "UPI",
    upiId: "9991624086@ibl",
    timestamp: new Date().toLocaleString(),
    bookingRef: "BK" + Math.random().toString(36).substr(2, 8).toUpperCase(),
  };

  const handleDownloadReceipt = () => {
    console.log("Downloading receipt...");
  };

  const handleShareReceipt = () => {
    if (navigator.share) {
      navigator.share({
        title: "Payment Receipt",
        text: `Payment successful! Transaction ID: ${paymentDetails.transactionId}`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* Success Header */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 mb-4">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-check text-white text-2xl"></i>
          </div>
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Payment Successful!
          </h1>
          <p className="text-gray-600 text-sm">
            Your seat booking has been confirmed
          </p>
        </div>

        {/* Success Animation */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
            <i className="fas fa-ticket-alt text-green-600 text-3xl"></i>
          </div>
        </div>

        {/* Payment Amount */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="text-center">
            <p className="text-green-800 text-sm font-medium mb-1">
              Amount Paid
            </p>
            <p className="text-green-900 text-3xl font-bold">
              {paymentDetails.amount}
            </p>
            <p className="text-green-700 text-sm mt-1">
              via {paymentDetails.paymentMethod}
            </p>
          </div>
        </div>

        {/* Booking Reference */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-800 text-sm font-medium">
                Booking Reference
              </p>
              <p className="text-blue-900 text-lg font-bold font-mono">
                {paymentDetails.bookingRef}
              </p>
            </div>
            <button
              onClick={() =>
                navigator.clipboard.writeText(paymentDetails.bookingRef)
              }
              className="text-blue-600 hover:text-blue-800"
            >
              <i className="fas fa-copy"></i>
            </button>
          </div>
        </div>

        {/* Payment Details Toggle */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-800 text-sm font-medium">
              Payment Details
            </span>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-gray-600 hover:text-gray-800 text-sm"
            >
              {showDetails ? "Hide" : "Show"}
            </button>
          </div>
          {showDetails && (
            <div className="space-y-2 pt-2 border-t border-gray-200">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Transaction ID:</span>
                <span className="text-gray-800 font-mono">
                  {paymentDetails.transactionId}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">UPI ID:</span>
                <span className="text-gray-800 font-mono">
                  {paymentDetails.upiId}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Date & Time:</span>
                <span className="text-gray-800">
                  {paymentDetails.timestamp}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Next Steps */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h3 className="text-yellow-800 font-semibold text-sm mb-2">
            <i className="fas fa-info-circle mr-2"></i>
            What's Next?
          </h3>
        </div>

        {/* Action Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <button
            onClick={handleDownloadReceipt}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center"
          >
            <i className="fas fa-download mr-2"></i>
            Download Receipt
          </button>
          <button
            onClick={handleShareReceipt}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center"
          >
            <i className="fas fa-share mr-2"></i>
            Share Receipt
          </button>
        </div> */}

        {/* Contact Support */}
        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-gray-500 text-xs mb-2">
            Need help? Contact our support team
          </p>
          <div className="flex justify-center items-center space-x-4">
            <button className="text-blue-600 hover:text-blue-800 text-sm">
              <i className="fas fa-phone mr-1"></i>
              Call Support
            </button>
            <button className="text-blue-600 hover:text-blue-800 text-sm">
              <i className="fas fa-envelope mr-1"></i>
              Email Us
            </button>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="w-full max-w-md text-center">
        <p className="text-gray-500 text-xs">
          <i className="fas fa-shield-alt mr-1"></i>
          Your payment was processed securely via UPI
        </p>
      </div>
    </div>
  );
}

export default SuccessPayment;