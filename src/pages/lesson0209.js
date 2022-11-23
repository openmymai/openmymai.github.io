import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import Typed from 'typed.js'
import bgvdo from '../videos/mountain02.mp4'
import '../scss/main.scss'


// markup
const Lesson0209 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        `พระพุทธเจ้าตรัสไว้ดังนี้ว่า บุคคลเมื่อไม่รู้ไม่เห็นจักษุตามความเป็นจริง`,
        `เมื่อไม่รู้ไม่เห็นรูปตามความเป็นจริง`,
        `เมื่อไม่รู้ไม่เห็นจักษุวิญญาณตามความเป็นจริง`,
        `เมื่อไม่รู้ไม่เห็นจักษุสัมผัสตามความเป็นจริง`,
        `เมื่อไม่รู้ไม่เห็นความเสวยอารมณ์เป็นสุขก็ตาม`,
        `เป็นทุกข์ก็ตาม`,
        `มิใช่ทุกข์ มิใช่สุขก็ตามที่เกิดขึ้นเพราะจักษุสัมผัสเป็นปัจจัยตามความเป็นจริง`,
        `ย่อมกำหนัดในจักษุ`,
        `กำหนัดในรูป`,
        `กำหนัดในจักษุวิญญาณ`,
        `กำหนัดในจักษุสัมผัส`,
        `กำหนัดในเสวยอารมณ์`,
        `เป็นสุขก็ตามเป็นทุกข์ก็ตาม`,
        `มิใช่ทุกข์มิใช่สุขก็ตาม`,
        `ที่เกิดขึ้นเพราะจักษุสัมผัสเป็นปัจจัย`,
        `เมื่อบุคคลนั้นกำหนัดนักแล้ว`,
        `ประกอบพร้อมแล้ว`,
        `ลุ่มหลงเล็งเห็นคุณอยู่`,
        `ย่อมมีอุปทานขันธ์ 5 ถึงความพอกพูนต่อไป`,
        `และเขาจะมีตัณหาที่นำไปสู่ภพใหม่ร่วมกันด้วยความกำหนัด`,
        `ด้วยอำนาจความยินดี`,
        `อันมีความเพลิดเพลินในอารมณ์นั้นๆ เจริญทั่ว`,
        `จะมีความกระวนกระวายแม้ทางกายแม้ทางใจเจริญทั่ว`,
        `มีความเดือดร้อนแม้ทางกายแม้ทางใจเจริญทั่ว`,
        `มีความเร่าร้อนแม้ทางกายแม้ทางใจเจริญทั่ว`,
        `เขาย่อมเสวยทุกข์ทางกายบ้างทุกข์ทางใจบ้าง`,
        
        `ส่วนบุคคลเมื่อรู้เมื่อเห็นจักษุตามความเป็นจริง`,
        `เมื่อรู้เมื่อเห็นรูปตามความเป็นจริง`,
        `เมื่อรู้เมื่อเห็นจักษุวิญญาณตามความเป็นจริง`,
        `เมื่อรู้เมื่อเห็นจักษุสัมผัสตามความเป็นจริง`,
        `เมื่อรู้เมื่อเห็นความเสวยอารมณ์เป็นสุขก็ตามเป็นทุกข์ก็ตาม`,
        `มิใช่ทุกข์ มิใช่สุขก็ตาม`,
        `ที่เกิดขึ้นเพราะจักษุสัมผัสเป็นปัจจัยตามความเป็นจริง`,
        `ย่อมไม่กำหนัดในจักษุ`,
        `ไม่กำหนัดในรูป`,
        `ไม่กำหนัดในจักษุวิญญาณ`,
        `ไม่กำหนัดในจักษุสัมผัส`,
        `ไม่กำหนัดในความเสวยอารมณ์เป็นสุขก็ตามเป็นทุกข์ก็ตาม`,
        `มิใช่ทุกข์มิใช่สุขก็ตาม`,
        `ที่เกิดขึ้นเพราะจักษุสัมผัสเป็นปัจจัย`,
        `เมื่อบุคคลนั้นไม่กำหนัดนักแล้ว`,
        `ไม่ประกอบพร้อมแล้ว`,
        `ไม่ลุ่มหลงเล็งเห็นโทษอยู่`,
        `ย่อมมีอุปทานขันธ์ 5 ไม่พอกพูนต่อไป`,
        `และเขาละตัณหาที่นำไปสู่ภพใหม่`,
        `ร่วมกันด้วยความกำหนัดด้วยอำนาจความยินดี`,
        `อันมีความเพลิดเพลินในอารมณ์นั้นๆได้`,
        `จะละความกระวนกระวายแม้ทางกายแม้ทางใจได้`,
        `จะละความเดือดร้อนแม้ทางกายแม้ทางใจได้`,
        `จะละความเร่าร้อนแม้ทางกายแม้ทางใจได้`,
        `เขาย่อมเสวยสุขทางกายบ้างสุขทางใจบ้าง`,
        `บุคคลผู้เป็นเช่นนั้นแล้ว`,
        `มีความเห็นอันใด`,
        `ความเห็นอันนั้นย่อมเป็นสัมมาทิฏฐิ`,
        `มีความดำริอันใดความดำริอันนั้นย่อมเป็นสัมมาสังกัปปะ`,
        `มีความพยายามอันใดความพยายามอันนั้นย่อมเป็นสัมมาวายามะ`,
        `มีความระลึกอันใด ความระลึกอันนั้นย่อมเป็นสัมมาสติ`,
        `มีความตั้งใจอันใด ความตั้งใจอันนั้นย่อมเป็นสัมมาสมาธิ`,
        `ส่วนกายกรรม วจีกรรม อาชีวะของเขา`,
        `ย่อมบริสุทธิ์ดีในเบื้องต้นเที่ยงด้วยอาการอย่างนี้`,
        `เขาชื่อว่าอัฏฐังคิกมรรคอันประเสริฐถึงความเจริญบริบูรณ์`,
        
        `เมื่อบุคคลนั้นเจริญอัฏฐังคิกมรรคนี้อยู่อย่างนี้`,
        `ชื่อว่ามีสติปัฏฐาน 4 สัมมัปปธาน 4 อิทธิบาท 4 อินทรีย์ 5 พละ 5 โพชฌงค์ 7`,
        `ถึงความเจริญบริบูรณ์`,
        `บุคคลนั้นเมื่อมีธรรมทั้ง 2 ดังนี้`,
        `คือสมถะและวิปัสสนาคู่เคียงกันเป็นไป`,
        `เขาชื่อว่ากำหนดรู้ธรรมที่ควรกำหนดรู้ด้วยปัญญาอันยิ่ง`,
        `ละธรรมที่ควรละด้วยปัญญาอันยิ่ง`,
        `เจริญธรรมที่ควรเจริญด้วยปัญญาอันยิ่ง`,
        `ทำให้แจ้งธรรมที่ควรทำให้แจ้งด้วยปัญญาอันยิ่ง`,
        
        `กามคุณ 5`,
        `กามคุณนี้มี 5 อย่างแล`,
        `5 อย่างเป็นไฉน`,
        `รูปที่เห็นด้วยจักษุ อันน่าปรารถนา น่าใคร่ น่าพอใจ`,
        `เป็นที่รักประกอบด้วยกามเป็นที่ตั้งแห่งความกำหนัด`,
        `เสียงที่รู้ได้ด้วยโสต อันน่าปรารถนา น่าใคร่ น่าพอใจ`,
        `เป็นที่รักประกอบด้วยกามเป็นที่ตั้งแห่งความกำหนัด`,
        `กลิ่นที่รู้ได้ด้วยฆานะ อันน่าปรารถนา น่าใคร่ น่าพอใจ`,
        `เป็นที่รักประกอบด้วยกามเป็นที่ตั้งแห่งความกำหนัด`,
        `รสที่รู้ได้ด้วยชิวหา อันน่าปรารถนา น่าใคร่ น่าพอใจ`,
        `เป็นที่รักประกอบด้วยกามเป็นที่ตั้งแห่งความกำหนัด`,
        `โผฏฐัพพะที่รู้ด้วยกาย อันน่าปรารถนา น่าใคร่ น่าพอใจ`,
        `เป็นที่รักประกอบด้วยกามเป็นที่ตั้งแห่งความกำหนัด นี้แลกามคุณ 5 อย่าง`,
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
              <h1><div className="text">กำหนดรู้ธรรมที่เนื่องด้วยอายตนะ 6</div></h1>
              
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
            
            <a href="/lesson0210" >
              <i className="fa-solid fa-angle-right fa-5x"></i>
            </a>
          </div>
      </section>
      </div>
    </>
  )
}

export default Lesson0209