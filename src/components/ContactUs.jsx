"use client";
import React from "react";
import { useState,useEffect } from "react";

function ContactUs() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Load EmailJS script
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.emailjs.init("YOUR_PUBLIC_KEY"); // You'll need to replace this with your EmailJS public key
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await window.emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 font-roboto text-[#333333]">
          Contact Us
        </h1>

        <div className="space-y-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center border-b pb-4">
            <div className="w-full md:w-1/3">
              <span className="font-semibold text-[#666666] font-roboto">
                Business Name:
              </span>
            </div>
            <div className="w-full md:w-2/3">
              <span className="font-roboto">Tapovan Travels</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center border-b pb-4">
            <div className="w-full md:w-1/3">
              <span className="font-semibold text-[#666666] font-roboto">
                 Name:
              </span>
            </div>
            <div className="w-full md:w-2/3">
              <span className="font-roboto">Pawan Kumar</span>
            </div>
          </div>
    
          <div className="flex flex-col md:flex-row items-start md:items-center border-b pb-4">
            <div className="w-full md:w-1/3">
              <span className="font-semibold text-[#666666] font-roboto">
                Address:
              </span>
            </div>
            <div className="w-full md:w-2/3">
              <span className="font-roboto">
                Visvkarma Chownk 
                <br />
                Yamuna Nagar
                <br />
                Haryana
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center border-b pb-4">
            <div className="w-full md:w-1/3">
              <span className="font-semibold text-[#666666] font-roboto">
                Phone:
              </span>
            </div>
            <div className="w-full md:w-2/3">
              <a
                href="tel:9050778372"
                className="text-[#007bff] hover:text-[#0056b3] font-roboto"
              >
                <i className="fas fa-phone mr-2"></i>
                9306363805
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center border-b pb-4">
            <div className="w-full md:w-1/3">
              <span className="font-semibold text-[#666666] font-roboto">
                Email:
              </span>
            </div>
            <div className="w-full md:w-2/3">
              <a
                href="mailto:princedhiman73573@gmail.com"
                className="text-[#007bff] hover:text-[#0056b3] font-roboto"
              >
                <i className="fas fa-envelope mr-2"></i>
                pawan.kumar@tapovantravels.com
              </a>
            </div>
          </div>

          {/* <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="w-full md:w-1/3">
              <span className="font-semibold text-[#666666] font-roboto">
                Business Hours:
              </span>
            </div>
            <div className="w-full md:w-2/3">
              <span className="font-roboto">
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </span>
            </div>
          </div> */}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 font-roboto text-[#333333]">
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#666666] font-roboto"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#007bff] focus:outline-none focus:ring-1 focus:ring-[#007bff] font-roboto"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#666666] font-roboto"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#007bff] focus:outline-none focus:ring-1 focus:ring-[#007bff] font-roboto"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#666666] font-roboto"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#007bff] focus:outline-none focus:ring-1 focus:ring-[#007bff] font-roboto"
              />
            </div>

            {error && <div className="text-red-600 font-roboto">{error}</div>}

            {success && (
              <div className="text-green-600 font-roboto">
                Message sent successfully!
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#007bff] text-white py-2 px-4 rounded-md hover:bg-[#0056b3] focus:outline-none focus:ring-2 focus:ring-[#007bff] focus:ring-offset-2 disabled:opacity-50 font-roboto"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;