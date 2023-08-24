import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import '../emochaPage/emocha.css'
import emochaBanner from '../../assets/emocha/emocha-banner.png'


export default function Emocha() {
  return (
    <div>
        <Header/>
        <div>
          <div id='pageTitle'>
            <h1>
              Sleep Deprivation Website
            </h1>
            <p className='subheadingGrey'>
              WEB DEVELOPMENT • UI DESIGN • GRAPHIC DESIGN  
            </p>
          </div>
            <img id='landingImage'
                loading='lazy'
                src={emochaBanner}
                alt='A very faint blue background with Emocha Health in large blue text'
            />
          <div id='briefOverview'>
            <p className='subheadingGrey'>OVERVIEW</p>
            <h3>I had to present topics of my choice from the PSYCH 133 content in any way I wanted to. I decided to create a website, Doze, 
                containing a summary of the major studies and information over sleep deprivation. Along with the website, I made a short infographic
                that I distributed to high schools around the Bay area.
            </h3>
          </div>
          <div id='quickStats'>
            <div>
              <p className='subheadingGrey'>ROLE 👩🏽‍💻</p>
              <p className='greyText'>Designer and developer</p>
            </div>
            <div>
              <p className='subheadingGrey'>DURATION ⏳</p>
              <p className='greyText'>Nov 15 - 22, 2021 (1 week)</p>
            </div>
            <div>
              <p className='subheadingGrey'>TOOLS 🛠️</p>
              <p className='greyText'>Figma, HTML, CSS</p>
            </div>
            <div>
              <p className='subheadingGrey'>DELIVERABLES 📦</p>
              <p className='greyText'>Responsive website, branding, and infographic</p>
            </div>
          </div>
          <div className='highlightedBackground'>
            <div className='columnBoxContainer'>
              <h2 className='leftColumnTitle'> What Did I Do?</h2>
              <div className='rightColumn'>
                <div>
                  <p>I used Figma to plan how I wanted it both items to look then cracked open my text editor, Visual Studio Code, and busted down 
                    some lines of code for the final product emulating my original idea from Figma. I chose to do this because I wanted to improve 
                    my design + coding skills and I thought this could be some practice.
                    <br></br>
                    <br></br>
                    Although this wasn’t necessary I found that having an idea of what my “brand” was, made it easier to execute. It was fun making 
                    up this online sleep site under the name of Doze. Who knows maybe I’ll return and continue to add to it...
                    </p>
                </div>
              </div>
            </div>
          </div>
          <div>
          <div id='boxMargins' className='columnBoxContainer'>
            <h2 className='leftColumnTitle'> Reflections</h2>
            <div className='rightColumn'>
              <div>
                <h4 className='blackCallOut'>🌟 Always be open to learning and exploring new areas of design </h4>
                <p>While I was already familiar with design systems, I still found myself doing lots of research in every stage along the 
                  duration of my internship. I looked at design libraries and reviewed articles by companies like AirBnb, Shopify, Microsoft, 
                  Spotify, etc. to understand what they were doing and how I can translate something as effective as their on a smaller scale 
                  at emocha. We also held a bi-weekly meeting dedicated to learn about design. We spent some time learning anything about design 
                  and would share with the group what we learned together as well as some talks, my favorite being a talk by Heidi Hutton about 
                  “Motivational Interviewing.”
                </p>
              </div>
              <div>
                <h4 className='blackCallOut'>💬 Communication is key and never be afraid to speak up </h4>
                <p>Since our teams were small, we could comfortably ask for feedback and share our thoughts among the six of us. At first, it felt 
                  a bit overwhelming because I was the only intern working on this project. However, having a second pair of eyes to discuss my 
                  decisions and convey my ideas made me more confident in the final product. The team's revisions and suggestions provided me with
                  fresh ways to approach the problem and better understand our goals. Sharing my suggestions and perspective in design critiques was
                   also really helpful. Not only was my voice as an intern valued, but it often pointed out details that others didn't notice or 
                   validated other ideas. Overall, it boosted my confidence as a designer and prepared me for the future. Plus, it was essential to 
                   keep everyone informed about my progress with deadlines and project updates.
                </p>
              </div>
            </div>
            </div>
            <div id='boxMargins' className='columnBoxContainer'>
            <h2 id='greyedOut' className='leftColumnTitle'> Finally,</h2>
            <div className='rightColumn'>
              <div>
                <p>A huge thank you to everyone at emocha Health (Amanda A, Dahyee Y, Asheeta K, Shruti G, Alice L, Evan K, and Chanda W) for the 
                  warm welcome during my 2-month internship. It was my first remote internship, so I was extremely nervous about managing the EST 
                  work day from my PST location but those anxieties quickly vanished. I’m especially grateful to Dahyee, whom I reported  during my 
                  internship. She provided me with mentorship and guidance, answered all my questions, and was there to support me each week with my
                   project. These two months were two exciting and fulfilling months. I have gained immense knowledge and skill, and I’m beyond 
                   grateful for the opportunity. I know that I have grown as a designer because of it. 
                </p>
              </div>
            </div>
            </div>
          </div>

        </div>
        <Footer/>
    </div>
  )
}

