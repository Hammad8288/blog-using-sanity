"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-10 bg-white shadow-md">
      <nav>
        <div className="flex justify-between items-center px-6 py-4 md:px-10">
          <Link href={"/"} className="font-bold text-2xl text-gray-800">
            Hammad Blog
          </Link>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <GiHamburgerMenu className="h-6 w-6 text-gray-800" />
          </button>

          {/* Navbar Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full bg-white md:static md:flex md:items-center md:w-auto `}
          >
            <div className="flex flex-col items-center space-y-4 py-4 md:flex-row md:space-y-0 md:space-x-8 md:py-0 md:px-72">
              <Link
                href={"/"}
                className="text-gray-800 hover:font-bold hover:underline hover:underline-offset-2"
              >
                Home
              </Link>
              <Link
                href={"/About"}
                className="text-gray-800 hover:font-bold hover:underline hover:underline-offset-2"
              >
                About
              </Link>
              <Link
                href={"/Blog"}
                className="text-gray-800 hover:font-bold hover:underline hover:underline-offset-2"
              >
                Blog
              </Link>
              <Link
                href={"/Contact"}
                className="text-gray-800 hover:font-bold hover:underline hover:underline-offset-2"
              >
                Contact
              </Link>
            </div>

            <div className="flex justify-center gap-6 md:gap-2 items-center py-4 md:flex-row md:space-x-4 md:py-0">
              <Link
                href={"/Sign-Up"}
                className="hover:font-bold bg-slate-100 px-6 py-2 rounded-lg text-gray-800"
              >
                Sign Up
              </Link>
              <Link
                href={"/Log-in"}
                className="hover:font-bold bg-slate-100 px-6 py-2 rounded-lg text-gray-800"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
