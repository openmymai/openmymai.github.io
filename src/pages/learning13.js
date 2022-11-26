import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import { SEO } from '../components/seo'
import Typed from 'typed.js'
import bgvdo from '../videos/mountain03.mp4'
import '../scss/main.scss'

const DayLearning13 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        
        `เดิน`,
        `ไม่เที่ยงเกิดดับ`,
        `เดินเป็นธรรมชาติ`,
        `เดินเสร็จเป็นกฎธรรมชาติ 2 กฎ`,
        `ไม่เที่ยงเกิดดับ`,

        `นั่ง`,
        `ไม่เที่ยงเกิดดับ`,
        `นั่งเป็นธรรมชาติ`,
        `นั่งเสร็จเป็นกฎธรรมชาติ 2 กฎ`,
        `ไม่เที่ยงเกิดดับ`,

        `ยืน`,
        `ไม่เที่ยงเกิดดับ`,
        `ยืนเป็นธรรมชาติ`,
        `ยืนเสร็จเป็นกฎธรรมชาติ 2 กฎ`,
        `ไม่เที่ยงเกิดดับ`,

        `นอน`,
        `ไม่เที่ยงเกิดดับ`,
        `นอนเป็นธรรมชาติ`,
        `นอนเสร็จเป็นกฎธรรมชาติ 2 กฎ`,
        `ไม่เที่ยงเกิดดับ`,
      ],
      typeSpeed: 45,
      fadeOut: true,
      fadeOutDelay: 0,
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
            <a href="/praise" >
              <span className="highlight" style={{fontSize: "2.5em"}}>
                หน้าแรก
              </span>
            </a>
            <h1>
              <div className="text">
                <span style={{ whiteSpace: 'pre' }} ref={el} />
              </div>
            </h1>
            <div className="next">
              <a className="space" style={{cursor:'pointer'}} onClick={() => navigate(-1)}>
                <i className="fa-solid fa-angle-left fa-5x"></i>
              </a>
              
              <a className="space" href="/learning14" >
                <i className="fa-solid fa-angle-right fa-5x"></i>
              </a>
            </div>
        </section>
      </div>
    </>
  )
}

export default DayLearning13

export const Head = () => (
  <SEO title="Learning13" />
)