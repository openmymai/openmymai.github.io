import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import Typed from 'typed.js'
import bgvdo from '../videos/sea.mp4'
import '../scss/main.scss'

const DayLearning01 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        `กำหนดรู้ รู้ทันสิ่งที่มากระทบสัมผัส`,
        `ไม่เที่ยงเกิดดับ ตัวฉันเกิดขึ้น ตั้งอยู่ ดับไป`,
        `เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ`,
        `ไม่เที่ยงเกิดดับ ตัวฉันคือรูป เวทนา สัญญา สังขาร วิญญาณ เกิดขึ้น ตั้งอยู่ ดับไป`,
        `เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ`,
        `ไม่เที่ยงเกิดดับ รูป เวทนา สัญญา สังขาร วิญญาณ คือกาย เวทนา จิต ธรรม เกิดขึ้น ตั้งอยู่ ดับไป`,
        `เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ`,
        `ไม่เที่ยงเกิดดับ กาย เวทนา จิต ธรรมคือโลกและชีวิต เกิดขึ้น ตั้งอยู่ ดับไป`,
        `เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ`,
        `ไม่เที่ยงเกิดดับ ผลต่อเนื่องของโลกและชีวิต คือวัตถุ สิ่งของ สัตว์ บุคคล เกิดขึ้น ตั้งอยู่ ดับไป`,
        `เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ`,
        `ไม่เที่ยงเกิดดับ ผลต่อเนื่องของวัตถุ สิ่งของ สัตว์ บุคคลคือรูป เสียง กลิ่น รส โผฏฐัพพะ ธรรมารมณ์ เกิดขึ้น ตั้งอยู่ ดับไป`,
        `เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ`,
        `ไม่เที่ยงเกิดดับ ผลต่อเนื่องของรูป เสียง กลิ่น รส โผฏฐัพพะ ธรรมารมณ์คือความพอใจ ไม่พอใจ เกิดขึ้น ตั้งอยู่ ดับไป`,
        `เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ`,
        `ไม่เที่ยงเกิดดับ ความพอใจ ไม่พอใจคือความไม่รู้ เกิดขึ้น ตั้งอยู่ ดับไป`,
        `เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ`,
        `ไม่เที่ยงเกิดดับ ความไม่รู้คืออวิชชา เกิดขึ้น ตั้งอยู่ ดับไป`,
        `เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ`,
        `ไม่เที่ยงเกิดดับ ผลต่อเนื่องของอวิชชา คือชีวิต เกิดขึ้น ตั้งอยู่ ดับไป`,
        `เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ`,
        `ไม่เที่ยงเกิดดับ ชีวิตคือตัวฉัน เกิดขึ้น ตั้งอยู่ ดับไป`,
        `เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ`,
        `ไม่เที่ยงเกิดดับ ตัวฉันคือรูป เวทนา สัญญา สังขาร วิญญาณ เกิดขึ้น ตั้งอยู่ ดับไป`,
        `เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ`,
        `ไม่เที่ยงเกิดดับ รูป เวทนา สัญญา สังขาร วิญญาณ คือกาย เวทนา จิต ธรรม เกิดขึ้น ตั้งอยู่ ดับไป`,
        `เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ`,
        `ไม่เที่ยงเกิดดับ กาย เวทนา จิต ธรรมคือโลกและชีวิต เกิดขึ้น ตั้งอยู่ ดับไป`,
        `เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ`,
        `ไม่เที่ยงเกิดดับโลกและชีวิตคือตัวฉัน เกิดขึ้น ตั้งอยู่ ดับไป`,
        `เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ`,
        `ไม่เที่ยงเกิดดับ โลกและชีวิตเคลื่อนไหวเกิดขึ้น ตั้งอยู่ ดับไป เกิดจากเหตุปัจจัยมาประชุมชั่วคราวแล้วแตกสลาย`,
        `ไม่มีตัวตนเป็นของตนเอง ว่างเปล่าจากตนและของของตน`,
        `ไม่ควรไปยึดมั่นถือมั่นถือมั่นว่า โลกและชีวิตเป็นของเรา เป็นเรา เป็นตัวตนของเรา`,
        `ไม่เที่ยงเกิดดับ`,

        
        `ไม่เที่ยงเกิดดับ เหตุปัจจัยของตาเห็นรูปไม่เที่ยงเกิดดับ`,
        `ตาเห็นรูปไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ ผลต่อเนื่องของตาเห็นรูปไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ เหตุปัจจัยของหูได้ยินเสียงไม่เที่ยงเกิดดับ`,
        `หูได้ยินเสียงไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ ผลต่อเนื่องของหูได้ยินเสียงไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ เหตุปัจจัยของจมูกได้กลิ่นไม่เที่ยงเกิดดับ`,
        `จมูกได้กลิ่นไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ ผลต่อเนื่องของจมูกได้กลิ่นไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ เหตุปัจจัยของลิ้นได้รสไม่เที่ยงเกิดดับ`,
        `ลิ้นได้รสไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ ผลต่อเนื่องของลิ้นได้รสไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ เหตุปัจจัยของกายสัมผัสไม่เที่ยงเกิดดับ`,
        `กายสัมผัสไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ ผลต่อเนื่องของกายสัมผัสไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ เหตุปัจจัยของใจคิดนึกไม่เที่ยงเกิดดับ`,
        `ใจคิดนึกไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ ผลต่อเนื่องของใจคิดนึกไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ เหตุปัจจัยของมโนกรรมไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ ผลต่อเนื่องของมโนกรรมไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ เหตุปัจจัยของวจีกรรมไม่เที่ยงเกิดดับ`,
        `วจีกรรมไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ ผลต่อเนื่องของวจีกรรมไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ เหตุปัจจัยของกายกรรมไม่เที่ยงเกิดดับ`,
        `กายกรรมไม่เที่ยงเกิดดับ ตัวฉันไม่เที่ยงเกิดดับ ผลต่อเนื่องของกายกรรมไม่เที่ยงเกิดดับ`,
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
              
              <a className="space" href="/learning02" >
                <i className="fa-solid fa-angle-right fa-5x"></i>
              </a>
            </div>
        </section>
      </div>
    </>
  )
}

export default DayLearning01