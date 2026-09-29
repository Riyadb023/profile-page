import { PHOTOS } from "../../data/media";
import { StatusBar } from "../Frames";
import { Pin, Clock } from "../Icons";

/** Café Sahel — desktop */
export function CafeSahelSite() {
  return (
    <div className="mk-page mk-cafe">
      <header className="mk-nav">
        <div className="mk-logo">Café Sahel</div>
        <nav className="mk-navlinks">
          <span className="is-on">Menu</span>
          <span>The café</span>
          <span>Hours</span>
          <span>Find us</span>
        </nav>
        <span className="mk-btn mk-btn--ghost mk-btn--sm">Call us</span>
      </header>

      <section className="mk-hero">
        <div className="mk-hero__copy">
          <span className="mk-kicker">Specialty coffee · Hydra</span>
          <h2 className="mk-h1">Slow coffee, fast mornings.</h2>
          <p className="mk-p">
            Espresso bar, filter brews and pastries baked each morning. Seating for twenty, takeaway
            from 07:30.
          </p>
          <div className="mk-meta">
            <span>
              <Clock />
              Open today · 07:30 – 20:00
            </span>
            <span>
              <Pin />
              12 Rue des Frères Bouadou, Hydra
            </span>
          </div>
        </div>
        <div className="mk-media mk-media--hero">
          <img src={PHOTOS.cafeHero} alt="" loading="lazy" decoding="async" />
        </div>
      </section>

      <section className="mk-sec">
        <div className="mk-grid mk-grid--2" style={{ gap: "3em", alignItems: "start" }}>
          <div>
            <div className="mk-sec__head">
              <h3 className="mk-h2">On the menu</h3>
            </div>
            <div className="mk-hours">
              <div className="mk-hours__row">
                <span>Espresso</span>
                <span className="mk-leader" />
                <span>150 DA</span>
              </div>
              <div className="mk-hours__row">
                <span>Flat white</span>
                <span className="mk-leader" />
                <span>280 DA</span>
              </div>
              <div className="mk-hours__row">
                <span>V60 filter — Ethiopia</span>
                <span className="mk-leader" />
                <span>350 DA</span>
              </div>
              <div className="mk-hours__row">
                <span>Croissant au beurre</span>
                <span className="mk-leader" />
                <span>180 DA</span>
              </div>
              <div className="mk-hours__row">
                <span>Cheesecake of the day</span>
                <span className="mk-leader" />
                <span>420 DA</span>
              </div>
            </div>
          </div>
          <div>
            <div className="mk-sec__head">
              <h3 className="mk-h2">Opening hours</h3>
            </div>
            <div className="mk-hours">
              <div className="mk-hours__row is-open">
                <span>Monday – Thursday</span>
                <span>07:30 — 20:00</span>
              </div>
              <div className="mk-hours__row">
                <span>Friday</span>
                <span>09:00 — 20:00</span>
              </div>
              <div className="mk-hours__row">
                <span>Saturday</span>
                <span>09:00 — 22:00</span>
              </div>
              <div className="mk-hours__row">
                <span>Sunday</span>
                <span>09:00 — 18:00</span>
              </div>
            </div>
            <div className="mk-media" style={{ aspectRatio: "16/7", marginTop: "1.6em" }}>
              <img src={PHOTOS.cafeA} alt="" loading="lazy" decoding="async" />
              <span className="mk-badge">Hydra · 4 min walk from the square</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="mk-foot">
        <span>© 2025 Café Sahel</span>
        <span>12 Rue des Frères Bouadou, Hydra — Alger</span>
        <span>0555 00 00 00</span>
      </footer>
    </div>
  );
}

/** Café Sahel — mobile */
export function CafeSahelMobile() {
  return (
    <div className="mk-page mk-cafe">
      <StatusBar />
      <header className="mk-nav">
        <div className="mk-logo">Café Sahel</div>
        <span className="mk-btn mk-btn--ghost mk-btn--sm">Call</span>
      </header>

      <div className="mk-mhero">
        <img src={PHOTOS.cafeB} alt="" loading="lazy" decoding="async" />
        <div className="mk-mhero__over">
          <span className="mk-kicker">Specialty coffee</span>
          <span className="mk-h1">Hydra, since 2019.</span>
        </div>
      </div>

      <div className="mk-sec" style={{ padding: "1.5em 1.6em" }}>
        <div className="mk-sec__head" style={{ marginBottom: "0.8em" }}>
          <h3 className="mk-h2">Menu</h3>
        </div>
        <div className="mk-hours">
          <div className="mk-hours__row">
            <span>Espresso</span>
            <span>150 DA</span>
          </div>
          <div className="mk-hours__row">
            <span>Flat white</span>
            <span>280 DA</span>
          </div>
          <div className="mk-hours__row">
            <span>V60 filter</span>
            <span>350 DA</span>
          </div>
          <div className="mk-hours__row">
            <span>Croissant</span>
            <span>180 DA</span>
          </div>
        </div>
      </div>

      <div className="mk-sec" style={{ padding: "1.2em 1.6em" }}>
        <div className="mk-sec__head" style={{ marginBottom: "0.6em" }}>
          <h3 className="mk-h2">Hours</h3>
        </div>
        <div className="mk-hours">
          <div className="mk-hours__row is-open">
            <span>Mon – Thu</span>
            <span>07:30 — 20:00</span>
          </div>
          <div className="mk-hours__row">
            <span>Fri – Sun</span>
            <span>09:00 — 20:00</span>
          </div>
        </div>
      </div>

      <footer className="mk-foot" style={{ padding: "1.2em 1.6em", flexDirection: "column", alignItems: "flex-start", gap: "0.5em" }}>
        <span>12 Rue des Frères Bouadou</span>
        <span>Hydra · Alger</span>
      </footer>
    </div>
  );
}
