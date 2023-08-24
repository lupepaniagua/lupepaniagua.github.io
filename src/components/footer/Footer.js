import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Left from './left/Left';
import Right from './right/Right';
import './footer.css';

const footerVariants = {
  hidden: { opacity: 0, translateY: 100 },
  visible: { opacity: 1, translateY: 0 },
};

export default function Footer() {
  const controls = useAnimation();
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerContainer = document.getElementById('boxContainer');
      const footerRect = footerContainer.getBoundingClientRect();

      if (!triggered && footerRect.top < window.innerHeight) {
        controls.start('visible');
        setTriggered(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, triggered]);

  return (
    <motion.div
      id='boxContainer'
      initial='hidden'
      animate={controls}
      variants={footerVariants}
      transition={{ duration: 1 }}
    >
      <div id='footerBoxes'>
        <Left />
        <Right />
      </div>
    </motion.div>
  );
}
