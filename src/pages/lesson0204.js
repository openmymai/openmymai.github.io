import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import Typed from 'typed.js'
import bgvdo from '../videos/mountain02.mp4'
import '../scss/main.scss'


// markup
const Lesson0204 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
          `ตาเห็นรูป รูปเป็นธรรมชาติชนิดหนึ่ง`,
          `เกิดจากเหตุปัจจัยมาประชุมปรุงแต่งกันชั่วคราวแล้วแตกสลาย ไม่เที่ยงเกิดดับ ดับไม่เหลือ`, 
          `ไม่มีตัวตน สัตว์ บุคคล ชื่อ สิ่งของในรูปที่เห็น`,
          `ความจริงเป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับดับไม่เหลือ`,
          
          `หูได้ยินเสียง เสียงเป็นธรรมชาติชนิดหนึ่ง`,
          `เกิดจากเหตุปัจจัยมาประชุมปรุงแต่งกันชั่วคราวแล้วแตกสลาย ไม่เที่ยงเกิดดับ ดับไม่เหลือ`, 
          `ไม่มีตัวตน สัตว์ บุคคล ชื่อ สิ่งของในเสียงที่ได้ยิน`,
          `ความจริงเป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับดับไม่เหลือ`,

          `จมูกได้กลิ่น กลิ่นเป็นธรรมชาติชนิดหนึ่ง`,
          `เกิดจากเหตุปัจจัยมาประชุมปรุงแต่งกันชั่วคราวแล้วแตกสลาย ไม่เที่ยงเกิดดับ ดับไม่เหลือ`, 
          `ไม่มีตัวตน สัตว์ บุคคล ชื่อ สิ่งของในกลิ่นที่ได้กลิ่น`,
          `ความจริงเป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับดับไม่เหลือ`,

          `กายสัมผัส สัมผัสเป็นธรรมชาติชนิดหนึ่ง`,
          `เกิดจากเหตุปัจจัยมาประชุมปรุงแต่งกันชั่วคราวแล้วแตกสลาย ไม่เที่ยงเกิดดับ ดับไม่เหลือ`, 
          `ไม่มีตัวตน สัตว์ บุคคล ชื่อ สิ่งของในสัมผัสที่สัมผัส`,
          `ความจริงเป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับดับไม่เหลือ`,

          `ใจคิดนึก ความคิดเป็นธรรมชาติชนิดหนึ่ง`,
          `เกิดจากเหตุปัจจัยมาประชุมปรุงแต่งกันชั่วคราวแล้วแตกสลาย ไม่เที่ยงเกิดดับ ดับไม่เหลือ`, 
          `ไม่มีตัวตน สัตว์ บุคคล ชื่อ สิ่งของในใจคิดนึกที่คิดนึก`,
          `ความจริงเป็นธรรมชาติชนิดหนึ่ง ไม่เที่ยงเกิดดับดับไม่เหลือ`,
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
          <div className="flex">   
            <a href="/praise" >
              <span className="highlight" style={{fontSize: "2.5em"}}>
                หน้าแรก
              </span>
            </a>   
              <h1><div className="text">กำหนดรู้อินทรีย์ 6 ตามความเป็นจริง</div></h1>
              
              <h1>
                <div className="text">
                  <span style={{ whiteSpace: 'pre' }} ref={el} />
                </div>
              </h1>        
          </div>

          <div className="next">
            <a className="space" style={{cursor:'pointer'}} onClick={() => navigate(-1)}>
              <i className="fa-solid fa-angle-left fa-5x"></i>
            </a>
            
            <a href="/lesson0205" >
              <i className="fa-solid fa-angle-right fa-5x"></i>
            </a>
          </div>
      </section>
      </div>
    </>
  )
}

export default Lesson0204