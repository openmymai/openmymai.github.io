import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import bgvdo from '../videos/sea.mp4'
import '../scss/main.scss'

const DayLearning12 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        
        `ไม่เที่ยงเกิดดับ ตัวฉันเกิดขึ้นตั้งอยู่ดับไป ไม่เที่ยงเกิดดับ`,
        `ไม่เที่ยงเกิดดับ ตัวฉันไม่มีตัวตนเป็นของตนเองไม่เที่ยงเกิดดับ`,
        `ไม่เที่ยงเกิดดับ ตัวฉันว่างเปล่าจากตนและของของตน ไม่เที่ยงเกิดดับ`,
        `ไม่เที่ยงเกิดดับ ไม่ควรไปยึดมั่นถือมั่นว่าตัวฉันเป็นของเราเป็นเราเป็นตัวตนของเราไม่เที่ยงเกิดดับ`,
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

export default DayLearning12