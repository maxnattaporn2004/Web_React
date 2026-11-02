import "./InsuranceType.css";
import { useState } from "react";

// Insurance options — add or remove items here; the buttons render from
// this array, so no markup needs to be copied.
const INSURANCE_OPTIONS = [
  { id: "class-1-plus", label: "ชั้น1 รวมพระ" },
  { id: "por-ror-bor", label: "พ.ร.บ.รถยนต์" },
  { id: "class-3-plus", label: "3 พลัส" },
  { id: "class-2-plus", label: "2 พลัส" },
  { id: "class-3", label: "ชั้น 3" },
];

export default function InsuranceType() {
  // Which insurance type is currently selected.
  const [selectedId, setSelectedId] = useState(INSURANCE_OPTIONS[0].id);

  return (
    <div className="insurance-type">
      <h2 className="it-label">
        {/* Orange document icon */}
        <svg
          className="it-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
            fill="currentColor"
          />
          <path d="M15 2v5h5" fill="#ffffff" />
          <path
            d="M8 12h8M8 15h8M8 18h5"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        ประเภทประกัน
      </h2>

      {/* One pill button per option, rendered from the array above. */}
      <div className="it-options" role="group" aria-label="ประเภทประกัน">
        {INSURANCE_OPTIONS.map((option) => {
          const isSelected = option.id === selectedId;

          return (
            <button
              key={option.id}
              type="button"
              className={`it-pill${isSelected ? " is-selected" : ""}`}
              aria-pressed={isSelected}
              onClick={() => setSelectedId(option.id)}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
