import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="text-center shadow-2xl w-full h-auto sm:w-[80%] md:w-[60%] lg:w-[40%] px-4 sm:px-8 md:px-12 py-10 rounded-lg bg-white">
        {/* Heading */}
        <h1 className="font-bold text-[25px] mt-4 sm:mt-0">Contact Us</h1>

        {/* Form Fields */}
        <div className="space-y-5 mt-8">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full py-2 px-3 rounded-md focus:outline-blue-400 border border-gray-300"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full py-2 px-3 rounded-md focus:outline-blue-400 border border-gray-300"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full py-2 px-3 rounded-md focus:outline-blue-400 border border-gray-300"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full py-2 px-3 rounded-md focus:outline-blue-400 border border-gray-300 resize-none"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 w-full rounded-md transition duration-300 ease-in-out">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
