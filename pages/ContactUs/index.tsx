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
                <p className="text-gray-600">18 KG 6 AVENUE , Kigali, Kimihurura, Rwanda</p>
              </div>
              <div>
                <span className="font-semibold">Contact:</span>
                <p className="text-gray-600">+250 788 301 974</p>
              </div>
              <div>
                <span className="font-semibold">Email:</span>
                <p className="text-gray-600">info@planetevents.rw</p>
              </div>
            </div>
            <div>
              <a
                href="https://www.google.com/maps/place/Planet+Events+Group/@-1.9578391,30.1132854,18z/data=!4m6!3m5!1s0x19dca7a4962c617f:0x23299e39cb94495b!8m2!3d-1.9587652!4d30.1149355!16s%2Fg%2F11wppnf73p?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="absolute rounded-lg bg-red-500  py-2 px-6 text-white hover:cursor-pointer"
              >
                <span className="flex">
                  <svg
                    width="15px"
                    className="mt-1 pr-1"
                    height="15px"
                    viewBox="-4 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>location</title>{" "}
                      <desc>Created with Sketch Beta.</desc> <defs> </defs>{" "}
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        {" "}
                        <g
                          id="Icon-Set"
                          transform="translate(-104.000000, -411.000000)"
                          fill="#ffffff"
                        >
                          {" "}
                          <path
                            d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z"
                            id="location"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  Use Google Map
                </span>
              </a>
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
