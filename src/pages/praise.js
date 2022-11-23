import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import bgvdo from '../videos/sea.mp4'
import '../scss/main.scss'

const Praise = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        `นะโม ตัสสะ ภะคะวะโต อะระหะโต สัมมา สัมพุทธัสสะ`,
        `นะโม ตัสสะ ภะคะวะโต อะระหะโต สัมมา สัมพุทธัสสะ`,
        `นะโม ตัสสะ ภะคะวะโต อะระหะโต สัมมา สัมพุทธัสสะ`,

        `ขอนอบน้อมแด่พระผู้มีพระภาคเจ้า พระองค์นั้น ซึ่งเป็นผู้ไกลจากกิเลส ตรัสรู้ชอบได้โดยพระองค์เอง`,
        `ขอนอบน้อมแด่พระผู้มีพระภาคเจ้า พระองค์นั้น ซึ่งเป็นผู้ไกลจากกิเลส ตรัสรู้ชอบได้โดยพระองค์เอง`,
        `ขอนอบน้อมแด่พระผู้มีพระภาคเจ้า พระองค์นั้น ซึ่งเป็นผู้ไกลจากกิเลส ตรัสรู้ชอบได้โดยพระองค์เอง`,

        `อะระหัง สัมมาสัมพุทโธ ภะคะวา, พุทธัง ภะคะวันตัง อะภิวาเทมิ`,
        `สวากขาโต ภะคะวะตา ธัมโม, ธัมมังนะมัสสามิ`,
        `สุปะติปันโน ภะคะวะโต สาวะกะสังโฆ, สังฆะนะมามิ`,

        `อิติปิโส ภะคะวา เพราะเหตุอย่างนี้พระผู้มีพระภาคเจ้านั้น`,
        `อะระหัง สัมมา เป็นผู้ไกลจากกิเลส`,
        `สัมพุทโธ เป็นผู้ตรัสรู้ชอบโดยพระองค์เอง`,
        `วิชชาจะระณะสัมปันโน เป็นผู้ถึงพร้อมด้วยวิชชาและจรณะ`,
        `สุคะโต เป็นผู้ไปแล้วด้วยดี`,
        `โลกะวิทู เป็นผู้รู้โลกอย่างแจ่มแจ้ง`,
        `อะนุตตะโร ปุริสะธัมมะสาระถิ เป็นผู้สามารถฝึกคนที่สมควรฝึกได้ อย่างไม่มีใครยิ่งกว่า`,
        `สัตถาเทวะมะนุสสานัง เป็นครูผู้สอนของเทวดาและมนุษย์ทั้งหลาย`,
        `พุทโธ เป็นผู้รู้ ผู้ตื่น ผู้เบิกบานด้วยธรรม`,
        `ภะคะวาติ เป็นผู้มีความเจริญจำแนกธรรมสั่งสอนสัตว์ ดังนี้`,

        `สวากขาโต ภะคะวาตา ธัมโม พระธรรมเป็นสิ่งที่พระผู้มีพระภาคเจ้าตรัสไว้ดีแล้ว`,
        `สันทิฏฐิโก เป็นสิ่งที่ผู้ศึกษา และปฏิบัติพึงเห็นได้ด้วยตนเอง`,
        `อะกาลิโก เป็นสิ่งที่ปฏิบัติได้ และให้ผลได้ไม่จำกัดกาล`,
        `เอหิปัสสิโก เป็นสิ่งที่ควรกล่าวกับผู้อื่นว่า ท่านจงมาดูเถิด`,
        `โอปะนะยิโก เป็นสิ่งที่ควรน้อมเข้ามาใส่ตัว`,
        `ปัจจัตตัง เวทิตัพโพ วิญญูหีติ เป็นสิ่งที่ผู้รู้ พึงรู้ได้เฉพาะตน ดังนี้`,

        `สุปะฏิปันโน ภะคะวะโต สาวะกะสังโฆ สงฆ์สาวกของพระผู้มีพระภาคเจ้าหมู่ใด ปฏิบัติดีแล้ว`,
        `อุชุปฏิปันโน ภะคะวะโต สาวะกะสังโฆ สงฆ์สาวกของพระผู้มีพระภาคเจ้าหมู่ใด ปฏิบัติตรงแล้ว`,
        `ญายะปฏิปันโน ภะคะวะโต สาวะกะสังโฆ สงฆ์สาวกของพระผู้มีพระภาคเจ้าหมู่ใด ปฏิบัติเพื่อรู้ธรรมเป็นเครื่องออกจากทุกข์แล้ว`,
        `สามีจิปฏิปันโน ภะคะวะโต สาวะกะสังโฆ สงฆ์สาวกของพระผู้มีพระภาคเจ้าหมู่ใด ปฏิบัติสมควรแล้ว`,
        `ยะทิทัง ได้แก่บุคคลเหล่านี้คือ`,
        `จัตตาริ ปุริสสะ ยุคานิ อัฏฐะ ปุริสะปุคคะลา คู่แห่งบุรุษสี่คู่ นับเรียงตัวได้แปดบุรุษ`,
        `เอสะ ภะคะวะโต สาวะกะสังโฆ นั่นแหละ สงฆ์สาวกของพระผู้มีพระภาคเจ้า`,
        `อาหุเนยโย เป็นผู้ควรแก่สักการะที่เขานำมาบูชา`,
        `ปาหุเนยโย เป็นผู้ควรแก่สักการะที่จัดไว้ต้อนรับ`,
        `ทักขิเนยโย เป็นผู้ควรรับทักษิณาทาน`,
        `อัญชะลีกะระนีโย เป็นผู้ที่บุคคลทั่วไปควรทำอัญชลี`,
        `อะนุตตะรัง ปุญญะเขตตัง โลกัสสาติ เป็นเนื้อนาบุญของโลก ไม่มีนาบุญอื่นยิ่งกว่า ดังนี้`,
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
            <div>
              <a href="/learning01" >
                <span className="highlight" style={{fontSize: "2.5em"}}>
                  บทนำไปใช้ในชีวิตประจำวัน
                </span>
              </a>
              <br />
              <br />
              
              <a href="/lesson0101" >
                <span className="highlight" style={{fontSize: "2.5em"}}>
                  ธัมมจักกัปปวัตตนสูตร ยถาภูตญาณทัสสนะ
                </span>
              </a>
              <br />
              <br />
              
              <a href="/lesson0201" >
                <span className="highlight" style={{fontSize: "2.5em"}}>
                  หลักสูตรอนาคามีผล
                </span>
              </a>
              <br />
              <br />
            </div>
              
            <h1>
              <div className="text">
                <span style={{ whiteSpace: `pre` }} ref={el} />
              </div>
            </h1>
        </section>

      </div>

    </>
  )
}

export default Praise
