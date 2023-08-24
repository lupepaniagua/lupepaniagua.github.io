import React, { useState } from 'react';
import { motion } from 'framer-motion';
import closeIcon from '../../assets/closeIcon.svg';
import './play.css';

export default function ImageGrid({ data }) {
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const [imgText, setImgText] = useState('');

  const getImg = (imgSrc, imgText) => {
    setTempImgSrc(imgSrc);
    setImgText(imgText);
    setModal(true);
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <div className={modal ? 'modal open' : 'modal'}>
        <button onClick={() => setModal(false)} className="closeButton">
          <motion.img
            loading="lazy"
            src={closeIcon}
            alt=" "
          />
        </button>
        <img loading="lazy" src={tempImgSrc} alt=" " />
        <p className="largeBody">{imgText}</p>
      </div>
      <div className="galleryContainer">
        {data.map((item, index) => (
          <motion.div
            className="images"
            key={index}
            onClick={() => getImg(item.imgSrc, item.imgText)}
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ delay: index * 0.5, duration: 1, ease: 'easeInOut' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              flex: '1 1 30%',
              margin: '10px',
              order: index,
            }}
          >
            <motion.img
              loading="lazy"
              src={item.imgSrc}
              alt={item.imgText}
              style={{ height: 'auto', width: '100%' }}
              whileHover={{
                scale: 1.1,
                opacity: 0.8,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 10,
                },
              }}
            />
            <span hidden="hidden">{item.imgText}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
