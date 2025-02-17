import Signup from "@components/Theme/Signup";
import React from "react";

export default function ContactUsPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="relative hidden bg-black lg:flex lg:w-1/2">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${"https://onekindesign.com/wp-content/uploads/2019/10/Traditional-English-Manor-House-Jauregui-Architect-01-1-Kindesign.jpg"})`,
          }}
        />
        <div className="relative z-10 p-12 text-white">
          <div className="h-8 w-8">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>
          <div className="mt-auto">
            <h1 className="mt-40 font-mono text-3xl">
              Discover the Cozy
              <br />
              Resourts and house
              <span className="mx-2 inline-block h-6 w-6">🏠</span>
              of your choice
            </h1>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">Join Now</h2>
          </div>

          <Signup />
        </div>
      </div>
    </div>
  );
}
