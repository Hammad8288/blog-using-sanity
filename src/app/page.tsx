import React from "react";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="relative max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-6">
            Welcome to <span className="text-yellow-300">My Tech Blog</span>
          </h1>
          <p className="text-lg font-light mb-8">
            Hi, I am <span className="font-semibold">Hammad Ahmed</span>. 
            Join me on my journey to explore the latest advancements in technology, 
            programming tips, and exciting innovations.
          </p>
          <a
            href="/Blog"
            className="inline-block px-6 py-3 bg-yellow-300 text-blue-800 font-semibold rounded-lg hover:bg-yellow-400 transition"
          >
            Explore Blogs
          </a>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
