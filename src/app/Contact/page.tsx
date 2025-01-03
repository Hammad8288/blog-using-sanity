import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Get in Touch</h2>
        <p className="text-center text-gray-600 mt-2">
          Have questions or feedback about our blogs? We would love to hear from you!
        </p>
        <form className="mt-8 bg-white shadow-md rounded-lg p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                placeholder="Your email"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-blue-500 w-full text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
