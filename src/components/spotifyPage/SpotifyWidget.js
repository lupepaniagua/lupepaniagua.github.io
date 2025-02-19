import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './spotifyPage.css'
import spotifybanner from '../../assets/spotify-widget/spotify-banner.png'


export default function SpotifyWidget() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

return (
  <div>
      <Helmet>
          <title>Spotify Mini Player</title>
      </Helmet>
      <Header/>
      <div>
        <div id='pageTitle'>
          <h1>
            Spotify Desktop Mini Player Concept
          </h1>
          <p className='subheadingGrey'>
              CONCEPT • UI DESIGN • PRODUCT DESIGN 
          </p>
        </div>
          <img
              id='landingImage'
              loading='lazy'
              src={spotifybanner}
              alt="a computer screen with lyrics from the rick astley song, never gonna give you up"
          /> 
        <div id='briefOverview'>
          <p className='subheadingGrey'>OVERVIEW</p>
          <h3> 
              As a solo project and a self-proclaimed music nerd, I decided to tackle a problem that I encountered often and {' '}
              <span>create a mini player for Spotify on Desktop</span>. 
              Specifically, to quickly access the lyrics and details of a song and displayed in a clean and simplified visual.
          </h3>
        </div>
          <div id='quickStats'>
              <div>
              <p className='subheadingGrey'>ROLE 👩🏽‍💻</p>
              <p className='greyText'>Solo Designer and Researcher</p>
              </div>
              <div>
              <p className='subheadingGrey'>DURATION ⏳</p>
              <p className='greyText'>Personal Sprint in August 2023 (2-3 Days)</p>
              </div>
              <div>
              <p className='subheadingGrey'>TOOLS 🛠️</p>
              <p className='greyText'>Figma and Xcode</p>
              </div>
          </div>
          <div className='highlightedBackground'>
             <p className='subheadingGrey'>
                  PROBLEM STATEMENT
             </p>
             <div>
              <h4>
                  As an avid music listener, I often found myself wanting quick access to song lyrics and essential music information 
                  without navigating away from my current task. The existing experience didn't provide a seamless 
                  way to glance at lyrics or song details. 
                  {' '}
                  <b>
                    How might we design a seamless solution that allows music listeners to effortlessly access song lyrics and details 
                    without disrupting ongoing tasks?
                  </b>
              </h4>
             </div>
          </div>
          <div className="bfiContainer">
              <p className='subheadingGrey'>
                      INSPIRATION
              </p>
              <div className="doubleColumns"> 
                  <div>
                      <h4>🖥️ Picture-in-Picture</h4>
                      <p className='greyText'>
                          I envisioned a <span>unobtrusive</span> widget feature designed to <span>overlay</span> on the screen, presenting the 
                          information in a quick and clean way.
                      </p>
                  </div>
                  <div>
                      <h4>🎤 Spotify Lyrics</h4>
                      <p className='greyText'>
                        I imagined my widget to emulate the lyrical format seen on Spotify, but reinterpreted it in a new manner. 
                        I mostly focused on keeping the <span> text highlighted and automatically scroll in sync</span> with the song. 
                      </p>
                  </div>
              </div>
          </div>
          <div className='highlightedBackground'>
             <p className='subheadingGrey'>
                 REFLECTIONS & TAKEAWAYS
             </p>
             <div className='takeaways'>
                 <h4>
                     <b>
                        🖍️ Drawing From Inspirations
                     </b>
                 </h4>
                 <p>
                    In the vast realm of online resources, seeking inspiration is crucial. It's important to see how others have tackled similar 
                    problems as it provides valuable insights. However, I must note that it's essential to tread carefully, 
                    <span>ensuring inspiration doesn't transform into replication.</span> You can't copy and recreate a designers' work, call it 
                    your own and take credit. Now, while couldn't find an exact match for my vision, apps like  
                    <span>Sleeve 2, MD Vinyl, and MiniPlayer Widget </span> offered intriguing features and caught my attention for this project. 
                 </p>
             </div>
             <div className='takeaways'>
                 <h4>
                     <b>
                     📋 Personal vs. Client-Oriented Design
                     </b>
                 </h4>
                 <p>
                    While I was designing, I realized that there are two slightly different mindsets when it comes to approaching personal projects 
                    versus client-driven ones. When I'm designing for myself, there's a lot more room to explore solutions freely without the added pressure 
                    of shipping into production and deployment. It feels like a <span>creative playground, allowing uninhibited experimentation and niche problem 
                    solving catered to my own preferences. </span> Whereas client projects present structured challenges, demanding adherence to guidelines, collaboration 
                    with a team, and require an emphasis on user needs.<span> Learning to navigate through the mindsets allow me to grow as a designer and find the 
                    right balance. </span>
                 </p>
             </div>
          </div>
      </div>
      <Footer/>
  </div>
)
}

