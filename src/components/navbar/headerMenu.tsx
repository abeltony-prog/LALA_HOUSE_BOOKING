import Link from "next/link";
import React from "react";

export default function HeaderMenu() {
  return (
    <header className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="w-32">
          <img
            src="/assets/images/logo/logo.png"
            alt="Planet"
            className="h-12"
          />
        </div>
        <nav className="hidden items-center space-x-8 md:flex">
          <Link href={"/"} passHref>
            <span className="font-medium text-red-600">Home</span>
          </Link>
          <Link href={"/Services"} passHref>
            <span className="cursor-pointer text-[#2B3990] hover:text-red-600">
              Our Services
            </span>
          </Link>
          <Link href={"/AboutUs"} passHref>
            <span className="cursor-pointer text-[#2B3990] hover:text-red-600">
              About Us
            </span>
          </Link>
          <Link href={"/ContactUs"} passHref>
            <span className="text-[#2B3990] hover:text-red-600">
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
