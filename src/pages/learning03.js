import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import bgvdo from '../videos/sea.mp4'
import '../scss/main.scss'

const DayLearning03 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        
        `ไม่เที่ยงเกิดดับ ตาฉันเห็นรูปคือตัวฉันเห็นรูป ทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า`,
        `อดีต อนาคต และปัจจุบัน ภายในหรือภายนอก หยาบหรือละเอียด เลวหรือประณีต`,
        `ไกลหรือใกล้ ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดขึ้น ตั้งอยู่ ดับไป ไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ หูฉันได้ยินเสียงคือตัวฉันได้ยินเสียง ทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า`,
        `อดีต อนาคต และปัจจุบัน ภายในหรือภายนอก หยาบหรือละเอียด เลวหรือประณีต`,
        `ไกลหรือใกล้ ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดขึ้น ตั้งอยู่ ดับไป ไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ จมูกฉันได้กลิ่นคือตัวฉันได้กลิ่น ทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า`,
        `อดีต อนาคต และปัจจุบัน ภายในหรือภายนอก หยาบหรือละเอียด เลวหรือประณีต`,
        `ไกลหรือใกล้ ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดขึ้น ตั้งอยู่ ดับไป ไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ ลิ้นฉันได้รสคือตัวฉันได้รส ทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า`,
        `อดีต อนาคต และปัจจุบัน ภายในหรือภายนอก หยาบหรือละเอียด เลวหรือประณีต`,
        `ไกลหรือใกล้ ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดขึ้น ตั้งอยู่ ดับไป ไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ กายฉันสัมผัสคือตัวฉันสัมผัส ทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า`,
        `อดีต อนาคต และปัจจุบัน ภายในหรือภายนอก หยาบหรือละเอียด เลวหรือประณีต`,
        `ไกลหรือใกล้ ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดขึ้น ตั้งอยู่ ดับไป ไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ ใจฉันคิดนึกคือตัวฉันคิดนึก ทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า`,
        `อดีต อนาคต และปัจจุบัน ภายในหรือภายนอก หยาบหรือละเอียด เลวหรือประณีต`,
        `ไกลหรือใกล้ ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดขึ้น ตั้งอยู่ ดับไป ไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ มโนกรรมฉันคิดคือตัวฉันคิด ทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า`,
        `อดีต อนาคต และปัจจุบัน ภายในหรือภายนอก หยาบหรือละเอียด เลวหรือประณีต`,
        `ไกลหรือใกล้ ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดขึ้น ตั้งอยู่ ดับไป ไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ วจีกรรมฉันพูดคือตัวฉันพูด ทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า`,
        `อดีต อนาคต และปัจจุบัน ภายในหรือภายนอก หยาบหรือละเอียด เลวหรือประณีต`,
        `ไกลหรือใกล้ ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดขึ้น ตั้งอยู่ ดับไป ไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ กายกรรมฉันทำคือตัวฉันทำ ทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า`,
        `อดีต อนาคต และปัจจุบัน ภายในหรือภายนอก หยาบหรือละเอียด เลวหรือประณีต`,
        `ไกลหรือใกล้ ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดขึ้น ตั้งอยู่ ดับไป ไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ มือฉันจับไม้กวาดคือตัวฉันจับไม้กวาด ทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า`,
        `อดีต อนาคต และปัจจุบัน ภายในหรือภายนอก หยาบหรือละเอียด เลวหรือประณีต`,
        `ไกลหรือใกล้ ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดขึ้น ตั้งอยู่ ดับไป ไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ มือฉันกวาดคือตัวฉันกวาด ทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า`,
        `อดีต อนาคต และปัจจุบัน ภายในหรือภายนอก หยาบหรือละเอียด เลวหรือประณีต`,
        `ไกลหรือใกล้ ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดขึ้น ตั้งอยู่ ดับไป ไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ มือฉันเคลื่นไหวคือตัวฉันเคลื่อนไหว ทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า`,
        `อดีต อนาคต และปัจจุบัน ภายในหรือภายนอก หยาบหรือละเอียด เลวหรือประณีต`,
        `ไกลหรือใกล้ ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดขึ้น ตั้งอยู่ ดับไป ไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,

        `ไม่เที่ยงเกิดดับ เท้าฉันเดินคือตัวฉันเดิน ทั้งหมดคือโลกและชีวิตผลต่อเนื่องไม่ว่า`,
        `อดีต อนาคต และปัจจุบัน ภายในหรือภายนอก หยาบหรือละเอียด เลวหรือประณีต`,
        `ไกลหรือใกล้ ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง เกิดขึ้น ตั้งอยู่ ดับไป ไม่เที่ยงเกิดดับ`,
        `มโนกรรมไม่เที่ยงเกิดดับ วจีกรรมไม่เที่ยงเกิดดับ กายกรรมไม่เที่ยงเกิดดับ`,
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
            <h1>
              <div className="text">
                <span style={{ whiteSpace: 'pre' }} ref={el} />
              </div>
            </h1>
            <div className="next">
              <a className="space" href="javascript:history.go(-1)" >
                <i className="fa-solid fa-angle-left fa-5x"></i>
              </a>
              
              <a href="/learning04" >
                <i className="fa-solid fa-angle-right fa-5x"></i>
              </a>
            </div>
        </section>
      </div>
    </>
  )
}

export default DayLearning03
