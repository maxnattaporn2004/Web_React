// ── Shared news dataset ───────────────────────────────────────────────
// Originally defined inline inside InformationHero.jsx. It lives here now
// so InformationHero AND the News section render the exact same articles
// from ONE source — never a second copy of the data.
//
// Fields:
//   id          unique key
//   img         thumbnail URL
//   content     the article title (same field name InformationHero uses)
//   description short summary, added for the News section cards
//   category    used by the News section filter
//   link        where "Read More" opens (placeholder until real article
//               pages exist — replace with the real article URLs)

export const newsArticles = [
  {
    id: 1,
    img: "https://www.deenabroker.com/Management/image/image_article/imgs90908473720210922_171259.jpg",
    content: "ประกันรถยนต์5 ข้อควรรู้ เช็ครถให้ พร้อมเมื่อเข้าสู่ฤดูฝน",
    description:
      "5 ข้อควรรู้ในการตรวจเช็คสภาพรถให้พร้อมก่อนเข้าสู่ฤดูฝน เพื่อความปลอดภัยและลดความเสี่ยงในการเกิดอุบัติเหตุบนท้องถนน",
    category: "เคล็ดลับ",
    link: "#/news",
  },
  {
    id: 2,
    img: "https://www.deenabroker.com/Management/image/image_article/imgs130099780420210922_171311.jpg",
    content: "รู้หรือไม่ ! ประกันรถยนต์ ทําไมต้องมี ค่าเสียหายส่วนแรก?",
    description:
      "ทำความเข้าใจว่าค่าเสียหายส่วนแรกคือ ทำไมประกันรถยนต์จึงเรียกเก็บ และมีผลกระทบต่อเบี้ยประกันภัยของคุณอย่างไร",
    category: "ความคุ้มครอง",
    link: "#/news",
  },
  {
    id: 3,
    img: "https://www.deenabroker.com/Management/image/image_article/imgs185221168320210922_171324.jpg",
    content: "ประกันรถยนต์ซ่อมอู่ & ซ่อมห้าง ต่าง กันอย่างไร",
    description:
      "เปรียบเทียบความแตกต่างระหว่างการซ่อมอู่และซ่อมห้าง แบบไหนเหมาะกับรถของคุณ และแต่ละแบบคุ้มครองอย่างไรบ้าง",
    category: "การซ่อม",
    link: "#/news",
  },
  {
    id: 4,
    img: "https://www.deenabroker.com/Management/image/image_article/imgs8144960320210922_171333.jpg",
    content: "ประกันรถยนต์ เช็คให้ชัวร์ ประกันชั้น 1 คุ้มครองอย่างไรบ้าง?",
    description:
      "รายละเอียดความคุ้มครองของประกันภัยรถยนต์ชั้น 1 ว่าคุ้มครองอะไรได้บ้าง และมีข้อยกเว้นใดที่ควรรู้ก่อนต่ออายุกรมธรรม์",
    category: "ความคุ้มครอง",
    link: "#/news",
  },
  {
    id: 5,
    img: "https://www.deenabroker.com/Management/image/image_article/imgs6719224020210912_021541.jpg",
    content: "ขับรถชนของหลวง แบบไม่ได้ตั้งใจ ประกันรถจ่ายเท่าไหร่?",
    description:
      "หากขับรถชนของหลวงโดยไม่ได้ตั้งใจ ประกันภัยรถยนต์จะคุ้มครองและจ่ายค่าเสียหายให้มากน้อยเพียงใด",
    category: "การเคลม",
    link: "#/news",
  },
  {
    id: 6,
    img: "https://www.deenabroker.com/Management/image/image_article/imgs6719224020210912_021541.jpg",
    content: "ขับรถชนของหลวง แบบไม่ได้ตั้งใจ ประกันรถจ่ายเท่าไหร่?",
    description:
      "หากขับรถชนของหลวงโดยไม่ได้ตั้งใจ ประกันภัยรถยนต์จะคุ้มครองและจ่ายค่าเสียหายให้มากน้อยเพียงใด",
    category: "การเคลม",
    link: "#/news",
  },
];
