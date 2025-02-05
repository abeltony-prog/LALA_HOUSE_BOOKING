import MainTheme from "@components/MainTheme";
import React from "react";

export default function ContactUsPage(){
    return(
        <MainTheme>
        {/* Contact Section */}
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2B3990] mb-12">
          Contact Us
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Map and Contact Info */}
          <div className="lg:w-1/2 space-y-6">
            <div className="rounded-lg overflow-hidden h-[300px] md:h-[400px] bg-gray-100">
            <img
  src="/assets/images/map/locationmap.png"
  alt="Location map"
  width={990}  // Set the desired width in pixels
  height={100}  // Set the desired height in pixels
  className="relative object-cover rounded-md"
/>
            </div>
            
            <div className="flex gap-6">
              <div>
                <span className="font-semibold">Location:</span>
                <p className="text-gray-600">Kigali, Rwanda</p>
              </div>
              <div>
                <span className="font-semibold">Contact:</span>
                <p className="text-gray-600">+234 0000 0 0 0</p>
              </div>
              <div>
                <span className="font-semibold">Email:</span>
                <p className="text-gray-600">example@test.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Names
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2B3990] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2B3990] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2B3990] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2B3990] focus:border-transparent"
                ></textarea>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
       </MainTheme>
    )
}