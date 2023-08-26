import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './home.css';

const hoverEffect = {
  scale: 1.075,
  transition: {
    type: 'spring',
    stiffness: 400,
    damping: 10,
  },
};

const typingDelay = 70;
const cursorBlinkInterval = 850;

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', damping: 10, stiffness: 400 },
    },
  };


  const roles = [
    'an empathetic product designer',
    'a loving dog mom 🐕',
    'a recent UC Berkeley graduate 🐻',
    'crafting thoughtful and impactful digital experiences',
    'a visual storyteller',
    'passionate about inclusivity and diversity',
    'a problem solver',
    'a music nerd 🤓',
    'making Spotify playlists 🎶',
    'designer who can work with code',
    'a graphic designer',
    'curious about the human brain and mind',
    'making design accesible',
    'building joyful and beautiful products',
    'a self-taught designer',
    'always curious and always learning',
    'interested in the interaction of society and technology',
    'a bread enthusiast 🥖',
    'using Cognitive Science to humanize tech',
    'based in the Bay Area',
    'designing and developing for social good',
    'a Gengar and Breloom fan 🎮',
    'waiting for a new adventure 🏰',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentRoleText, setCurrentRoleText] = useState('');
  const [isMultiLine, setIsMultiLine] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    let currentText = '';
    let targetText = roles[currentRoleIndex];
    let index = 0;

    const typingInterval = setInterval(() => {
      currentText += targetText[index];
      setCurrentRoleText(currentText);
      index++;

      if (index >= targetText.length) {
        clearInterval(typingInterval);
        setIsMultiLine(currentText.split('\n').length > 1);
        startCursorBlink();
      }
    }, typingDelay);

    return () => clearInterval(typingInterval);
  }, [currentRoleIndex]);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * roles.length);
    setCurrentRoleIndex(randomIndex);
  };

  const startCursorBlink = () => {
    setTimeout(() => {
      setCursorVisible(true);

      const cursorBlinkIntervalId = setInterval(() => {
        setCursorVisible((prev) => !prev);
      }, cursorBlinkInterval);

      return () => {
        clearInterval(cursorBlinkIntervalId);
        setCursorVisible(false);
      };
    }, currentRoleText.length * typingDelay); 
  };

  useEffect(() => {
    startCursorBlink();
    return startCursorBlink;
  }, []);

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
          Hello there 👋
          <br />
          Lupe Paniagua is{' '}
          <span id='cyclingHomeText'>
            <motion.span
              initial='hidden'
              animate='visible'
              variants={containerVariants}
              onClick={handleClick}
              whileHover={hoverEffect}
              style={{ cursor: 'pointer', display: 'inline-block' }}
            >
              {currentRoleText}
              {cursorVisible && '|'}
            </motion.span>
          </span>{' '}
        </motion.h1>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          <p id='currentJob'>📍 Previously a Product Design Intern @ <span>emocha Health</span></p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}