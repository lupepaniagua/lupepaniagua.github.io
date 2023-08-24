import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ImageGrid from './ImageGrid';
import { musicImageData, artImageData, eecsImageData, miscImageData } from './ImageData';
import './play.css';


const Section = ({ title, description, data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} className="playContainer">
      <div className="content">
        <motion.h3
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          {title}
        </motion.h3>
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          {description}
        </motion.p>
      </div>
      <ImageGrid data={data} />
    </div>
  );
};

export default function Play() {
  return (
    <div>
      <Helmet>
        <title>Play </title>
      </Helmet>
      <Header />
      <Section
        title="Visual Storytelling Using Music 🎶"
        description="My passion for music is a constant source of inspiration for my creativity. I try to
        to capture the essence of an album or lyric and express all of my ideas and feelings
        through a visual lens in my artwork.
        This is an ongoing series of dedicated music-related pieces to show my admiration for some
        amazing bands and artists."
        data={musicImageData}
      />
      <Section
        title="Exploring Art For Fun 🌱"
        description="A collection of other posters I've been making throughout the years for fun. I constantly try to
        challenge myself to improve upon my design skills and this serves as a playground for me
        to experiment with new styles, techniques, and software."
        data={artImageData}
      />
      <Section
        title="Graphics For UC Berkeley EECS Department 🤠"
        description="Here are a select few of the flyers I made during my time as a student administrative assistant for the
        Electrical Engineering Department at UC Berkeley."
        data={eecsImageData}
      />
      <Section
        title="Art In All Kinds Of Forms 🎨"
        description="A gallery of miscellaneous projects I've worked on through the years, including UI exercises and other side projects.
        Still under construction."
        data={miscImageData}
      />
      <Footer />
    </div>
  );
}
