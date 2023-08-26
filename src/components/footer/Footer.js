import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import resume from '../../assets/resume-lupepaniagua.pdf';
import { ReactComponent as ArrowSvg } from '../../assets/icons/upright-arrow.svg';
import { getNowPlayingItem } from '../spotify/SpotifyAPI';
import './footer.css';

const Footer = () => {
  const controls = useAnimation();
  const [triggered, setTriggered] = useState(false);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [lastPlayed, setLastPlayed] = useState(null);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const track = await getNowPlayingItem();
        console.log("Fetched track:", track);
        if (track?.isPlaying) {
          setCurrentlyPlaying(track);
          setLastPlayed(null);
        } else if (track) {
          setLastPlayed(track);
          localStorage.setItem('lastPlayed', JSON.stringify(track));
        } else {
          const storedLastPlayed = localStorage.getItem('lastPlayed');
          if (storedLastPlayed) {
            setLastPlayed(JSON.parse(storedLastPlayed));
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const linkHoverEffect = {
    opacity: 0.6,
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  };

  const renderPlayingStatus = () => {
    return currentlyPlaying ? 'Now Playing 🎧' : 'Offline. Last Played ';
  };

  return (
    <motion.div
      id='boxContainer'
      initial='hidden'
      animate={controls}
      variants={{
        hidden: { opacity: 0, translateY: 100 },
        visible: { opacity: 1, translateY: 0 },
      }}
      transition={{ duration: 1 }}
    >
      <div id='footerBoxes'>
        <div id='contactRow'>
            <div>
              <p id='nameBold'>Lupe Paniagua</p>
              <p id='subGrey'>Product Designer</p>
            </div>
        <div className='socialsBox'>
          <div className='socialsColumn'>
          <motion.a
              href="/"
              rel="noreferrer"
              whileHover={linkHoverEffect}
            >
              <p>Home</p>
            </motion.a>
          <motion.a
              href='/work'
              rel="noreferrer"
              whileHover={linkHoverEffect}
            >
              <p>Work</p>
            </motion.a>
          <motion.a
              href='/play'
              rel="noreferrer"
              whileHover={linkHoverEffect}
            >
              <p>Play</p>
            </motion.a>
            <motion.a
              href='/about'
              rel="noreferrer"
              whileHover={linkHoverEffect}
            >
              <p>About</p>
            </motion.a>
            <motion.a
              href={resume}
              target="_blank"
              rel="noreferrer"
              whileHover={linkHoverEffect}
            >
              <p>Resume</p>
            </motion.a>
          </div>
          <div className='socialsColumn'>
            <p id='arrowSection'> Let's Connect!</p>
            <motion.a
              href="mailto:lupepaniagua@berkeley.edu"
              target='_blank'
              rel="noreferrer"
              whileHover={linkHoverEffect}
              className='arrowLink'
            >
              <p>Email</p>
              <ArrowSvg className="arrow" />
            </motion.a>
            <motion.a
              href='https://www.linkedin.com/in/lupepaniagua/'
              target='_blank'
              rel="noreferrer"
              whileHover={linkHoverEffect}
              className='arrowLink'
            >
              <p>Linkedin</p>
              <ArrowSvg className="arrow" />
            </motion.a>
            <motion.a
              href='https://read.cv/lupepaniagua'
              target='_blank'
              rel="noreferrer"
              whileHover={linkHoverEffect}
              className='arrowLink'
            >
              <p>Read.CV</p>
              <ArrowSvg className="arrow" />
            </motion.a>
            <motion.a
              href='https://open.spotify.com/user/its.lupee'
              target='_blank'
              rel="noreferrer"
              whileHover={linkHoverEffect}
              className='arrowLink'
            >
              <p>Spotify</p>
              <ArrowSvg className="arrow" />
            </motion.a>
          </div>
        </div>
        <div id='spotifyFooterBox'>
              <p>{renderPlayingStatus()}</p>
              <motion.a
                href={currentlyPlaying?.songUrl || lastPlayed?.songUrl}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={linkHoverEffect}
                className='arrowLink'
              >
                <img
                  loading='lazy'
                  src={currentlyPlaying?.songImageUrl || lastPlayed?.songImageUrl}
                  alt={currentlyPlaying?.title || lastPlayed?.title}
                />
              </motion.a>
            </div>
            <div id='smallerBox'>
              <p>Designed and developed with 🎶 🤍 🐕 </p>
              <p>Last updated: August 2023</p>
            </div>
          </div>
      </div>
    </motion.div>
  );
};

export default Footer;
