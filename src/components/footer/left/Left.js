import React from 'react';
import { motion } from 'framer-motion';
import './left.css';

export default function Left() {
  const linkHoverEffect = {
    opacity: 0.6,
    scale: 1.2,
    transition: {
      type: "spring", 
      stiffness: 400,      
      damping: 10,          
    },
  };

  return (
    <div id='leftBox'>
      <h2 className='emphasized'>Let's get in touch!</h2>
      <div id='contactRow'>
        <div className='socialsColumn'>
          <p>Email</p>
          <p>Linkedin</p>
          <p>Read.cv</p>
          <p>Calendar</p>
          <p>Spotify</p>
        </div>
        <div className='socialsColumn'>
          <motion.a
            href="mailto:lupepaniagua@berkeley.edu"
            target='_blank'
            rel="noreferrer"
            whileHover={linkHoverEffect}
          >
            <p className='bolded'>lupepaniagua@berkeley.edu</p>
          </motion.a>
          <motion.a
            href='https://www.linkedin.com/in/lupepaniagua/'
            target='_blank'
            rel="noreferrer"
            whileHover={linkHoverEffect}
          >
            <p className='bolded'>@lupepaniagua</p>
          </motion.a>
          <motion.a
            href='https://read.cv/lupepaniagua'
            target='_blank'
            rel="noreferrer"
            whileHover={linkHoverEffect}
          >
            <p className='bolded'>@lupepaniagua</p>
          </motion.a>
          <motion.a
            href='https://calendar.amie.so/s/lupe'
            target='_blank'
            rel="noreferrer"
            whileHover={linkHoverEffect}
          >
            <p className='bolded'>@lupe</p>
          </motion.a>
          <motion.a
            href='https://open.spotify.com/user/its.lupee'
            target='_blank'
            rel="noreferrer"
            whileHover={linkHoverEffect}
          >
            <p className='bolded'>@its.lupee</p>
          </motion.a>
        </div>
      </div>
    </div>
  )
}
