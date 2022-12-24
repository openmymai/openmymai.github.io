import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import { SEO } from '../components/seo'
import Typed from 'typed.js'
import bgvdo from '../videos/mountain.mp4'
import '../scss/main.scss'


// markup
const Lesson0203 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        `ตาเห็นรูป รูปไม่เที่ยงเกิดดับ`,
        `จักขุ`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `รูป`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `จักขุวิญญาณ`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `จักขุสัมผัส`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `ทุกข์สุข ไม่ทุกข์ไม่สุข`,
        `ที่เกิดจากจักขุสัมผัส`,
        `เป็นปัจจัยก็ว่างเปล่า`,
        `จากตนหรือจากของๆตน`,
        `เพราะทั้งหมดเป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดจากเหตุปัจจัย`,
        `มาประชุมปรุงแต่งกันชั่วคราว`,
        `แล้วแตกสลาย`,
        `ไม่มีตัวตนเป็นของตนเอง`,
        `ดังนั้นโลกนี้จึงว่างเปล่า`,
        `จากตนหรือจากของๆตน`,
        `ไม่มีวัตถุ สิ่งของ สัตว์ บุคคล`,
        `ที่จะไปยึดมั่นถือมั่น`,
        `ว่านั่นเป็นของเรา`,
        `เป็นเรา`,
        `เป็นตัวตนของเรา`,
        `ไม่เที่ยงเกิดดับ ดับไม่เหลือ`,
        
        `หูได้ยินเสียง เสียงไม่เที่ยงเกิดดับ`,
        `โสตะ`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `เสียง`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `โสตะวิญญาณ`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `โสตะสัมผัส`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `ทุกข์สุข ไม่ทุกข์ไม่สุข`,
        `ที่เกิดจากโสตะสัมผัส`,
        `เป็นปัจจัยก็ว่างเปล่า`,
        `จากตนหรือจากของๆตน`,
        `เพราะทั้งหมดเป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดจากเหตุปัจจัย`,
        `มาประชุมปรุงแต่งกันชั่วคราว`,
        `แล้วแตกสลาย`,
        `ไม่มีตัวตนเป็นของตนเอง`,
        `ดังนั้นโลกนี้จึงว่างเปล่า`,
        `จากตนหรือจากของๆตน`,
        `ไม่มีวัตถุ สิ่งของ สัตว์ บุคคล`,
        `ที่จะไปยึดมั่นถือมั่น`,
        `ว่านั่นเป็นของเรา`,
        `เป็นเรา`,
        `เป็นตัวตนของเรา`,
        `ไม่เที่ยงเกิดดับ ดับไม่เหลือ`,
        
        `จมูกได้กลิ่น กลิ่นไม่เที่ยงเกิดดับ`,
        `ฆานะ`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `กลิ่น`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `ฆานะวิญญาณ`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `ฆานะสัมผัส`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `ทุกข์สุข ไม่ทุกข์ไม่สุข`,
        `ที่เกิดจากฆานะสัมผัส`,
        `เป็นปัจจัยก็ว่างเปล่า`,
        `จากตนหรือจากของๆตน`,
        `เพราะทั้งหมดเป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดจากเหตุปัจจัย`,
        `มาประชุมปรุงแต่งกันชั่วคราว`,
        `แล้วแตกสลาย`,
        `ไม่มีตัวตนเป็นของตนเอง`,
        `ดังนั้นโลกนี้จึงว่างเปล่า`,
        `จากตนหรือจากของๆตน`,
        `ไม่มีวัตถุ สิ่งของ สัตว์ บุคคล`,
        `ที่จะไปยึดมั่นถือมั่น`,
        `ว่านั่นเป็นของเรา`,
        `เป็นเรา`,
        `เป็นตัวตนของเรา`,
        `ไม่เที่ยงเกิดดับ ดับไม่เหลือ`,
        
        `ลิ้นได้รส รสไม่เที่ยงเกิดดับ`,
        `ชิวหา`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `รส`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `ชิวหาวิญญาณ`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `ชิวหาสัมผัส`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `ทุกข์สุข ไม่ทุกข์ไม่สุข`,
        `ที่เกิดจากชิวหาสัมผัส`,
        `เป็นปัจจัยก็ว่างเปล่า`,
        `จากตนหรือจากของๆตน`,
        `เพราะทั้งหมดเป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดจากเหตุปัจจัย`,
        `มาประชุมปรุงแต่งกันชั่วคราว`,
        `แล้วแตกสลาย`,
        `ไม่มีตัวตนเป็นของตนเอง`,
        `ดังนั้นโลกนี้จึงว่างเปล่า`,
        `จากตนหรือจากของๆตน`,
        `ไม่มีวัตถุ สิ่งของ สัตว์ บุคคล`,
        `ที่จะไปยึดมั่นถือมั่น`,
        `ว่านั่นเป็นของเรา`,
        `เป็นเรา`,
        `เป็นตัวตนของเรา`,
        `ไม่เที่ยงเกิดดับ ดับไม่เหลือ`,
        
        `กายสัมผัส สัมผัสไม่เที่ยงเกิดดับ`,
        `กาย`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `สัมผัส`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `กายวิญญาณ`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `กายสัมผัส`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `ทุกข์สุข ไม่ทุกข์ไม่สุข`,
        `ที่เกิดจากกายสัมผัส`,
        `เป็นปัจจัยก็ว่างเปล่า`,
        `จากตนหรือจากของๆตน`,
        `เพราะทั้งหมดเป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดจากเหตุปัจจัย`,
        `มาประชุมปรุงแต่งกันชั่วคราว`,
        `แล้วแตกสลาย`,
        `ไม่มีตัวตนเป็นของตนเอง`,
        `ดังนั้นโลกนี้จึงว่างเปล่า`,
        `จากตนหรือจากของๆตน`,
        `ไม่มีวัตถุ สิ่งของ สัตว์ บุคคล`,
        `ที่จะไปยึดมั่นถือมั่น`,
        `ว่านั่นเป็นของเรา`,
        `เป็นเรา`,
        `เป็นตัวตนของเรา`,
        `ไม่เที่ยงเกิดดับ ดับไม่เหลือ`,
        
        `ใจคิดนึก ความคิดไม่เที่ยงเกิดดับ`,
        `มโน`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `ธรรมารมณ์`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `มโนวิญญาณ`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `มโนสัมผัส`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        `ทุกข์สุข ไม่ทุกข์ไม่สุข`,
        `ที่เกิดจากมโนสัมผัส`,
        `เป็นปัจจัยก็ว่างเปล่า`,
        `จากตนหรือจากของๆตน`,
        `เพราะทั้งหมดเป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดจากเหตุปัจจัย`,
        `มาประชุมปรุงแต่งกันชั่วคราว`,
        `แล้วแตกสลาย`,
        `ไม่มีตัวตนเป็นของตนเอง`,
        `ดังนั้นโลกนี้จึงว่างเปล่า`,
        `จากตนหรือจากของๆตน`,
        `ไม่มีวัตถุ สิ่งของ สัตว์ บุคคล`,
        `ที่จะไปยึดมั่นถือมั่น`,
        `ว่านั่นเป็นของเรา`,
        `เป็นเรา`,
        `เป็นตัวตนของเรา`,
        `ไม่เที่ยงเกิดดับ ดับไม่เหลือ`,
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
              <h1><div className="text">กำหนดรู้โลกและชีวิตกระทบสัมผัสว่างจากตนหรือของของตน</div></h1>
              
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
            
            <a className="space" href="/lesson0204" >
              <i className="fa-solid fa-angle-right fa-5x"></i>
            </a>
          </div>
      </section>
      </div>
    </>
  )
}

export default Lesson0203

export const Head = () => (
  <SEO title="Lesson0203" />
)