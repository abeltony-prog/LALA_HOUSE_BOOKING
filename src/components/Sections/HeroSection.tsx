import React from "react";

export default function HeroSection(){
    return(
        <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2B3990] mb-6">
              Lorem Ipsum
            </h1>
            <p className="text-gray-700 mb-8 max-w-lg">
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors">
              Reach Us
            </button>
            <div className="flex items-center space-x-4 mt-8">
              <a href="#" className="hover:opacity-80">
                <img src="https://static.vecteezy.com/system/resources/previews/042/148/632/non_2x/instagram-logo-instagram-social-media-icon-free-png.png" alt="Instagram" className="h-8 w-8" />
              </a>
              <a href="#" className="hover:opacity-80">
                <img src="https://static.vecteezy.com/system/resources/previews/023/986/704/non_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png" alt="YouTube" className="h-8 w-8" />
              </a>
              <a href="#" className="hover:opacity-80">
                <img src="https://freepnglogo.com/images/all_img/1707222563twitter-logo-png.png" alt="Twitter" className="h-8 w-8" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="/assets/images/heroImage.png" 
              alt="Headphones Globe Illustration" 
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </section>
  
    )
}