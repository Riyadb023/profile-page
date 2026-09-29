import { PHOTOS } from "../../data/media";
import { StatusBar } from "../Frames";
import { WhatsApp, Plus } from "../Icons";

/** Crousty Takawa — desktop */
export function CroustyTakawaSite() {
  return (
    <div className="mk-page mk-crousty">
      <header className="mk-nav">
        <div className="mk-logo">
          <span className="mk-logo__mark">CT</span>
          Crousty Takawa
        </div>
        <nav className="mk-navlinks">
          <span className="is-on">Combos</span>
          <span>Menu</span>
          <span>Hours</span>
          <span>Contact</span>
        </nav>
        <span className="mk-btn mk-btn--sm">
          <WhatsApp />
          Order
        </span>
      </header>

      <section className="mk-hero">
        <div className="mk-hero__copy">
          <span className="mk-kicker">Takaway · Open till 01:00</span>
          <h2 className="mk-h1">Crispy chicken, three taps away.</h2>
          <p className="mk-p">
            Pick a combo, choose your side, send it to WhatsApp. We start frying when your message
            lands.
          </p>
          <div className="mk-actions">
            <span className="mk-btn">Order a combo</span>
            <span className="mk-btn mk-btn--ghost">Full menu</span>
          </div>
        </div>
        <div className="mk-media mk-media--hero">
          <img src={PHOTOS.chickenHero} alt="" loading="lazy" decoding="async" />
          <span className="mk-badge">Combo S — 1 350 DA</span>
        </div>
      </section>

      <section className="mk-sec">
        <div className="mk-sec__head">
          <h3 className="mk-h2">Today's combos</h3>
          <div className="mk-chips">
            <span className="mk-chip is-on">Combos</span>
            <span className="mk-chip">Chicken</span>
            <span className="mk-chip">Sides</span>
            <span className="mk-chip">Drinks</span>
          </div>
        </div>
        <div className="mk-grid mk-grid--2" style={{ gap: "1.8em" }}>
          <article className="mk-deal">
            <span className="mk-deal__tag">Most ordered</span>
            <span className="mk-deal__thumb">
              <img src={PHOTOS.chickenA} alt="" loading="lazy" decoding="async" />
            </span>
            <span className="mk-item__body">
              <span className="mk-item__row">
                <span className="mk-name">Combo Crousty</span>
                <span className="mk-leader" />
                <span className="mk-price">1 350 DA</span>
              </span>
              <span className="mk-desc">3 crispy tenders, fries, sauce, drink.</span>
              <span className="mk-add">
                <Plus />
                Add to order
              </span>
            </span>
          </article>
          <article className="mk-deal">
            <span className="mk-deal__tag">For two</span>
            <span className="mk-deal__thumb">
              <img src={PHOTOS.chickenB} alt="" loading="lazy" decoding="async" />
            </span>
            <span className="mk-item__body">
              <span className="mk-item__row">
                <span className="mk-name">Duo Takawa</span>
                <span className="mk-leader" />
                <span className="mk-price">2 400 DA</span>
              </span>
              <span className="mk-desc">Half chicken, large fries, two drinks.</span>
              <span className="mk-add">
                <Plus />
                Add to order
              </span>
            </span>
          </article>
        </div>
      </section>

      <section className="mk-sec">
        <div className="mk-sec__head">
          <h3 className="mk-h2">Order in three taps</h3>
        </div>
        <div className="mk-steps">
          <div className="mk-step">
            <b>01</b>
            <span className="mk-name">Pick your combo</span>
            <p>Everything is priced in dinars, no surprises.</p>
          </div>
          <div className="mk-step">
            <b>02</b>
            <span className="mk-name">Choose pickup or delivery</span>
            <p>Delivery zones and times shown before you send.</p>
          </div>
          <div className="mk-step">
            <b>03</b>
            <span className="mk-name">Send on WhatsApp</span>
            <p>Your order arrives formatted and ready to confirm.</p>
          </div>
        </div>
      </section>

      <div className="mk-orderbar">
        <div className="mk-orderbar__info">
          <strong>1 item · Pickup</strong>
          <span>Combo Crousty ×1, extra sauce</span>
        </div>
        <span className="mk-total">1 350 DA</span>
        <span className="mk-btn mk-btn--wa">
          <WhatsApp />
          Send order
        </span>
      </div>
    </div>
  );
}

/** Crousty Takawa — mobile */
export function CroustyTakawaMobile() {
  return (
    <div className="mk-page mk-crousty">
      <StatusBar />
      <header className="mk-nav">
        <div className="mk-logo">
          <span className="mk-logo__mark">CT</span>
          Crousty
        </div>
        <span className="mk-btn mk-btn--sm">Cart · 1</span>
      </header>

      <div className="mk-mhero">
        <img src={PHOTOS.chickenHero} alt="" loading="lazy" decoding="async" />
        <div className="mk-mhero__over">
          <span className="mk-kicker">Open till 01:00</span>
          <span className="mk-h1">Crispy. Every time.</span>
        </div>
      </div>

      <div className="mk-mchips">
        <span className="mk-chip is-on">Combos</span>
        <span className="mk-chip">Chicken</span>
        <span className="mk-chip">Sides</span>
      </div>

      <div className="mk-mlist">
        <div className="mk-mitem">
          <span className="mk-mitem__thumb">
            <img src={PHOTOS.chickenA} alt="" loading="lazy" decoding="async" />
          </span>
          <span className="mk-mitem__body">
            <strong>Combo Crousty</strong>
            <span>3 tenders, fries, drink</span>
          </span>
          <span className="mk-mitem__price">1 350 DA</span>
        </div>
        <div className="mk-mitem">
          <span className="mk-mitem__thumb">
            <img src={PHOTOS.chickenB} alt="" loading="lazy" decoding="async" />
          </span>
          <span className="mk-mitem__body">
            <strong>Duo Takawa</strong>
            <span>Half chicken, large fries</span>
          </span>
          <span className="mk-mitem__price">2 400 DA</span>
        </div>
        <div className="mk-mitem">
          <span className="mk-mitem__thumb">
            <img src={PHOTOS.chickenHero} alt="" loading="lazy" decoding="async" />
          </span>
          <span className="mk-mitem__body">
            <strong>Fries maison</strong>
            <span>With sauce of your choice</span>
          </span>
          <span className="mk-mitem__price">350 DA</span>
        </div>
      </div>

      <div className="mk-orderbar">
        <div className="mk-orderbar__info">
          <strong>1 350 DA</strong>
          <span>1 item</span>
        </div>
        <span className="mk-btn mk-btn--wa mk-btn--sm">
          <WhatsApp />
          Order
        </span>
      </div>
    </div>
  );
}
