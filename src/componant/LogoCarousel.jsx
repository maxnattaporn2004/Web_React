import "./LogoCarousel.css";
import { useState } from "react";

export default function LogoCarousel() {
  // Mockup logos — replace with real company assets later.
  // Each placeholder is 200 × 200 px.
  const logos = [
    { id: 1, img: "https://placehold.co/200x200/FF7F00/ffffff?text=Insure+1", alt: "โลโก้บริษัทประกันภัย 1" },
    { id: 2, img: "https://placehold.co/200x200/087FE7/ffffff?text=Insure+2", alt: "โลโก้บริษัทประกันภัย 2" },
    { id: 3, img: "https://placehold.co/200x200/2F3B52/ffffff?text=Insure+3", alt: "โลโก้บริษัทประกันภัย 3" },
    { id: 4, img: "https://placehold.co/200x200/6C757D/ffffff?text=Insure+4", alt: "โลโก้บริษัทประกันภัย 4" },
    { id: 5, img: "https://placehold.co/200x200/198754/ffffff?text=Insure+5", alt: "โลโก้บริษัทประกันภัย 5" },
    { id: 6, img: "https://placehold.co/200x200/DC3545/ffffff?text=Insure+6", alt: "โลโก้บริษัทประกันภัย 6" },
    { id: 7, img: "https://placehold.co/200x200/6F42C1/ffffff?text=Insure+7", alt: "โลโก้บริษัทประกันภัย 7" },
    { id: 8, img: "https://placehold.co/200x200/FD7E14/ffffff?text=Insure+8", alt: "โลโก้บริษัทประกันภัย 8" },
    { id: 9, img: "https://placehold.co/200x200/20C997/ffffff?text=Insure+9", alt: "โลโก้บริษัทประกันภัย 9" },
    { id: 10, img: "https://placehold.co/200x200/0D6EFD/ffffff?text=Insure+10", alt: "โลโก้บริษัทประกันภัย 10" },
    { id: 11, img: "https://placehold.co/200x200/343A40/ffffff?text=Insure+11", alt: "โลโก้บริษัทประกันภัย 11" },
    { id: 12, img: "https://placehold.co/200x200/E83E8C/ffffff?text=Insure+12", alt: "โลโก้บริษัทประกันภัย 12" },
  ];

  const logosPerPage = 4;
  const totalPages = Math.ceil(logos.length / logosPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section className="logo-carousel">
      <h2 className="title-logo">บริษัทประกันภัยพันธมิตร</h2>

      <div className="logo-carousel-viewport">
        <div
          className="logo-carousel-track"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, page) => (
            <div className="logo-page" key={page}>
              {logos
                .slice(page * logosPerPage, page * logosPerPage + logosPerPage)
                .map((logo) => (
                  <div className="logo-card" key={logo.id}>
                    <img src={logo.img} alt={logo.alt} loading="lazy" />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      <div className="pagination-dots">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`pagination-dot ${
              currentPage === index ? "active" : ""
            }`}
            onClick={() => setCurrentPage(index)}
            aria-label={`ไปหน้าที่ ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
