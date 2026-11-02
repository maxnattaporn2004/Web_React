import "./PromotionSection.css";

// Sample promotions — replace these four fields with real data later.
// Each card: id, image, title, content, link.
const promotions = [
  {
    id: 1,
    image: "https://placehold.co/600x400/FF7F00/ffffff?text=Promotion+1",
    title: "ส่วนลดพิเศษ ประกันภัยรถยนต์ชั้น 1",
    content:
      "รับส่วนลดทันทีเมื่อทำประกันภัยรถยนต์ชั้น 1 ผ่านเว็บไซต์ พร้อมความคุ้มครองเต็มรูปแบบ ฟรีค่าบริการช่วยเหลือฉุกเฉินตลอด 24 ชั่วโมง",
    link: "#/promotions",
  },
  {
    id: 2,
    image: "https://placehold.co/600x400/087FE7/ffffff?text=Promotion+2",
    title: "ผ่อนประกันภัย 0% นานสูงสุด 10 เดือน",
    content:
      "แบ่งจ่ายเบี้ยประกันภัยแบบไม่มีดอกเบี้ย ผ่อนสบาย ๆ รายเดือน ฟรีค่าธรรมเนียมทุกงวด สำหรับรถยนต์ทุกกลุ่ม",
    link: "#/promotions",
  },
  {
    id: 3,
    image: "https://placehold.co/600x400/2F3B52/ffffff?text=Promotion+3",
    title: "ต่ออายุประกันภัย รับฟรี บัตรเติมน้ำมัน",
    content:
      "ต่ออายุกรมธรรม์ครบทุกปีรับบัตรเติมน้ำมันมูลค่า 500 บาท ทันที ไม่มีเงื่อนไขเพิ่มเติม พร้อมของสมนาคุณพิเศษในปีต่อไป",
    link: "#/promotions",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/198754/ffffff?text=Promotion+4",
    title: "ประกันภัยรถยนต์ชั้น 3 ราคาเริ่มต้น 999 บาท",
    content:
      "คุ้มครองรถคู่กรณีในราคาสบายกระเป๋า เหมาะกับรถเก่าที่ไม่ต้องการความคุ้มครองมาก เปรียบเทียบราคาได้ทันทีใน 1 นาที",
    link: "#/promotions",
  },
];

// Main content of the Promotions page (the Navbar and Footer are
// rendered by App, so this component only holds the page content).
export default function PromotionSection() {
  return (
    <main className="promotion-section">
      <div className="promo-container">
        <h2 className="promo-title">โปรโมชั่น</h2>

        {/* One card per row, rendered from the array above. */}
        <div className="promo-list">
          {promotions.map((promo) => (
            <article className="promo-card" key={promo.id}>
              {/* Left: promotional image */}
              <div className="promo-image-wrap">
                <img
                  className="promo-image"
                  src={promo.image}
                  /* With real images, describe the picture here instead of "". */
                  alt=""
                />
              </div>

              {/* Right: title / description / Read More, stacked vertically */}
              <div className="promo-body">
                <h3 className="promo-card-title">{promo.title}</h3>
                <p className="promo-card-content">{promo.content}</p>

                <p className="promo-action">
                  {/* This is the card's only real link. Its ::after pseudo
                      element stretches over the entire card, so clicking
                      anywhere on the card opens the promotion too, while
                      keyboard users still get one clean tab stop. */}
                  <a className="promo-link" href={promo.link}>
                    Read More
                    {/* Hidden text so screen readers announce which
                        promotion the link opens. */}
                    <span className="promo-sr-only">: {promo.title}</span>
                  </a>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
