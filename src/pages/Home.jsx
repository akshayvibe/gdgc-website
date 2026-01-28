import React from "react";
import HeroSection from "@/Components/HeroSection/HeroSectionContainer.jsx";
import EventsSectionContainer from "@/Components/EventsSection/EventsSectionContainer.jsx";
import MembersPanel from '@/Components/memberspanel/memberspanel.jsx'
import AboutUs from "@/Components/AboutUs/AboutUs";

function Home() {
    return (
        <>
            <HeroSection />
            <EventsSectionContainer />
            <MembersPanel />
            <AboutUs />
        </>
    );
}

export default Home;
