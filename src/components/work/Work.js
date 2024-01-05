import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import WorkItem from './WorkItem';
import { bfiData, emochaData, sleepData, workStudyData, nectarData, spotifyData } from './WorkData';

const Work = () => {
  return (
    <div>
      <Helmet>
        <title>Work </title>
      </Helmet>
      <Header />
      <div className='workContainer'>
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 10, stiffness: 400, duration: 0.5, delay: 0.2 }}
        >
          Featured Work 👩🏽‍💻
        </motion.h1>
        <div id='workColumns' className='doubleColumns'>
          <WorkItem workData={bfiData} />
          <WorkItem workData={emochaData} />
        </div>
      </div>
      <div id='personalTitle'
      className='workContainer'>
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 10, stiffness: 400, duration: 0.5, delay: 0.2 }}
        >
          Personal Projects 🧸
        </motion.h1>
        <div id='workColumns' className='doubleColumns'>
          <WorkItem workData={spotifyData} />
          <WorkItem workData={nectarData} />
          <WorkItem workData={sleepData} />
          <WorkItem workData={workStudyData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Work;
