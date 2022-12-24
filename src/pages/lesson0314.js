import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import { SEO } from '../components/seo'
import Typed from 'typed.js'
import bgvdo from '../videos/mountain.mp4'
import '../scss/main.scss'


// markup
const Lesson0314 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        `ว่าด้วยการกระทำที่สุดทุกข์`,
        `พระพุทธเจ้าตรัสกะท่านพระราหุลว่า`,

        `ปฐวีธาตุที่เป็นภายในก็ดี`,
        `เป็นภายนอกก็ดี`,
        `ปฐวีธาตุนั้นก็เป็น`,
        `แต่สักว่าปฐวีธาตุเท่านั้น`,
        `พึงเห็นปฐวีธาตุนั้นด้วยปัญญาอันชอบ`,
        `ตามความเป็นจริงอย่างนี้ว่า`,
        `นั่นไม่ใช่ของเรา`,
        `นั่นไม่เป็นเรา`,
        `นั่นไม่ใช่ตัวตนของเรา`,
        `เพราะเห็นด้วยปัญญา`,
        `อันชอบตามความเป็นจริงอย่างนั้น`,
        `จิตย่อมเบื่อหน่ายในปฐวีธาตุ`,
        `ย่อมคลายกำหนัดในปฐวีธาตุ`,

        `อาโปธาตุที่เป็นภายในก็ดี`,
        `เป็นภายนอกก็ดี`,
        `อาโปธาตุนั้นก็เป็น`,
        `แต่สักว่าอาโปธาตุเท่านั้น`,
        `พึงเห็นอาโปธาตุนั้นด้วยปัญญาอันชอบ`,
        `ตามความเป็นจริงอย่างนี้ว่า`,
        `นั่นไม่ใช่ของเรา`,
        `นั่นไม่เป็นเรา`,
        `นั่นไม่ใช่ตัวตนของเรา`,
        `เพราะเห็นด้วยปัญญา`,
        `อันชอบตามความเป็นจริงอย่างนั้น`,
        `จิตย่อมเบื่อหน่ายในอาโปธาตุ`,
        `ย่อมคลายกำหนัดในอาโปธาตุ`,

        `เตโชธาตุที่เป็นภายในก็ดี`,
        `เป็นภายนอกก็ดี`,
        `เตโชธาตุนั้นก็เป็น`,
        `แต่สักว่าเตโชธาตุเท่านั้น`,
        `พึงเห็นเตโชธาตุนั้นด้วยปัญญาอันชอบ`,
        `ตามความเป็นจริงอย่างนี้ว่า`,
        `นั่นไม่ใช่ของเรา`,
        `นั่นไม่เป็นเรา`,
        `นั่นไม่ใช่ตัวตนของเรา`,
        `เพราะเห็นด้วยปัญญา`,
        `อันชอบตามความเป็นจริงอย่างนั้น`,
        `จิตย่อมเบื่อหน่ายในเตโชธาตุ`,
        `ย่อมคลายกำหนัดในเตโชธาตุ`,

        `วาโยธาตุที่เป็นภายในก็ดี`,
        `เป็นภายนอกก็ดี`,
        `วาโยธาตุนั้นก็เป็น`,
        `แต่สักว่าวาโยธาตุเท่านั้น`,
        `พึงเห็นวาโยธาตุนั้นด้วยปัญญาอันชอบ`,
        `ตามความเป็นจริงอย่างนี้ว่า`,
        `นั่นไม่ใช่ของเรา`,
        `นั่นไม่เป็นเรา`,
        `นั่นไม่ใช่ตัวตนของเรา`,
        `เพราะเห็นด้วยปัญญา`,
        `อันชอบตามความเป็นจริงอย่างนั้น`,
        `จิตย่อมเบื่อหน่ายในวาโยธาตุ`,
        `ย่อมคลายกำหนัดในวาโยธาตุ`,
        `เพราะเหตุที่พิจารณาเห็นว่า`,
        `ไม่ใช่ตัวตนไม่เนื่องในตนในธาตุ 4 นี้`,
        `พระพุทธเจ้ากล่าวว่าตัดตัณหาได้แล้ว`,
        `รื้อถอนสังโยชน์เสียได้`,
        `การกระทำที่สุดแห่งทุกข์ได้แล้ว`,
        `เพราะละมานะได้โดยชอบ`,
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
              <h1><div className="text">ว่าด้วยการกระทำที่สุดทุกข์</div></h1>
              
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
            
            <a className="space" href="/lesson0315" >
              <i className="fa-solid fa-angle-right fa-5x"></i>
            </a>
          </div>
      </section>
      </div>
    </>
  )
}

export default Lesson0314

export const Head = () => (
  <SEO title="Lesson0314" />
)