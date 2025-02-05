import MainTheme from "@components/MainTheme";
import React from "react";

export default function ContactUsPage() {
  return (
    <MainTheme>
      {/* Contact Section */}
      <section className="container mx-auto px-4 py-12">
        <h1 className="mb-12 text-3xl font-bold text-[#2B3990] md:text-4xl">
          Contact Us
        </h1>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Map and Contact Info */}
          <div className="space-y-6 lg:w-1/2">
            <div className="h-[300px] overflow-hidden rounded-lg bg-gray-100 md:h-[400px]">
              <img
                src="/assets/images/map/locationmap.png"
                alt="Location map"
                width={990}
                height={100}
                className="relative rounded-md object-cover"
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
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Names
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-lg border border-gray-200 p-3 focus:border-transparent focus:ring-2 focus:ring-[#2B3990]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-gray-200 p-3 focus:border-transparent focus:ring-2 focus:ring-[#2B3990]"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full rounded-lg border border-gray-200 p-3 focus:border-transparent focus:ring-2 focus:ring-[#2B3990]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full rounded-lg border border-gray-200 p-3 focus:border-transparent focus:ring-2 focus:ring-[#2B3990]"
                ></textarea>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="rounded-full bg-red-500 px-8 py-3 text-white transition-colors hover:bg-red-600"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </MainTheme>
  );
}
