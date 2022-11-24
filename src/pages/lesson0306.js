import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import Typed from 'typed.js'
import bgvdo from '../videos/mountain02.mp4'
import '../scss/main.scss'


// markup
const Lesson0306 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        `พระพุทธเจ้าตรัสไว้ว่า`,
        `รูปเป็นอนัตตา`,
        `สิ่งใดเป็นอนัตตา`,
        `สิ่งนั้นท่านทั้งหลาย`,
        `พึงเห็นด้วยปัญญา`,
        `อันชอบตามความเป็นจริงอย่างนี้ว่า`,
        `นั่นไม่ใช่ของเรา`,
        `นั่นไม่เป็นเรา`,
        `นั่นไม่ใช่ตัวตนของเรา`,
        `เสียง กลิ่น รส`,
        `โผฏฐัพพะ ธรรมารมณ์เป็นอนัตตา`,
        `สิ่งใดเป็นอนัตตา`,
        `สิ่งนั้นท่านทั้งหลาย`,
        `พึงเห็นด้วยปัญญา`,
        `อันชอบตามความเป็นจริงอย่างนี้ว่า`,
        `นั่นไม่ใช่ของเรา`,
        `นั่นไม่เป็นเรา`,
        `นั่นไม่ใช่ตัวตนของเรา`,

        `เมื่ออริยสาวก`,
        `ผู้ได้สดับแล้วเห็นอยู่อย่างนี้`,
        `ย่อมเบื่อหน่ายแม้ในรูป`,
        `ย่อมเบื่อหน่ายแม้ในเสียง`,
        `ย่อมเบื่อหน่ายแม้ในกลิ่น`,
        `ย่อมเบื่อหน่ายแม้ในรส`,
        `ย่อมเบื่อหน่ายแม้ในโผฏฐัพพะ`,
        `ย่อมเบื่อหน่ายแม้ในธรรมารมณ์`,
        `เมื่อเบื่อหน่ายย่อมคลายกําหนัด`,
        `เพราะคลายกําหนัดย่อมหลุดพ้น`,
        `เมื่อหลุดพ้นแล้ว`,
        `ย่อมมีญาณหยั่งรู้ว่าหลุดพ้นแล้ว`,
        `รู้ชัดว่าชาติสิ้นแล้ว`,
        `พรหม จรรย์อยู่จบแล้ว`,
        `กิจที่ควรทํา..ทําเสร็จแล้ว`,
        `กิจอื่นเพื่อความเป็นอย่างนี้มิได้มี`,
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
              <h1><div className="text">ว่าด้วยความเป็นอนัตตาแห่งอายตนะภายนอก</div></h1>
              
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
            
            <a className="space" href="/lesson0307" >
              <i className="fa-solid fa-angle-right fa-5x"></i>
            </a>
          </div>
      </section>
      </div>
    </>
  )
}

export default Lesson0306