import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import { SEO } from '../components/seo'
import Typed from 'typed.js'
import bgvdo from '../videos/mountain.mp4'
import '../scss/main.scss'


// markup
const Lesson0506 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        `เทศนาสูตร`,
        `ว่าด้วยปฏิจจสมุปบาท`,
        `ข้าพเจ้าได้สดับมาอย่างนี้`,
        `สมัยหนึ่งพระผู้มีพระภาค`,
        `ประทับอยู่ณพระเชตวัน`,
        `อารามของท่านอนาถบิณฑิกเศรษฐี`,
        `เขตพระนครสาวัตถี`,
        `ณ ที่นั้นพระผู้มีพระภาค`,
        `ตรัสเรียกภิกษุทั้งหลายว่า`,
        `ดูกรภิกษุทั้งหลาย`,
        `ภิกษุเหล่านั้นทูลรับพระผู้มีพระภาคว่า`,
        `พระพุทธเจ้าข้า`,
        `พระผู้มีพระภาคได้ตรัสพระพุทธดำรัสนี้ว่า`,
        `ดูกรภิกษุทั้งหลาย`,
        `เราจักแสดงปฏิจจสมุปบาทแก่พวกเธอ`,
        `พวกเธอจงฟังปฏิจจสมุปบาทนั้น`,
        `จงใส่ใจให้ดีเถิดเราจักกล่าว`,
        `ภิกษุเหล่านั้นทูลรับพระผู้มีพระภาคแล้ว`,

        `พระผู้มีพระภาคได้ตรัสว่า`,
        `ดูกรภิกษุทั้งหลาย`,
        `ก็ปฏิจจสมุปบาทเป็นไฉน`,
        `ดูกรภิกษุทั้งหลาย`,
        `เพราะอวิชชาเป็นปัจจัยจึงมีสังขาร`,
        `เพราะสังขารเป็นปัจจัยจึงมีวิญญาณ`,
        `เพราะวิญญาณเป็นปัจจัยจึงมีนามรูป`,
        `เพราะนามรูปเป็นปัจจัยจึงมีสฬายตนะ`,
        `เพราะสฬายตนะเป็นปัจจัยจึงมีผัสสะ`,
        `เพราะผัสสะเป็นปัจจัยจึงมีเวทนา`,
        `เพราะเวทนาเป็นปัจจัยจึงมีตัณหา`,
        `เพราะตัณหาเป็นปัจจัยจึงมีอุปาทาน`,
        `เพราะอุปาทานเป็นปัจจัยจึงมีภพ`,
        `เพราะภพเป็นปัจจัยจึงมีชาติ`,
        `เพราะชาติเป็นปัจจัยจึงมีชรา`,
        `และมรณะโสกะปริเทวะ`,
        `ทุกขโทมนัสและอุปายาส `,
        `ความเกิดขึ้นแห่งกองทุกข์ทั้งมวลนี้`,
        `ย่อมมีด้วยประการอย่างนี้`,
        `นี้เราเรียกว่าปฏิจจสมุปบาท`,

        `ก็เพราะอวิชชานั่นแหละ`,
        `ดับด้วยการสำรอกโดยไม่เหลือ`,
        `สังขารจึงดับ`,
        `เพราะสังขารดับวิญญาณจึงดับ`,
        `เพราะวิญญาณดับนามรูปจึงดับ`,
        `เพราะนามรูปดับสฬายตนะจึงดับ`,
        `เพราะสฬายตนะดับผัสสะจึงดับ`,
        `เพราะผัสสะดับเวทนาจึงดับ`,
        `เพราะเวทนาดับตัณหาจึงดับ`,
        `เพราะตัณหาดับอุปาทานจึงดับ`,
        `เพราะอุปาทานดับภพจึงดับ`,
        `เพราะภพดับชาติจึงดับ`,
        `เพราะชาติดับชราและมรณะ`,
        `โสกะปริเทวะทุกขโทมนัส`,
        `และอุปายาสจึงดับ`,
        `ความดับแห่งกองทุกข์ทั้งมวลนี้`,
        `ย่อมมีด้วยประการอย่างนี้`,
        `พระผู้มีพระภาค`,
        `ได้ตรัสพระพุทธภาษิตนี้แล้ว`,
        `ภิกษุเหล่านั้นมีใจยินดีชื่นชมภาษิต`,
        `ของพระผู้มีพระภาคแล้ว`,
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
              <h1><div className="text">เทศนาสูตร</div></h1>
              
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
            
            <a className="space" href="/lesson0507" >
              <i className="fa-solid fa-angle-right fa-5x"></i>
            </a>
          </div>
      </section>
      </div>
    </>
  )
}

export default Lesson0506

export const Head = () => (
  <SEO title="Lesson0506" />
)