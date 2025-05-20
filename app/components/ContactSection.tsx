"use client";

import React from "react";

const ContactSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#032616] flex justify-center">
      <div className="bg-[#08371e] rounded-3xl w-full max-w-4xl mx-4 md:mx-8 px-6 md:px-12 py-10 md:py-14 flex flex-col md:flex-row gap-8 items-center">
        {/* Left Side - Text */}
        <div className="flex-1 w-full md:w-1/2 flex flex-col justify-center mb-8 md:mb-0">
          <h2 className="text-white font-['General_Sans'] text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
            Get in Touch<br />with WORG
          </h2>
          <p className="text-green-400 text-base md:text-lg mb-4">
            Want to collaborate, invest, or join our growing network? Let’s talk.
          </p>
        </div>
        {/* Right Side - Form */}
        <form className="flex-1 w-full md:w-1/2 flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex-1 flex flex-col">
              <label htmlFor="surname" className="text-xs text-black mb-1 ml-2">Surname</label>
              <input
                id="surname"
                type="text"
                placeholder="Enter your Surname"
                className="rounded-xl px-4 py-3 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-sm"
                required
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="firstname" className="text-xs text-black mb-1 ml-2">First Name</label>
              <input
                id="firstname"
                type="text"
                placeholder="Enter First Name"
                className="rounded-xl px-4 py-3 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-sm"
                required
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-xs text-black mb-1 ml-2">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter email address"
              className="rounded-xl px-4 py-3 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-sm"
              required
            />
          </div>
          <div className="flex items-center gap-2 ml-1">
            <input id="subscribe" type="checkbox" className="accent-green-500 w-4 h-4" defaultChecked />
            <label htmlFor="subscribe" className="text-sm text-green-300">Subscribe me to WORG updates & opportunities</label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-xs text-black mb-1 ml-2">Phone Number <span className="text-gray-400">(Optional)</span></label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter phone number (Optional)"
              className="rounded-xl px-4 py-3 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="text-xs text-black mb-1 ml-2">Description <span className="text-gray-400">(Optional)</span></label>
            <textarea
              id="description"
              placeholder="Enter description here"
              rows={3}
              className="rounded-xl px-4 py-3 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-sm resize-none"
            />
          </div>
          <button
            type="submit"
            className="mt-2 bg-green-500 text-white font-medium py-3 rounded-xl hover:bg-green-600 transition-colors text-base w-full"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
