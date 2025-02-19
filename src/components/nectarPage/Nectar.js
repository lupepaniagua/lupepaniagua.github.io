import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import nectarbanner from '../../assets/nectar/nectar-banner.png'


export default function Nectar() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

return (
  <div>
      <Helmet>
          <title>Nectar Concept </title>
      </Helmet>
      <Header/>
      <div>
        <div id='pageTitle'>
          <h1>
            Nectar: Concept App 
          </h1>
          <p className='subheadingGrey'>
              CONCEPT • UI DESIGN • PRODUCT DESIGN • RESEARCH
          </p>
        </div>
          <img
              id='landingImage'
              loading='lazy'
              src={nectarbanner}
              alt="ten phone screens on a green background"
          /> 
       <div id='briefOverview'>
          <p className='subheadingGrey'>OVERVIEW</p>
          <h3> 
              This project arose from an offhand comment my brother gave me when discussing our weekly grocery shopping habits. 
              He mentioned how difficult it was to find the <span>cheapest deals on specific items</span> and how he wished it would {' '}
              <span>check prices at nearby stores. </span> I thought it would be a fun design excercise to try and come up with a solution.
              Interactive Figma prototype down below.
          </h3>
        </div>
          <div id='quickStats'>
              <div>
              <p className='subheadingGrey'>ROLE 👩🏽‍💻</p>
              <p className='greyText'>Solo Designer and Researcher</p>
              </div>
              <div>
              <p className='subheadingGrey'>DURATION ⏳</p>
              <p className='greyText'>January to Feb 2022 (6 Weeks)</p>
              </div>
              <div>
              <p className='subheadingGrey'>TOOLS 🛠️</p>
              <p className='greyText'>Figma</p>
              </div>
          </div>
          <div className='highlightedBackground' id='figmaEmbed'>
          <iframe
            style={{ border: '1px solid rgba(224, 224, 224, 0.1)' }}
            width="100%"
            height="660px"
            src="https://embed.figma.com/proto/es7cf31sdigPOMWZ2KolYO/Nectar-Project?page-id=0%3A1&node-id=1-1827&p=f&viewport=1297%2C1854%2C0.66&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A1827&show-proto-sidebar=1&embed-host=share"
            allowFullScreen
            title="Figma Prototype"
          ></iframe>
          </div>
      </div>
      <Footer/>
  </div>
)
}

