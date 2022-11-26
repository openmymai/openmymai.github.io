import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import { SEO } from '../components/seo'
import Typed from 'typed.js'
import bgvdo from '../videos/mountain03.mp4'
import '../scss/main.scss'


// markup
const Lesson0401 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        `ตาเห็นรูปรูปไม่เที่ยงเกิดดับ`,
        `ตัวฉันไม่เที่ยงเกิดดับ`,
        `หูได้ยินเสียงเสียงไม่เที่ยงเกิดดับ`,
        `ตัวฉันไม่เที่ยงเกิดดับ`,
        `จมูกได้กลิ่นกลิ่นไม่เที่ยงเกิดดับ`,
        `ตัวฉันไม่เที่ยงเกิดดับ`,
        `ลิ้นได้รสรสไม่เที่ยงเกิดดับ`,
        `ตัวฉันไม่เที่ยงเกิดดับ`,
        `กายสัมผัสไม่เที่ยงเกิดดับ`,
        `ตัวฉันไม่เที่ยงเกิดดับ`,
        `ใจคิดนึกไม่เที่ยงเกิดดับ`,
        `ตัวฉันไม่เที่ยงเกิดดับ`,
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
          <div className="flex">
              <a href="/praise" >
                <span className="highlight" style={{fontSize: "2.5em"}}>
                  หน้าแรก
                </span>
              </a>
              <h1><div className="text">ว่าด้วย อดีต อนาคต ปัจจุบัน ตามความเป็นจริง</div></h1>
              
              <h1>
                <div className="text">
                  <span style={{ whiteSpace: 'pre' }} ref={el} />
                </div>
              </h1>        
          </div>
          <div className="next">
            <a className="space" style={{cursor:'pointer'}} onClick={() => navigate(-1)}>
              <i className="fa-solid fa-angle-left fa-5x"></i>
            </a>
            
            <a className="space" href="/lesson0402" >
              <i className="fa-solid fa-angle-right fa-5x"></i>
            </a>
          </div>
      </section>
      </div>
    </>
  )
}

export default Lesson0401

export const Head = () => (
  <SEO title="Lesson0401" />
)