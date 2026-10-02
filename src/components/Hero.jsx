import { STATUS, building, selectedProjects } from "../data/projects";
import { site } from "../data/site";
import { ArrowDown, WhatsApp } from "./Icons";
import Reveal from "./Reveal";
import WaLink from "./WaLink";
import { useLanguage } from "../i18n";

export default function Hero() {
  const { t, lang } = useLanguage();
  const hero = lang === "fr" ? { status: "Disponible pour des projets", headline: "Développeur web full-stack & créateur de solutions digitales", supporting: "Je construis des sites web, applications web et outils digitaux pour les entreprises — de l’expérience client aux systèmes backend qui la font fonctionner." } : site;
  return (
    <>
      <section className="hero" id="top" aria-label={t.hero.intro}>
        <div className="container hero__grid">
          <div className="hero__copy">
            <Reveal direction="none">
              <p className="hero__status">
                <span className="dot-live" aria-hidden="true" />
                {hero.status}
              </p>
            </Reveal>

            <Reveal delay={70}>
              <h1 className="h1 hero__title">{lang === "fr" ? hero.headline : site.hero.headline}</h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="lede hero__lede">{lang === "fr" ? hero.supporting : site.hero.supporting}</p>
            </Reveal>

            <Reveal delay={210} className="hero__actions">
              <a className="btn btn--primary" href="#work">
                {t.common.viewWork}
                <ArrowDown />
              </a>
              <WaLink className="btn btn--ghost">
                <WhatsApp />
                {t.common.talk}
              </WaLink>
            </Reveal>

            <Reveal delay={280} className="hero__meta">
              <span>
                {lang === "fr" ? "Alger, Algérie" : `${site.city}, ${site.country}`}
              </span>
              <span className="hero__meta-sep" aria-hidden="true" />
              <span>{t.hero.tech}</span>
              <span className="hero__meta-sep" aria-hidden="true" />
              <span>{t.hero.remote}</span>
            </Reveal>
          </div>

          <Reveal className="hero__visual" delay={160} direction="none">
            <div className="hindex">
              <p className="micro hindex__head">{t.hero.projects}</p>
              <ul className="hindex__list">
                {selectedProjects.map((p, i) => (
                  <li key={p.slug}>
                    <a className="hindex__row" href={`#${p.slug}`}>
                      <span className="hindex__n">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="hindex__main">
                        <span className="hindex__name">{p.name}</span>
                        <span className="hindex__type">{lang === "fr" && p.fr ? p.fr.type : p.type}</span>
                      </span>
                      <span className="hindex__status">{t.status[p.status]}</span>
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
                      <span className="hindex__type">{lang === "fr" ? "Application web" : building.type}</span>
                    </span>
                    <span className="hindex__status">
                      {t.status[building.status]}
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
          {(lang === "fr" ? ["Sites web pour entreprises","Applications web","Backend & API","Outils digitaux"] : site.band.map(x => x.label)).map((label, i) => (
            <a className="band__item" key={label} href="#services">
              {label}
            </a>
          ))}
          <span className="band__item band__item--static">
            {lang === "fr" ? "Alger, Algérie" : `${site.city}, ${site.country}`}
          </span>
        </div>
      </div>
    </>
  );
}
