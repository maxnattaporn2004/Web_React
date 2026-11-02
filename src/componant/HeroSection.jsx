import "./HeroSection.css";
import Carousel from "./Carousel";

export default function HeroSection() {
  return (
    <div className="container-hero">
      <div>
        <h1>ประกันรถยนต์กับ ดีน่า</h1>
        <p>
          การันตีที่นี่คุ้มสุด เช็คราคาประกันรถยนต์ได้ก่อน เบี้ย
          <br />
          ประกันแบ่งจ่ายได้ ไม่มีดอกเบี้ย ผ่อนง่าย จ่ายสบาย
          <br /> 0% นานสูงสุด 10 เดือน มีให้เลือกกว่า 20 บริษัท
          <br />
          ประกันชั้นนำ
        </p>
      </div>

      <Carousel />
    </div>
  );
}
