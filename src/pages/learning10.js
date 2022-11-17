import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import bgvdo from '../videos/sea.mp4'
import '../scss/main.scss'

const DayLearning10 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        
        `(เอากฎธรรมชาติ 2 กฎไปลบชื่อ)`,
        `ตัวอย่าง: เก้าอี้`,
        `ไม่เที่ยงเกิดดับ เก้าอี้ไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
        `ตัวอย่าง: แสงไฟ`,
        `ไม่เที่ยงเกิดดับ แสงไฟไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
        `ตัวอย่าง: ศาลา`,
        `ไม่เที่ยงเกิดดับ ศาลาไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
        `ตัวอย่าง: เสียงนก`,
        `ไม่เที่ยงเกิดดับ เสียงนกไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
      ],
      typeSpeed: 45,
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

export default DayLearning10
