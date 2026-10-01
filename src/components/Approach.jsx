import { site } from "../data/site";
import Reveal from "./Reveal";

export default function Approach() {
  return (
    <section className="section section--rule" id="approach">
      <div className="container">
        <Reveal className="sec-head" direction="none">
          <div className="sec-head__title">
            <span className="eyebrow">Approach</span>
            <h2 className="h2">From idea to launch</h2>
          </div>
          <div className="sec-head__aside">
            <p className="lede">
              A simple process, so you always know what is happening and what
              comes next.
            </p>
          </div>
        </Reveal>

        <Reveal className="approach__track" direction="none" aria-hidden="true">
          <i />
        </Reveal>

        <ol className="steps">
          {site.steps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 90} className="step">
              <span className="step__n">{step.n}</span>
              <h3 className="h3 step__title">{step.title}</h3>
              <p className="step__desc">{step.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
