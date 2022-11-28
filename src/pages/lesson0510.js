import React, { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import { SEO } from '../components/seo'
import Typed from 'typed.js'
import bgvdo from '../videos/mountain04.mp4'
import '../scss/main.scss'


// markup
const Lesson0510 = () => {

  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        `ปริวีมังสนสูตร`,
        `ว่าด้วยการพิจารณา`,
        `เพื่อความสิ้นทุกข์โดยชอบ`,
        `ข้าพเจ้าสดับมาแล้วอย่างนี้`,
        `สมัยหนึ่งพระผู้มีพระภาค`,
        `ประทับอยู่ ณ พระเชตวัน`,
        `อารามของท่านอนาถบิณฑิกเศรษฐี`,
        `เขตพระนครสาวัตถี`,
        `ณ ที่นั้นแลพระผู้มีพระภาค`,
        `ตรัสเรียกภิกษุทั้งหลายว่า`,
        `ดูกรภิกษุทั้งหลาย`,
        `ภิกษุเหล่านั้นทูลรับพระผู้มีพระภาคว่า`,
        `พระพุทธเจ้าข้า`,
        `พระผู้มีพระภาคได้ตรัสว่า`,
        `ดูกรภิกษุทั้งหลายด้วยเหตุเท่าไรหนอแล`,
        `ภิกษุเมื่อพิจารณาพึงพิจารณา`,
        `เพื่อความสิ้นทุกข์โดยชอบ`,
        `โดยประการทั้งปวง`,
        `ภิกษุเหล่านั้นทูลว่าพระพุทธเจ้าข้า`,
        `ธรรมทั้งหลายของพวกข้าพระองค์`,
        `มีพระผู้มีพระภาคเป็นที่ตั้ง`,
        `มีพระผู้มีพระภาคเป็นผู้นำ`,
        `มีพระผู้มีพระภาคเป็นที่พึ่ง`,
        `ได้โปรดเถิดพระพุทธเจ้าข้า`,
        `ขอเนื้อความแห่งภาษิตนี้จงแจ่มแจ้ง`,
        `กะพระผู้มีพระภาคเถิด`,
        `ภิกษุทั้งหลายได้ฟัง`,
        `ต่อพระผู้มีพระภาคแล้ว`,
        `จะทรงจำไว้`,
        `พระผู้มีพระภาคตรัสว่า`,
        `ดูกรภิกษุทั้งหลายถ้าเช่นนั้น`,
        `เธอทั้งหลายจงฟังจงใส่ใจให้ดี`,
        `เราจักกล่าว`,
        `ภิกษุเหล่านั้นทูลรับพระผู้มีพระภาคแล้ว`,
        `พระผู้มีพระภาคได้ตรัสว่า`,
        `ดูกรภิกษุทั้งหลายภิกษุในธรรมวินัยนี้`,
        `เมื่อพิจารณาย่อมพิจารณาว่า`,
        `ทุกข์คือชราและมรณะ`,
        `มีประการต่างๆมากมายเกิดขึ้นในโลก`,
        `ทุกข์นี้มีอะไรเป็นเหตุ`,
        `มีอะไรเป็นสมุทัย`,
        `มีอะไรเป็นกรรม`,
        `มีอะไรเป็นแดนเกิดหนอแล`,
        `เมื่ออะไรมีชราและมรณะจึงมี`,
        `เมื่ออะไรไม่มีชราและมรณะจึงไม่มี`,
        `ภิกษุนั้นพิจารณาอยู่ย่อมรู้ประจักษ์ว่า`,
        `ทุกข์คือชราและมรณะ`,
        `มีประการต่างๆมากมายเกิดขึ้นในโลก`,
        `ทุกข์นี้แลมีชาติเป็นเหตุ`,
        `มีชาติเป็นสมุทัย`,
        `มีชาติเป็นกำเนิด`,
        `มีชาติเป็นแดนเกิด`,
        `เมื่อชาติมีชราและมรณะจึงมี`,
        `เมื่อชาติไม่มีชราและมรณะจึงไม่มี`,
        `ภิกษุนั้นย่อมรู้ประจักษ์ชราและมรณะ`,
        `ย่อมรู้ประจักษ์เหตุเกิดชราและมรณะ`,
        `ย่อมรู้ประจักษ์ความดับแห่งชราและมรณะ`,
        `ย่อมรู้ประจักษ์ปฏิปทาอันสมควร`,
        `ที่ให้ถึงความดับแห่งชราและมรณะ`,
        `และย่อมเป็นผู้ปฏิบัติอย่างนั้น`,
        `เป็นผู้ประพฤติธรรมอันสมควร`,
        `ดูกรภิกษุทั้งหลาย`,
        `ภิกษุนี้เราเรียกว่า`,
        `เป็นผู้ปฏิบัติเพื่อความสิ้นทุกข์โดยชอบ`,
        `โดยประการทั้งปวง`,
        `เพื่อความดับแห่งชราและมรณะ`,
        `อีกประการหนึ่ง`,
        `ภิกษุเมื่อพิจารณาย่อมพิจารณาว่า`,
        `ก็ชาตินี้มีอะไรเป็นเหตุ`,
        `มีอะไรเป็นสมุทัย`,
        `มีอะไรเป็นกำเนิด`,
        `มีอะไรเป็นแดนเกิด`,
        `เมื่ออะไรมี ชาติจึงมี`,
        `เมื่ออะไรไม่มี ชาติจึงไม่มี`,
        `ภิกษุนั้นพิจารณาอยู่ย่อมรู้ประจักษ์ว่า`,
        `ชาติมีภพเป็นเหตุ`,
        `มีภพเป็นสมุทัย`,
        `มีภพเป็นกำเนิด`,
        `มีภพเป็นแดนเกิด`,
        `เมื่อภพมีชาติจึงมี`,
        `เมื่อภพไม่มีชาติจึงไม่มี`,
        `ภิกษุนั้นย่อมรู้ประจักษ์ชาติ`,
        `ย่อมรู้ประจักษ์เหตุเกิดแห่งชาติ`,
        `ย่อมรู้ประจักษ์ความดับแห่งชาติ`,
        `ย่อมรู้ประจักษ์ปฏิปทาอันสมควร`,
        `ที่ให้ถึงความดับแห่งชาติ`,
        `และย่อมเป็นผู้ปฏิบัติอย่างนั้น`,
        `เป็นผู้ประพฤติธรรมอันสมควร`,
        `ภิกษุนี้เราเรียกว่า`,
        `เป็นผู้ปฏิบัติเพื่อความสิ้นทุกข์โดยชอบ`,
        `โดยประการทั้งปวง`,
        `เพื่อความดับแห่งชาติ`,

        `อีกประการหนึ่งภิกษุเมื่อพิจารณา`,
        `ย่อมพิจารณาว่า`,
        `ก็ภพนี้มีอะไรเป็นเหตุ ฯลฯ`,
        `ก็อุปาทานนี้มีอะไรเป็นเหตุ ฯลฯ`,
        `ก็ตัณหานี้มีอะไรเป็นเหตุ ฯลฯ`,
        `ก็เวทนานี้มีอะไรเป็นเหตุ​ ฯลฯ`,
        `ก็ผัสสะนี้มีอะไรเป็นเหตุ ฯลฯ`,
        `ก็สฬายตนะนี้มีอะไรเป็นเหตุ ฯลฯ`,
        `ก็นามรูปนี้มีอะไรเป็นเหตุ ฯลฯ`,
        `ก็วิญญาณนี้มีอะไรเป็นเหตุ ฯลฯ`,
        `ก็สังขารนี้มีอะไรเป็นเหตุ`,
        `มีอะไรเป็นสมุทัย`,
        `มีอะไรเป็นกำเนิด`,
        `มีอะไรเป็นแดนเกิด`,
        `เมื่ออะไรมีสังขารจึงมี`,
        `เมื่ออะไรไม่มีสังขารจึงไม่มี`,
        `ภิกษุนั้นเมื่อพิจารณาย่อมรู้ประจักษ์ว่า`,
        `สังขารมีอวิชชาเป็นเหตุ`,
        `มีอวิชชาเป็นสมุทัยมีอวิชชาเป็นกำเนิด`,
        `มีอวิชชาเป็นแดนเกิด`,
        `เมื่ออวิชามีสังขารจึงมี`,
        `เมื่ออวิชชาไม่มีสังขารจึงไม่มี`,
        `ภิกษุนั้นย่อมรู้ประจักษ์สังขาร`,
        `ย่อมรู้ประจักษ์เหตุเกิดแห่งสังขาร`,
        `ย่อมรู้ประจักษ์ความดับแห่งสังขาร`,
        `ย่อมรู้ประจักษ์ปฏิปทาอันสมควร`,
        `ที่ให้ถึงความดับแห่งสังขาร`,
        `และย่อมเป็นผู้ปฏิบัติอย่างนั้น`,
        `เป็นผู้ประพฤติธรรมอันสมควร`,
        `ภิกษุนี้เราเรียกว่า`,
        `เป็นผู้ปฏิบัติเพื่อความสิ้นทุกข์โดยชอบ`,
        `โดยประการทั้งปวง`,
        `เพื่อความดับแห่งสังขาร`,
        `ดูกรภิกษุทั้งหลาย`,
        `บุคคลตกอยู่ในอวิชชา`,
        `สังขารที่เป็นบุญปรุงแต่ง`,
        `วิญญาณก็เข้าถึงบุญ`,
        `ถ้าสังขารที่เป็นบาปปรุงแต่ง`,
        `วิญญาณก็เข้าถึงบาป`,
        `ถ้าสังขารที่เป็นอเนญชาปรุงแต่ง`,
        `วิญญาณก็เข้าถึงอเนญชา`,
        `ดูกรภิกษุทั้งหลาย`,
        `ในกาลใดแลภิกษุละอวิชชาได้แล้ว`,
        `วิชชาเกิดขึ้นแล้วในกาลนั้น`,
        `ภิกษุนั้นก็ไม่ทำกรรมเป็นบุญ`,
        `ไม่ทำกรรมเป็นบาป`,
        `ไม่ทำการเป็นอเนญชา`,
        `เพราะสำรอกอวิชชาเสีย`,
        `เพราะมีวิชชาเกิดขึ้น`,
        `เมื่อไม่ทำเมื่อไม่คิด`,
        `ก็ไม่ถือมั่นอะไรๆในโลก`,
        `เมื่อไม่ถือมั่นก็ไม่สะดุ้งกลัว`,
        `เมื่อไม่สะดุ้งกลัวก็ปรินิพพาน`,
        `ย่อมรู้ชัดว่าชาติสิ้นแล้ว`,
        `พรหมจรรย์อยู่จบแล้ว`,
        `กิจที่ควรทำ ทำเสร็จแล้ว`,
        `กิจอื่นเพื่อความเป็นอย่างนี้มิได้มี`,
        `ภิกษุนั้นถ้าเสวยสุขเวทนา`,
        `ก็รู้ชัดว่าสุขเวทนานั้นไม่เที่ยง`,
        `อันตนไม่ยึดถือแล้วด้วยตัณหา`,
        `อันตนไม่เพลิดเพลินแล้วด้วยตัณหา`,
        `ถ้าเสวยทุกขเวทนาก็รู้ชัดว่า`,
        `ทุกขเวทนานั้นไม่เที่ยง`,
        `อันตนไม่ยึดถือแล้วด้วยตัณหา`,
        `อันตนไม่เพลิดเพลินแล้วด้วยตัณหา`,
        `ถ้าเสวยไม่ทุกข์ไม่สุขเวทนา`,
        `ก็รู้ชัดว่าไม่ทุกข์ไม่สุขเวทนานั้นไม่เที่ยง`,
        `อันตนไม่ยึดถือแล้วด้วยตัณหา`,
        `อันตนไม่เพลิดเพลินแล้วด้วยตัณหา`,
        `ภิกษุนั้นถ้าเสวยสุขเวทนา`,
        `ก็วางใจเฉยเสวยไป`,
        `ถ้าเสวยทุกขเวทนา`,
        `ก็วางใจเฉยเสวยไป`,
        `ถ้าเสวยไม่ทุกข์ไม่สุขเวทนา`,
        `ก็วางใจเฉยเสวยไป`,
        `ภิกษุนั้นเมื่อเสวยเวทนา`,
        `ที่ปรากฏทางกาย`,
        `ก็รู้ชัดว่าเราเสวยเวทนา`,
        `ที่ปรากฏทางกาย`,
        `เมื่อเสวยเวทนา`,
        `ที่ปรากฏทางชีวิต`,
        `ก็รู้ชัดว่าเราเสวยเวทนา`,
        `ที่ปรากฏทางชีวิต`,
        `ก็รู้ชัดว่าเวทนาทั้งปวง`,
        `อันตัณหาไม่เพลิดเพลินแล้ว`,
        `จักเป็นของเย็น`,
        `สรีระธาตุจักเหลืออยู่ในโลกนี้เท่านั้น`,
        `เบื้องหน้าตั้งแต่สิ้นชีวิต`,
        `เพราะความแตกแห่งกาย`,

        `ดูกรภิกษุทั้งหลาย`,
        `บุรุษยกหม้อที่ยังร้อนออกจากเตาเผา`,
        `เมื่อวางไว้ที่พื้นดินอันเรียบ`,
        `ไออุ่นที่หม้อนั้นพึงหายไป`,
        `กระเบื้องหม้อยังเหลืออยู่ที่พื้นดินนั้นนั่นแหละ`,
        `แม้ฉันใดภิกษุทั้งหลาย`,
        `ภิกษุเมื่อเสวยเวทนาที่ปรากฏทางกาย`,
        `ก็รู้ชัดว่าเราเสวยเวทนาที่ปรากฏทางกาย`,
        `เมื่อเสวยเวทนาที่ปรากฏทางชีวิต`,
        `ก็รู้ชัดว่าเราเสวยเวทนาที่ปรากฏทางชีวิต`,
        `ก็รู้ชัดว่าเวทนาทั้งปวง`,
        `อันตัณหาไม่เพลิดเพลินแล้ว`,
        `จะเป็นของเย็น`,
        `สรีระธาตุจักเหลืออยู่ในโลกนี้เท่านั้น`,
        `เบื้องหน้าตั้งแต่สิ้นชีวิต`,
        `เพราะความแตกแห่งกายฉันนั้นเหมือนกัน`,

        `ดูกรภิกษุทั้งหลาย`,
        `พวกเธอจะสำคัญความข้อนั้นเป็นไฉน`,
        `พระพุทธเจ้า`,
        `ทรงตรัสถามภิกษุทั้งหลายว่า`,
        `ภิกษุผู้ขีณาสพพึงทำกรรมเป็นบุญบ้าง`,
        `ทำกรรมเป็นบาปบ้าง`,
        `ทำกรรมเป็นเนญชาบ้างหรือหนอ`,
        `ภิกษุทั้งหลายทูลตอบว่า`,
        `ไม่เป็นอย่างนั้นพระเจ้าข้า`,
        `พระพุทธเจ้า`,
        `ทรงตรัสถามภิกษุทั้งหลายต่อไปว่า`,
        `ก็อีกอย่างหนึ่งเมื่อสังขารไม่มี`,
        `โดยประการทั้งปวง`,
        `เพราะสังขารดับวิญญาณพึงปรากฎหรือหนอ`,
        `ภิกษุทั้งหลายทูลตอบว่า`,
        `ไม่เป็นอย่างนั้นพระเจ้าข้า`,
        `พระพุทธเจ้า`,
        `ทรงตรัสถามภิกษุทั้งหลายต่อไปว่า`,
        `ก็อีกอย่างหนึ่งเมื่อวิญญาณไม่มี`,
        `โดยประการทั้งปวง`,
        `เพราะวิญญาณดับนามรูปพึงปรากฎหรือหนอ`,
        `ภิกษุทั้งหลายทูลตอบว่า`,
        `ไม่เป็นอย่างนั้นพระเจ้าข้า`,
        `พระพุทธเจ้า`,
        `ทรงตรัสถามภิกษุทั้งหลายต่อไปว่า`,
        `ก็อีกอย่างหนึ่งเมื่อนามรูปไม่มี`,
        `โดยประการทั้งปวง`,
        `เพราะนามรูปดับสฬายตนะพึงปรากฎหรือหนอ`,
        `ภิกษุทั้งหลายทูลตอบว่า`,
        `ไม่เป็นอย่างนั้นพระเจ้าข้า`,
        `พระพุทธเจ้า`,
        `ทรงตรัสถามภิกษุทั้งหลายต่อไปว่า`,
        `ก็อีกอย่างหนึ่งเมื่อสฬายตนะไม่มี`,
        `โดยประการทั้งปวง`,
        `เพราะสฬายตนะดับผัสสะพึงปรากฏหรือหนอ`,
        `ภิกษุทั้งหลายทูลตอบว่า`,
        `ไม่เป็นอย่างนั้นพระเจ้าข้า`,
        `พระพุทธเจ้า`,
        `ทรงตรัสถามภิกษุทั้งหลายต่อไปว่า`,
        `ก็อีกอย่างหนึ่งเมื่อผัสสะไม่มี`,
        `โดยประการทั้งปวง`,
        `เพราะผัสสะดับเวทนาพึงปรากฏหรือหนอ`,
        `ภิกษุทั้งหลายทูลตอบว่า`,
        `ไม่เป็นอย่างนั้นพระเจ้าข้า`,
        `พระพุทธเจ้า`,
        `ทรงตรัสถามภิกษุทั้งหลายต่อไปว่า`,
        `ก็อีกอย่างหนึ่งเมื่อเวทนาไม่มี`,
        `โดยประการทั้งปวง`,
        `เพราะเวทนาดับตัณหาพึงปรากฏหรือหนอ`,
        `ภิกษุทั้งหลายทูลตอบว่า`,
        `ไม่เป็นอย่างนั้นพระเจ้าข้า`,
        `พระพุทธเจ้า`,
        `ทรงตรัสถามภิกษุทั้งหลายต่อไปว่า`,
        `ก็อีกอย่างหนึ่งเมื่อเวทนาไม่มี`,
        `โดยประการทั้งปวง`,
        `เพราะเวทนาดับตัณหาพึงปรากฏหรือหนอ`,
        `ภิกษุทั้งหลายทูลตอบว่า`,
        `ไม่เป็นอย่างนั้นพระเจ้าข้า`,
        `พระพุทธเจ้า`,
        `ทรงตรัสถามภิกษุทั้งหลายต่อไปว่า`,
        `ก็อีกอย่างหนึ่งเมื่อตัณหาไม่มี`,
        `โดยประการทั้งปวง`,
        `เพราะตัณหาดับอุปาทานพึงปรากฏหรือหนอ`,
        `ภิกษุทั้งหลายทูลตอบว่า`,
        `ไม่เป็นอย่างนั้นพระเจ้าข้า`,
        `พระพุทธเจ้า`,
        `ทรงตรัสถามภิกษุทั้งหลายต่อไปว่า`,
        `ก็อีกอย่างหนึ่งเมื่ออุปาทานไม่มี`,
        `โดยประการทั้งปวง`,
        `เพราะอุปาทานดับภพพึงปรากฏหรือหนอ`,
        `ภิกษุทั้งหลายทูลตอบว่า`,
        `ไม่เป็นอย่างนั้นพระเจ้าข้า`,
        `พระพุทธเจ้า`,
        `ทรงตรัสถามภิกษุทั้งหลายต่อไปว่า`,
        `ก็อีกอย่างหนึ่งเมื่อภพไม่มี`,
        `โดยประการทั้งปวง`,
        `เพราะภพดับชาติพึงปรากฏหรือหนอ`,
        `ภิกษุทั้งหลายควรตอบว่า`,
        `ไม่เป็นอย่างนั้นพระเจ้าข้า`,
        `พระพุทธเจ้า`,
        `ทรงตรัสถามภิกษุทั้งหลายต่อไปว่า`,
        `ก็อีกอย่างหนึ่งเมื่อชาติไม่มี`,
        `โดยประการทั้งปวง`,
        `เพราะชาติดับชราและมรณะพึงปรากฏหรือหนอ`,
        `ภิกษุทั้งหลายควรตอบว่า`,
        `ไม่เป็นอย่างนั้นพระเจ้าข้า`,
        `ดีละๆภิกษุทั้งหลาย`,
        `พวกเธอจงสำคัญ`,
        `จงเชื่อซึ่งข้อนั้นไว้อย่างนั้นเถิด`,
        `พวกเธอจงน้อมใจไปสู่ข้อนั้นอย่างนั้นเถิด`,
        `จงหมดความเคลือบแคลงสงสัยในข้อนั้นเถิด`,
        `นั่นเป็นที่สุดทุกข์`,
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
              <h1><div className="text">ปริวีมังสนสูตร</div></h1>
              
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
            
            <a className="space" href="/lesson0511" >
              <i className="fa-solid fa-angle-right fa-5x"></i>
            </a>
          </div>
      </section>
      </div>
    </>
  )
}

export default Lesson0510

export const Head = () => (
  <SEO title="Lesson0510" />
)