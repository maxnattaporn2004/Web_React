import "./Header.css";
import {useState} from 'react';
export default function Header() {
  const [menuOpen,setMenuOpen] = useState(false);

  return (
    <div className="container-header">
     
        <a href="#"><h1>Logo</h1></a>
        <button
          className="hamburger"
          onClick={()=> setMenuOpen(!menuOpen)}
          aria-label="เปิด/ปิดเมนู"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

      <ul className={menuOpen ? "active" : ""}>
        <li><a href="#" onClick={() => setMenuOpen(false)}>หน้าแรก</a></li>
        <li><a href="#/car-insurance" onClick={() => setMenuOpen(false)}>ประกันภัยรถยนต์</a></li>
        <li><a href="#/promotions" onClick={() => setMenuOpen(false)}>โปรโมชั่น</a></li>
        <li><a href="#/news" onClick={() => setMenuOpen(false)}>ข่าวสาร</a></li>
        <li><a href="#/contact" onClick={() => setMenuOpen(false)}>ติดต่อเรา</a></li>
        <li ><a href="#/login" className="btn-login" onClick={() => setMenuOpen(false)}>เข้าสู่ระบบ</a></li>
        
      </ul>
    </div>
  );
}
