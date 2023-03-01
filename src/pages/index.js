import React, { useEffect, useRef } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { SEO } from '../components/seo'
import Typed from 'typed.js'
import bgvdo from '../videos/mountain.mp4'
import '../scss/main.scss'

// markup
const IndexPage = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
          `...`,
          `I'm <span class="highlight">Sirisak Chantanate</span>`,
          `Nutrigenomics Lover`,
          `Solution Architect`,
          `Software Engineer`,
          `Network Specialist`,
          `Also I'm <span class="highlight">CCIE Routing and Switching #18148</span> <i class="fas fa-globe-asia"></i>`,
          `I love <span class="highlight">sharing all knowledges <3</span>`],
      typeSpeed: 45,
      backSpeed: 50,
      loop: true,
    };

    typed.current = new Typed(el.current, options)

    return () => {
      typed.current.destroy()
    }
  }, [])
  return (
    <>
    
    <div className="overflow-wrap">
    <section id="home" className="flex section--dark">
        <div className="bg-video">
            <video className="bg-video__content" autoPlay={true} loop muted playsInline>
                <source src={bgvdo} type="video/mp4" />
            </video>
        </div>
        <div className="flex">
            <div className="profile">
              <a 
                data-a11y="false"
                aria-label="Link to https://openmymai.github.io/nutrigenomics"
                href="https://openmymai.github.io/nutrigenomics"
                className="">
              <StaticImage className="profile__image" src="../images/me.jpeg" />
              </a>
                <div className="profile__social-group">
                    <span className="profile__social-network">
                        <a 
                           data-a11y="false"
                           aria-label="Link to https://www.instagram.com/neutronix/"
                           href="https://www.instagram.com/neutronix/"
                           className="">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </span>
                    <span className="profile__social-network">
                        <a 
                           data-a11y="false"
                           aria-label="Link to https://www.linkedin.com/in/sirisak-chantanate-b0b786111/"
                           href="https://www.linkedin.com/in/sirisak-chantanate-b0b786111/"
                           className="">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </span>
                    <span className="profile__social-network">
                        <a 
                           data-a11y="false"
                           aria-label="Link to https://github.com/openmymai"
                           href="https://github.com/openmymai"
                           className="">
                            <i className="fab fa-github"></i>
                        </a>
                    </span>
                    <span className="profile__social-network">
                        <a 
                           data-a11y="false"
                           aria-label="Link to https://www.youtube.com/channel/UCNyi06GbM49kasvouCD9qvQ?sub_confirmation=1"
                           href="https://www.youtube.com/channel/UCNyi06GbM49kasvouCD9qvQ?sub_confirmation=1"
                           className="">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </span>
                    <span className="profile__social-network">
                        <a 
                           data-a11y="false"
                           aria-label="Link to https://lifelearning.vercel.app/"
                           href="https://lifelearning.vercel.app/"
                           className="">
                            <i className="fas fa-globe-asia"></i>
                        </a>
                    </span>

                    
                </div>
            </div>            
              <h1><div className="text">Hello,</div></h1>
              <h1>
                <div className="text">
                  <span style={{ whiteSpace: 'pre' }} ref={el} />
                </div>
              </h1>
        </div>
    </section>
    </div>
    </>
  )
}

export default IndexPage

export const Head = () => (
  <SEO />
)