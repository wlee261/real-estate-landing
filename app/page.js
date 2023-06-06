"use client";

import DescriptionCard from "../components/DescriptionCard";
import profile from "../assets/profile.jpg";
import TextCarousel from "@/components/TextCarousel";
import Locations from "@/components/Locations";

import { aboutParagraphs, testimonials, reviewers } from "@/data/paragraphs";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-background">
        <span className="home-background--name">Joan Sung</span>
        <span className="home-background--license">CA DRE #12312312</span>
        <span className="home-background--area">Bay Area</span>
      </div>
      <div className="home-about">
        <DescriptionCard
          title="About Joan"
          paragraphs={aboutParagraphs}
          image={profile}
        />
      </div>
      <div className="home-testimonials">
        <h1 className="home-testimonials--header">What Joan's Clients Say</h1>
      </div>
      <div className="home-testimonials--carousel">
        <TextCarousel labels={reviewers} paragraphs={testimonials} />
      </div>
      <div className="home-locations">
        <h1 className="home-location--header">AREAS SERVED</h1>
        <Locations />
      </div>
    </div>
  );
};

export default HomePage;
