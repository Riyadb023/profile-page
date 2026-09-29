import { PHOTOS } from "../../data/media";
import { StatusBar } from "../Frames";
import { WhatsApp, Plus } from "../Icons";

/** Sushi Hero DZ — desktop */
export function SushiHeroSite() {
  return (
    <div className="mk-page mk-sushi">
      <header className="mk-nav">
        <div className="mk-logo">
          <span className="mk-logo__mark">SH</span>
          Sushi Hero
        </div>
        <nav className="mk-navlinks">
          <span className="is-on">Menu</span>
          <span>Combos</span>
          <span>Delivery zones</span>
          <span>Contact</span>
        </nav>
        <span className="mk-btn mk-btn--sm">Order now</span>
      </header>

      <section className="mk-hero">
        <div className="mk-sushi__banner" style={{ backgroundImage: `url(${PHOTOS.sushiHero})` }}>
          <span className="mk-kicker">Delivery across Algiers</span>
          <h2 className="mk-h1" style={{ color: "#f7faf8" }}>
            Fresh sushi, rolled to order.
          </h2>
          <p className="mk-p" style={{ color: "rgba(240,245,242,.72)" }}>
            Choose your pieces, build a combo and send the order straight to our WhatsApp.
          </p>
          <div className="mk-actions">
            <span className="mk-btn">
              <WhatsApp />
              Start an order
            </span>
            <span className="mk-btn mk-btn--ghost" style={{ color: "#f1f5f2" }}>
              See combos
            </span>
          </div>
        </div>
      </section>

      <div className="mk-zones">
        <b>Delivery</b>
        <span>Hydra</span>
        <i />
        <span>El Biar</span>
        <i />
        <span>Bab Ezzouar</span>
        <i />
        <span>Alger Centre</span>
        <i />
        <span>Dely Brahim</span>
      </div>

      <section className="mk-sec">
        <div className="mk-sec__head">
          <h3 className="mk-h2">Popular tonight</h3>
          <div className="mk-chips">
            <span className="mk-chip is-on">All</span>
            <span className="mk-chip">Maki</span>
            <span className="mk-chip">Nigiri</span>
            <span className="mk-chip">Platters</span>
          </div>
        </div>
        <div className="mk-grid mk-grid--4">
          <article className="mk-card">
            <div className="mk-card__img">
              <img src={PHOTOS.sushiA} alt="" loading="lazy" decoding="async" />
            </div>
            <div className="mk-card__body">
              <div className="mk-card__row">
                <span className="mk-name">Salmon Nigiri ×4</span>
              </div>
              <div className="mk-card__row">
                <span className="mk-price">1 400 DA</span>
                <span className="mk-add">
                  <Plus />
                </span>
              </div>
            </div>
          </article>
          <article className="mk-card">
            <div className="mk-card__img">
              <img src={PHOTOS.sushiB} alt="" loading="lazy" decoding="async" />
            </div>
            <div className="mk-card__body">
              <div className="mk-card__row">
                <span className="mk-name">Chef's Selection</span>
              </div>
              <div className="mk-card__row">
                <span className="mk-price">3 900 DA</span>
                <span className="mk-add">
                  <Plus />
                </span>
              </div>
            </div>
          </article>
          <article className="mk-card">
            <div className="mk-card__img">
              <img src={PHOTOS.sushiHero} alt="" loading="lazy" decoding="async" />
            </div>
            <div className="mk-card__body">
              <div className="mk-card__row">
                <span className="mk-name">Hero Platter 24</span>
              </div>
              <div className="mk-card__row">
                <span className="mk-price">5 200 DA</span>
                <span className="mk-add">
                  <Plus />
                </span>
              </div>
            </div>
          </article>
          <article className="mk-card">
            <div className="mk-card__img">
              <img src={PHOTOS.sushiA} alt="" loading="lazy" decoding="async" />
            </div>
            <div className="mk-card__body">
              <div className="mk-card__row">
                <span className="mk-name">Spicy Tuna Roll</span>
              </div>
              <div className="mk-card__row">
                <span className="mk-price">1 650 DA</span>
                <span className="mk-add">
                  <Plus />
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <div className="mk-orderbar">
        <div className="mk-orderbar__info">
          <strong>3 items · Delivery to Hydra</strong>
          <span>Hero Platter 24 ×1, Salmon Nigiri ×2</span>
        </div>
        <span className="mk-total">6 600 DA</span>
        <span className="mk-btn mk-btn--wa">
          <WhatsApp />
          Send order
        </span>
      </div>
    </div>
  );
}

/** Sushi Hero DZ — mobile */
export function SushiHeroMobile() {
  return (
    <div className="mk-page mk-sushi">
      <StatusBar />
      <header className="mk-nav">
        <div className="mk-logo">
          <span className="mk-logo__mark">SH</span>
          Sushi Hero
        </div>
        <span className="mk-btn mk-btn--sm">Cart · 3</span>
      </header>

      <div className="mk-mhero">
        <img src={PHOTOS.sushiHero} alt="" loading="lazy" decoding="async" />
        <div className="mk-mhero__over">
          <span className="mk-kicker">Delivery · Algiers</span>
          <span className="mk-h1">Rolled to order.</span>
        </div>
      </div>

      <div className="mk-mchips">
        <span className="mk-chip is-on">All</span>
        <span className="mk-chip">Maki</span>
        <span className="mk-chip">Nigiri</span>
      </div>

      <div className="mk-mlist">
        <div className="mk-mitem">
          <span className="mk-mitem__thumb">
            <img src={PHOTOS.sushiA} alt="" loading="lazy" decoding="async" />
          </span>
          <span className="mk-mitem__body">
            <strong>Salmon Nigiri ×4</strong>
            <span>Fresh salmon, sushi rice</span>
          </span>
          <span className="mk-mitem__price">1 400 DA</span>
        </div>
        <div className="mk-mitem">
          <span className="mk-mitem__thumb">
            <img src={PHOTOS.sushiB} alt="" loading="lazy" decoding="async" />
          </span>
          <span className="mk-mitem__body">
            <strong>Chef's Selection</strong>
            <span>12 pieces, chef's choice</span>
          </span>
          <span className="mk-mitem__price">3 900 DA</span>
        </div>
        <div className="mk-mitem">
          <span className="mk-mitem__thumb">
            <img src={PHOTOS.sushiHero} alt="" loading="lazy" decoding="async" />
          </span>
          <span className="mk-mitem__body">
            <strong>Hero Platter 24</strong>
            <span>For 3–4 people</span>
          </span>
          <span className="mk-mitem__price">5 200 DA</span>
        </div>
      </div>

      <div className="mk-orderbar">
        <div className="mk-orderbar__info">
          <strong>6 600 DA</strong>
          <span>3 items</span>
        </div>
        <span className="mk-btn mk-btn--wa mk-btn--sm">
          <WhatsApp />
          Order
        </span>
      </div>
    </div>
  );
}
