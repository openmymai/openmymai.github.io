import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import { SEO } from '../components/seo'
import Typed from 'typed.js'
import bgvdo from '../videos/mountain.mp4'
import '../scss/main.scss'


// markup
const Lesson0404 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        `สัมโพธสูตรที่ 1`,
        `ดูกรภิกษุทั้งหลาย`,
        `ก่อนการตรัสรู้`,
        `เมื่อเรายังเป็นโพธิสัตว์`,
        `ยังไม่ได้ตรัสรู้`,
        `ได้มีความคิดดังนี้ว่า`,
        `อะไรเป็นคุณอะไรเป็นโทษ`,
        `อะไรเป็นความสลัดออกแห่งจักษุ ฯลฯ`,
        `แห่ง​หู ฯลฯ`,
        `แห่งจมูก ฯลฯ`,
        `แห่งลิ้น ฯลฯ`,
        `แห่งกาย ฯลฯ`,
        `อะไรเป็นคุณอะไรเป็นโทษ`,
        `อะไรเป็นความสลัดออกแห่งใจ`,
        `ดูกรภิกษุทั้งหลาย`,
        `เราได้มีความคิดดังนี้ว่า`,
        `สุขโสมนัสเกิดขึ้นเพราะอาศัยจักษุ`,
        `นี้เป็นคุณของจักษุ`,
        `จักษุเป็นของไม่เที่ยงเป็นทุกข์`,
        `มีความแปรปรวนเป็นธรรมดา`,
        `นี้เป็นโทษของจักษุ`,
        `การกำจัดการละฉันทราคะในจักษุ`,
        `นี้เป็นความสลัดออกแห่งจักษุ ฯลฯ`,
        `สุขโสมนัสที่เกิดขึ้นเพราะอาศัยใจ`,
        `นี้เป็นคุณแห่งใจ`,
        `ใจมีสภาพไม่เที่ยงเป็นทุกข์`,
        `มีความแปรปรวนเป็นธรรมดา`,
        `นี้เป็นโทษแห่งใจ`,
        `การกำจัดฉันทราคะในใจ`,
        `นี้เป็นความสลัดออกแห่งใจ`,
        `ดูกรภิกษุทั้งหลาย`,
        `เรายังไม่รู้ตามความเป็นจริง`,
        `ซึ่งคุณแห่งอายตนะภายใน 6 เหล่านี้`,
        `โดยเป็นคุณ`,
        `ซึ่งโทษโดยความเป็นโทษ`,
        `และซึ่งความสลัดออก`,
        `โดยเป็นความสลัดออกอย่างนี้เพียงใด`,
        `เราก็ยังไม่ปฏิญาณว่าได้ตรัสรู้`,
        `ซึ่งอนุตรสัมมาสัมโพธิญาณในโลก`,
        `พร้อมเทวโลก มารโลก พรหมโลก`,
        `ในหมู่สัตว์`,
        `พร้อมทั้งสมณพราหมณ์เทวดา`,
        `และมนุษย์เพียงนั้น`,
        `เมื่อใดเราได้รู้ตามความเป็นจริง`,
        `ซึ่งคุณแห่งอายตนะภายใน 6 เหล่านี้`,
        `โดยเป็นคุณ`,
        `ซึ่งโทษโดยความเป็นโทษ`,
        `และซึ่งความสลัดออก`,
        `โดยเป็นความสลัดออกอย่างนี้`,
        `เมื่อนั้นเราจึงปฏิญาณว่าได้ตรัสรู้`,
        `ซึ่งอนุตตรสัมมาสัมโพธิญาณในโลก`,
        `พร้อมเทวโลก มารโลก พรหมโลก`,
        `ในหมู่สัตว์`,
        `พร้อมทั้งสมณพราหมณ์เทวดาและมนุษย์`,
        `ก็ญาณทัสนะเกิดขึ้นแล้วแก่เราว่า`,
        `ความหลุดพ้นของเราไม่กำเริบ`,
        `ชาตินี้มีในที่สุดบัดนี้ภพใหม่ไม่มี`,
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
              <h1><div className="text">สัมโพธสูตรที่ 1</div></h1>
              
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
            
            <a className="space" href="/lesson0405" >
              <i className="fa-solid fa-angle-right fa-5x"></i>
            </a>
          </div>
      </section>
      </div>
    </>
  )
}

export default Lesson0404

export const Head = () => (
  <SEO title="Lesson0404" />
)