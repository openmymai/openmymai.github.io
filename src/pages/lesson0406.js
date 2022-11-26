import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import { SEO } from '../components/seo'
import Typed from 'typed.js'
import bgvdo from '../videos/mountain03.mp4'
import '../scss/main.scss'


// markup
const Lesson0406 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        `อาฬวกสูตรที่ 12`,
        `อาฬวกยักษ์ถามปัญหาพระพุทธเจ้า`,
        `อาฬวกยักษ์ทูลถามว่า`,
        `อะไรหนอเป็นเครื่องปลื้มใจ`,
        `อันประเสริฐของคนในโลกนี้`,
        `อะไรหนอบุคคลประพฤติดี`,
        `นำความสุขมาให้`,
        `อะไรหนอเป็นรสอันล้ำเลิศ`,
        `กว่ารสทั้งหลาย`,
        `นักปราชญ์ทั้งหลายกล่าวชีวิต`,
        `ของผู้ที่เป็นอยู่อย่างไรว่าประเสริฐสุดฯ`,

        `พระผู้มีพระภาคตรัสตอบว่า`,
        `ศรัทธาเป็นทรัพย์`,
        `อันประเสริฐของคนในโลกนี้`,
        `ธรรมอันบุคคลประพฤติดีแล้ว`,
        `นำสุขมาให้`,
        `ความสัตย์แล`,
        `เป็นรสอันล้ำเลิศกว่ารสทั้งหลาย`,
        `นักปราชญ์ทั้งหลาย`,
        `กล่าวชีวิตของผู้ที่เป็นอยู่`,
        `ด้วยปัญญาว่าประเสริฐสุดฯ`,

        `อาฬวกยักษ์ทูลถามต่อไปว่า`,
        `คนข้ามโอฆะได้อย่างไรหนอ`,
        `ข้ามอรรณพได้อย่างไร`,
        `ล่วงทุกข์ได้อย่างไร`,
        `บริสุทธิ์ได้อย่างไร`,

        `พระผู้มีพระภาคตรัสตอบว่า`,
        `คนข้ามโอฆะได้ด้วยศรัทธา`,
        `ข้ามอรรณพได้ด้วยความไม่ประมาท`,
        `ล่วงทุกข์ได้ด้วยความเพียร`,
        `บริสุทธิ์ได้ด้วยปัญญา`,

        `อาฬวกยักษ์ทูลถามต่อไปว่า`,
        `คนได้ปัญญาอย่างไรหนอ`,
        `ทำอย่างไรจึงจะหาทรัพย์ได้`,
        `คนได้ชื่อเสียงอย่างไรหนอ`,
        `ทำอย่างไรจึงจะผูกมิตรไว้ได้`,
        `คนละโลกนี้ไปสู่โลกหน้า`,
        `ทำอย่างไรจึงไม่เศร้าโศกฯ`,

        `พระผู้มีพระภาคตรัสตอบว่า`,
        `บุคคลเชื่อธรรมของพระอรหันต์`,
        `เพื่อบรรลุนิพพาน`,
        `ฟังอยู่ด้วยดีย่อมได้ปัญญา`,
        `เป็นผู้ไม่ประมาทมีวิจารณ์`,
        `คนทำเหมาะเจาะไม่ทอดธุระ`,
        `เป็นผู้หมั่นย่อมหาทรัพย์ได้`,
        `คนย่อมได้ชื่อเสียง`,
        `เพราะความสัตย์`,
        `ผู้ให้ย่อมผูกมิตรไว้ได้`,
        `บุคคลใดผู้อยู่ครองเรือน`,
        `ประกอบด้วยศรัทธา`,
        `มีธรรม 4 ประการนี้`,
        `คือสัจจะ ธรรม ฐิติ จาคะ `,
        `บุคคลนั้นแลละโลกนี้ไป`,
        `ย่อมไม่เศร้าโศก`,
        `เชิญถามสมณพราหมณ์เป็นอันมาก`,
        `เหล่าอื่นว่า`,
        `โลกนี้มีอะไรยิ่งกว่า`,
        `สัจจะ ธรรม จาคะ และขันติ`,

        `อาฬวกยักษ์ทูลถามว่า`,
        `ทำไมหนอข้าพเจ้าจึงต้องถาม`,
        `สมณพราหมณ์เป็นอันมาก`,
        `ในบัดนี้วันนี้ข้าพเจ้ารู้ชัดถึง`,
        `สัมปรายิกประโยชน์`,
        `พระพุทธเจ้าเสด็จมาถึงเมืองอาฬวี`,
        `วันนี้ข้าพเจ้ารู้ชัด`,
        `ถึงการที่บุคคลให้ในที่ใดมีผลมาก`,
        `ข้าพเจ้าจักเที่ยว`,
        `จากบ้านไปสู่บ้าน`,
        `จากบุรีไปสู่บุรี`,
        `พลางนมัสการสัมมาสัมพุทธเจ้า`,
        `และพระธรรมซึ่งเป็นธรรมที่ดีฯ`,
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
              <h1><div className="text">อาฬวกสูตรที่ 12</div></h1>
              
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
            
            <a className="space" href="/lesson0407" >
              <i className="fa-solid fa-angle-right fa-5x"></i>
            </a>
          </div>
      </section>
      </div>
    </>
  )
}

export default Lesson0406

export const Head = () => (
  <SEO title="Lesson0406" />
)