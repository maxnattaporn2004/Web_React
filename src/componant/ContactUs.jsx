import "./ContactUs.css";

// Company address — used both for the text and the Google Maps query.
const ADDRESS =
  "44/170 บริษัทลักษณ์ เพชรเกษม 69 ถนน เพชรเกษม แขวงหนองแขม เขตหนองแขม กรุงเทพมหานคร 10160";

// Embed URL without an API key: `q=` + `output=embed` is the plain
// Google Maps embed form. The address is URL-encoded for safety.
const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7752.92121508374!2d100.371858!3d13.69053!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2bdf4ab0be637%3A0xe303a34210c7f3a9!2z4Lib4Lij4Li04LiN4Lil4Lix4LiB4Lip4LiT4LmMIOC5gOC4nuC4iuC4o-C5gOC4geC4qeC4oSA2OQ!5e0!3m2!1sth!2sth!4v1793636448575!5m2!1sth!2sth";

// Contact rows: icon + value (+ optional link).
// Icons follow the same 24×24 stroke style used in the Footer.
const contactItems = [
  {
    id: "address",
    value: ADDRESS,
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="10"
          r="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
  {
    id: "phone",
    value: "0950658887",
    href: "tel:0950658887",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "line",
    value: "@deena",
    href: "https://line.me/R/ti/p/@deena",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M12 3C6.9 3 2.8 6.4 2.8 10.6c0 3.8 3.4 7 8 7.6.3.1.7.2.8.5.1.3.1.7 0 1l-.1.8c0 .3-.2 1.2 1.1.7 1.3-.6 7-4.1 9.5-7.1 1.7-1.9 2.6-3.9 2.6-5.5C24.6 6.4 20.5 3 15.2 3h-3.2z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M7.4 9v4h2M11 9v4M13 13V9l3 4V9M17.6 9H16m1.6 2h-1.6m1.6 2h-1.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

// Contact Us section: cream band with a wavy bottom edge and the blue
// title, then a centred card split into the contact details (cream) and
// a Google Maps embed. Rendered above the Footer on the home page.
export default function ContactUs() {
  return (
    <section className="contact-us" id="contact">
      {/* ── Cream band: title + wavy bottom edge + blue blob ────────── */}
      <div className="contact-top">
        <div className="contact-container">
          {/* Title: orange location pin + blue Thai text */}
          <h2 className="contact-title">
            <svg
              className="contact-title-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M12 2.5c-3.6 0-6.5 2.9-6.5 6.5 0 4.9 6.5 12.5 6.5 12.5s6.5-7.6 6.5-12.5c0-3.6-2.9-6.5-6.5-6.5z"
                fill="currentColor"
              />
              <circle cx="12" cy="9" r="2.4" fill="#ffffff" />
            </svg>
            ช่องทางการติดต่อ
          </h2>
        </div>

        {/* White wave = the curved bottom edge of the cream band */}
        <svg
          className="contact-wave"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M0,0 L1440,0 L1440,24 C1200,74 980,30 720,48 C470,66 220,80 0,62 Z"
            fill="#ffffff"
          />
        </svg>

        {/* Decorative blue blob in the top-right corner */}
        <span className="contact-blob" aria-hidden="true" />
      </div>

      {/* ── Main card ──────────────────────────────────────────────── */}
      <div className="contact-container">
        <div className="contact-card">
          {/* Left: company + contact information on a cream background */}
          <div className="contact-info">
            <h3 className="contact-brand">
              <span className="contact-brand-icon" aria-hidden="true">
                {/* Orange building icon */}
                <svg viewBox="0 0 24 24" focusable="false">
                  <path
                    d="M3 21h18M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M15 21V9h2a2 2 0 0 1 2 2v10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 7h3M8.5 11h3M8.5 15h3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              ดีน่า
            </h3>

            <ul className="contact-list">
              {contactItems.map((item) => {
                const content = (
                  <>
                    <span className="contact-item-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <span className="contact-item-value">{item.value}</span>
                  </>
                );

                return (
                  <li className="contact-item" key={item.id}>
                    {/* Phone + LINE are tappable links, the rest plain text */}
                    {item.href ? (
                      <a
                        className="contact-item-link"
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: responsive Google Maps embed, fills the column */}
          <div className="contact-map">
            <iframe
              className="contact-map-frame"
              src={MAP_SRC}
              title="ตำแหน่งบริษัท ดีน่า บน Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
