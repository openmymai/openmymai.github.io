import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import { SEO } from '../components/seo'
import Typed from 'typed.js'
import bgvdo from '../videos/mountain.mp4'
import '../scss/main.scss'


// markup
const Lesson0409 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        `ยมกวรรคที่ 2`,
        `อวิชชาสูตร`,
        `ว่าด้วยอวิชชา`,
        `มีนิวรณ์ 5 เป็นอาหาร`,
        `ดูกรภิกษุทั้งหลาย`,
        `เงื่อนต้นแห่งอวิชชาย่อมไม่ปรากฏ`,
        `ในกาลก่อนแต่นี้อวิชชาไม่มี`,
        `แต่ภายหลังจึงมี`,
        `เพราะเหตุนั้นเราจึงกล่าวคำนี้`,
        `อย่างนี้ว่าก็เมื่อเป็นเช่นนั้น`,
        `อวิชชามีข้อนี้เป็นปัจจัยจึงปรากฏ`,
        `ดูกรภิกษุทั้งหลาย`,
        `เราย่อมกล่าว่าอวิชชาว่ามีอาหาร`,
        `มิได้กล่าวว่าไม่มีอาหาร`,
        `ก็อะไรเป็นอาหารของอวิชชา`,
        `ควรจะกล่าวว่านิวรณ์ 5`,
        `แม้นิวรณ์ 5 เราก็กล่าวว่ามีอาหาร`,
        `มิได้กล่าวว่าไม่มีอาหาร`,
        `ก็อะไรเป็นอาหารของนิวรณ์ 5`,
        `ควรกล่าวว่าทุจริต 3`,
        `แม้ทุจริต 3 เราก็กล่าวว่ามีอาหาร`,
        `มิได้กล่าวว่าไม่มีอาหาร`,
        `ก็อะไรเป็นอาหารของทุจริต 3`,
        `ควรกล่าวว่าการไม่สำรวมอินทรีย์`,
        `แม้การไม่สำรวมอินทรีย์`,
        `เราก็กล่าวว่ามีอาหาร`,
        `มิได้กล่าวว่าไม่มีอาหาร`,
        `ก็อะไรเป็นอาหารแห่งการไม่สำรวมอินทรีย์`,
        `ควรกล่าวว่าความไม่มีสติสัมปชัญญะ`,
        `แม้ความไม่มีสติสัมปชัญญะ`,
        `เราก็กล่าวว่ามีอาหาร`,
        `แม้ความไม่มีสติสัมปชัญญะ`,
        `เราก็กล่าวว่ามีอาหาร`,
        `มิได้กล่าวว่าไม่มีอาหาร`,
        `ก็อะไรเป็นอาหาร`,
        `ของความไม่มีสติสัมปชัญญะ`,
        `ควรกล่าวว่าการกระทำไว้ในใจ`,
        `โดยไม่แยบคาย`,
        `แม้การทำไว้ในใจโดยไม่แยบคาย`,
        `เราก็กะว่ามีอาหาร`,
        `มิได้กล่าวว่าไม่มีอาหาร`,
        `ก็อะไรเป็นอาหารของการทำไว้ในใจ`,
        `โดยไม่แยบคาย`,
        `ควรกล่าวว่าความไม่มีศรัทธา`,
        `แม้ความไม่มีศรัทธา`,
        `เราก็กล่าวว่ามีอาหาร`,
        `มิได้กล่าวว่าไม่มีอาหาร`,
        `ก็อะไรเป็นอาหารของความไม่มีศรัทธา`,
        `ควรกล่าวว่าการไม่ฟังสัทธรรม`,
        `แม้การไม่ฟังสัทธรรม`,
        `เราก็กล่าวว่ามีอาหาร`,
        `มิได้กล่าวว่าไม่มีอาหาร`,
        `ก็อะไรเป็นอาหารของการไม่ฟังสัทธรรม`,
        `ควรกล่าวว่าการไม่คบสัปบุรุษ`,
        `ดูกรภิกษุทั้งหลายด้วยประการดังนี้`,
        `การไม่คบสัปบุรุษที่บริบูรณ์`,
        `ย่อมยังการไม่ฟังสัทธรรมให้บริบูรณ์`,
        `การไม่ฟังสัทธรรมที่บริบูรณ์`,
        `ย่อมยังความไม่มีศรัทธาให้บริบูรณ์`,
        `ความไม่มีสถานที่บริบูรณ์`,
        `ย่อมยังการทำไว้ในใจ`,
        `โดยไม่แยบคายให้บริบูรณ์`,
        `การทำไว้ในใจ`,
        `โดยไม่แยบคายที่บริบูรณ์`,
        `ย่อมยังความไม่มี`,
        `สติสัมปชัญญะให้บริบูรณ์`,
        `ความไม่มีสติสัมปชัญญะที่บริบูรณ์`,
        `ย่อมยังการไม่สำรวมอินทรีย์ให้บริบูรณ์`,
        `การไม่สำรวมอินทรีย์ที่บริบูรณ์`,
        `ย่อมยังทุจริต 3 ให้บริบูรณ์`,
        `ทุจริต 3 ที่บริบูรณ์`,
        `ย่อมยังนิวรณ์ 5 ให้บริบูรณ์`,
        `นิวรณ์ 5 ที่บริบูรณ์ย่อมยังอวิชชาให้บริบูรณ์`,
        `อวิชชานี้มีอาหารอย่างนี้และบริบูรณ์อย่างนี้`,

        `ดูกรภิกษุทั้งหลาย`,
        `เปรียบเหมือนเมื่อฝนเม็ดหยาบ`,
        `ตกลงเบื้องบนภูเขา`,
        `เมื่อฝนตกหนักอยู่`,
        `น้ำนั้นไหลไปตามที่ลุ่ม`,
        `ย่อมยังซอกเขาลำธารและห้วยให้เต็ม`,
        `ซอกเขาลำธารและห้วยที่เต็ม`,
        `ย่อมยังหนองให้เต็ม`,
        `หนองที่เต็มย่อมยังบึงให้เต็ม`,
        `บึงที่เต็มย่อมยังแม่น้ำน้อยให้เต็ม`,
        `แม่น้ำน้อยที่เต็มย่อมยังแม่น้ำใหญ่ให้เต็ม`,
        `แม่น้ำใหญ่ที่เต็มย่อมยังมหาสมุทรสาครให้เต็ม`,
        `มหาสมุทรสาครนั้นมีอาหารอย่างนี้`,
        `และเต็มเปี่ยมอย่างนี้แม้ฉันใด`,
        `ดูกรภิกษุทั้งหลายการไม่คบสัปบุรุษที่บริบูรณ์`,
        `ย่อมยังการไม่ฟัสัทธรรมให้บริบูรณ์`,
        `นิวรณ์ 5 ที่บริบูรณ์ย่อมยังอวิขชาให้บริบูรณ์`,
        `อวิชชานี้มีอาหารอย่างนี้และบริบูรณ์อย่างนี้`,
        `ฉันนั้นเหมือนกันแล`,

        `ว่าด้วยวิชชาและวิมุตติ`,
        `มีโพชฌงค์ 7 เป็นอาหาร`,
        `ดูกรภิกษุทั้งหลาย`,
        `เรากล่าววิชาและวิมุตติว่ามีอาหาร`,
        `มิได้กล่าวว่าไม่มีอาหาร`,
        `ก็อะไรเป็นอาหารของวิชาและวิมุต`,
        `ควรกล่าวว่าโพชฌงค์ 7 `,
        `แม้โพชฌงค์ 7 เราก็กล่าวว่ามีอาหาร`,
        `มิได้กล่าวว่าไม่มีอาหาร`,
        `ก็อะไรเป็นอาหารของโพชฌงค์ 7 `,
        `ควรกล่าวว่าสติปัฏฐาน 4 `,
        `แม้สติปัฏฐาน 4 `,
        `เราก็กล่าวว่ามีอาหาร`,
        `มิได้กล่าวว่าไม่มีอาหาร`,
        `ก็อะไรเป็นอาหารของสติปัฏฐาน 4 `,
        `ควรกล่าวว่าสุจริต 3 `,
        `แม้สุจริต 3 เราก็กล่าวว่ามีอาหาร`,
        `มิได้กล่าวว่าไม่มีอาหาร`,
        `ก็อะไรเป็นอาหารของสุจริต 3 `,
        `ควรกล่าวว่าการสำรวมอินทรีย์`,
        `แม้การสำรวมอินทรีย์เราก็กล่าวว่ามีอาหาร`,
        `มิได้กล่าวว่าไม่มีอาหาร`,
        `อะไรเป็นอาหารของการสำรวมอินทรีย์`,
        `ควรกล่าวว่าสติสัมปชัญญะ`,
        `แม้สติสัมปชัญญะเราก็กล่าวว่ามีอาหาร`,
        `มิได้กล่าวว่าไม่มีอาหาร`,
        `อะไรเป็นอาหารของสติสัมปชัญญะ`,
        `ควรกล่าวว่าการทำไว้ในใจโดยแยบคาย`,
        `แม้การทำไว้ในใจโดยแยบคาย`,
        `เราก็กล่าวว่ามีอาหาร`,
        `มิได้กล่าวว่าไม่มีอาหาร`,
        `ก็อะไรเป็นอาหารของการกระทำ`,
        `ไว้ในใจโดยแยบคาย`,
        `ควรกล่าวว่าศรัทธา`,
        `แม้ศรัทธาเราก็กล่าวว่ามีอาหาร`,
        `มิได้กล่าวว่าไม่มีอาหาร`,
        `ก็อะไรเป็นอาหารของศรัทธา`,
        `ควรกล่าวว่าการฟังสัทธรรม`,
        `แม้การฟังสัทธรรมเราก็กล่าวว่ามีอาหาร`,
        `มิได้กล่าวว่าไม่มีอาหาร`,
        `ก็อะไรเป็นอาหารของการฟังสัทธรรม`,
        `ควรกล่าวว่าการคบสัปบุรุษ`,
        `ดูกรภิกษุทั้งหลายด้วยประการดังนี้`,
        `การคบสัปบุรุษที่บริบูรณ์`,
        `ย่อมยังการฟังการสัทธรรมให้บริบูรณ์`,
        `การฟังสัทธรรมที่บริบูรณ์`,
        `ย่อมยังศรัทธาให้บริบูรณ์`,
        `ศรัทธาที่บริบูรณ์`,
        `ย่อมยังการทำไว้ในใจ`,
        `โดยแยบคายให้บริบูรณ์`,
        `การทำไว้ในใจ`,
        `โดยแยบคายที่บริบูรณ์`,
        `ย่อมยังสติสัมปชัญญะ`,
        `ให้บริบูรณ์`,
        `สติสัมปชัญญะที่บริบูรณ์`,
        `ย่อมยังการสำรวมอินทรีย์`,
        `ให้บริบูรณ์`,
        `การสำรวมอินทรีย์ที่บริบูรณ์`,
        `ย่อมยังสุจริต 3 ให้บริบูรณ์`,
        `สุจริต 3 ที่บริบูรณ์ย่อมยังสติปัฏฐาน 4`,
        `ให้บริบูรณ์`,
        `สติปัฏฐาน 4 ที่บริบูรณ์`,
        `ย่อมยังโพชฌงค์ 7 ให้บริบูรณ์`,
        `โพชฌงค์ 7 ที่บริบูรณ์`,
        `ย่อมยังวิชชาและวิมุตติให้บริบูรณ์`,
        `วิชชาและวิมุตนี้มีอาหารอย่างนี้`,
        `และบริบูรณ์อย่างนี้`,
        `ดูกรภิกษุทั้งหลาย`,
        `เปรียบเหมือนเมื่อฝนเม็ดหยาบ`,
        `ตกลงเบื้องบนภูเขา`,
        `เมื่อฝนตกหนักอยู่`,
        `น้ำนั้นไหลไปตามที่ลุ่ม`,
        `ยังซอกเขาลำธารและห้วยให้เต็ม`,
        `ซอกเขาลำธารและห้วยที่เต็ม`,
        `ย่อมยังหนองให้เต็ม`,
        `หนองที่เต็มย่อมยังบึงให้เต็ม`,
        `บึงที่เต็มย่อมยังแม่น้ำน้อยให้เต็ม`,
        `แม่น้ำน้อยที่เต็มย่อมยังแม่น้ำใหญ่ให้เต็ม`,
        `แม่น้ำใหญ่ที่เต็มย่อมยังมหาสมุทรสาครให้เต็ม`,
        `มหาสมุทรสาครนั้นมีอาหารอย่างนี้`,
        `และเต็มเปี่ยมอย่างนี้แม้ฉันใด`,
        `ดูกรภิกษุทั้งหลาย`,
        `การคบสัปบุรุษที่บริบูรณ์`,
        `ย่อมยังการฟังสัทธรรมให้บริบูรณ์`,
        `โพชฌงค์ 7 ที่บริบูรณ์`,
        `ย่อมยังวิชชาและวิมุตติให้บริบูรณ์`,
        `วิชชาและวิมุตนี้มีอาหารอย่างนี้`,
        `และบริบูรณ์อย่างนี้ฉันนั้นเหมือนกันแล`,
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
              <h1><div className="text">ยมกวรรคที่ 2</div></h1>
              
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

            <a className="space" href="/lesson0410" >
              <i className="fa-solid fa-angle-right fa-5x"></i>
            </a>
          </div>
      </section>
      </div>
    </>
  )
}

export default Lesson0409

export const Head = () => (
  <SEO title="Lesson0409" />
)