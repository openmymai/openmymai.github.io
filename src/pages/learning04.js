import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import { SEO } from '../components/seo'
import Typed from 'typed.js'
import bgvdo from '../videos/mountain03.mp4'
import '../scss/main.scss'

const DayLearning04 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        
        `ไม่เที่ยงเกิดดับ`,
        `ตัวฉันผลต่อเนื่องของโลกและชีวิต`,
        `เกิดขึ้นตั้งอยู่ดับไปไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ`,
        `วจีกรรมไม่เที่ยงเกิดดับ`,
        `กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ`,
        `ทุกสิ่งทุกอย่าง`,
        `เป็นธรรมชาติ`,
        `และกฎธรรมชาติ 2 กฎ`,
        `ไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ`,
        `วจีกรรมไม่เที่ยงเกิดดับ`,
        `กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ`,
        `สิ่งทั้งปวงโลกและชีวิตผลต่อเนื่อง`,
        `เกิดขึ้นตั้งอยู่ดับไปไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ`,
        `วจีกรรมไม่เที่ยงเกิดดับ`,
        `กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ`,
        `มโนกรรมความคิด`,
        `ไม่เที่ยงเกิดดับ`,
        `ตัวฉันไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ`,
        `วจีกรรมไม่เที่ยงเกิดดับ`,
        `กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ`,
        `วจีกรรมคำพูด`,
        `ไม่เที่ยงเกิดดับ`,
        `ตัวฉันไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ`,
        `วจีกรรมไม่เที่ยงเกิดดับ`,
        `กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ`,
        `กายกรรมการเคลื่อนไหว`,
        `ไม่เที่ยงเกิดดับ`,
        `ตัวฉันไม่เที่ยงเกิดดับ`,
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
              
              <a className="space" href="/learning05" >
                <i className="fa-solid fa-angle-right fa-5x"></i>
              </a>
            </div>
        </section>
      </div>
    </>
  )
}

export default DayLearning04

export const Head = () => (
  <SEO title="Learning04" />
)