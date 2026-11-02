import "./CustomerReviews.css";
// Shared carousel primitives reused (not duplicated) from sibling components:
// .btn-next-back + .carousel-row  ->  Carousel.css
// .pagination-dot / .pagination-dots  ->  InformationHero.css
import "./Carousel.css";
import "./InformationHero.css";
import { useState } from "react";

export default function CustomerReviews() {
  // Sample reviews — swap these four fields for real data later.
  const reviews = [
    {
      id: 1,
      image: "https://i.pravatar.cc/200?img=12",
      name: "สมชาย ใจดี",
      text: "เช็คเบี้ยประกันง่ายมาก ได้ราคาที่ถูกกว่าเจ้าเดิมเยอะ ทีมงานตอบเร็วและให้คำแนะนำดีมาก ต่ออายุรอบนี้สะดวกสุด ๆ ครับ",
    },
    {
      id: 2,
      image: "https://i.pravatar.cc/200?img=32",
      name: "นางสาวสมหญิง รักดี",
      text: "แจ้งเคลมเร็วมาก ไม่ต้องรอนานเหมือนที่เคยเจอ รถเข้าอู่ได้ทันที ช่วยเหลือตลอดกระบวนการจนเสร็จ ประทับใจจริง ๆ ค่ะ",
    },
    {
      id: 3,
      image: "https://i.pravatar.cc/200?img=53",
      name: "วิชัย ทรัพย์มาก",
      text: "ผ่อนประกันได้หลายงวด ไม่มีดอกเบี้ย แบ่งจ่ายสบายกระเป๋า เจ้าหน้าที่ตามงานให้ทุกขั้นตอน บริการดีเยี่ยมครับ",
    },
    {
      id: 4,
      image: "https://i.pravatar.cc/200?img=45",
      name: "อนุชา พงษ์ดี",
      text: "สมัครผ่านหน้าเว็บได้เลย ไม่ต้องเดินทาง อนุมัติไว กรมธรรม์ส่งถึงบ้านเร็วมาก สะดวกกว่าที่คิดไว้มาก ๆ ครับ",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = reviews.length;

  function nextSlide() {
    if (currentSlide === totalSlides - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  function prevSlide() {
    if (currentSlide === 0) {
      setCurrentSlide(totalSlides - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  return (
    <section className="review-carousel">
      <h2 className="title-reviews">Customer Reviews</h2>

      <div className="carousel-row">
        <button
          className="btn-next-back"
          onClick={prevSlide}
          aria-label="รีวิวก่อนหน้า"
        >
          <span aria-hidden="true">◀</span>
        </button>

        {/* One slide = one review. The track shifts one full width per
            index, so two reviews can never share a slide. */}
        <div className="review-viewport">
          <div
            className="review-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {reviews.map((review) => (
              <div className="review-slide" key={review.id}>
                <div className="review-card">
                  <img
                    className="review-avatar"
                    src={review.image}
                    alt={review.name}
                  />
                  <p className="review-name">{review.name}</p>
                  <p className="review-text">{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="btn-next-back"
          onClick={nextSlide}
          aria-label="รีวิวถัดไป"
        >
          <span aria-hidden="true">▶</span>
        </button>
      </div>

      <div className="pagination-dots">
        {reviews.map((review, index) => (
          <button
            key={review.id}
            className={`pagination-dot ${
              currentSlide === index ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`ไปรีวิวที่ ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
