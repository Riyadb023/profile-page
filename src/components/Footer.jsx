import { site, whatsappLink, DEFAULT_MESSAGE } from "../data/site";
import { ArrowUp, GitHub, Instagram, WhatsApp } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">RIYAD</span>
            <p>{site.tagline}</p>
            <p className="footer__pitch">
              Websites, digital menus and WhatsApp ordering for restaurants and small businesses.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            <div className="footer__col">
              <span className="micro">Navigate</span>
              {site.nav.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
            <div className="footer__col">
              <span className="micro">Elsewhere</span>
              <a href={site.contact.github} target="_blank" rel="noreferrer noopener">
                <GitHub />
                GitHub
              </a>
              <a href={site.contact.instagram} target="_blank" rel="noreferrer noopener">
                <Instagram />
                Instagram
              </a>
              <a href={whatsappLink(DEFAULT_MESSAGE)} target="_blank" rel="noreferrer noopener">
                <WhatsApp />
                WhatsApp
              </a>
            </div>
          </nav>

          <a className="footer__top-link" href="#top">
            Back to top
            <ArrowUp />
          </a>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span>Designed &amp; built in {site.city}.</span>
        </div>
      </div>
    </footer>
  );
}
