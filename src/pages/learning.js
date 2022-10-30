import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import '../scss/main.scss'

// markup
const Learning = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
          `<span class="highlight">กำหนดรู้ รู้ทันสิ่งที่มากระทบสัมผัส</span>`,
          `<span class="highlight">ไม่เที่ยงเกิดดับ ตัวฉันเกิดขึ้น ตั้งอยู่ ดับไป</span>`,
          `<span class="highlight">เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ</span>`,
          `<span class="highlight">ไม่เที่ยงเกิดดับ ตัวฉันคือรูป เวทนา สัญญา สังขาร วิญญาณ เกิดขึ้น ตั้งอยู่ ดับไป</span>`,
          `<span class="highlight">เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ</span>`,
          `<span class="highlight">ไม่เที่ยงเกิดดับ รูป เวทนา สัญญา สังขาร วิญญาณ คือกาย เวทนา จิต ธรรม เกิดขึ้น ตั้งอยู่ ดับไป</span>`,
          `<span class="highlight">เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ</span>`,
          `<span class="highlight">ไม่เที่ยงเกิดดับ กาย เวทนา จิต ธรรมคือโลกและชีวิต เกิดขึ้น ตั้งอยู่ ดับไป</span>`,
          `<span class="highlight">เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ</span>`,
          `<span class="highlight">ไม่เที่ยงเกิดดับ ผลต่อเนื่องของโลกและชีวิต คือวัตถุ สิ่งของ สัตว์ บุคคล เกิดขึ้น ตั้งอยู่ ดับไป</span>`,
          `<span class="highlight">เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ</span>`,
          `<span class="highlight">ไม่เที่ยงเกิดดับ ผลต่อเนื่องของวัตถุ สิ่งของ สัตว์ บุคคลคือรูป เสียง กลิ่น รส โผฏฐัพพะ ธรรมารมณ์ เกิดขึ้น ตั้งอยู่ ดับไป</span>`,
          `<span class="highlight">เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ</span>`,
          `<span class="highlight">ไม่เที่ยงเกิดดับ ผลต่อเนื่องของรูป เสียง กลิ่น รส โผฏฐัพพะ ธรรมารมณ์คือความพอใจ ไม่พอใจ เกิดขึ้น ตั้งอยู่ ดับไป</span>`,
          `<span class="highlight">เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ</span>`,
          `<span class="highlight">ไม่เที่ยงเกิดดับ ความพอใจ ไม่พอใจคือความไม่รู้ เกิดขึ้น ตั้งอยู่ ดับไป</span>`,
          `<span class="highlight">เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ</span>`,
          `<span class="highlight">ไม่เที่ยงเกิดดับ ความไม่รู้คืออวิชชา เกิดขึ้น ตั้งอยู่ ดับไป</span>`,
          `<span class="highlight">เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ</span>`,
          `<span class="highlight">ไม่เที่ยงเกิดดับ ผลต่อเนื่องของอวิชชา คือชีวิต เกิดขึ้น ตั้งอยู่ ดับไป</span>`,
          `<span class="highlight">เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ</span>`,
          `<span class="highlight">ไม่เที่ยงเกิดดับ ชีวิตคือตัวฉัน เกิดขึ้น ตั้งอยู่ ดับไป</span>`,
          `<span class="highlight">เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ</span>`,
          `<span class="highlight">ไม่เที่ยงเกิดดับ ตัวฉันคือรูป เวทนา สัญญา สังขาร วิญญาณ เกิดขึ้น ตั้งอยู่ ดับไป</span>`,
          `<span class="highlight">เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ</span>`,
          `<span class="highlight">ไม่เที่ยงเกิดดับ รูป เวทนา สัญญา สังขาร วิญญาณ คือกาย เวทนา จิต ธรรม เกิดขึ้น ตั้งอยู่ ดับไป</span>`,
          `<span class="highlight">เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ</span>`,
          `<span class="highlight">ไม่เที่ยงเกิดดับ กาย เวทนา จิต ธรรมคือโลกและชีวิต เกิดขึ้น ตั้งอยู่ ดับไป</span>`,
          `<span class="highlight">เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ</span>`,
          `<span class="highlight">ไม่เที่ยงเกิดดับโลกและชีวิตคือตัวฉัน เกิดขึ้น ตั้งอยู่ ดับไป</span>`,
          `<span class="highlight">เกิดจากเหตุปัจจัยมาประชุมชั่วคราว แล้วแตกสลาย ไม่เที่ยงเกิดดับ</span>`,
          `<span class="highlight">ไม่เที่ยงเกิดดับ โลกและชีวิตเคลื่อนไหวเกิดขึ้น ตั้งอยู่ ดับไป เกิดจากเหตุปัจจัยมาประชุมชั่วคราวแล้วแตกสลาย</span>`,
          `<span class="highlight">ไม่มีตัวตนเป็นของตนเอง ว่างเปล่าจากตนและของของตน</span>`,
          `<span class="highlight">ไม่ควรไปยึดมั่นถือมั่นถือมั่นว่า โลกและชีวิตเป็นของเรา เป็นเรา เป็นตัวตนของเรา</span>`,
          `<span class="highlight">ไม่เที่ยงเกิดดับ</span>`
      ],
      typeSpeed: 50,
      backSpeed: 10,
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
        <div className="flex">
          <h1>
            <center>
              <div className="text"><span class="highlight">บทวิปัสนาภาวนา</span></div>
              <div className="text"><span class="highlight">ฝึกนำไปใช้ในชีวิตประจำวัน</span></div>
            </center>
          </h1>
          <h1>
            <div className="text">
              <span style={{ whiteSpace: 'pre' }} ref={el} />
            </div>
          </h1>
        </div>
    </section>
    </div>
    </>
  )
}

export default Learning
