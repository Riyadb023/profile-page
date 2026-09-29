import { PHOTOS } from "../../data/media";
import { StatusBar } from "../Frames";
import { WhatsApp, Clock, Pin, Plus } from "../Icons";

/** Pizza Ora — desktop */
export function PizzaOraSite() {
  return (
    <div className="mk-page mk-pizza">
      <header className="mk-nav">
        <div className="mk-logo">
          <span className="mk-logo__mark">PO</span>
          Pizza Ora
        </div>
        <nav className="mk-navlinks">
          <span className="is-on">Menu</span>
          <span>Our story</span>
          <span>Locations</span>
          <span>Contact</span>
        </nav>
        <span className="mk-btn mk-btn--wa mk-btn--sm">
          <WhatsApp />
          Order
        </span>
      </header>

      <section className="mk-hero">
        <div className="mk-hero__copy">
          <span className="mk-kicker">Wood-fired · Bab Ezzouar</span>
          <h2 className="mk-h1">Pizza made to order, ready when you are.</h2>
          <p className="mk-p">
            Browse the menu, build your order and send it to us on WhatsApp. Delivery across Algiers,
            seven days a week.
          </p>
          <div className="mk-actions">
            <span className="mk-btn">Build your order</span>
            <span className="mk-btn mk-btn--ghost">See the menu</span>
          </div>
          <div className="mk-meta">
            <span>
              <Clock />
              11:00 – 23:30
            </span>
            <span>
              <Pin />
              Bab Ezzouar, Alger
            </span>
          </div>
        </div>
        <div className="mk-media mk-media--hero">
          <img src={PHOTOS.pizzaHero} alt="" loading="lazy" decoding="async" />
          <span className="mk-badge">Open now · 25 min</span>
        </div>
      </section>

      <section className="mk-sec">
        <div className="mk-sec__head">
          <h3 className="mk-h2">The menu</h3>
          <div className="mk-chips">
            <span className="mk-chip is-on">All</span>
            <span className="mk-chip">Pizza</span>
            <span className="mk-chip">Sides</span>
            <span className="mk-chip">Drinks</span>
          </div>
        </div>
        <div className="mk-grid mk-grid--3">
          <article className="mk-card">
            <div className="mk-card__img">
              <img src={PHOTOS.pizzaHero} alt="" loading="lazy" decoding="async" />
            </div>
            <div className="mk-card__body">
              <div className="mk-card__row">
                <span className="mk-name">Margherita</span>
                <span className="mk-price">1 200 DA</span>
              </div>
              <p className="mk-desc">Tomato, fior di latte, fresh basil, olive oil.</p>
              <span className="mk-add">
                <Plus />
                Add
              </span>
            </div>
          </article>
          <article className="mk-card">
            <div className="mk-card__img">
              <img src={PHOTOS.pizzaA} alt="" loading="lazy" decoding="async" />
            </div>
            <div className="mk-card__body">
              <div className="mk-card__row">
                <span className="mk-name">Quattro Formaggi</span>
                <span className="mk-price">1 650 DA</span>
              </div>
              <p className="mk-desc">Mozzarella, gorgonzola, parmesan, emmental.</p>
              <span className="mk-add">
                <Plus />
                Add
              </span>
            </div>
          </article>
          <article className="mk-card">
            <div className="mk-card__img">
              <img src={PHOTOS.pizzaB} alt="" loading="lazy" decoding="async" />
            </div>
            <div className="mk-card__body">
              <div className="mk-card__row">
                <span className="mk-name">Prosciutto</span>
                <span className="mk-price">1 750 DA</span>
              </div>
              <p className="mk-desc">Ham, mozzarella, tomato, oregano.</p>
              <span className="mk-add">
                <Plus />
                Add
              </span>
            </div>
          </article>
        </div>
      </section>

      <div className="mk-orderbar">
        <div className="mk-orderbar__info">
          <strong>2 items · Delivery</strong>
          <span>Margherita ×1, Frites maison ×1</span>
        </div>
        <span className="mk-total">2 150 DA</span>
        <span className="mk-btn mk-btn--wa">
          <WhatsApp />
          Send order
        </span>
      </div>
    </div>
  );
}

/** Pizza Ora — mobile ordering flow */
export function PizzaOraMobile() {
  return (
    <div className="mk-page mk-pizza">
      <StatusBar />
      <header className="mk-nav">
        <div className="mk-logo">
          <span className="mk-logo__mark">PO</span>
          Pizza Ora
        </div>
        <span className="mk-btn mk-btn--wa mk-btn--sm">
          <WhatsApp />2
        </span>
      </header>

      <div className="mk-mhero">
        <img src={PHOTOS.pizzaHero} alt="" loading="lazy" decoding="async" />
        <div className="mk-mhero__over">
          <span className="mk-kicker">Wood-fired</span>
          <span className="mk-h1">Order in two minutes.</span>
        </div>
      </div>

      <div className="mk-mchips">
        <span className="mk-chip is-on">All</span>
        <span className="mk-chip">Pizza</span>
        <span className="mk-chip">Sides</span>
      </div>

      <div className="mk-mlist">
        <div className="mk-mitem">
          <span className="mk-mitem__thumb">
            <img src={PHOTOS.pizzaHero} alt="" loading="lazy" decoding="async" />
          </span>
          <span className="mk-mitem__body">
            <strong>Margherita</strong>
            <span>Tomato, mozzarella, basil</span>
          </span>
          <span className="mk-mitem__price">1 200 DA</span>
        </div>
        <div className="mk-mitem">
          <span className="mk-mitem__thumb">
            <img src={PHOTOS.pizzaA} alt="" loading="lazy" decoding="async" />
          </span>
          <span className="mk-mitem__body">
            <strong>Quattro Formaggi</strong>
            <span>Four cheeses, cream base</span>
          </span>
          <span className="mk-mitem__price">1 650 DA</span>
        </div>
        <div className="mk-mitem">
          <span className="mk-mitem__thumb">
            <img src={PHOTOS.pizzaB} alt="" loading="lazy" decoding="async" />
          </span>
          <span className="mk-mitem__body">
            <strong>Prosciutto</strong>
            <span>Ham, mozzarella, oregano</span>
          </span>
          <span className="mk-mitem__price">1 750 DA</span>
        </div>
      </div>

      <div className="mk-orderbar">
        <div className="mk-orderbar__info">
          <strong>2 150 DA</strong>
          <span>2 items</span>
        </div>
        <span className="mk-btn mk-btn--wa mk-btn--sm">
          <WhatsApp />
          Order
        </span>
      </div>
    </div>
  );
}
