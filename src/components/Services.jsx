import { site } from "../data/site";
import { ArrowUpRight, Check, WhatsApp } from "./Icons";
import Reveal from "./Reveal";
import WaLink from "./WaLink";

export default function Services() {
  return (
    <section
      className="section section--rule"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="container">
        <Reveal className="sec-head" direction="none">
          <div className="sec-head__title">
            <span className="eyebrow">Services</span>
            <h2 className="h2" id="services-title">
              What I build
            </h2>
          </div>
          <div className="sec-head__aside">
            <p className="lede">
              What I can build for a business today, and the areas where I'm
              still growing.
            </p>
          </div>
        </Reveal>

        <ul className="services">
          {site.services.map((service, i) => (
            <Reveal
              as="li"
              key={service.n}
              delay={i * 70}
              direction="none"
              className="service"
            >
              <span className="service__n">{service.n}</span>
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
            Not sure what your business needs? Describe what you do and I'll
            tell you honestly what would help, and what wouldn't.
          </p>
          <WaLink
            className="btn btn--ghost"
            message="Hi Riyad, I have a question about a website for my business."
          >
            <WhatsApp />
            Ask a question
          </WaLink>
        </Reveal>
      </div>
    </section>
  );
}
