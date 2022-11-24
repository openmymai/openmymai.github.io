import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import Typed from 'typed.js'
import bgvdo from '../videos/mountain03.mp4'
import '../scss/main.scss'

const DayLearning05 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        
        `ตัวอย่าง: เก้าอี้, โต๊ะ, พื้น`,

        `ไม่เที่ยงเกิดดับ`,
        `เก้าอี้ เป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดขึ้นตั้งอยู่ดับไป ไม่เที่ยงเกิดดับ`,
        `โต๊ะ เป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดขึ้นตั้งอยู่ดับไป ไม่เที่ยงเกิดดับ`,
        `พื้น เป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดขึ้นตั้งอยู่ดับไป ไม่เที่ยงเกิดดับ`,
        `กำหนดรู้ เก้าอี้ โต๊ะ พื้น`,
        `เป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดขึ้นตั้งอยู่ดับไป`,
        `ไม่เที่ยงเกิดดับเหมือนกัน`,
        `มโนกรรมไม่เที่ยงเกิดดับ`,
        `วจีกรรมไม่เที่ยงเกิดดับ`,
        `กายกรรมไม่เที่ยงเกิดดับ`,
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
              
              <a className="space" href="/learning06" >
                <i className="fa-solid fa-angle-right fa-5x"></i>
              </a>
            </div>
        </section>
      </div>
    </>
  )
}

export default DayLearning05
