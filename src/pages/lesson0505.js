import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import { SEO } from '../components/seo'
import Typed from 'typed.js'
import bgvdo from '../videos/mountain04.mp4'
import '../scss/main.scss'


// markup
const Lesson0505 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        `อานาปานสติภาวนา`,
        `ดูกรราหุล`,
        `เธอจงเจริญอานาปานสติภาวนาเถิด`,
        `เพราะอานาปานสติ`,
        `ที่บุคคลเจริญแล้วทำให้มากแล้ว`,
        `ย่อมมีผลมีอานิสงส์ใหญ่`,
        `ก็อานาปานสติอันบุคคลเจริญอย่างไร`,
        `ทำให้มากอย่างไร`,
        `จึงมีผลใหญ่มีอานิสงส์ใหญ่`,
        `ดูกรราหุล`,
        `ภิกษุในธรรมวินัยนี้`,
        `อยู่ในป่าก็ดี อยู่ที่โคนไม้ก็ดี`,
        `อยู่ในเรือนว่างก็ดี`,
        `นั่งคู้บัลลังก์ตั้งกายตรง`,
        `ดำรงสติไว้เฉพาะหน้า`,
        `เธอมีสติหายใจออก`,
        `มีสติหายใจเข้า`,
        `เมื่อหายใจออกยาว`,
        `ก็รู้ชัดว่าหายใจออกยาว`,
        `เมื่อหายใจเข้ายาว`,
        `ก็รู้ชัดว่าหายใจเข้ายาว`,
        `เมื่อหายใจออกสั้น`,
        `ก็รู้ชัดว่าหายใจออกสั้น`,
        `เมื่อหายใจเข้าสั้น`,
        `ก็รู้ชัดว่าหายใจเข้าสั้น`,
        `ย่อมสำเหนียกว่า`,
        `จักกำหนดรู้กองลมทั้งปวงหายใจออก`,
        `ย่อมสำเหนียกว่า`,
        `จักกำหนดรู้กองลมทั้งปวงหายใจเข้า`,
        `ย่อมสำเหนียกว่า`,
        `จักระงับกายสังขารหายใจออก`,
        `ย่อมสำเหนียกว่า`,
        `จักระงับกายสังขารหายใจเข้า`,
        `ย่อมสำเหนียกว่า`,
        `จักกำหนดรู้ปิติหายใจออก`,
        `ย่อมสำเหนียกว่า`,
        `จักกำหนดรู้ปิติหายใจเข้า`,
        `ย่อมสำเหนียกว่า`,
        `จักกำหนดรู้สึกหายใจออก`,
        `ย่อมสำเหนียกว่า`,
        `จักกำหนดรู้สึกหายใจเข้า`,
        `ย่อมสำเหนียกว่า`,
        `จักกำหนดรู้จิตสังขารหายใจออก`,
        `ย่อมสำเหนียกว่า`,
        `จักกำหนดรู้จิตสังขารหายใจเข้า`,
        `ย่อมสำเหนียกว่า`,
        `จักระงับจิตสังขารหายใจออก`,
        `ย่อมสำเหนียกว่า`,
        `จักระงับจิตสังขารหายใจเข้า`,
        `ย่อมสำเหนียกว่า`,
        `จักกำหนดรู้จิตหายใจออก`,
        `ย่อมสำเหนียกว่า`,
        `จักกำหนดรู้จิตหายใจเข้า`,
        `ย่อมสำเหนียกว่า`,
        `จักทำจิตให้ร่าเริงหายใจออก`,
        `ย่อมสำเหนียกว่า`,
        `จักทำจิตให้ร่าเริงหายใจเข้า`,
        `ย่อมสำเหนียกว่า`,
        `จักดำรงจิตมั่นหายใจออก`,
        `ย่อมสำเหนียกว่า`,
        `จักดำรงจิตมั่นหายใจเข้า`,
        `ย่อมสำเหนียกว่า`,
        `จักเปลื้องจิตหายใจออก`,
        `ย่อมสำเหนียกว่า`,
        `จักเปลื้องจิตหายใจเข้า`,
        `ย่อมสำเหนียกว่าจักพิจารณา`,
        `โดยความเป็นของไม่เที่ยงหายใจออก`,
        `ย่อมสำเหนียกว่าจักพิจารณา`,
        `โดยความเป็นของไม่เที่ยงหายใจเข้า`,
        `ย่อมสำเหนียกว่าจักพิจารณา`,
        `ธรรมอันปราศจากราคะหายใจออก`,
        `ย่อมสำเหนียกว่าจักพิจารณา`,
        `ธรรมอันปราศจากราคะหายใจเข้า`,
        `ย่อมสำเหนียกว่าจักพิจารณา`,
        `ธรรมเป็นที่ดับสนิทหายใจออก `,
        `ย่อมสำเหนียกว่าจักพิจารณา`,
        `ธรรมเป็นที่ดับสนิทหายใจเข้า`,
        `ย่อมสำเหนียกว่าจักพิจารณา`,
        `ธรรมเป็นที่สละคืนหายใจออก`,
        `ย่อมสำเหนียกว่าจักพิจารณา`,
        `ธรรมเป็นที่สละคืนหายใจเข้า`,

        `ดูกรราหุล`,
        `อานาปานสติที่บุคคลเจริญแล้วอย่างนี้`,
        `ทำให้มากแล้วอย่างนี้`,
        `ย่อมมีผลใหญ่มีอานิสงส์ใหญ่`,
        `ดูกรราหุล`,
        `เมื่ออานาปานสติอันบุคคลเจริญแล้วอย่างนี้`,
        `ทำให้มากแล้วอย่างนี้`,
        `ลมอัสสาสะปัสสาสะอันมีในภายหลัง`,
        `อันบุคคลผู้เจริญอานาปานสติ`,
        `ทราบชัดแล้วย่อมดับไป`,
        `หาเป็นอันบุคคลผู้เจริญอานาปานสติ`,
        `ไม่ทราบชัดแล้วดับไปไม่ได้ดังนี้`,
        `พระผู้มีพระภาคได้ตรัสพระพุทธพจน์นี้แล้ว`,
        `ท่านพระราหุลมีใจยินดี`,
        `ชื่นชมพระภาษิตของพระผู้มีพระภาคดังนี้แล`,
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
              <h1><div className="text">ภิกขุวรรค จูฬราหุโลวาทสูตร</div></h1>
              
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
            
            <a className="space" href="/lesson0506" >
              <i className="fa-solid fa-angle-right fa-5x"></i>
            </a>
          </div>
      </section>
      </div>
    </>
  )
}

export default Lesson0505

export const Head = () => (
  <SEO title="Lesson0505" />
)