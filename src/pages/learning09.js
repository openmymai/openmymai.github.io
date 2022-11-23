import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import bgvdo from '../videos/sea.mp4'
import '../scss/main.scss'

const DayLearning09 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        
        `ไม่เที่ยงเกิดดับ เกิดขึ้นตั้งอยู่ดับไปไม่เที่ยงเกิดดับ`,
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

export default DayLearning09