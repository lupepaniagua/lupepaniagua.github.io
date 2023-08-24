import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './home.css';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', damping: 10, stiffness: 400 },
    },
  };

  return (
    <div>
      <Helmet>
        <title>Lupe Paniagua | Designer</title>
      </Helmet>
      <Header />
      <div id='landingContainer'>
        <motion.h1
          id='greyHeadText'
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          Hello there, I’m Lupe. ✨
        </motion.h1>
        <motion.h1
          id='blackHeadText'
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          An empathy-driven product designer. Focused on creating impactful, inclusive, and thoughtful user experiences.
        </motion.h1>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          <p id='currentJob'>📍 Previously a Product Design Intern @ emocha Health</p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
