import "./VehicleFilter.css";

// Two dropdown fields shown side by side on desktop (stacked on mobile).
export default function VehicleFilter() {
  return (
    <div className="vehicle-filter">
      {/* ── Vehicle type ─────────────────────────────────────────── */}
      <div className="vf-field">
        <label className="vf-label" htmlFor="vf-vehicle-type">
          {/* Orange car icon */}
          <svg
            className="vf-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M5.5 11 7 7.6C7.3 6.9 8 6.5 8.8 6.5h6.4c.8 0 1.5.4 1.8 1.1L18.5 11"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="3"
              y="11"
              width="18"
              height="6"
              rx="2"
              fill="currentColor"
            />
            <circle cx="7.5" cy="17.5" r="1.8" fill="currentColor" />
            <circle cx="16.5" cy="17.5" r="1.8" fill="currentColor" />
          </svg>
          ประเภทรถ
        </label>
        <div className="vf-select-wrap">
          <select className="vf-select" id="vf-vehicle-type" defaultValue="sedan-2">
            <option value="sedan-1">รถเก๋ง กลุ่ม1</option>
            <option value="sedan-2">รถเก๋ง กลุ่ม2</option>
            <option value="sedan-3">รถเก๋ง กลุ่ม3</option>
            <option value="pickup-1">รถกระบะ กลุ่ม1</option>
            <option value="pickup-2">รถกระบะ กลุ่ม2</option>
            <option value="van">รถตู้</option>
            <option value="motorcycle">รถมอเตอร์ไซค์</option>
          </select>
        </div>
      </div>

      {/* ── Usage type ───────────────────────────────────────────── */}
      <div className="vf-field">
        <label className="vf-label" htmlFor="vf-usage-type">
          {/* Orange delivery-truck icon */}
          <svg
            className="vf-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <rect
              x="1.5"
              y="6"
              width="13"
              height="10"
              rx="1.5"
              fill="currentColor"
            />
            <path
              d="M14.5 9h3.6l2.9 3.2V16h-6.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="6" cy="17.5" r="1.8" fill="currentColor" />
            <circle cx="17.5" cy="17.5" r="1.8" fill="currentColor" />
          </svg>
          ประเภทการใช้งาน
        </label>
        <div className="vf-select-wrap">
          <select
            className="vf-select"
            id="vf-usage-type"
            defaultValue="personal"
          >
            <option value="personal">รถส่วนบุคคล</option>
            <option value="commercial">รถเชิงพาณิชย์</option>
            <option value="corporate">รถบริษัท</option>
            <option value="hire">รถให้เช่า</option>
          </select>
        </div>
      </div>
    </div>
  );
}
