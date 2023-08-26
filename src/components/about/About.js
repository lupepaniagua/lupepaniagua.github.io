import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useAnimation } from 'framer-motion';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './about.css';
import selfImage from '../../assets/me.png';
import spotifyLogo from '../../assets/spotify.svg';
import { getNowPlayingItem } from '../spotify/SpotifyAPI';


export default function About() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [lastPlayed, setLastPlayed] = useState(null);

  const controls = useAnimation();
  const spotifyControls = useAnimation();

  useEffect(() => {
    // fetch the last played track from local storage when the component load
    const storedLastPlayed = localStorage.getItem('lastPlayed');
    if (storedLastPlayed) {
      setLastPlayed(JSON.parse(storedLastPlayed));
    }
  }, []);

  const renderPlayingStatus = () => {
    return currentlyPlaying ? 'Now Playing' : 'Offline. Last Played';
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const track = await getNowPlayingItem();
        console.log("Fetched track:", track);
        if (track?.isPlaying) {
          setCurrentlyPlaying(track);
          setLastPlayed(null);
        } else if (track) {
          // update lastPlayed state and store it in local storage
          setLastPlayed(track);
          localStorage.setItem('lastPlayed', JSON.stringify(track));
        } else {
          // no fetched data and null
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


  useEffect(() => {
    const handleScroll = () => {
      const bioContainer = document.getElementById('bioContainer');
      const bioRect = bioContainer.getBoundingClientRect();
      
      if (bioRect.top < window.innerHeight) {
        bioContainer.style.opacity = 1;
        bioContainer.style.transform = 'translateY(0)';
        controls.start({ opacity: 1, x: 0 }); 
        spotifyControls.start({ opacity: 1, y: 0 });
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, spotifyControls]);

  const paragraphHoverEffect = {
    opacity: 0.6,
    scale: 1.05,
    transition: { 
      type: 'spring',
      stiffness: 500,
      damping: 30,
    },
  };

  const linkHoverEffect = {
    opacity: 0.7,
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  };

  const textMotionProps = {
    initial: { opacity: 0, x: -50 },
    animate: controls, 
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  };

  const spotifyMotionProps = {
    initial: { opacity: 0, y: 50 }, 
    animate: spotifyControls, 
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  };
  
  return (
    <div>
      <Helmet>
        <title>About Lupe</title>
      </Helmet>
      <Header />
      <div id='bioContainer'>
        <motion.div
          initial={{ x: -100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={ {
            type: 'spring',
            stiffness: 400,
            damping: 10,
          }}
        >
          <img
            loading='lazy'
            src={selfImage}
            alt='a landscape headshot of lupe paniagua in her graduation gown from UC Berkeley'
          />
        </motion.div>
        <div >
          <div id='tldrBlock'>
            <motion.h1 {...textMotionProps}>Hi, nice to meet ya!</motion.h1>
          </div>
          <div id='infoBlock'>
            <motion.p {...textMotionProps}>
              I'm Lupe, a recent graduate with a B.A. in Cognitive Science from the University of California, Berkeley. 
              I'm a self-taught designer who’s interested in <span>
                solving complex problems by humanizing tech &
                 exploring the intersection between psychology, technology, and design.
              </span>  Previously pushed pixels as a
              Product Design Intern at {' '}
              <motion.a
                href='https://www.scene.health/?utm_term=scene%20health&utm_campaign=Scene+-+Branded&utm_source=adwords&utm_medium=ppc&hsa_acc=3946045395&hsa_cam=18823833019&hsa_grp=143431919259&hsa_ad=633192755958&hsa_src=g&hsa_tgt=kwd-1880558835494&hsa_kw=scene%20health&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjw5_GmBhBIEiwA5QSMxPkdBa-ezilMPjokojFMEKddMGabXr9WSDpkRVAHqdX_jEBBdk6agBoCAH0QAvD_BwE'
                target='_blank'
                rel='noreferrer'
                whileHover={paragraphHoverEffect}
                style={{ display: 'inline' }}
              >
                emocha Health
              </motion.a> {' '} 
              and the Lead UI Designer at the {' '}
              <motion.a
                href='https://food.berkeley.edu/'
                target='_blank'
                rel='noreferrer'
                whileHover={paragraphHoverEffect}
                style={{ display: 'inline' }}
              >
                Berkeley Food Institute.
              </motion.a> {' '}
            </motion.p>
            <motion.p {...textMotionProps}>
              <br />
              <span>Curiosity has always driven me to understand how things (and people) work, and why they work that way. </span>
              I strive to design with empathy in order to create lasting, meaningful, and inclusive experiences that will
              improve peoples' lives, the society, and the world we live in. I'm constantly expanding and adapting my 
              thoughts, skillset, and processes to the everchanging space around us. <span>
                I thrive in
                ambitioius, diverse, and pro-active teams
                that value ethical product building.
              </span>
              <br />
              <br />
            </motion.p>
            <motion.p {...textMotionProps}>
              When I’m not designing, you can find me walking my dog 🐕, making an obnoxious amount of {' '}
              <motion.a
                href='https://open.spotify.com/user/its.lupee'
                target='_blank'
                rel='noreferrer'
                whileHover={paragraphHoverEffect}
                style={{ display: 'inline' }}
              >
                spotify playlists 🎶
              </motion.a>
              , playing video games on my switch 🎮, or shopping for new plants 🪴.
            </motion.p>
            <br />
            <motion.p {...textMotionProps}>
              Feel free to{' '}
                <motion.a
                  href='https://calendar.amie.so/s/lupe'
                  target='_blank'
                  rel='noreferrer'
                  whileHover={paragraphHoverEffect}
                  style={{ display: 'inline' }}
                >
                  reach out for a ☕️ chat
                </motion.a> 
                {' '}
                if you would like to discuss anything further, explore ideas, share your favorite songs, or simply 
                drop in to say hello.
            </motion.p>
          </div>
          <motion.div id='spotifyContainer' {...spotifyMotionProps}>
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
            <div>
              <div id='nowPlayingContainer'>
                <div id='playingAnimation'>
                  <div className='playingIndicatorLine' id='first'></div>
                  <div className='playingIndicatorLine' id='second'></div>
                  <div className='playingIndicatorLine' id='third'></div>
                  </div>
                <p>{renderPlayingStatus()}</p>
              </div>
              {(currentlyPlaying && currentlyPlaying.isPlaying) || lastPlayed ? (
                <div>
                  <h5>{currentlyPlaying?.title || lastPlayed?.title}</h5>
                  <p>{currentlyPlaying?.artist || lastPlayed?.artist}</p>
                </div>
              ) : (
                currentlyPlaying === null && <p>No track is listed. Check back again later.</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}