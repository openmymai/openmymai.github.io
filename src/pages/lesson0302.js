import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import { SEO } from '../components/seo'
import Typed from 'typed.js'
import bgvdo from '../videos/mountain02.mp4'
import '../scss/main.scss'


// markup
const Lesson0302 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        `พระพุทธเจ้าตรัสไว้ว่า`,
        `จักษุเป็นทุกข์`,
        `สิ่งใดเป็นทุกข์สิ่งนั้นเป็นอนัตตา`,
        `สิ่งใดเป็นอนัตตา`,
        `สิ่งนั้นท่านทั้งหลาย`,
        `พึงเห็นด้วยปัญญา`,
        `อันชอบตามความเป็นจริง`,
        `อย่างนี้ว่า`,
        `ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดจากเหตุปัจจัย`,
        `มาประชุมปรุงแต่งกันชั่วคราว`,
        `แล้วแตกสลาย`,
        `ไม่มีตัวตนเป็นของตนเอง`,
        `ไม่ควรเห็นว่าสิ่งนั้น`,
        `เป็นของเรา`,
        `เป็นเรา`,
        `เป็นตัวตนของเรา`,
        `ไม่เที่ยงเกิดดับ ดับไม่เหลือ`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        
        `หูเป็นทุกข์`,
        `สิ่งใดเป็นทุกข์สิ่งนั้นเป็นอนัตตา`,
        `สิ่งใดเป็นอนัตตา`,
        `สิ่งนั้นท่านทั้งหลาย`,
        `พึงเห็นด้วยปัญญา`,
        `อันชอบตามความเป็นจริง`,
        `อย่างนี้ว่า`,
        `ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดจากเหตุปัจจัย`,
        `มาประชุมปรุงแต่งกันชั่วคราว`,
        `แล้วแตกสลาย`,
        `ไม่มีตัวตนเป็นของตนเอง`,
        `ไม่ควรเห็นว่าสิ่งนั้น`,
        `เป็นของเรา`,
        `เป็นเรา`,
        `เป็นตัวตนของเรา`,
        `ไม่เที่ยงเกิดดับ ดับไม่เหลือ`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        
        `จมูกเป็นทุกข์`,
        `สิ่งใดเป็นทุกข์สิ่งนั้นเป็นอนัตตา`,
        `สิ่งใดเป็นอนัตตา`,
        `สิ่งนั้นท่านทั้งหลาย`,
        `พึงเห็นด้วยปัญญา`,
        `อันชอบตามความเป็นจริง`,
        `อย่างนี้ว่า`,
        `ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดจากเหตุปัจจัย`,
        `มาประชุมปรุงแต่งกันชั่วคราว`,
        `แล้วแตกสลาย`,
        `ไม่มีตัวตนเป็นของตนเอง`,
        `ไม่ควรเห็นว่าสิ่งนั้น`,
        `เป็นของเรา`,
        `เป็นเรา`,
        `เป็นตัวตนของเรา`,
        `ไม่เที่ยงเกิดดับ ดับไม่เหลือ`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        
        `ลิ้นเป็นทุกข์`,
        `สิ่งใดเป็นทุกข์สิ่งนั้นเป็นอนัตตา`,
        `สิ่งใดเป็นอนัตตา`,
        `สิ่งนั้นท่านทั้งหลาย`,
        `พึงเห็นด้วยปัญญา`,
        `อันชอบตามความเป็นจริง`,
        `อย่างนี้ว่า`,
        `ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดจากเหตุปัจจัย`,
        `มาประชุมปรุงแต่งกันชั่วคราว`,
        `แล้วแตกสลาย`,
        `ไม่มีตัวตนเป็นของตนเอง`,
        `ไม่ควรเห็นว่าสิ่งนั้น`,
        `เป็นของเรา`,
        `เป็นเรา`,
        `เป็นตัวตนของเรา`,
        `ไม่เที่ยงเกิดดับ ดับไม่เหลือ`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        
        `กายเป็นทุกข์`,
        `สิ่งใดเป็นทุกข์สิ่งนั้นเป็นอนัตตา`,
        `สิ่งใดเป็นอนัตตา`,
        `สิ่งนั้นท่านทั้งหลาย`,
        `พึงเห็นด้วยปัญญา`,
        `อันชอบตามความเป็นจริง`,
        `อย่างนี้ว่า`,
        `ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดจากเหตุปัจจัย`,
        `มาประชุมปรุงแต่งกันชั่วคราว`,
        `แล้วแตกสลาย`,
        `ไม่มีตัวตนเป็นของตนเอง`,
        `ไม่ควรเห็นว่าสิ่งนั้น`,
        `เป็นของเรา`,
        `เป็นเรา`,
        `เป็นตัวตนของเรา`,
        `ไม่เที่ยงเกิดดับ ดับไม่เหลือ`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        
        `ใจเป็นทุกข์`,
        `สิ่งใดเป็นทุกข์สิ่งนั้นเป็นอนัตตา`,
        `สิ่งใดเป็นอนัตตา`,
        `สิ่งนั้นท่านทั้งหลาย`,
        `พึงเห็นด้วยปัญญา`,
        `อันชอบตามความเป็นจริง`,
        `อย่างนี้ว่า`,
        `ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดจากเหตุปัจจัย`,
        `มาประชุมปรุงแต่งกันชั่วคราว`,
        `แล้วแตกสลาย`,
        `ไม่มีตัวตนเป็นของตนเอง`,
        `ไม่ควรเห็นว่าสิ่งนั้น`,
        `เป็นของเรา`,
        `เป็นเรา`,
        `เป็นตัวตนของเรา`,
        `ไม่เที่ยงเกิดดับ ดับไม่เหลือ`,
        `ว่างเปล่าจากตนหรือจากของๆตน`,
        
        `อริยสาวก`,
        `ผู้ได้สดับแล้วเห็นอยู่อย่างนี้`,
        `ย่อมเบื่อหน่ายแม้ในจักษุ`,
        `ย่อมเบื่อหน่ายแม้ในหู`,
        `ย่อมเบื่อหน่ายแม้ในจมูก`,
        `ย่อมเบื่อหน่ายแม้ในลิ้น`,
        `ย่อมเบื่อหน่ายแม้ในกาย`,
        `ย่อมเบื่อหน่ายแม้ในใจ`,
        `เมื่อเบื่อหน่ายย่อมคลายกำหนัด`,
        `เพราะคลายกำหนัดย่อมหลุดพ้น`,
        `เมื่อหลุดพ้นแล้วย่อมมีญาณหยั่งรู้ว่าหลุดพ้นแล้ว`,
        `รู้ชัดว่าชาติสิ้นแล้ว`,
        `พรหมจรรย์อยู่จบแล้ว`,
        `กิจที่ควรทำ ทำเสร็จแล้ว`,
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
              <h1><div className="text">ว่าด้วยความเป็นทุกข์แห่งอายตนะภายใน</div></h1>
              
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
            
            <a className="space"  href="/lesson0303" >
              <i className="fa-solid fa-angle-right fa-5x"></i>
            </a>
          </div>
      </section>
      </div>
    </>
  )
}

export default Lesson0302

export const Head = () => (
  <SEO title="Lesson0302" />
)