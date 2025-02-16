import Link from "next/link";
import React from "react";

export default function FooterBar(){
    return(
        <footer className="bg-[#0a0c12] text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-6 lg:col-span-2">
              <Link href="/" className="block w-48">
                {/* <Image
                //   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-11%20at%202.54.15%E2%80%AFPM-mGcK6Iee40rrKXM920lWs7rvIWv4HP.png"
                  alt="Planet Events Group Logo"
                  width={200}
                  height={80}
                  className="w-auto h-auto"
                /> */}
              </Link>
              <p className="text-gray-300 max-w-md">
                Planet Events Group is an event management and production firm in Rwanda that specializes in crafting events that are truly out of this world.From conceptualization to execution, our innovative team brings a fresh perspective to event planning and production ensuring that each event we create is a unique and unforgettable masterpiece.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold tracking-wide text-white relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-0.5 after:w-12 after:bg-red-600">
                SERVICES
              </h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <span className="text-red-600">›</span>
                  Event Management
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <span className="text-red-600">›</span>
                  Event Production
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <span className="text-red-600">›</span>
                  Branding and Print Services
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold tracking-wide text-white relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-0.5 after:w-12 after:bg-red-600">
                CONTACT US
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>18 KG 6 Avenue</p>
                <p>Kigali, Kimihurura</p>
                <p>Rwanda</p>
                <p>
                  <span className="font-semibold">Phone:</span> +250 788 301 974
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <Link href="mailto:info@planetevents.rw" className="hover:text-white">
                    info@planetevents.rw
                  </Link>
                </p>
              </div>
              <div className="flex space-x-4 pt-4">
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                 cccc
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                xxxxxxx
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}