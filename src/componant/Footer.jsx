import "./Footer.css";

export default function Footer() {
  // Current year, computed dynamically at render time.
  const currentYear = new Date().getFullYear();

  // Same five destinations as the Header nav.
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Car Insurance", href: "#" },
    { label: "Promotions", href: "#" },
    { label: "News & Articles", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  // PLACEHOLDERS — replace with the real contact details when available.
  const contactInfo = [
    {
      id: "phone",
      text: "0X-XXX-XXXX",
      href: null,
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
      id: "email",
      text: "info@example.com",
      href: null,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m22 6-10 7L2 6"
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
      id: "address",
      text: "123/45 Example Street, Bangkok 10110",
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
  ];

  // PLACEHOLDER social links — href="#" until the real profiles are known.
  const socialLinks = [
    {
      id: "facebook",
      label: "Facebook",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: "instagram",
      label: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="17.3" cy="6.7" r="1.15" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "youtube",
      label: "YouTube",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect
            x="2"
            y="5"
            width="20"
            height="14"
            rx="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path d="M10 9.4 15.5 12 10 14.6z" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "twitter",
      label: "Twitter",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* 1. Company information */}
          <div className="footer-col">
            <h2 className="footer-heading">Company Information</h2>
            <p className="footer-brand">Logo</p>
            <p className="footer-desc">
              Compare car insurance from more than 20 leading insurers in one
              place. Fast quotes, flexible instalments and friendly support —
              the simple way to protect your vehicle.
            </p>
          </div>

          {/* 2. Quick links */}
          <nav className="footer-col" aria-label="Quick links">
            <h2 className="footer-heading">Quick Links</h2>
            <ul className="footer-list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a className="footer-link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* 3. Contact information */}
          <div className="footer-col">
            <h2 className="footer-heading">Contact Information</h2>
            <ul className="footer-list footer-contact">
              {contactInfo.map((item) => (
                <li key={item.id} className="footer-contact-item">
                  <span className="footer-contact-icon">{item.icon}</span>
                  <span className="footer-contact-text">{item.text}</span>
                </li>
              ))}
            </ul>
            <p className="footer-note">Placeholder contact details.</p>
          </div>

          {/* 4. Social media */}
          <div className="footer-col">
            <h2 className="footer-heading">Social Media</h2>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  className="footer-social-link"
                  href="#"
                  aria-label={social.label}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider + copyright */}
      <div className="footer-bottom">
        <div className="footer-container">
          <p className="footer-copy">
            © {currentYear} Logo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
