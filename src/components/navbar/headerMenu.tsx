import Link from "next/link";
import React from "react";
import { useRouter } from "next/router"; // Import useRouter

export default function HeaderMenu() {
  const router = useRouter(); // Initialize useRouter hook to access the current path

  return (
    <header className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="w-32">
          <img
            src="/assets/images/logo/logo.png"
            alt="Planet"
            className="h-12 cursor-pointer"
          />
        </div>
        <nav className="hidden items-center space-x-8 md:flex">
          <Link href={"/"} passHref>
            <span
              className={` cursor-pointer font-medium hover:text-red-600 ${
                router.pathname === "/" ? "text-red-600" : "text-[#2B3990]"
              }`}
            >
              Home
            </span>
          </Link>
          <Link href={"/Services"} passHref>
            <span
              className={`cursor-pointer hover:text-red-600 ${
                router.pathname === "/Services"
                  ? "text-red-600"
                  : "text-[#2B3990]"
              }`}
            >
              Our Services
            </span>
          </Link>
          <Link href={"/AboutUs"} passHref>
            <span
              className={`cursor-pointer hover:text-red-600 ${
                router.pathname === "/AboutUs"
                  ? "text-red-600"
                  : "text-[#2B3990]"
              }`}
            >
              About Us
            </span>
          </Link>
          <Link href={"/ContactUs"} passHref>
            <span
              className={`cursor-pointer hover:text-red-600 ${
                router.pathname === "/ContactUs"
                  ? "text-red-600"
                  : "text-[#2B3990]"
              }`}
            >
              Contact Us
            </span>
          </Link>
        </nav>
        <button className="md:hidden">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
