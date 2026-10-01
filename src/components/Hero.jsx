import { STATUS, building, selectedProjects } from "../data/projects";
import { site } from "../data/site";
import { ArrowDown, WhatsApp } from "./Icons";
import Reveal from "./Reveal";
import WaLink from "./WaLink";

export default function Hero() {
  return (
    <>
      <section className="hero" id="top" aria-label="Introduction">
        <div className="container hero__grid">
          <div className="hero__copy">
            <Reveal direction="none">
              <p className="hero__status">
                <span className="dot-live" aria-hidden="true" />
                {site.status}
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
              <WaLink className="btn btn--ghost">
                <WhatsApp />
                Let's talk
              </WaLink>
            </Reveal>

            <Reveal delay={280} className="hero__meta">
              <span>
                {site.city}, {site.country}
              </span>
              <span className="hero__meta-sep" aria-hidden="true" />
              <span>HTML · CSS · JavaScript · React</span>
              <span className="hero__meta-sep" aria-hidden="true" />
              <span>Growing into full-stack</span>
            </Reveal>
          </div>

          <Reveal className="hero__visual" delay={160} direction="none">
            <div className="hindex">
              <p className="micro hindex__head">Projects</p>
              <ul className="hindex__list">
                {selectedProjects.map((p, i) => (
                  <li key={p.slug}>
                    <a className="hindex__row" href={`#${p.slug}`}>
                      <span className="hindex__n">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="hindex__main">
                        <span className="hindex__name">{p.name}</span>
                        <span className="hindex__type">{p.type}</span>
                      </span>
                      <span className="hindex__status">{STATUS[p.status]}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a className="hindex__row" href="#work">
                    <span className="hindex__n">
                      <span className="dot-live" aria-hidden="true" />
                    </span>
                    <span className="hindex__main">
                      <span className="hindex__name">{building.name}</span>
                      <span className="hindex__type">{building.type}</span>
                    </span>
                    <span className="hindex__status">
                      {STATUS[building.status]}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="band">
        <div className="container band__inner">
          {site.band.map((item) => (
            <a className="band__item" key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
          <span className="band__item band__item--static">
            {site.city}, {site.country}
          </span>
        </div>
      </div>
    </>
  );
}
