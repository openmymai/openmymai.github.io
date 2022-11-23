import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import bgvdo from '../videos/sea.mp4'
import '../scss/main.scss'

const DayLearning06 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        
        `ตัวอย่าง: เก้าอี้`,

        `ไม่เที่ยงเกิดดับ ตัวฉันและเก้าอี้ เป็นธรรมชาติชนิดหนึ่ง เกิดขึ้นตั้งอยู่ดับไป `,
        `เกิดจากเหตุปัจจัยมาประชุมชั่วคราวแล้วแตกสลายไม่เที่ยงเกิดดับ`,
        `กำหนดรู้ทุกสิ่งทุกอย่างเป็นธรรมชาติชนิดหนึ่ง เกิดขึ้นตั้งอยู่ดับไป`,
        `เกิดจากเหตุปัจจัยมาประชุมชั่วคราวแล้วแตกสลายไม่เที่ยงเกิดดับเหมือนกัน`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,
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
            <h1>
              <div className="text">
                <span style={{ whiteSpace: 'pre' }} ref={el} />
              </div>
            </h1>
        </section>
      </div>
    </>
  )
}

export default DayLearning06
