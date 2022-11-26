import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import { SEO } from '../components/seo'
import Typed from 'typed.js'
import bgvdo from '../videos/mountain03.mp4'
import '../scss/main.scss'


// markup
const Lesson0403 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        `พาหิรอนิจจาสูตร`,
        `ว่าด้วยความเป็นอนิจจัง`,
        `แห่งอายตนะภายนอกทั้งสามกาล`,
        `ดูกรภิกษุทั้งหลาย`,
        `รูปที่เป็นอดีตและอนาคตเป็นของไม่เที่ยง`,
        `จะกล่าวไปใยถึงรูปที่เป็นปัจจุบันเล่า`,
        `อริยสาวกผู้ได้สดับแล้วเห็นอยู่อย่างนี้`,
        `ย่อมไม่มีเยื่อใยในรูปที่เป็นอดีต`,
        `ไม่เพลิดเพลินรูปที่เป็นอนาคต`,
        `ย่อมปฏิบัติเพื่อเบื่อหน่ายเพื่อคลายกำหนัด`,
        `เพื่อดับรูปที่เป็นปัจจุบัน`,
        `เสียง กลิ่น รส`,
        `โผฏฐัพพะ ธรรมารมณ์`,
        `ที่เป็นอดีตและอนาคตเป็นของไม่เที่ยง`,
        `จะกล่าวไปใยถึงที่ปัจจุบันเล่า`,
        `อริยสาวกผู้ได้สดับแล้วเห็นอยู่อย่างนี้`,
        `ย่อมไม่มีเยื่อใยในธรรมารมณ์ที่เป็นอดีต`,
        `ไม่เพลิดเพลินในธรรมารมณ์ที่เป็นอนาคต`,
        `ย่อมปฏิบัติเพื่อเบื่อหน่ายเพื่อคลายกำหนัด`,
        `เพื่อดับซึ่งธรรมารณ์ที่เป็นปัจจุบัน`, 
        `ว่าด้วยความเป็นทุกข์`,
        `แห่งอายตนะภายนอกทั้งสามกาล`,
        `ดูกรภิกษุทั้งหลาย`,
        `รูปที่เป็นอดีตและอนาคตเป็นทุกข์`,
        `จะกล่าวไปใยถึงรูปที่เป็นปัจจุบันเล่า`,
        `อริยสาวกผู้ได้สดับแล้วเห็นอยู่อย่างนี้`,
        `ย่อมไม่มีเยื่อใยในรูปที่เป็นอดีต`,
        `ไม่เพลิดเพลินรูปที่เป็นอนาคต`,
        `ย่อมปฏิบัติเพื่อเบื่อหน่ายเพื่อคลายกำหนัด`,
        `เพื่อดับรูปที่เป็นปัจจุบัน`,
        `เสียง กลิ่น รส`,
        `โผฏฐัพพะ ธรรมารมณ์`,
        `ที่เป็นอดีตและอนาคตเป็นทุกข์`,
        `จะกล่าวไปใยถึงที่ปัจจุบันเล่า`,
        `อริยสาวกผู้ได้สดับแล้วเห็นอยู่อย่างนี้`,
        `ย่อมไม่มีเยื่อใยในธรรมารมณ์ที่เป็นอดีต`,
        `ไม่เพลิดเพลินในธรรมารมณ์ที่เป็นอนาคต`,
        `ย่อมปฏิบัติเพื่อเบื่อหน่ายเพื่อคลายกำหนัด`,
        `เพื่อดับซึ่งธรรมารณ์ที่เป็นปัจจุบัน`,
        `ว่าด้วยความเป็นอนัตตา`,
        `แห่งอายตนะภายนอกทั้งสามกาล`,
        `ดูกรภิกษุทั้งหลาย`,
        `รูปที่เป็นอดีตและอนาคตเป็นอนัตตา`,
        `จะกล่าวไปใยถึงรูปที่เป็นปัจจุบันเล่า`,
        `อริยสาวกผู้ได้สดับแล้วเห็นอยู่อย่างนี้`,
        `ย่อมไม่มีเยื่อใยในรูปที่เป็นอดีต`,
        `ไม่เพลิดเพลินรูปที่เป็นอนาคต`,
        `ย่อมปฏิบัติเพื่อเบื่อหน่ายเพื่อคลายกำหนัด`,
        `เพื่อดับรูปที่เป็นปัจจุบัน`,
        `เสียง กลิ่น รส`,
        `โผฏฐัพพะ ธรรมารมณ์`,
        `ที่เป็นอดีตและอนาคตเป็นอนัตตา`,
        `จะกล่าวไปใยถึงที่ปัจจุบันเล่า`,
        `อริยสาวกผู้ได้สดับแล้วเห็นอยู่อย่างนี้`,
        `ย่อมไม่มีเยื่อใยในธรรมารมณ์ที่เป็นอดีต`,
        `ไม่เพลิดเพลินในธรรมารมณ์ที่เป็นอนาคต`,
        `ย่อมปฏิบัติเพื่อเบื่อหน่ายเพื่อคลายกำหนัด`,
        `เพื่อดับซึ่งธรรมารณ์ที่เป็นปัจจุบัน`,
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
              <h1><div className="text">พาหิรอนิจจาสูตร</div></h1>
              
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
            
            <a className="space" href="/lesson0404" >
              <i className="fa-solid fa-angle-right fa-5x"></i>
            </a>
          </div>
      </section>
      </div>
    </>
  )
}

export default Lesson0403

export const Head = () => (
  <SEO title="Lesson0403" />
)