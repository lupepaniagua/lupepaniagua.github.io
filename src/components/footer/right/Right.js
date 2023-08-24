import React from 'react';
import { motion } from 'framer-motion';
import resume from '../../../assets/resume-lupepaniagua.pdf';
import './right.css';

export default function Right() {
  return (
    <div id='rightBox'>
        <div id='rightBox'>
            <motion.h2
                className='emphasized'
                whileHover={ {
                    opacity: 0.6,
                    scale: 1.2,
                    transition: {
                        type: "spring",       
                        stiffness: 400,      
                        damping: 10,     
                      }
                    }}
            >
                <a href={resume} target='_blank' rel='noreferrer'>
                    Check out my resume 👀
                </a>
            </motion.h2>
        </div>
        <div id='smallerBox'>
            <p>
                Designed and developed with 🤍🎶🐕🥹
            </p>
            <p>
                © Lupe Paniagua 2022. ✨ All rights reserved.
            </p>
            <p>
                Last updated: Jul 2023
            </p>
        </div>
    </div>
  )
}
