import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import Typed from 'typed.js'
import bgvdo from '../videos/mountain02.mp4'
import '../scss/main.scss'


// markup
const Lesson0207 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        `โลกและองค์ประกอบของโลก`,
        `คือดิน น้ำ ลม ไฟ`,
        `ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดจากเหตุปัจจัย`,
        `มาประชุมปรุงแต่งชั่วคราว`,
        `แล้วแตกสลาย`,
        `ไม่มีตัวตนเป็นของตนเอง`,
        `ไม่เที่ยงเกิดดับ ดับไม่เหลือ`,
        
        `ผลต่อเนื่องของโลกคือวัตถุสิ่งของ`,
        `แผ่นดิน แผ่นน้ำ ลมฟ้าอากาศ`,
        `ต้นไม้ ใบหญ้า สัตว์ บุคคล`,
        `ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง`,
        `ประกอบด้วยดิน น้ำ ลม ไฟ`,
        `เป็นเหตุเป็นปัจจัย`,
        `มาประชุมปรุงแต่งชั่วคราว`,
        `แล้วแตกสลาย`,
        `ไม่มีตัวตนเป็นของตนเอง`,
        `ไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้น`,
        `เป็นของเรา`,
        `เป็นเรา`,
        `เป็นตัวตนของเรา`,
        `ไม่เที่ยงเกิดดับ ดับไม่เหลือ`,
         
        `ชีวิตและองค์ประกอบของโลก`,
        `คือดิน น้ำ ลม ไฟ กรรมและวิญญาณ`,
        `ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดจากเหตุปัจจัย`,
        `มาประชุมปรุงแต่งชั่วคราว`,
        `แล้วแตกสลาย`,
        `ไม่มีตัวตนเป็นของตนเอง`,
        `ไม่เที่ยงเกิดดับ ดับไม่เหลือ`,
        
        `ผลต่อเนื่องของชีวิตคือรูปร่าง หน้าตา`,
        `ลักษณะท่าทาง นิสัยใจคอ`,
        `ความคิดความเห็น คำพูดการกระทำ`,
        `ดีใจเสียใจ ไปไหนมาไหน`,
        `ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง`,
        `ประกอบด้วยดิน น้ำ ลม ไฟ`,
        `เป็นเหตุเป็นปัจจัย`,
        `มาประชุมปรุงแต่งชั่วคราว`,
        `แล้วแตกสลาย`,
        `ไม่มีตัวตนเป็นของตนเอง`,
        `ไม่ควรไปยึดมั่นถือมั่นว่าสิ่งนั้น`,
        `เป็นของเรา`,
        `เป็นเรา`,
        `เป็นตัวตนของเรา`,
        `ไม่เที่ยงเกิดดับ ดับไม่เหลือ`,
        
        `ปฐวีธาตุ (ธาตุดิน)`,
        `ก็ปฐวีธาตุเป็นไฉน`,
        `คือปฐวีธาตุภายในก็มีภายนอกก็มี`,
        `ก็ปฐวีธาตุภายในเป็นไฉน`,
        `ได้แก่สิ่งที่แค่นแข็ง`,
        `กำหนดได้มีในตนอาศัยตน`,
        `คือผม ขน เล็บ ฟัน หนัง`,
        `เนื้อ เอ็น กระดูก`,
        `เยื่อในกระดูก ม้าม หัวใจ ตับ พังผืด`,
        `ไต ปอด ไส้ใหญ่ ไส้น้อย`,
        `อาหารเก่า อาหารใหม่`,
        `หรือแม้สิ่งอื่นไม่ว่าชนิดไรๆ`,
        `ที่แข้นแข็ง`,
        `กำหนดได้มีในตนอาศัยตน`,
        `นี้เรียกว่าปฐวีธาตุภายใน`,
        `ก็ปฐวีธาตุทั้งภายในและภายนอกนี้แล`,
        `เป็นปฐวีธาตุทั้งนั้น`,
        `พึงเห็นปฐวีธาตุนั้น`,
        `ด้วยปัญญาอันชอบ`,
        `ตามความเป็นจริงอย่างนี้ว่า`,
        `ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดจากเหตุปัจจัย`,
        `มาประชุมกันชั่วคราว`,
        `แล้วแตกสลาย`,
        `ไม่มีตัวตนเป็นของตนเอง`,
        `ไม่ควรเห็นสิ่งนั้น`,
        `ว่าเป็นของเรา`,
        `เป็นเรา`,
        `เป็นตัวตนของเรา`,
        `ครั้นเห็นแล้วจะเบื่อหน่ายปฐวีธาตุ`,
        `และให้จิตคลายกำหนัดไม่ยึดมั่นถือมั่น`,
        `ปฐวีธาตุได้ไม่เที่ยงเกิดดับ`,
        
        `อาโปธาตุ (ธาตุน้ำ)`,
        `ก็อาโปธาตุเป็นไฉน`,
        `คืออาโปธาตุภายในก็มีภายนอกก็มี`,
        `ก็อาโปธาตุภายในเป็นไฉน`,
        `ได้แก่สิ่งที่เอิบอาบซึมซาบไป`,
        `กำหนดได้มีในตนอาศัยตน`,
        `คือ ดี เสลด น้ำเหลือง`,
        `เลือด เหงื่อ`,
        `มันข้น น้ำตา เปลวมัน`,
        `น้ำลาย น้ำมูก ไขข้อ มูตร`,
        `หรือแม้แต่สิ่งอื่นไม่ว่าชนิดไรๆ`,
        `ที่เอิบอาบซึมซาบไป`,
        `กำหนดได้มีในตนอาศัยตน`,
        `นี้เรียกว่าอาโปธาตุภายใน`,
        `ก็อาโปธาตุทั้งภายในและภายนอกนี้แล`,
        `เป็นอาโปธาตุทั้งนั้น`,
        `พึงเห็นอาโปธาตุนั้น`,
        `ด้วยปัญญาอันชอบ`,
        `ตามความเป็นจริงอย่างนี้ว่า`,
        `ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดจากเหตุปัจจัย`,
        `มาประชุมกันชั่วคราว`,
        `แล้วแตกสลาย`,
        `ไม่มีตัวตนเป็นของตนเอง`,
        `ไม่ควรเห็นสิ่งนั้น`,
        `ว่าเป็นของเรา`,
        `เป็นเรา`,
        `เป็นตัวตนของเรา`,
        `ครั้นเห็นแล้วจะเบื่อหน่ายอาโปธาตุ`,
        `และให้จิตคลายกำหนัดไม่ยึดมั่นถือมั่น`,
        `อาโปธาตุได้ไม่เที่ยงเกิดดับ`,
        
        `วาโยธาตุ (ธาตุลม)`,
        `ก็วาโยธาตุเป็นไฉน`,
        `คือวาโยธาตุภายในก็มีภายนอกก็มี`,
        `ก็วาโยธาตุภายในเป็นไฉน`,
        `ได้แก่สิ่งที่พัดผันไป`,
        `กำหนดได้มีในตนอาศัยตน`,
        `คือ ลมพัดขึ้นเบื้องบน`,
        `ลมพัดลงเบื้องต่ำ`,
        `ลมในท้อง ลมในลำไส้`,
        `ลมแล่นไปตามอวัยวะน้อยใหญ่`,
        `ลมหายใจออก ลมหายใจเข้า`,
        `หรือแม้แต่สิ่งอื่นไม่ว่าชนิดไรๆที่พัดผันไป`,
        `กำหนดได้มีในตนอาศัยตน`,
        `นี้เรียกว่าวาโยธาตุภายใน`,
        `ก็วาโยธาตุทั้งภายในและภายนอกนี้แล`,
        `เป็นวาโยธาตุทั้งนั้น`,
        `พึงเห็นวาโยธาตุนั้น`,
        `ด้วยปัญญาอันชอบ`,
        `ตามความเป็นจริงอย่างนี้ว่า`,
        `ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดจากเหตุปัจจัย`,
        `มาประชุมกันชั่วคราว`,
        `แล้วแตกสลาย`,
        `ไม่มีตัวตนเป็นของตนเอง`,
        `ไม่ควรเห็นสิ่งนั้นว่าเป็นของเรา`,
        `เป็นเรา`,
        `เป็นตัวตนของเรา`,
        `ครั้นเห็นแล้วจะเบื่อหน่ายวาโยธาตุ`,
        `และให้จิตคลายกำหนัดไม่ยึดมั่นถือมั่น`,
        `วาโยธาตุได้ไม่เที่ยงเกิดดับ`,
        
        `เตโชธาตุ (ธาตุไฟ)`,
        `ก็เตโชธาตุเป็นไฉน`,
        `คือเตโชธาตุภายในก็มีภายนอกก็มี`,
        `ก็เตโชธาตุภายในเป็นไฉน`,
        `ได้แก่สิ่งที่อบอุ่นถึงความเร่าร้อน`,
        `กำหนดได้มีในตนอาศัยตน`,
        `คือ ธาตุที่เป็นเครื่องยังกายให้อบอุ่น`,
        `ยังกายให้ทรุดโทรม`,
        `ยังกายให้กระวนกระวาย`,
        `และธาตุที่เป็นเหตุให้ของกิน`,
        `ที่กิน ที่ดื่ม ที่เคี้ยว`,
        `ที่ลิ้มแล้วถึงความย่อยไปด้วยดี`,
        `หรือแม้แต่สิ่งอื่นไม่ว่าชนิดไรๆ`,
        `ที่อบอุ่นถึงความเร่าร้อน`,
        `กำหนดได้มีในตนอาศัยตน`,
        `นี้เรียกว่าเตโชธาตุภายใน`,
        `ก็เตโชธาตุทั้งภายในและภายนอกนี้แล`,
        `เป็นเตโชธาตุทั้งนั้น`,
        `พึงเห็นเตโชธาตุนั้น`,
        `ด้วยปัญญาอันชอบ`,
        `ตามความเป็นจริงอย่างนี้ว่า`,
        `ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดจากเหตุปัจจัย`,
        `มาประชุมกันชั่วคราว`,
        `แล้วแตกสลาย`,
        `ไม่มีตัวตนเป็นของตนเอง`,
        `ไม่ควรเห็นสิ่งนั้น`,
        `ว่าเป็นของเรา`,
        `เป็นเรา`,
        `เป็นตัวตนของเรา`,
        `ครั้นเห็นแล้วจะเบื่อหน่ายเตโชธาตุ`,
        `และให้จิตคลายกำหนัดไม่ยึดมั่นถือมั่น`,
        `เตโชธาตุได้ไม่เที่ยงเกิดดับ`,
        `อากาศธาตุ (ความว่าง)`,
        `ก็อากาศธาตุเป็นไฉน`,
        `คืออากาศธาตุภายในก็มีภายนอกก็มี`,
        `ก็อากาศธาตุภายในเป็นไฉน`,
        `ได้แก่สิ่งที่ว่างปรุโปร่ง`,
        `กำหนดได้มีในตนอาศัยตน`,
        `คือ ช่องหู ช่องจมูก ช่องปาก`,
        `ซึ่งเป็นทางให้กลืนของกิน`,
        `ที่ดื่ม ที่เคี้ยว ที่ลิ้ม`,
        `และเป็นทางระบายของ`,
        `ที่กิน ที่เคี้ยว ที่ดื่ม`,
        `แล้วออกมาทางเบื้องล่าง`,
        `หรือแม้แต่สิ่งอื่นไม่ว่าชนิดไรๆ`,
        `ที่ว่างปรุโปร่ง`,
        `กำหนดได้มีในตนอาศัยตน`,
        `นี้เรียกว่าอากาศธาตุภายใน`,
        `ก็อากาศธาตุทั้งภายในและภายนอกนี้แล`,
        `เป็นอากาศธาตุทั้งนั้น`,
        `พึงเห็นอากาศธาตุนั้น`,
        `ด้วยปัญญาอันชอบ`,
        `ตามความเป็นจริงอย่างนี้ว่า`,
        `ทั้งหมดเป็นธรรมชาติชนิดหนึ่ง`,
        `เกิดจากเหตุปัจจัย`,
        `มาประชุมกันชั่วคราว`,
        `แล้วแตกสลาย`,
        `ไม่มีตัวตนเป็นของตนเอง`,
        `ไม่ควรเห็นสิ่งนั้น`,
        `ว่าเป็นของเรา`,
        `เป็นเรา`,
        `เป็นตัวตนของเรา`,
        `ครั้นเห็นแล้วจะเบื่อหน่ายอากาศธาตุ`,
        `และให้จิตคลายกำหนัดไม่ยึดมั่นถือมั่น`,
        `อากาศธาตุได้ไม่เที่ยงเกิดดับ`,
        
        `วิญญาณธาตุ (ความรู้)`,
        `ต่อจากนั้นสิ่งที่เหลืออยู่`,
        `ก็คือวิญญาณธาตุอันบริสุทธิ์ผุดผ่อง`,
        `บุคคลย่อมรู้อะไรได้ด้วยวิญญาณนั้น`,
        `คือรู้ชัดว่าสุขบ้าง ทุกข์บ้าง`,
        `ไม่ทุกข์ไม่สุขบ้าง`,
        `เพราะอาศัยผัสสะเป็นที่ตั้งแห่งสุขเวทนา`,
        `ย่อมเกิดสุขเวทนา`,
        `บุคคลนั้นเมื่อเสวยสุขเวทนา`,
        `ย่อมรู้สึกว่ากำลังเสวยสุขเวทนาอยู่`,
        `เพราะผัสสะเป็นที่ตั้ง`,
        `แห่งสุขเวทนานั้นแลดับไป`,
        `ย่อมรู้สึกว่าความเสวยอารมณ์`,
        `ที่เกิดแก่ผัสสะนั้นคือตัวสุขเวทนา`,
        `อันเกิดเพราะอาศัยผัสสะเป็นที่ตั้ง`,
        `แห่งสุขเวทนาย่อมดับไปย่อมเข้าไปสงบ`,
        `เพราะอาศัยผัสสะ`,
        `เป็นที่ตั้งแห่งทุกขเวทนา`,
        `ย่อมเกิดทุกขเวทนา`,
        `บุคคลนั้นเมื่อเสวยทุกขเวทนา`,
        `ย่อมรู้สึกว่ากำลังเสวยทุกขเวทนาอยู่`,
        `เพราะผัสสะเป็นที่ตั้งแห่งทุกขเวทนานั้นแลดับไป`,
        `ย่อมรู้สึกว่าความเสวยอารมณ์ที่เกิดแก่ผัสสะนั้น`,
        `คือตัวทุกขเวทนา`,
        `อันเกิดเพราะอาศัยผัสสะ`,
        `เป็นที่ตั้งแห่งทุกขเวทนาย่อมดับไป`,
        `ย่อมเข้าไปสงบ`,
        `เพราะอาศัยผัสสะเป็นที่ตั้ง`,
        `แห่งไม่ทุกข์ ไม่สุขเวทนา`,
        `ย่อมเกิดไม่ทุกข์ ไม่สุขเวทนา`,
        `บุคคลนั้นเมื่อเสวย`,
        `ไม่ทุกข์​ ไม่สุขเวทนา`,
        `ย่อมรู้สึกว่ากำลังเสวย`,
        `ไม่ทุกข์ ไม่สุขเวทนาอยู่`,
        `เพราะผัสสะเป็นที่ตั้ง`,
        `แห่งไม่ทุกข์ ไม่สุขเวทนานั้นแลดับไป`,
        `ย่อมรู้สึกว่าความเสวยอารมณ์`,
        `ที่เกิดแก่ผัสสะนั้น`,
        `คือตัวไม่ทุกข์ ไม่สุขเวทนา`,
        `อันเกิดเพราะอาศัยผัสสะเป็นที่ตั้ง`,
        `แห่งไม่ทุกข์ ไม่สุขเวทนาย่อมดับไป`,
        `ย่อมเข้าไปสงบ`,
        `เปรียบเหมือนประทีปน้ำมัน`,
        `อาศัยน้ำมันและไส้จึงลุกโพลงอยู่ได้`,
        `เพราะสิ้นน้ำมันและไส้นั้น`,
        `และไม่เติมน้ำมันและไส้อื่น`,
        `ย่อมเป็นประทีปหมดเชื้อดับไป`,
        `ฉันใดฉันนั้นเหมือนกันแล`,
        `บุคคลนั้นเมื่อเสวยเวทนามีกายเป็นที่สุด`,
        `ย่อมรู้สึกว่ากำลังเสวยเวทนามีกายเป็นที่สุด`,
        `เมื่อเสวยเวทนามีชีวิตเป็นที่สุด`,
        `ย่อมรู้สึกว่ากำลังเสวยเวทนามีชีวิตเป็นที่สุด`,
        `และรู้สึกว่า เบื้องหน้าแต่สิ้นชีวิตเพราะตายไปแล้ว`,
        `ความยินดีกันในโลกนี้แลจักเป็นของสงบ`,
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
              <h1><div className="text">องค์ประกอบของโลกและชีวิต + กำหนดรู้ธาตุ 6</div></h1>
              
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
            
            <a className="space" href="/lesson0208" >
              <i className="fa-solid fa-angle-right fa-5x"></i>
            </a>
          </div>
      </section>
      </div>
    </>
  )
}

export default Lesson0207