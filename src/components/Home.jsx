"use client";
import {React,useRef} from "react";
import BookingCard from "./BookingCard";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const bookingRef = useRef(null);

    const handleScrollToBooking = () => {
       navigate('/signup')
    };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Fixed Bus Image */}
      <div className="relative h-[600px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://ucarecdn.com/7edf1f84-7ad8-4e7b-8608-3073a6463417/-/format/auto/")',
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-playfair font-bold text-white mb-6">
                  Explore in Comfort & Style
                </h1>
                <p className="text-xl font-roboto text-white/90 mb-8">
                  Experience luxury travel with our modern fleet of coaches.
                  Your journey is as important as your destination.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"  onClick={handleScrollToBooking}  >
                    Book Your Journey
                  </button>
                  {/* <button className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-3 px-8 rounded-full transition duration-300">
                    View Our Fleet
                  </button> */}
                </div>

                {/* Feature Badges */}
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                    <i className="fas fa-wifi text-2xl mb-2"></i>
                    <p className="text-sm">Free Wi-Fi</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                    <i className="fas fa-snowflake text-2xl mb-2"></i>
                    <p className="text-sm">Air Conditioned</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                    <i className="fas fa-map-marked-alt text-2xl mb-2"></i>
                    <p className="text-sm">GPS Tracked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Tour Packages */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-playfair text-center mb-12">
          Our Current Package
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <div className="h-64 bg-[#f8f9fa]">
              <i className="fas fa-mountain text-6xl text-[#ff6b6b] flex items-center justify-center h-full"></i>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold font-roboto mb-2">
                Char Dham Yatra
              </h3>
              <p className="text-gray-600">
                15 Days 
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-[#ff6b6b] font-semibold">From $299</span>
                <button className="text-[#ff6b6b] font-semibold hover:text-[#ff5252]">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div> */}
        <BookingCard ref={bookingRef}/>

        
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-playfair text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <i className="fas fa-shield-alt text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-semibold font-roboto mb-2">
                Safety First
              </h3>
              <p className="text-gray-600">
                Regular maintenance and professional drivers
              </p>
            </div>
            <div className="p-6">
              <i className="fas fa-clock text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-semibold font-roboto mb-2">
                Punctual Service
              </h3>
              <p className="text-gray-600">
                On-time departure and arrival guaranteed
              </p>
            </div>
            <div className="p-6">
              <i className="fas fa-couch text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-semibold font-roboto mb-2">
                Comfort
              </h3>
              <p className="text-gray-600">
                Spacious seating with extra legroom
              </p>
            </div>
            <div className="p-6">
              <i className="fas fa-headset text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-semibold font-roboto mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">Always here to help you</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair mb-8">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact us for custom tour packages and group bookings
          </p>
          <button className="bg-blue-500 hover:bg-text-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Contact Us Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;