import { site } from "../data/site";
import Reveal from "./Reveal";
import { ArrowRight } from "./Icons";

export default function About() {
  return (
    <section className="section section--rule about" id="about">
      <div className="container about__grid">
        <div className="about__main">
          <Reveal direction="none">
            <span className="eyebrow">About</span>
          </Reveal>
          <Reveal delay={60} direction="none">
            <h2 className="h2 about__title">A little about me</h2>
          </Reveal>
          <Reveal delay={110} direction="none">
            <p className="body-l about__intro">{site.about.intro}</p>
          </Reveal>
          <Reveal delay={160} direction="none">
            <p className="lede about__second">{site.about.second}</p>
          </Reveal>
          <Reveal delay={210} direction="none">
            <a className="tlink about__link" href="#contact">
              Work with me
              <ArrowRight />
            </a>
          </Reveal>
        </div>

        <aside className="about__side">
          <Reveal className="portrait" direction="none">
            <span className="portrait__mark" aria-hidden="true">
              R
            </span>
            <div className="portrait__meta">
              <span className="micro">Riyad</span>
              <p>
                Frontend Developer
                <br />
                {site.city}, Algeria
              </p>
            </div>
          </Reveal>

          <Reveal className="facts" delay={70} direction="none">
            {site.about.facts.map((fact) => (
              <div className="facts__row" key={fact.k}>
                <span className="micro">{fact.k}</span>
                <span>{fact.v}</span>
              </div>
            ))}
          </Reveal>

          <Reveal className="focus" delay={120} direction="none">
            <span className="micro">What I focus on</span>
            <ul>
              {site.about.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </aside>
      </div>
    </section>
  );
}
