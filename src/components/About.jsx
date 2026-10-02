import { site } from "../data/site";
import { ArrowRight } from "./Icons";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n";

export default function About() {
  const { t, lang } = useLanguage();
  const copy = lang === "fr" ? { intro: "Je suis Riyad, développeur web basé à Alger. Je construis des sites web, applications web et outils digitaux pour les entreprises, du frontend au backend.", second: "Mon travail jusqu’ici est auto-initié : concepts pour entreprises, applications web et projets de développement. Je travaille sur l’ensemble du produit avec React côté frontend et Node.js, Express et PostgreSQL côté backend, avec un objectif simple : créer des systèmes pratiques qui répondent à de vrais problèmes métier." } : { intro: "I’m Riyad, a web developer based in Algiers, Algeria. I build websites, web applications and digital tools for businesses across the frontend and backend.", second: "My work so far is self-initiated: business concepts, web applications and smaller development projects. My work spans React on the frontend and Node.js, Express and PostgreSQL on the backend, with a focus on practical systems that solve real business problems." };
  return (
    <section
      className="section section--rule about"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="container about__grid">
        <div className="about__main">
          <Reveal direction="none">
            <span className="eyebrow">{t.about.eyebrow}</span>
          </Reveal>
          <Reveal delay={60} direction="none">
            <h2 className="h2 about__title" id="about-title">
              {t.about.title}
            </h2>
          </Reveal>
          <Reveal delay={110} direction="none">
            <p className="body-l about__intro">{copy.intro}</p>
          </Reveal>
          <Reveal delay={160} direction="none">
            <p className="lede about__second">{copy.second}</p>
          </Reveal>
          <Reveal delay={210} direction="none">
            <a className="tlink about__link" href="#contact">
              {t.common.workWithMe}
              <ArrowRight />
            </a>
          </Reveal>
        </div>

        <aside className="about__side" aria-label={t.about.quick}>
          <Reveal className="portrait" direction="none">
            <span className="portrait__mark" aria-hidden="true">
              R
            </span>
            <div className="portrait__meta">
              <span className="micro">Riyad</span>
              <p>
                Full-Stack Web Developer
                <br />
                {site.city}, {site.country}
              </p>
            </div>
          </Reveal>

          <Reveal className="facts" delay={70} direction="none">
            {(lang === "fr" ? [{ k: "Basé à", v: "Alger, Algérie" }, { k: "Construit", v: "Sites, apps web, outils digitaux" }, { k: "Stack", v: "React, Node.js, Express, PostgreSQL" }, { k: "Focus", v: "Produits web pour entreprises" }] : site.about.facts).map((fact) => (
              <div className="facts__row" key={fact.k}>
                <span className="micro">{fact.k}</span>
                <span>{fact.v}</span>
              </div>
            ))}
          </Reveal>

          <Reveal className="focus" delay={120} direction="none">
            <span className="micro">{t.about.focus}</span>
            <ul>
              {(lang === "fr" ? ["Sites web pour entreprises", "Applications web", "Backend & API", "Outils connectés à une base de données"] : site.about.focus).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}
