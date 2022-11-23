import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import Typed from 'typed.js'
import bgvdo from '../videos/sea.mp4'
import '../scss/main.scss'

const DayLearning07 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        
        `ไม่เที่ยงเกิดดับ ตาเห็นรูปเป็นธรรมชาติชนิดหนึ่งเกิดขึ้นตั้งอยู่ดับไป`,
        `เกิดจากเหตุปัจจัยมาประชุมชั่วคราวแล้วแตกสลายไม่เที่ยงเกิดดับ`,
        `กำหนดรู้ หูได้ยินเสียง จมูกได้กลิ่น ลิ้นได้รส กายสัมผัส ใจคิดนึก เป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดขึ้นตั้งอยู่ดับไป เกิดจากเหตุปัจจัยมาประชุมชั่วคราวแล้วแตกสลาย ไม่เที่ยงเกิดดับเหมือนกัน`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ หูได้ยินเสียงเป็นธรรมชาติชนิดหนึ่งเกิดขึ้นตั้งอยู่ดับไป`,
        `เกิดจากเหตุปัจจัยมาประชุมชั่วคราวแล้วแตกสลายไม่เที่ยงเกิดดับ`,
        `กำหนดรู้ ตาเห็นรูป จมูกได้กลิ่น ลิ้นได้รส กายสัมผัส ใจคิดนึก เป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดขึ้นตั้งอยู่ดับไป เกิดจากเหตุปัจจัยมาประชุมชั่วคราวแล้วแตกสลาย ไม่เที่ยงเกิดดับเหมือนกัน`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ จมูกได้กลิ่นเป็นธรรมชาติชนิดหนึ่งเกิดขึ้นตั้งอยู่ดับไป`,
        `เกิดจากเหตุปัจจัยมาประชุมชั่วคราวแล้วแตกสลายไม่เที่ยงเกิดดับ`,
        `กำหนดรู้ ตาเห็นรูป หูได้ยินเสียง ลิ้นได้รส กายสัมผัส ใจคิดนึก เป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดขึ้นตั้งอยู่ดับไป เกิดจากเหตุปัจจัยมาประชุมชั่วคราวแล้วแตกสลาย ไม่เที่ยงเกิดดับเหมือนกัน`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ ลิ้นได้รสเป็นธรรมชาติชนิดหนึ่งเกิดขึ้นตั้งอยู่ดับไป`,
        `เกิดจากเหตุปัจจัยมาประชุมชั่วคราวแล้วแตกสลายไม่เที่ยงเกิดดับ`,
        `กำหนดรู้ ตาเห็นรูป หูได้ยินเสียง จมูกได้กลิ่น กายสัมผัส ใจคิดนึก เป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดขึ้นตั้งอยู่ดับไป เกิดจากเหตุปัจจัยมาประชุมชั่วคราวแล้วแตกสลาย ไม่เที่ยงเกิดดับเหมือนกัน`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ กายสัมผัสเป็นธรรมชาติชนิดหนึ่งเกิดขึ้นตั้งอยู่ดับไป`,
        `เกิดจากเหตุปัจจัยมาประชุมชั่วคราวแล้วแตกสลายไม่เที่ยงเกิดดับ`,
        `กำหนดรู้ ตาเห็นรูป หูได้ยินเสียง จมูกได้กลิ่น ลิ้นได้รส ใจคิดนึก เป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดขึ้นตั้งอยู่ดับไป เกิดจากเหตุปัจจัยมาประชุมชั่วคราวแล้วแตกสลาย ไม่เที่ยงเกิดดับเหมือนกัน`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ ใจคิดนึกเป็นธรรมชาติชนิดหนึ่งเกิดขึ้นตั้งอยู่ดับไป`,
        `เกิดจากเหตุปัจจัยมาประชุมชั่วคราวแล้วแตกสลายไม่เที่ยงเกิดดับ`,
        `กำหนดรู้ ตาเห็นรูป หูได้ยินเสียง จมูกได้กลิ่น ลิ้นได้รส กายสัมผัส เป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดขึ้นตั้งอยู่ดับไป เกิดจากเหตุปัจจัยมาประชุมชั่วคราวแล้วแตกสลาย ไม่เที่ยงเกิดดับเหมือนกัน`,
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
            <div className="next">
              <a className="space" style={{cursor:'pointer'}} onClick={() => navigate(-1)}>
                <i className="fa-solid fa-angle-left fa-5x"></i>
              </a>
              
              <a href="/learning08" >
                <i className="fa-solid fa-angle-right fa-5x"></i>
              </a>
            </div>
        </section>
      </div>
    </>
  )
}

export default DayLearning07