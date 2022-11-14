import React, { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import Typed from 'typed.js'
import bgvdo from '../videos/sea.mp4'
import '../scss/main.scss'

const DayLearning08 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        `ฝึกนำไปใช้ในชีวิตประจำวัน (8)`,
        `ไม่เที่ยงเกิดดับ ตาเห็นรูปไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ หูได้ยินเสียงไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ จมูกได้กลิ่นไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ ลิ้นได้รสไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ กายสัมผัสไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ ใจคิดนึกไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ มโนกรรมไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,
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
      <Helmet>
        <title>I am Sirisak Chantanate</title>
        <meta itemprop="name" content="Sirisak Chantanate" />
        <meta name="Description"
              content="Nutrigenomics lover, I really love share the health knowledge." />

        <meta name="twitter:title" content="Sirisak Chantanate" />
        <meta name="twitter:description"
              content="Nutrigenomics lover, I really love share the health knowledge." />
        <meta property="og:title" />
        <meta property="og:url" content="https://openmymai.github.io/" />
        <meta property="og:description"
              content="Nutrigenomics lover, I really love share the health knowledge." />
      </Helmet>
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

export default DayLearning08