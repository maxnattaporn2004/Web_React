import "./CarInsurance.css";
import VehicleFilter from "./VehicleFilter";
import InsuranceType from "./InsuranceType";

// Main page content for "ประกันภัยรถยนต์" (Car Insurance).
// The NavigationBar (Header) and Footer are rendered by App,
// so this component only contains the page's own content.
export default function CarInsurance() {
  return (
    <main className="car-insurance">
      {/* ── Hero: cream background with a curved bottom edge ─────────── */}
      <section className="ci-hero">
        <div className="ci-container">
          <h1 className="ci-title">
            {/* Orange document icon (same style as the other orange icons) */}
            <svg
              className="ci-title-icon"
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
                d="M12.6 9.3v.9c-1 .2-1.7.9-1.7 1.8h1.5c0-.4.3-.7.8-.7.4 0 .7.3.7.6 0 .4-.3.6-1 .9-.9.3-1.5.8-1.5 1.8 0 1 .8 1.7 1.9 1.8v.9h-1.3v-.9c-1.1-.2-1.9-.9-1.9-1.9h1.5c0 .5.4.8.9.8.5 0 .8-.2.8-.6s-.3-.6-1-.9c-.8-.3-1.4-.8-1.4-1.7 0-1 .8-1.6 1.8-1.8v-.9h1.3z"
                fill="#ffffff"
              />
            </svg>
            ประกันภัยรถยนต์
          </h1>
        </div>

        {/* White wave that creates the curved bottom edge */}
        <svg
          className="ci-hero-wave"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M0,0 L1440,0 L1440,18 C1160,86 900,28 640,50 C460,65 220,74 0,58 Z"
            fill="#ffffff"
          />
        </svg>
      </section>

      {/* ── Filter + insurance type selection ───────────────────────── */}
      <section className="ci-body">
        <div className="ci-container">
          {/* Two dropdowns: vehicle type + usage type */}
          <VehicleFilter />

          {/* Selectable insurance type buttons */}
          <InsuranceType />
        </div>
      </section>
    </main>
  );
}
