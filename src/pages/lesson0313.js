import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import Typed from 'typed.js'
import bgvdo from '../videos/mountain02.mp4'
import '../scss/main.scss'


// markup
const Lesson0313 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        `ว่าด้วยเวทนา 3 เกิดแต่ผัสสะ`,
        `มีผัสสะเป็นมูล`,
        `พระพุทธเจ้าตรัสไว้ว่า`,
        `เวทนา 3 นี้เกิดแต่ผัสสะ`,
        `มีภาษาเป็นมูลมีผัสสะเป็นเหตุ`,
        `มีผัสสะเป็นปัจจัย`,
        `เวทนา 3 เป็นไฉน`,
        `เวทนา 3 คือ`,
        `สุขเวทนา`,
        `ทุกขเวทนา`,
        `ไม่ทุกข์ไม่สุขเวทนา`,

        `สุขเวทนาย่อมเกิดขึ้น`,
        `เพราะอาศัยผัสสะ`,
        `อันเป็นที่ตั้งแห่งสุขเวทนา`,
        `ความเสวยอารมณ์`,
        `อันเกิดแต่ผัสสะนั้นชื่อว่าสุขเวทนา`,
        `เกิดขึ้นเพราะอาศัยผัสสะ`,
        `อันเป็นที่ตั้งแห่งสุขเวทนานั้น`,
        `ย่อมดับไปสงบไป`,
        `เพราะผัสสะอันเป็นที่ตั้ง`,
        `แห่งสุขเวทนานั้นแลดับไป`,

        `ทุกขเวทนาย่อมเกิดขึ้น`,
        `เพราะอาศัยผัสสะ`,
        `อันเป็นที่ตั้งแห่งทุกขเวทนา`,
        `ความเสวยอารมณ์`,
        `อันเกิดแต่ผัสสะนั้นชื่อว่าทุกขเวทนา`,
        `เกิดขึ้นเพราะอาศัยผัสสะ`,
        `อันเป็นที่ตั้งแห่งทุกขเวทนา`,
        `นั้นย่อมดับไปสงบไป`,
        `เพราะผัสสะอันเป็นที่ตั้ง`,
        `แห่งทุกขเวทนานั้นแลดับไป`,

        `ไม่ทุกข์ไม่สุขเวทนา`,
        `ย่อมเกิดขึ้นเพราะอาศัยผัสสะ`,
        `อันเป็นที่ตั้งแห่งไม่ทุกข์ไม่สุขเวทนา`,
        `ความเสวยอารมณ์`,
        `อันเกิดแต่ผัสสะนั้นชื่อว่า`,
        `ไม่ทุกข์ไม่สุขเวทนา`,
        `เกิดขึ้นเพราะอาศัยผัสสะ`,
        `อันเป็นที่ตั้งแห่งไม่ทุกข์ไม่สุขเวทนา`,
        `นั้นย่อมดับไปสงบไป`,
        `เพราะผัสสะอันเป็นที่ตั้ง`,
        `แห่งไม่ทุกข์ไม่สุขเวทนานั้นแลดับไป`,
        `เพราะไม้สองอันเสียดสีกัน`,
        `เพราะการเสียดสีกัน`,
        `เกิดไออุ่นจึงเกิดไฟ`,
        `เพราะแยกไม้สองอันนั้น`,
        `แลออกจากกัน`,
        `ไออุ่นที่เกิดขึ้นเพราะการเสียดสีนั้น`,
        `ย่อมดับไป สงบไปฉันใด`,
        `เวทนา 3 นี้ก็ฉันนั้นเหมือนกันแล`,
        `เกิดแต่ผัสสะ`,
        `มีผัสสะเป็นเหตุ`,
        `มีผัสสะเป็นปัจจัย`,
        `เวทนาอันเกิดแต่ผัสสะเกิดขึ้น`,
        `เพราะอาศัยผัสสะที่เกิดแต่ปัจจัยนั้น`,
        `ย่อมดับไปเพราะผัสสะที่เกิดปัจจัยนั้นดับไป`,
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
              <h1><div className="text">ว่าด้วยเวทนา 3</div></h1>
              
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
            
            <a className="space" href="/lesson0314" >
              <i className="fa-solid fa-angle-right fa-5x"></i>
            </a>
          </div>
      </section>
      </div>
    </>
  )
}

export default Lesson0313