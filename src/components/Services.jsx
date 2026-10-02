import { site } from "../data/site";
import { ArrowUpRight, Check, WhatsApp } from "./Icons";
import Reveal from "./Reveal";
import WaLink from "./WaLink";
import { useLanguage } from "../i18n";

export default function Services() {
  const { t, lang } = useLanguage();
  const services = lang === "fr" ? [
    { title: "Sites web pour entreprises", desc: "Des sites modernes conçus autour des besoins réels d’une entreprise.", includes: ["Interface responsive et mobile-first", "Coordonnées et informations claires", "Bases du SEO", "Mise en ligne et lancement"] },
    { title: "Applications web", desc: "Des interfaces et workflows sur mesure pour les activités professionnelles.", includes: ["Interfaces React", "Formulaires et workflows", "Expériences connectées aux API"] },
    { title: "Backend & API", desc: "Logique serveur, API REST et fonctionnalités connectées à une base de données.", includes: ["Node.js et Express", "API REST", "PostgreSQL / SQL"] },
    { title: "Produits digitaux", desc: "Menus, catalogues, parcours de commande et outils destinés aux clients.", includes: ["Menus et catalogues digitaux", "Commande via WhatsApp", "Expériences interactives"] },
  ] : [
    { title: "Business websites", desc: "Modern websites designed around a business’s actual needs.", includes: ["Responsive, mobile-first layout", "Clear contact and location info", "SEO basics", "Deployment and launch"] },
    { title: "Web applications", desc: "Custom interfaces and workflows for business operations.", includes: ["React interfaces", "Forms and workflows", "API-connected experiences"] },
    { title: "Backend & APIs", desc: "Server-side logic, REST APIs and database-backed features.", includes: ["Node.js and Express", "REST APIs", "PostgreSQL / SQL"] },
    { title: "Digital products", desc: "Menus, catalogs, ordering flows and customer-facing tools.", includes: ["Digital menus and catalogs", "WhatsApp ordering", "Interactive customer experiences"] },
  ];
  return (
    <section
      className="section section--rule"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="container">
        <Reveal className="sec-head" direction="none">
          <div className="sec-head__title">
            <span className="eyebrow">{t.services.eyebrow}</span>
            <h2 className="h2" id="services-title">
              {t.services.title}
            </h2>
          </div>
          <div className="sec-head__aside">
            <p className="lede">
              {t.services.subtitle}
            </p>
          </div>
        </Reveal>

        <ul className="services">
          {services.map((service, i) => (
            <Reveal
              as="li"
              key={service.title}
              delay={i * 70}
              direction="none"
              className="service"
            >
              <span className="service__n">{String(i + 1).padStart(2, "0")}</span>
              <div className="service__main">
                <h3 className="h3 service__title">
                  {service.title}
                  <ArrowUpRight className="service__arrow" />
                </h3>
                <p className="service__desc">{service.desc}</p>
                {service.note && (
                  <p className="service__note">{service.note}</p>
                )}
              </div>
              <ul className="service__list">
                {service.includes.map((item) => (
                  <li key={item}>
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>

        <Reveal className="services__foot" delay={80}>
          <p className="lede">
            {t.services.ask}
          </p>
          <WaLink
            className="btn btn--ghost"
            message="Hi Riyad, I have a question about a website for my business."
          >
            <WhatsApp />
            {t.common.askQuestion}
          </WaLink>
        </Reveal>
      </div>
    </section>
  );
}
