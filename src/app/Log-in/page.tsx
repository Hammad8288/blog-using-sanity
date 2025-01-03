import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="text-center shadow-2xl bg-white w-full h-auto sm:w-[80%] md:w-[60%] lg:w-[40%] px-6 sm:px-10 py-10 rounded-lg">
        <h1 className="font-bold text-[28px] sm:text-[32px] mt-4 text-gray-700">
          Log In
        </h1>

        {/* Form Fields */}
        <div className="space-y-6 mt-8">
          <div>
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full py-3 px-4 rounded-md focus:outline-blue-500 border border-gray-300"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Your Password"
              className="w-full py-3 px-4 rounded-md focus:outline-blue-500 border border-gray-300"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-4 w-full rounded-md transition duration-300">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
