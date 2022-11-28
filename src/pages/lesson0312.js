import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import { SEO } from '../components/seo'
import Typed from 'typed.js'
import bgvdo from '../videos/mountain02.mp4'
import '../scss/main.scss'


// markup
const Lesson0312 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        `พระพุทธเจ้าตรัสไว้`,
        `ว่าย่อมเป็นผู้มีสติอย่างไร`,
        `ย่อมเป็นผู้มีปกติ`,
        `เห็นกายในกายอยู่`,
        `มีความเพียรมีสัมปชัญญะมีสติ`,
        `กำจัดอภิชฌา`,
        `และโทมนัสในโลกเสีย`,
        `ย่อมเป็นผู้มีปกติ`,
        `เห็นเวทนาในเวทนาอยู่`,
        `มีความเพียรมีสัมปชัญญะมีสติ`,
        `กำจัดอภิชฌา`,
        `และโทมนัสในโลกเสีย`,
        `ย่อมเป็นผู้มีปกติ`,
        `เห็นจิตในจิตอยู่`,
        `มีความเพียร`,
        `มีสัมปชัญญะมีสติ`,
        `กำจัดอภิชฌา`,
        `และโทมนัสในโลกเสีย`,
        `ย่อมเป็นผู้มีปกติเห็นธรรมในธรรม`,
        `มีความเพียรมีสัมปชัญญะมีสติ`,
        `กำจัดอภิชฌา`,
        `และโทมนัสในโลกเสีย`,
        `ย่อมเป็นผู้มีสติอย่างนี้แล`,

        `ย่อมเป็นผู้มีสัมปชัญญะอย่างไร`,
        `ย่อมเป็นผู้มีปกติทำความรู้สึกตัว`,
        `ในก้าวไปในการถอยกลับ`,
        `ย่อมเป็นผู้มีปกติทำความรู้สึกตัว`,
        `ในการแลในการเหลียว`,
        `ย่อมเป็นผู้มีปกติทำความรู้สึกตัว`,
        `ในการคู้เข้าเหยียดออก`,
        `ย่อมเป็นผู้มีปกติทำความรู้สึกตัว`,
        `ทรงผ้าสังฆาฏิบาตรและจีวร`,
        `ย่อมเป็นผู้มีปกติทำความรู้สึกตัว`,
        `ในการกิน ดื่ม เคี้ยว ลิ้ม`,
        `ย่อมเป็นผู้มีปกติทำความรู้สึกตัว`,
        `ในการถ่ายอุจจาระปัสสาวะ`,
        `ย่อมเป็นผู้มีปกติทำความรู้สึกตัว`,
        `ในการเดินในการ`,
        `ยืน นั่ง หลับ ตื่น พูด นิ่ง`,
        `ย่อมเป็นผู้มีสติสัมปชัญญะอย่างนี้แล`,

        `ถ้าเมื่อนั้นมีสติสัมปชัญญะ`,
        `เป็นผู้ไม่ประมาท`,
        `มีความเพียรมีใจเด็ดเดี่ยว`,
        `อยู่อย่างนี้`,
        `สุขเวทนาย่อมบังเกิดขึ้น`,
        `เธอย่อมรู้ชัดอย่างนี้`,
        `ว่าสุขเวทนานี้`,
        `บังเกิดขึ้นแล้วแก่เราแล`,
        `ก็แต่ว่าสุขเวทนานั้น`,
        `อาศัยจึงเกิดขึ้น`,
        `ไม่อาศัยไม่เกิดขึ้น`,
        `อาศัยอะไรอาศัยกายนี้เอง`,
        `ก็กายนี้แลไม่เที่ยง`,
        `อันปัจจัยปรุงแต่งอาศัยกันเกิดขึ้น`,
        `ก็สุขเวทนาอันอาศัยกายอันไม่เที่ยง`,
        `ปัจจัยปรุงแต่งอาศัยกันเกิดขึ้น`,
        `แล้วจึงบังเกิดขึ้นจะเที่ยงแต่ที่ไหน`,
        `ดังนี้เธอย่อมพิจารณา`,
        `เห็นความไม่เที่ยง`,
        `ความเสื่อมไป`,
        `ความคลายไป`,
        `ความดับความสละคืน`,
        `ในกายและในสุขเวทนาอยู่`,
        `เมื่อเธอพิจารณา`,
        `เห็นความไม่เที่ยง`,
        `ความเสื่อมไป`,
        `ความคลายไป`,
        `ความดับความสละคืน`,
        `ในกายและในสุขเวทนาอยู่`,
        `ย่อมละราคานุสัยในกาย`,
        `และในสุขเวทนาเสียได้`,

        `ถ้าเมื่อนั้นมีสติสัมปชัญญะ`,
        `เป็นผู้ไม่ประมาท`,
        `มีความเพียร`,
        `มีใจเด็ดเดี่ยวอยู่อย่างนี้`,
        `ทุกขเวทนาย่อมบังเกิดขึ้น`,
        `เธอย่อมรู้ชัดอย่างนี้ว่า`,
        `ทุกขเวทนานี้`,
        `บังเกิดขึ้นแล้วแก่เราแล`,
        `ก็แต่ว่าทุกขเวทนานั้น`,
        `อาศัยจึงเกิดขึ้น`,
        `ไม่อาศัยไม่เกิดขึ้น`,
        `อาศัยอะไรอาศัยกายนี้เอง`,
        `ก็กายนี้แลไม่เที่ยง`,
        `อันปัจจัยปรุงแต่งอาศัยกันเกิดขึ้น`,
        `ก็ทุกขเวทนา`,
        `อันอาศัยกายอันไม่เที่ยง`,
        `ปัจจัยปรุงแต่งอาศัยกันเกิดขึ้น`,
        `แล้วจึงบังเกิดขึ้นจะเที่ยงแต่ที่ไหน`,
        `ดังนี้เธอย่อมพิจารณา`,
        `เห็นความไม่เที่ยง`,
        `ความเสื่อมไป`,
        `ความคลายไป`,
        `ความดับความสละคืนในกาย`,
        `และในทุกขเวทนาอยู่`,
        `เมื่อเธอพิจารณา`,
        `เห็นความไม่เที่ยง`,
        `ความเสื่อมไป`,
        `ความคลายไป`,
        `ความดับความสละคืนในกาย`,
        `และในทุกขเวทนาอยู่`,
        `ย่อมละปฏิฆานุสัยในกาย`,
        `และในทุกขเวทนาเสียได้`,

        `ถ้าเมื่อนั้นมีสติสัมปชัญญะเป็นผู้ไม่ประมาท`,
        `มีความเพียรมีใจเด็ดเดี่ยวอยู่อย่างนี้`,
        `ไม่ทุกข์ไม่สุขเวทนา ย่อมบังเกิดขึ้น`,
        `เธอย่อมรู้ชัดอย่างนี้ว่า`,
        `ไม่ทุกข์ไม่สุขเวทนานี้`,
        `บังเกิดขึ้นแล้วแก่เราแล`,
        `ก็แต่ว่าไม่ทุกข์ไม่สุขเวทนา`,
        `นั้นอาศัยจึงเกิดขึ้น`,
        `ไม่อาศัยไม่เกิดขึ้น`,
        `อาศัยอะไรอาศัยกายนี้เอง`,
        `ก็กลายนี้แหละไม่เที่ยง`,
        `อันปัจจัยปรุงแต่งอาศัยกันเกิดขึ้น`,
        `อาศัยอะไรอาศัยกายนี้เอง`,
        `ก็กายนี้แลไม่เที่ยง`,
        `อันปัจจัยปรุงแต่งอาศัยกันเกิดขึ้น`,
        `ก็ไม่ทุกข์ไม่สุขเวทนา`,
        `อาศัยกายอันไม่เที่ยง`,
        `ปัจจัยปรุงแต่งอาศัยกันเกิดขึ้น`,
        `แล้วจึงบังเกิดขึ้นจักเที่ยงแต่ที่ไหน`,
        `ดังนี้เธอย่อมพิจารณา`,
        `เห็นความไม่เที่ยง`,
        `ความเสื่อมไป`,
        `ความคลายไป`,
        `ความดับความสละคืน`,
        `ในกายและในไม่ทุกข์ไม่สุขเวทนาอยู่`,
        `เมื่อเธอพิจารณาเห็นความไม่เที่ยง`,
        `ความเสื่อมไป`,
        `ความคลายไป`,
        `ความดับความสละคืน`,
        `ในกายและในไม่ทุกข์ไม่สุขเวทนาอยู่`,
        `ความดับ ความสละคืนในกาย`,
        `และในไม่ทุกข์ไม่สุขเวทนาอยู่`,
        `ย่อมละอวิชชานุสัยในกาย`,
        `และในไม่ทุกข์ไม่สุขเวทนาเสียได้`,

        `ถ้าเมื่อนั้นเสวยสุขเวทนา`,
        `ก็รู้ชัดว่า`,
        `สุขเวทนาไม่เที่ยง`,
        `ไม่น่าหมกมุ่น`,
        `ไม่น่าเพลิดเพลิน`,
        `ถ้าเสวยทุกขเวทนาก็รู้ชัดว่า`,
        `ทุกขเวทนาไม่เที่ยง`,
        `ไม่น่าหมกมุ่น`,
        `ไม่น่าเพลิดเพลิน`,
        `ถ้าเสวยไม่ทุกข์ไม่สุขเวทนา`,
        `ก็รู้ชัดว่า`,
        `ไม่ทุกข์ไม่สุขเวทนา`,
        `ไม่เที่ยงไม่น่าหมกมุ่น`,
        `ไม่น่าเพลิดเพลิน`,

        `ถ้าเธอเสวยสุขเวทนา`,
        `ย่อมเป็นผู้ปราศจากกิเลส`,
        `เสวยสุขเวทนานั้น`,
        `ถ้าเธอเสวยทุกขเวทนา`,
        `ย่อมเป็นผู้ปราศจากกิเลส`,
        `เสวยทุกขเวทนานั้น`,
        `ถ้าเธอเสวยไม่ทุกข์ไม่สุขเวทนา`,
        `ย่อมเป็นผู้ปราศจากกิเลส`,
        `เสวยไม่ทุกข์ไม่สุขเวทนานั้น`,
        `เมื่อเสวยเวทนามีกายเป็นที่สุด`,
        `ก็รู้ชัดว่า`,
        `เราเสวยเวทนามีกายเป็นที่สุด`,
        `เมื่อเสวยเวทนามีชีวิตเป็นที่สุด`,
        `ก็รู้ชัดว่า`,
        `เราเสวยเวทนามีชีวิตเป็นที่สุด`,
        `ย่อมรู้ชัดว่าเมื่อตายไป`,
        `เวทนาทั้งปวงอัน`,
        `ไม่น่าเพลิดเพลิน`,
        `จักเป็นความเย็นในโลกนี้ทีเดียว`,

        `เปรียบเหมือนประทีปน้ำมัน`,
        `อาศัยน้ำมัน`,
        `และไส้จึงลูกโพลงอยู่ได้`,
        `เพราะสิ้นน้ำมันและไส้ประทีปนั้น`,
        `ไม่มีเชื้อพึงดับไป`,
        `ฉันใดก็ฉันนั้นเหมือนกัน`,
        `เมื่อเสวยเวทนามีกายเป็นที่สุด`,
        `ย่อมรู้ชัดว่า`,
        `เราเสวยเวทนามีกายเป็นที่สุด`,
        `เมื่อเสวยเวทนามีชีวิตเป็นที่สุด`,
        `ย่อมรู้ชัดว่า`,
        `เราเสวยเวทนามีชีวิตเป็นที่สุด`,
        `ย่อมรู้ชัดว่าเมื่อตายไป`,
        `เวทนาทั้งปวง`,
        `อันไม่น่าเพลิดเพลิน`,
        `จักเป็นความเย็นในโลกนี้ทีเดียว`,
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
              <h1><div className="text">ว่าด้วยควรเป็นผู้มีสติสัมปชัญญะ</div></h1>
              
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
            
            <a className="space" href="/lesson0313" >
              <i className="fa-solid fa-angle-right fa-5x"></i>
            </a>
          </div>
      </section>
      </div>
    </>
  )
}

export default Lesson0312

export const Head = () => (
  <SEO title="Lesson0312" />
)