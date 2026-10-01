import { useEffect, useState } from "react";

import { site } from "../data/site";
import { useActiveSection, useBodyLock, useScrolled } from "../hooks/useNav";
import { Close, GitHub, Instagram, Menu, WhatsApp } from "./Icons";
import WaLink from "./WaLink";

const SECTION_IDS = ["top", "work", "about", "contact"];

export default function Nav() {
  const scrolled = useScrolled(24);
  const active = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);

  useBodyLock(open);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 900 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <header className={`nav${scrolled || open ? " is-stuck" : ""}`}>
        <div className="container nav__inner">
          <a className="nav__logo" href="#top" onClick={() => setOpen(false)}>
            <span className="nav__mark" aria-hidden="true">
              R
            </span>
            <span className="nav__name">RIYAD</span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={
                  active === item.href.slice(1) ? "is-active" : undefined
                }
                aria-current={
                  active === item.href.slice(1) ? "true" : undefined
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav__cta">
            <WaLink className="btn btn--primary btn--sm">
              <WhatsApp />
              Let's talk
            </WaLink>
            <button
              type="button"
              className="nav__burger"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`nav__panel${open ? " is-open" : ""}`}
        aria-hidden={!open}
        inert={!open}
      >
        <nav className="nav__panel-links" aria-label="Mobile">
          {site.nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ "--d": `${60 + i * 55}ms` }}
              tabIndex={open ? 0 : -1}
            >
              <span className="micro">{`0${i + 1}`}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__panel-foot">
          <WaLink
            className="btn btn--wa"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            <WhatsApp />
            Let's talk
          </WaLink>
          <div className="nav__panel-social">
            {site.contact.github && (
              <a
                href={site.contact.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                tabIndex={open ? 0 : -1}
              >
                <GitHub />
              </a>
            )}
            {site.contact.instagram && (
              <a
                href={site.contact.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                tabIndex={open ? 0 : -1}
              >
                <Instagram />
              </a>
            )}
          </div>
          <p className="micro">Web Developer · Algiers, Algeria</p>
        </div>
      </div>
    </>
  );
}
