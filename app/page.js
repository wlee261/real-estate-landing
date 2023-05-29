"use client";

import DescriptionCard from "../components/DescriptionCard";
import profile from "../assets/profile.jpg";
import TextCarousel from "@/components/TextCarousel";
import LocationCard from "@/components/LocationCard";
import Locations from "@/components/Locations";

const aboutParagraphs = [
  "A 30-year Bay Area resident, Joan holds a long-term perspective on the Bay Area real estate market. Over decades of acquiring and renovating properties in the Bay Area, Joan honed a keen understanding of navigating the home buying process and property valuation.",
  "To Joan, the foundation of this business is integrity. While staying on top of a dynamic real estate market, she strives to be forthright and diligent in her representation, placing her clients’ interests above all else. As the agent for both current and prospective homeowners, Joan serves as a steadfast advisor during one of the most important decisions in life.",
  "Joan was born in Taipei, Taiwan, and is fluent in both Mandarin and Taiwanese. She immigrated to Silicon Valley in the early 1990s, where she later fulfilled her dream of becoming a homeowner. She has been attached to the Valley ever since, knowing what it takes to be a homeowner through the boom and busts of dot-com, 2008, and the tech resurgence. While she lives and breathes real estate, Joan is a foodie at heart. She is passionate about cooking farm-to-table dishes from her garden, golf, and travel.",
];

const testimonials = [
  "Working with our real estate agent was a dream come true! Their expertise and personalized approach made finding our dream home a breeze. They truly went above and beyond to make the entire process smooth and stress-free.",
  "We can't say enough positive things about our real estate agent. Their exceptional knowledge of the market and attention to detail ensured we found the perfect home. They were always available, guiding us every step of the way.",
  "Our real estate agent surpassed our expectations. Their professionalism, patience, and excellent negotiation skills helped us secure our dream property at a great price. We're grateful for their dedication and would highly recommend their services.",
  "Our experience with our real estate agent was outstanding. They listened attentively to our needs and presented us with incredible options. Their proactive approach and genuine care made us feel confident and excited throughout the entire home-buying process.",
  "Choosing our real estate agent was the best decision we made. Their deep knowledge of the local market and exceptional communication skills were instrumental in finding us the perfect home. Their friendly and approachable demeanor made the entire experience enjoyable and stress-free.",
];

const reviewers = [
  "Reviewer 1",
  "Reviewer 2",
  "Reviewer 3",
  "Reviewer 4",
  "Reviewer 5",
];

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
      <div>
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
