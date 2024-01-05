import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './bfi.css'
import bfibanner from '../../assets/bfi/bfi-banner.png'
import conceptOne from '../../assets/bfi/concept-1.png'
import conceptTwo from '../../assets/bfi/concept-2.png'
import conceptThree from '../../assets/bfi/concept-3.png'
import wireframes from '../../assets/bfi/wireframes.png'
import about from '../../assets/bfi/about.png'
import publication from '../../assets/bfi/publication.png'
import navigation from '../../assets/bfi/nav.png'
import footerImg from '../../assets/bfi/footer.png'
import mobile from '../../assets/bfi/mobile.png'
import mockups from '../../assets/bfi/mockup.png'



export default function Bfi() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div>
        <Helmet>
            <title>Berkeley Food Institute </title>
        </Helmet>
        <Header/>
        <div>
          <div id='pageTitle'>
            <h1>
              Berkeley Food Institute Website Redesign
            </h1>
            <p className='subheadingGrey'>
                UI DESIGN • WEB DESIGN • BRANDING • PRODUCT DESIGN 
            </p>
          </div>
            <img
                id='landingImage'
                loading='lazy'
                src={bfibanner}
            />
          <div id='briefOverview'>
            <p className='subheadingGrey'>OVERVIEW</p>
            <h3> 
                The Berkeley Food Institute has grown largely in the recent years and they needed a website overhaul to launch an 
                updated brand that aligns with their newly formed vision. I took charge in a solo effort to 
                <span> design a website that not only reflects a fresh and modern look, but provides an equally pleasant and 
                    intuitive user experience. </span>
                {' '}
                <a id="headingLink" href='https://food.berkeley.edu/' target='_blank' rel='noreferrer'>
                Site is now live
                </a>
                .
            </h3>
          </div>
            <div id='quickStats'>
                <div>
                <p className='subheadingGrey'>ROLE 👩🏽‍💻</p>
                <p className='greyText'>Lead UI Designer</p>
                </div>
                <div>
                <p className='subheadingGrey'>DURATION ⏳</p>
                <p className='greyText'>15 May to 15 Aug 2022 (16 weeks)</p>
                </div>
                <div>
                <p className='subheadingGrey'>TOOLS 🛠️</p>
                <p className='greyText'>Figma, Trello, Wordpress, Google Docs</p>
                </div>
                <div>
                <p className='subheadingGrey'>DELIVERABLES 📦</p>
                <p className='greyText'>Desktop and mobile website final mockups</p>
                </div>
            </div>
            <div className='highlightedBackground'>
               <p className='subheadingGrey'>
                    PROBLEM STATEMENT
               </p>
               <div>
                <h4>
                    The Food Institute at UC Berkeley is a central hub that brings together students, researchers, community members, 
                    policymakers, and other stakeholders, into research and analysis, meaning they gather a ton of information that 
                    needs to be consolidated and accessible. 
                    {' '}
                    <b>
                        How might we restructure the content for easier navigation while introducing fresh new visuals and designs to 
                    the site?
                    </b>
                        
                </h4>
               </div>
            </div>
            <div className="bfiContainer">
                <p className='subheadingGrey'>
                        BREAKDOWN OF THE PROBLEM
                </p>
                <div className="doubleColumns"> 
                    <div>
                        <h4>🖥 Outdated content</h4>
                        <p className='greyText'>
                            Many pages were no longer being used or included inaccurate information that <span>cluttered the site</span> and 
                            confused users. 
                        </p>
                    </div>
                    <div>
                        <h4>⛓ Disjointed experiences</h4>
                        <p className='greyText'>
                            User-flows over time became confusing and difficult to navigate. <span>Pages were lost and buried</span> deep 
                            inside other pages, leading to dead-ends.
                        </p>
                    </div>
                    <div>
                        <h4>🖍️ Inconsistent user interface</h4>
                        <p className='greyText'>
                            The site <span>lacked a cohesive UI</span> throughout and created a user experience that was unpleasant, 
                            inaccessible, and aesthetically unappealing.
                        </p>
                    </div>
                </div>
            </div>
            <div id='goalsBox' className="bfiContainer">
                <p className='subheadingGrey'>
                        DESIGN GOALS
                </p>
                <div className="threeColumns">
                    <h5 className='goals'>Restructure the IA by removing any unnecessary or outdated pages </h5> 
                    <h5 className='goals'>Update and clean up BFI's UI and branding</h5>
                    <h5 className='goals'> Develop user flows that are meaningful and logical</h5>
                </div>
            </div>
            <div className='highlightedBackground'>
               <p className='subheadingGrey'>IDEATION</p>
               <div id='smallerSpecialCol' className="doubleColumns">
                <p>
                To kickstart the project, I spoke with the BFI team in a “dreaming” session, <span>
                    discussing inspirations, website
                    features, visuals, plans and thoughts for the new site, as well as addressing our likes and dislikes of the current site.
                </span>
                {' '} 
                This session was so valuable and crucial for my design approach, helping align my design ideas to their desired 
                message. In this project I collaborated closely with the small team, used the knowledge and perspective from everyone, 
                to effectively produce a solution. Once I gathered my notes, I was ready to begin brainstorming concepts. 
                </p>
                <h5>
                    <b>
                    As a designer, my role exceeds aesthetics and pretty UI, and instead uses empathy and communication to craft a 
                    user experience that is memorable, impactful for BFI, and solves their problem.
                    </b> 
                </h5>
               </div>
            </div>
            <div className='bfiContainer'>
                <div className='specialDoubleCol'>
                    <img src={conceptOne} className='processImg' loading='lazy' />
                    <div>
                        <p className='subheadingGrey'> CONCEPT IDEATION </p>
                        <h5><b>Concept 1: Hints of Berkeley History</b></h5>
                        <p className='smallImgText'>For this concept, I selected an earthy palette that was reminiscent of
                        Berkeley’s landscape. The muted colors and freeform illustrative style gave it a sort of warm
                        and a charming touch along with images capturing the food-making process.</p>
                    </div>
                </div>
            </div>
            <div className='bfiContainer'>
                <div id='reverseOrder' className='specialDoubleCol'>
                    <div>
                        <p className='subheadingGrey'> CONCEPT IDEATION </p>
                        <h5><b>Concept 2: BFI Behind The Scenes</b></h5>
                        <p className='smallImgText'>The second concept was heavily inspired by the “typical” UC Berkeley
                        department websites and fit a more professional, polished, corporate appearance. Utilizing the Berkeley
                        blue as the main color, minimizing illustrations, and focusing on images centered around people to
                        highlight community. </p>
                    </div>
                    <img src={conceptTwo} className='processImg'loading='lazy' />
                </div>
            </div>
            <div className='bfiContainer'>
                <div className='specialDoubleCol'>
                    <img src={conceptThree} className='processImg' loading='lazy' />
                    <div>
                        <p className='subheadingGrey'> CONCEPT IDEATION </p>
                        <h5><b>Concept 3: Sunny Day In Berkeley</b></h5>
                        <p className='smallImgText'>The final concept, was a bit of a risky option. As I went through their
                        image gallery, I noticed that BFI had a ton of pictures that shared a similar color palette and captured
                        nature and the environment. I used that and <span>
                            integrated these bright and bold colors, geometric shapes to
                            create a lively and atmospheric design.
                        </span> {' '} It represented a fusion of BFI’s values, quickly became my favorite. </p>
                    </div>
                </div>
            </div>
            <div className='highlightedBackground'>
               <p className='subheadingGrey'>
                    CONCEPT DECISION
               </p>
               <div id='smallerSpecialCol' className='doubleColumns'>
               <p>
                To my surprise, the team chose the “Sunny Day in Berkeley” concept. This encapsulated everything from our initial 
                session really well. My following task was to focus on restructuring the sitemap, involving assistance from BFI’s 
                Communications Coordinator, Austin. <span>
                We went through many user flows to determine what remained relevant and what had to be removed.
                </span>
                </p>
                <h5>
                    <b>
                    The sitemap served useful to show all navigation labels and the architecture of how the pages were connected. 
                    </b> 
                </h5>
               </div>
            </div>
            <div className='bfiContainer'>
                <p className='subheadingGrey'>
                        WIREFRAMING & ITERATION
                </p>
                <div id='whiteGreyBox' className='doubleColumns'>
                    <p>
                    Next, I sketched low-fidelity designs to map page layouts, navigation, and footer. Many <span>pages needed reimagining</span> {' '}
                    to fit BFI’s requests, even introducing a new “Publications” database. Moving to high-fidelity designs was important
                    to show functionality and interactivity features.
                    </p>
                    <p>
                    I shared my designs and explorations weekly to Stephanie,
                    a designer who previously worked with BFI on past projects, to get her feedback, suggestions, and guidance.
                    Additionally, every week I would make revisions to incorporate as much of her and the team’s comments. <span>
                        Due to the short turnaround,
                        I had to work quickly and efficiently.
                    </span>
                    </p>
                </div>
                <br></br>
                <br></br>
                <img src={wireframes} className='processImg' loading='lazy' />
            </div>
            <div className='bfiContainer'>
                <p className='subheadingGrey'> SOLUTION </p>
                <div className='doubleColumns'>
                    <h4> <b>Final Outcome: Highlights</b></h4>
                    <p id='notImportant'>
                    Showcasing detailed designs for every single page would be repetitive and unfeasible, so I’ll list a few
                    examples of selected pages.
                    </p>
                </div>
                <div className='imgHeavy'>
                    <div className='specialDoubleCol'>
                        <img src={about} className='processImg' loading='lazy' />
                        <div>
                            <p className='subheadingGrey'> SOLUTION: ABOUT OVERVIEW</p>
                            <h5><b>Users can use "overview" pages a reference for easier navigation</b></h5>
                            <p className='smallImgText'>These overview pages served as a reference for users so I had to find a way to
                            best organize the nested pages and links. Knowing this page would be text heavy meant I needed a way to equally
                            highlight the images and space the large chunks of text. </p>
                        </div>
                    </div>
                </div>
                <div className='imgHeavy'>
                    <div id='reverseOrder' className='specialDoubleCol'>
                        <div>
                            <p className='subheadingGrey'> SOLUTION: PUBLICATION</p>
                            <h5><b>Introducing a new home for BFI's blog posts, policy briefs, news, and more</b></h5>
                            <p className='smallImgText'>This page was a new addition and required more research on common practices and
                            collaboration from Austin, responsible for overseeing this page in the future. It was extremely important to
                            ensure that the elements met BFI’s objectives and basic needs. </p>
                        </div>
                        <img src={publication} className='processImg' loading='lazy' />
                    </div>
                </div>
                <div className='imgHeavy'>
                    <div className='specialDoubleCol'>
                        <div>
                            <img src={navigation} className='processImg' loading='lazy' />
                            <img src={footerImg} className='processImg' loading='lazy' />
                            <img src={mobile} className='processImg' loading='lazy' />
                        </div>
                        <div>
                            <p className='subheadingGrey'> SOLUTION: NAVIGATION & FOOTER</p>
                            <h5><b>Rethinking the navbar and footer for desktop and mobile</b></h5>
                            <p className='subheadingGrey'> DESKTOP NAVBAR</p>
                            <p className='smallImgText'>Prioritizing a solid-colored navigation bar, distinct from the transparent background, {' '}
                            <span>improved readability</span>, and helped distinguish the “overview” pages from the others so it's easier to detect. </p>
                            <p className='subheadingGrey'> DESKTOP FOOTER</p>
                            <p className='smallImgText'>The team mentioned to me how this footer was born, and to say the least, it was going to 
                            need a lot of shaping. To clean this up, I added a <span>clear hierarchy for visibility</span> and made the socials more prominent. 
                            It's <span>designed with the user's ease of use in mind</span>. </p>
                            <p className='subheadingGrey'> MOBILE NAVBAR & FOOTER</p>
                            <p className='smallImgText'>The skeleton of the mobile navigation provided optimal structure, but improvements were 
                            made to <span>ensure clarity and organization for nested pages</span>. The footer was mainly replicating the website’s new design.  </p>
                        </div>
                    </div>
                </div>
                <div id='lastItem' className='imgHeavy'>
                    <img src={mockups} className='processImg' loading='lazy' />
                    <div className='doubleColumns'>
                        <div>
                            <p className='subheadingGrey'> SOLUTION: LANDING PAGE </p>
                            <h5><b>The new and improved launch of the Berkeley Food Institute</b></h5>
                        </div>
                        <p className='smallImgText'>The redesigned BFI site was <span>colorful and inviting, clear and intuitive</span>. It highlighted the imagery
                        and showcased the institute’s work successfully. <span>This site launched in Q4 and is now live.</span> Lastly, the handoff process included
                        a running list of each component with labels of any features or functionality for mobile and desktop responsiveness.  </p>
                    </div>
                </div>
            </div>
            <div className="bfiContainer">
                <p className='subheadingGrey'>
                        IMPROVEMENTS IF I HAD MORE TIME
                </p>
                <div className="doubleColumns"> 
                    <div>
                        <h4>🤳 Added more interactive elements </h4>
                        <p className='greyText'>
                        Incorporating more interactive elements could elevate the user experience.
                        </p>
                    </div>
                    <div>
                        <h4>📋 Spaced out the content and sections</h4>
                        <p className='greyText'>
                            More breathing room and spacing between content sections could improve readability. 
                        </p>
                    </div>
                    <div>
                        <h4>🌈 Used more color</h4>
                        <p className='greyText'>
                            Exploring color further could unlock this design’s full potential.
                        </p>
                    </div>
                </div>
            </div>
            <div className='highlightedBackground'>
               <p className='subheadingGrey'>
                    TAKEAWAYS
               </p>
               <div className='takeaways'>
                   <h4>
                       <b>
                           📕 Know the content and let it lead
                       </b>
                   </h4>
                   <p>
                       “Let the content lead,” these words by Stephanie stuck out to me and influences my designs thereafter. {' '}
                       <span>
                           Design is storytelling, and as a designer, I’m in charge of shaping a compelling narrative, and guiding
                           users through an experience.
                       </span> Whether that means it’s a call-to-action button, an in-depth analysis, or a
                       link, those decisions are all apart of the journey. This demands a strong understanding of the content,
                       motivations, and needs of the user. Through empathy and knowing what I’m presenting to the user, I’m able
                       to deliver a message effectively and evoke thoughts, feelings, and emotions to craft a memorable user experience.
                   </p>
               </div>
               <div className='takeaways'>
                   <h4>
                       <b>
                       🫂 Prioritize accessibility over aesthetics
                       </b>
                   </h4>
                   <p>
                   Design isn’t just about pretty UI, but rather <span>balancing accessibility even at the expense of aesthetics.</span> Initially,
                   this was challenging because I was too focused on making it look pretty. Computer Courage was quick to inform me what
                   was accessible and how to fix my design in the right direction. I wasn’t staying too far off because I still had to meet
                   the UC Berkeley accessibility standards, but there was room for improvement on my end.
                   </p>
               </div>
               <div className='takeaways'> 
                   <h4>
                       <b>
                       🤝 Collaboration between designer and client is crucial
                       </b>
                   </h4>
                   <p>
                   I learned so much and made better design decisions when I got input from the team. <span>
                       Each member had a lot to share and brought
                       different perspectives
                   </span> that informed me with better insights of their needs. Involving them in the design process ensured that 
                   each element was necessary and made me more confident when making decisions. Together we crafted a powerful user experience.
                   </p>
               </div>
            </div>
            <div id='greenBg' className='highlightedBackground'>
               <p className='subheadingGrey'>
                    REFLECTIONS
               </p>
               <div className='doubleColumns'>
               <p>
               Thank you to Austin P, Justina R, Nathalie M, Nina I, and Stephanie W, who were very patient with me during these 4 months. 
               I appreciate your willingness to engage with my questions, provide feedback, and create such a welcoming environment. This 
               was an extremely invaluable experience and although it was a tough and demanding task to conquer alone, I’m super happy and 
               proud of the end result. I can only hope that this website will make a significant impact on the future of BFI.
                </p>
                <p>
                Special thanks to Stephanie, who truly helped shape this website alongside me. Your guidance, support, and unwavering belief 
                in my abilities validated and empowered me to exceed expectations. You encouraged me to become a more skilled designer. I 
                couldn’t have done with without the BFI team. This collaborative project was unlike anything I’ve done before, and I know it 
                has undoubtably influenced my design approach for future endeavors. 
                </p>
               </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

