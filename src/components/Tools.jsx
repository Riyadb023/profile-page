import { site } from "../data/site";
import Reveal from "./Reveal";

export default function Tools() {
  return (
    <section className="section tools" id="tools">
      <div className="container tools__inner">
        <Reveal direction="none">
          <span className="eyebrow">Technology</span>
          <h2 className="h3 tools__title">Tools I work with</h2>
        </Reveal>

        <Reveal className="tools__list" delay={80} direction="none">
          {site.tools.map((tool) => (
            <span className="tool" key={tool}>
              {tool}
            </span>
          ))}
        </Reveal>

        <Reveal className="tools__note" delay={120} direction="none">
          <p>
            Technologies are secondary here — what matters is that your site loads fast, is easy to
            use on a phone and does the job your business needs it to do.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
