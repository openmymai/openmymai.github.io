import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import Typed from 'typed.js'
import bgvdo from '../videos/mountain02.mp4'
import '../scss/main.scss'


// markup
const Lesson0311 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        `พระพุทธเจ้าตรัสไว้ว่า`,
        `เมื่อเมตตาเจโตวิมุติอันบุคคลเสพแล้ว`,
        `ทำให้มากแล้ว`,
        `ทำให้เป็นดุจญาณ`,
        `ทำให้เป็นที่ตั้งให้ตั้งมั่นโดยลำดับ`,
        `สั่งสมดีแล้ว`,
        `ปรารถนาดีแล้ว`,
        `พึงหวังอานิสงส์ 11 ประการ`,
        `11 ประการเป็นไฉน`,
        `คือย่อมหลับเป็นสุข`,
        `ย่อมตื่นเป็นสุข`,
        `ย่อมไม่ฝันลามก`,
        `ย่อมเป็นที่รักของมนุษย์ทั้งหลาย`,
        `ย่อมเป็นที่รักของอมนุษย์ทั้งหลาย`,
        `เทวดาทั้งหลายย่อมรักษา`,
        `ไฟ ยาพิษ หรือศาสตราย่อมไม่กล้ำกลายได้`,
        `จิตย่อมตั้งมั่นได้เร็ว`,
        `สีหน้าผ่องใส`,
        `เป็นผู้ไม่หลงไหลทำกาละ`,
        `เมื่อไม่แทงตลอดคุณยิ่งย่อมเป็นผู้เข้าถึงพรหมโลก`,

        `เมื่อเมตตาเจโตวิมุติอันบุคคลเสพแล้ว`,
        `เจริญแล้วทำให้มากแล้ว`,
        `ทำให้เจริญดุจญาณ`,
        `ทำให้ตั้งมั่นโดยลำดับ`,
        `สั่งสมดีแล้ว`,
        `ปรารถนาดีแล้ว`,
        `พึงหวังอานิสงส์ 11 ประการฉะนี้แล`,
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
              <h1><div className="text">อานิสงส์ของเมตตา 11 ประการ</div></h1>
              
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
            
            <a href="/lesson0312" >
              <i className="fa-solid fa-angle-right fa-5x"></i>
            </a>
          </div>
      </section>
      </div>
    </>
  )
}

export default Lesson0311