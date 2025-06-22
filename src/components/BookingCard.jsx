"use client";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  {createPaymentdb}  from "../../Services/payment.js";
import {jwtDecode} from "jwt-decode";

function BookingCard() {
  const navigate = useNavigate();
  const [expandedState, setExpandedState] = useState({
    "Uttar Pradesh": true,
    Nepal: false,
    Bihar: false,
    Bengal: false,
    Jharkhand: false,
  });
  const [availableSeats] = useState(60);
  const [bookedSeats] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);


  const toggleState = (state) => {
    setExpandedState((prev) => ({
      ...prev,
      [state]: !prev[state],
    }));
  };


  const checkUserLogin=()=>{
    const token = localStorage.getItem('token');
    if(token){
        navigate('/payment')     
    }else{
        navigate('/login')
    }
  }

  const createPayment= async()=>{
    try {
      const token =  localStorage.getItem("token")
      const decoded =  jwtDecode(token);
      const payload = {
         name : decoded.FirstName + " " + decoded.LastName,
         mobile : decoded.Mobile
      }
      const response = await createPaymentdb(payload);
      localStorage.setItem("paymentId",response.paymentId);
      console.log(response);
    } catch (error) {
      console.log(error);
      throw error;
      
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Banner Image */}
        <div className="relative h-[300px] w-full">
          <img src="https://haridwarrishikeshtourism.in/images/places-to-visit/header/places-to-visit-in-haridwar-header-haridwarrishikesh-tourism.jpg.jpg" className="h-full w-full object-cover" alt="Tapovan Travels" />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white p-6">
              <h1 className="text-4xl font-bold mb-3">
                <i className="fas fa-om mr-2"></i>
                Tapovan Travels
              </h1>
              <h2 className="text-2xl mb-4">
                <i className="fas fa-bus mr-2"></i>
                Nepal & Ganga Sagar Bus Journey
              </h2>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Journey Details */}
          <div className="text-center mb-8 bg-[#f8f9fa] p-6 rounded-xl">
            <div className="flex justify-center items-center space-x-6 flex-wrap">
              <p className="text-lg font-semibold">
                <i className="fas fa-calendar-alt mr-2 text-blue-600"></i>
                21st June to 5th July
              </p>
              <p className="text-lg font-semibold">
                <i className="fas fa-temple mr-2 text-blue-600"></i>
                31+ Religious Places
              </p>
            </div>
          </div>

          {/* Seats Information */}
          <div className="bg-[#f8f9fa] p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center flex-wrap">
              <div className="space-y-2">
                <p className="text-lg">
                  <i className="fas fa-chair text-blue-600 mr-2"></i>
                  Total Seats: {availableSeats}
                </p>
                <p className="text-lg">
                  <i className="fas fa-user-check text-green-600 mr-2"></i>
                  Available Seats: {availableSeats - bookedSeats}
                </p>
              </div>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transform transition hover:scale-105 flex items-center"
              >
                <i className="fas fa-ticket-alt mr-2"></i>
                Book Your Seat (₹1,500)
              </button>
            </div>
          </div>

          {/* States and Destinations */}
          <div className="space-y-4">
            {/* Uttar Pradesh */}
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div
                className="bg-[#f8f9fa] p-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleState("Uttar Pradesh")}
              >
                <h3 className="text-xl font-bold text-blue-700">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  Uttar Pradesh
                </h3>
                <i
                  className={`fas fa-chevron-${
                    expandedState["Uttar Pradesh"] ? "up" : "down"
                  } text-blue-600`}
                ></i>
              </div>
              {expandedState["Uttar Pradesh"] && (
                <div className="p-4 bg-white">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold flex items-center">
                        <i className="fas fa-landmark mr-2 text-blue-600"></i>
                        Badrinath
                      </h4>
                      <ul className="list-disc ml-8 mt-2">
                        <li>Mahadev Temple</li>
                        <li>Alakhnath Temple</li>
                        <li>Triveninath Temple</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold flex items-center">
                        <i className="fas fa-landmark mr-2 text-blue-600"></i>
                        Gorakhpur
                      </h4>
                      <ul className="list-disc ml-8 mt-2">
                        <li>Gorakhnath Temple</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold flex items-center">
                        <i className="fas fa-landmark mr-2 text-blue-600"></i>
                        Naimisharanya
                      </h4>
                      <ul className="list-disc ml-8 mt-2">
                        <li>Brahmakund</li>
                        <li>Adishakti Temple</li>
                        <li>Dev Temple</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold flex items-center">
                        <i className="fas fa-landmark mr-2 text-blue-600"></i>
                        Prayagraj
                      </h4>
                      <ul className="list-disc ml-8 mt-2">
                        <li>Sangam Snaan</li>
                        <li>Late Hanuman Temple</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold flex items-center">
                        <i className="fas fa-landmark mr-2 text-blue-600"></i>
                        Ayodhya
                      </h4>
                      <ul className="list-disc ml-8 mt-2">
                        <li>Saryu Snaan</li>
                        <li>Hanuman Garhi Temple</li>
                        <li>Janak Mahal</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold flex items-center">
                        <i className="fas fa-landmark mr-2 text-blue-600"></i>
                        Kashi
                      </h4>
                      <ul className="list-disc ml-8 mt-2">
                        <li>Vishwanath Temple</li>
                        <li>Sankatmochan Temple</li>
                        <li>84 Ghaat Darshan</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Nepal */}
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div
                className="bg-[#f8f9fa] p-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleState("Nepal")}
              >
                <h3 className="text-xl font-bold text-blue-700">
                  <i className="fas fa-mountain mr-2"></i>
                  Nepal
                </h3>
                <i
                  className={`fas fa-chevron-${
                    expandedState["Nepal"] ? "up" : "down"
                  } text-blue-600`}
                ></i>
              </div>
              {expandedState["Nepal"] && (
                <div className="p-4 bg-white">
                  <ul className="list-disc ml-8">
                    <li>Pashupati Temple</li>
                    <li>Janak Bhawan</li>
                    <li>Pokhra Temple</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Bihar */}
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div
                className="bg-[#f8f9fa] p-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleState("Bihar")}
              >
                <h3 className="text-xl font-bold text-blue-700">
                  <i className="fas fa-place-of-worship mr-2"></i>
                  Bihar
                </h3>
                <i
                  className={`fas fa-chevron-${
                    expandedState["Bihar"] ? "up" : "down"
                  } text-blue-600`}
                ></i>
              </div>
              {expandedState["Bihar"] && (
                <div className="p-4 bg-white">
                  <ul className="list-disc ml-8">
                    <li>Vishwapad Temple</li>
                    <li>Bouddh Temple</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Bengal */}
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div
                className="bg-[#f8f9fa] p-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleState("Bengal")}
              >
                <h3 className="text-xl font-bold text-blue-700">
                  <i className="fas fa-mountain mr-2"></i>
                  Bengal
                </h3>
                <i
                  className={`fas fa-chevron-${
                    expandedState["Bengal"] ? "up" : "down"
                  } text-blue-600`}
                ></i>
              </div>
              {expandedState["Bengal"] && (
                <div className="p-4 bg-white">
                  <ul className="list-disc ml-8">
                    <li>Ganga Sagar</li>
                    <li>Kali Temple</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Jharkhand */}
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div
                className="bg-[#f8f9fa] p-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleState("Jharkhand")}
              >
                <h3 className="text-xl font-bold text-blue-700">
                  <i className="fas fa-mountain mr-2"></i>
                  Jharkhand
                </h3>
                <i
                  className={`fas fa-chevron-${
                    expandedState["Jharkhand"] ? "up" : "down"
                  } text-blue-600`}
                ></i>
              </div>
              {expandedState["Jharkhand"] && (
                <div className="p-4 bg-white">
                  <ul className="list-disc ml-8">
                    <li>Deoghar Jyotirling Temple</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Package Details */}
            <div className="mt-8 bg-[#f8f9fa] p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                <i className="fas fa-box-open mr-2"></i>
                Package Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <p className="flex items-center">
                    <i className="fas fa-money-bill-wave text-green-600 mr-2"></i>
                    <span className="font-semibold">Booking Amount:</span>
                    <span className="ml-2">₹1,500</span>
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-tags text-blue-600 mr-2"></i>
                    <span className="font-semibold">Total Package Cost:</span>
                    <span className="ml-2">₹16,500</span>
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="flex items-center">
                    <i className="fas fa-check-circle text-green-600 mr-2"></i>
                    <span className="font-semibold">Includes:</span>
                    <span className="ml-2">Travel, Stay & Food</span>
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-id-card text-red-600 mr-2"></i>
                    <span className="font-semibold">Required:</span>
                    <span className="ml-2">Aadhar Card Mandatory</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-6 text-center bg-[#f8f9fa] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center justify-center">
                <i className="fas fa-phone-alt mr-2"></i>
                Contact Information
              </h3>
              <div className="flex justify-center items-center space-x-6 flex-wrap">
                <span className="flex items-center">
                  <i className="fas fa-phone-alt mr-2 text-green-600"></i>
                  99916 24086
                </span>
                <span className="flex items-center">
                  <i className="fas fa-phone-alt mr-2 text-green-600"></i>
                  93063 63805
                </span>
                <span className="flex items-center">
                  <i className="fas fa-phone-alt mr-2 text-green-600"></i>
                  95883 44110
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Modal */}
        {isBookingModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h3 className="text-xl font-bold mb-4">Book Your Seat</h3>
              <p className="mb-4">
                Available Seats: {availableSeats - bookedSeats}
              </p>
              <p className="mb-4">Booking Amount: ₹1,500</p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setIsBookingModalOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={async () => {
                    // Add booking logic here
                    setIsBookingModalOpen(false);
                    checkUserLogin();
                    await createPayment();
                  }}
                >
                  Proceed to Pay
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingCard;