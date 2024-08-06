'use client';

import DescriptionCard from '@/components/DescriptionCard';
import TextCarousel from '@/components/TextCarousel';

import profile from '../../assets/profile.jpg';

import { aboutParagraphs, testimonials, reviewers } from '@/data/paragraphs';

import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div>
      <div className="about--background-image-container">
        <Image
          src={'/background/about.jpg'}
          fill={true}
          className="about--background-image"
        />
        <div className="about--text-container">
          <span className="about--header">Meet Joan</span>
        </div>
      </div>
      <div className="home-about">
        <DescriptionCard
          title="About Joan"
          paragraphs={aboutParagraphs}
          image={profile}
        />
      </div>
      <div className="home-testimonials">
        <h1 className="home-testimonials--header">
          What Joan&apos;s Clients Say
        </h1>
      </div>
      <div className="home-testimonials--carousel">
        <TextCarousel labels={reviewers} paragraphs={testimonials} />
      </div>
    </div>
  );
};

export default About;
