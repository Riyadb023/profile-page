import { hasWhatsApp, site, whatsappLink, DEFAULT_MESSAGE } from "../data/site";
import { ArrowUp, GitHub, Instagram, Mail, WhatsApp } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  const { github, instagram, email } = site.contact;
  const external = { target: "_blank", rel: "noreferrer noopener" };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">RIYAD</span>
            <p>{site.role}</p>
            <p className="footer__pitch">
              Websites and digital tools for businesses. {site.city},{" "}
              {site.country}.
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
              {github && (
                <a href={github} {...external}>
                  <GitHub />
                  GitHub
                </a>
              )}
              {instagram && (
                <a href={instagram} {...external}>
                  <Instagram />
                  Instagram
                </a>
              )}
              {hasWhatsApp && (
                <a href={whatsappLink(DEFAULT_MESSAGE)} {...external}>
                  <WhatsApp />
                  WhatsApp
                </a>
              )}
              {email && (
                <a href={`mailto:${email}`}>
                  <Mail />
                  Email
                </a>
              )}
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
