import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import bgvdo from '../videos/sea.mp4'
import '../scss/main.scss'

const DayLearning05 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        
        `ตัวอย่าง: เก้าอี้, โต๊ะ, พื้น`,

        `ไม่เที่ยงเกิดดับ เก้าอี้ เป็นธรรมชาติชนิดหนึ่ง เกิดขึ้นตั้งอยู่ดับไป ไม่เที่ยงเกิดดับ`,
        `โต๊ะ เป็นธรรมชาติชนิดหนึ่ง เกิดขึ้นตั้งอยู่ดับไป ไม่เที่ยงเกิดดับ`,
        `พื้น เป็นธรรมชาติชนิดหนึ่ง เกิดขึ้นตั้งอยู่ดับไป ไม่เที่ยงเกิดดับ`,
        `กำหนดรู้ เก้าอี้ โต๊ะ พื้น เป็นธรรมชาติชนิดหนึ่ง เกิดขึ้นตั้งอยู่ดับไป ไม่เที่ยงเกิดดับเหมือนกัน`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,
      ],
      typeSpeed: 45,
      fadeOut: true,
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

export default DayLearning05
