import EventsSection from "@components/Sections/EventsSection"
import HeroSection from "@components/Sections/HeroSection"
import WhoWeAreSection from "@components/Sections/whoWeAre"
import HeaderMenu from "@components/navbar/headerMenu"
import React from "react"


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
    {/* Header */}
<HeaderMenu />

    {/* Hero Section */}
 <HeroSection />
    {/* Who We Are Section */}
<WhoWeAreSection />

    {/* Clients Section */}

   <EventsSection />
  </div>
  )
}
