import MainTheme from "@components/MainTheme";
import EventsSection from "@components/Sections/EventsSection";
import HeroSection from "@components/Sections/HeroSection";
import WhoWeAreSection from "@components/Sections/whoWeAre";
import React from "react";

export default function Home() {
  return (
    <MainTheme>
      <>
        {/* Hero Section */}
        <HeroSection />
        {/* Who We Are Section */}
        <WhoWeAreSection />
        {/* Clients Section */}
        <EventsSection />
      </>
    </MainTheme>
  );
}
