"use client";
import React from "react";

function Footer({
  companyName = "Tapovan Travels",
  phone1 = "99916 24086",
  phone2 = "93063 63805",
  phone3 = "95883 44110",
}) {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">
              <i className="fas fa-om mr-2"></i>
              {companyName}
            </h3>
            <p className="text-gray-300">
              Your trusted partner for spiritual journeys across India and Nepal
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white flex items-center justify-center md:justify-start"
                >
                  <i className="fas fa-chevron-right mr-2 text-sm"></i>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white flex items-center justify-center md:justify-start"
                >
                  <i className="fas fa-chevron-right mr-2 text-sm"></i>
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white flex items-center justify-center md:justify-start"
                >
                  <i className="fas fa-chevron-right mr-2 text-sm"></i>
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <p className="flex items-center justify-center md:justify-start">
                <i className="fas fa-phone-alt mr-2"></i>
                {phone1}
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <i className="fas fa-phone-alt mr-2"></i>
                {phone2}
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <i className="fas fa-phone-alt mr-2"></i>
                {phone3}
              </p>
            </div>
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <a href="#" className="hover:text-blue-400">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="hover:text-blue-400">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="hover:text-blue-400">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="hover:text-blue-400">
                <i className="fab fa-whatsapp fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 mt-8 border-t border-gray-700">
          <p className="text-gray-300">
            © 2025 {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function StoryComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow bg-gray-100 p-4">
        <p className="text-center text-gray-600">Main Content Area</p>
      </div>
      <Footer />
    </div>
  );
}

export default Footer;
