import React from "react";

export default function HeaderMenu(){
    return(
        <header className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="w-32">
            <img src="/assets/images/logo/logo.png" alt="Planet" className="h-12" />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-red-600 font-medium">Home</a>
            <a href="#" className="text-[#2B3990] hover:text-red-600">Our Services</a>
            <a href="#" className="text-[#2B3990] hover:text-red-600">About Us</a>
            <a href="#" className="text-[#2B3990] hover:text-red-600">Contact Us</a>
          </nav>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
    )
}