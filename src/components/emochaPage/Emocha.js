import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './emocha.css'
import emochaBanner from '../../assets/emocha/emocha-banner.png'


export default function Emocha() {
  return (
    <div>
      <Helmet>
        <title>emocha Health </title>
      </Helmet>
        <Header/>
        <div>
          <div id='pageTitle'>
            <h1>
              emocha Health Internship
            </h1>
            <p className='subheadingGrey'>
              PRODUCT DESIGN • UI DESIGN • RESEARCH 
            </p>
          </div>
            <img id='landingImage'
                loading='lazy'
                src={emochaBanner}
                alt='A very faint blue background with Emocha Health in large blue text'
            />
          <div id='briefOverview'>
            <p className='subheadingGrey'>OVERVIEW</p>
            <h3> During the little time I had in my remote internship, I was mainly involved in <span>
              establishing one main design
                library across emocha Health’s (now Scene Health) web products
            </span>, including both the client + care team portals. Due to NDA, I’m unable to share the exact details of my work.
            </h3>
          </div>
          <div id='quickStats'>
            <div>
              <p className='subheadingGrey'>ROLE 👩🏽‍💻</p>
              <p className='greyText'>Product Design Intern</p>
            </div>
            <div>
              <p className='subheadingGrey'>DURATION ⏳</p>
              <p className='greyText'>30 Jun to 31 Aug 2022 (8 weeks)</p>
            </div>
            <div>
              <p className='subheadingGrey'>TOOLS 🛠️</p>
              <p className='greyText'>Figma, Storybook, Jira, Pendo</p>
            </div>
            <div>
              <p className='subheadingGrey'>DELIVERABLES 📦</p>
              <p className='greyText'>Design system and documentation</p>
            </div>
          </div>
          <div className='highlightedBackground'>
          <p className='subheadingGrey'>SUMMARY OF MY WORK AT EMOCHA</p>
          <div>
            <div className='doubleColumns'>
              <p>
                As part of my first step in building a consistent visual design system, I began doing a
                site audit which included <span>identifying every single UI component from various web screens</span>. Making note of all the
                variations of their reused elements and grouping them into categories to further analyze. For example, there were
                dozens of button styles, inconsistent colors, incorrectly applied font weights, and single-use icons everywhere that
                I had to account for. Following my audit, I had to discuss my findings to my design team in order to narrow down the components. I was
                allowed the freedom to propose what the final design guidelines, standards, and conventions would be with any
                suggestions from the design team. <span>
                  My main goal was to maintain the consistent emocha
                  brand across the web products and ensure future designers and developers can adapt and evolve my final design library.
                </span>
              </p>
              <h5>
                <b>
                  I conducted an intensive design audit and shared my findings to my design team.
                  <br></br>
                  <br>
                  </br>
                </b>
              </h5>
            </div>
          </div>
          <div>
            <div id='lastSummary' className='doubleColumns'>
            <p>
                At emocha, they were still a growing startup and the design team consisted of two other Product Designers and the Chief 
                Experience Officer. This gave me the <span>
                  ability to directly interact with other team members and witness the direct impact
                  of our work.
                </span> Communicating with my design team to give updates and get feedback on the progress of my task.
                Nearing the end of my project, I collaborated with a software engineering intern who helped solidify the documentation by translating 
                the Figma file to Storybook. We decided this was best format for longevity and adaptability for future designers and developers. While this project took up 
                most of my time, I also had the privilege of doing some side tasks: assisting on iOS UI-related responsibilities and working on UX research for new 
                features to implement on the care team portal. 
              </p>
              <h5><b>I worked cross-functionally with Product Designers, Project Managers, Developers, Care Providers, 
                    and other stakeholders. </b></h5>
            </div>
          </div>
          </div>

          <div className='emochaContainer'>
          <p className='subheadingGrey'>
                    TAKEAWAYS
               </p>
               <div className='takeaways'>
                   <h4>
                       <b>
                        🌟 Always be open to learning and exploring new areas of design
                       </b>
                   </h4>
                   <p>
                      While I was already familiar with design systems, I still found myself doing lots of research in every stage along the 
                      duration of my internship. I looked at design libraries and reviewed articles by companies like AirBnb, Shopify, Microsoft, 
                      Spotify, etc. to understand what they were doing and how I could translate something as effective as theirs on a smaller scale 
                      at emocha. We also held a bi-weekly meeting dedicated to learn about design. We spent some time learning anything about design 
                      and would share with the group what we learned together as well as some talks, my favorite being <span>
                        a talk by Heidi Hutton about
                        “Motivational Interviewing.”
                      </span>
                   </p>
               </div>
               <div className='takeaways'>
                   <h4>
                       <b>
                          💬 Communication is key and never be afraid to speak up
                       </b>
                   </h4>
                   <p>
                      Since our teams were small, we could comfortably ask for feedback and share our thoughts among the six of us. At first, it felt 
                      a bit overwhelming because I was the only intern working on this project. However, having a second pair of eyes to discuss my 
                      decisions and convey my ideas made me more confident in the final product. <span>
                        The team's revisions and suggestions provided me with
                        fresh ways to approach the problem and better understand our goals.
                      </span> Sharing my suggestions and perspective in design critiques was
                      also really helpful. Not only was my voice as an intern valued, but it often pointed out details that the others didn't notice. Additionally, it 
                      validated some of my design ideas. Overall, it boosted my confidence as a designer and has prepared me for the future, working with larger groups. Plus, it was essential to 
                      keep everyone informed about my progress with deadlines and project updates.
                   </p>
               </div>
          </div>
          <div id='blueBg' className='highlightedBackground'>
               <p className='subheadingGrey'>
                    REFLECTIONS
               </p>
               <div className='doubleColumns'>
               <p>
                  A huge thank you to everyone at emocha Health (Amanda A, Dahyee Y, Asheeta K, Shruti G, Alice L, Evan K, and Chanda W) for the 
                  warm welcome during my 2-month internship. It was my first remote internship, so I was extremely nervous about managing the EST 
                  work day from my PST location but those anxieties quickly vanished.
                </p>
                <p>
                  I’m especially grateful to Dahyee, whom I reported  during my 
                  internship. She provided me with mentorship and guidance, answered all my questions, and was there to support me each week with my
                  project. These two months were two exciting and fulfilling months. I have gained immense knowledge and skill, and I’m beyond 
                  grateful for the opportunity. I know that I have grown as a designer because of it. 
                </p>
               </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

