import { projects } from "../data/projects";
import { DEFAULT_MESSAGE, site, whatsappLink } from "../data/site";
import { BrowserFrame, PhoneFrame } from "./Frames";
import { mocks } from "./mocks";
import Reveal from "./Reveal";
import { ArrowDown, ArrowUpRight, WhatsApp } from "./Icons";

const featured = projects[0];
const Featured = mocks[featured.mock];

/** Thin strip under the hero: what Riyad builds, each one jumping to services. */
const bandItems = [
  { label: "Restaurant websites", href: "#services" },
  { label: "Digital menus", href: "#services" },
  { label: "WhatsApp ordering", href: "#services" },
  { label: "Business websites", href: "#services" },
];

export default function Hero() {
  return (
    <>
      <section className="hero" id="top">
        <div className="container hero__grid">
          <div className="hero__copy">
            <Reveal direction="none">
              <p className="hero__status">
                <span className="dot-live" aria-hidden="true" />
                {site.availability}
              </p>
            </Reveal>

            <Reveal delay={70}>
              <h1 className="h1 hero__title">{site.hero.headline}</h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="lede hero__lede">{site.hero.supporting}</p>
            </Reveal>

            <Reveal delay={210} className="hero__actions">
              <a className="btn btn--primary" href="#work">
                View my work
                <ArrowDown />
              </a>
              <a
                className="btn btn--ghost"
                href={whatsappLink(DEFAULT_MESSAGE)}
                target="_blank"
                rel="noreferrer noopener"
              >
                <WhatsApp />
                Let's talk
              </a>
            </Reveal>

            <Reveal delay={280} className="hero__meta">
              <span>{site.city}, Algeria</span>
              <span className="hero__meta-sep" aria-hidden="true" />
              <span>React · JavaScript · CSS</span>
              <span className="hero__meta-sep" aria-hidden="true" />
              <span>Restaurants &amp; small businesses</span>
            </Reveal>
          </div>

          <Reveal className="hero__visual" delay={160} direction="none">
            <div className="hero__shot">
              <BrowserFrame
                address={featured.address}
                theme={featured.theme}
                label={`Screenshot of ${featured.name}, an interactive restaurant website with menu and WhatsApp ordering`}
              >
                <Featured.Site />
              </BrowserFrame>

              <div className="hero__phone">
                <PhoneFrame
                  theme={featured.theme}
                  label={`${featured.name} on mobile — menu and order summary`}
                >
                  <Featured.Mobile />
                </PhoneFrame>
              </div>
            </div>

            <div className="hero__caption">
              <span className="micro">
                Featured — {featured.n} {featured.name} · {featured.category}
              </span>
              <a className="tlink" href={`#${featured.slug}`}>
                Read the case
                <ArrowUpRight />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="band">
        <div className="container band__inner">
          {bandItems.map((item) => (
            <a className="band__item" key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
          <span className="band__item band__item--static">
            <span className="dot-live" aria-hidden="true" />
            Taking new projects
          </span>
        </div>
      </div>
    </>
  );
}
