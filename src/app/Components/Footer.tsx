import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 px-8 text-white ">
      <div className="flex flex-col md:flex-row justify-between items-center text-center">
        <div className="mb-4 md:mb-0">
          <p className="text-center md:text-left">
            © 2024 Hammad Blog. All Rights Reserved.
          </p>
        </div>

        <div className="flex space-x-6">
          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/hammad-ahmed-7aa73118a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transition-transform hover:scale-105"
          >
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              className="w-11 h-15 rounded-full"
              width={50}
              height={20}
            />
            <p className="text-sm font-semibold mt-2 text-center">
              LinkedIn
            </p>
          </a>

          {/* GitHub Link */}
          <a
            href="https://github.com/Hammad8288?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transition-transform hover:scale-105"
          >
            <Image
              src="/github.png"
              alt="GitHub"
              className="w-20 h-15 rounded-full"
              width={50}
              height={20}
            />
            <p className="text-sm font-semibold mt-2 text-center">
              GitHub
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
