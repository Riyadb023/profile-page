import { site, whatsappLink, DEFAULT_MESSAGE } from "../data/site";
import Reveal from "./Reveal";
import { ArrowUpRight, Check, WhatsApp } from "./Icons";

export default function Services() {
  return (
    <section className="section section--rule" id="services">
      <div className="container">
        <Reveal className="sec-head" direction="none">
          <div className="sec-head__title">
            <span className="eyebrow">Services</span>
            <h2 className="h2">What I build</h2>
          </div>
          <div className="sec-head__aside">
            <p className="lede">
              Four things most of my clients ask for. Each one is delivered live on your own domain,
              working on every phone.
            </p>
          </div>
        </Reveal>

        <ul className="services">
          {site.services.map((service, i) => (
            <Reveal as="li" key={service.n} delay={i * 70} direction="none" className="service">
              <span className="service__n">{service.n}</span>
              <div className="service__main">
                <h3 className="h3 service__title">
                  {service.title}
                  <ArrowUpRight className="service__arrow" />
                </h3>
                <p className="service__desc">{service.desc}</p>
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
            Not sure which one your business needs? Describe what you do and I'll tell you honestly
            what would help — and what wouldn't.
          </p>
          <a
            className="btn btn--ghost"
            href={whatsappLink(DEFAULT_MESSAGE)}
            target="_blank"
            rel="noreferrer noopener"
          >
            <WhatsApp />
            Ask a question
          </a>
        </Reveal>
      </div>
    </section>
  );
}
