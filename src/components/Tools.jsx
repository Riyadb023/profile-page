import { site } from "../data/site";
import Reveal from "./Reveal";

export default function Tools() {
  return (
    <section className="section tools" id="tools" aria-labelledby="tools-title">
      <div className="container tools__inner">
        <Reveal direction="none">
          <span className="eyebrow">Tech stack</span>
          <h2 className="h3 tools__title" id="tools-title">
            Tools I work with
          </h2>
        </Reveal>

        <Reveal className="stackgrid" delay={80} direction="none">
          {site.stack.map((g) => (
            <div className="stackgrid__group" key={g.group}>
              <h3 className="micro stackgrid__label">{g.group}</h3>
              <ul className="tools__list">
                {g.items.map((tool) => (
                  <li className="tool" key={tool}>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <Reveal className="tools__note" delay={120} direction="none">
          <p>
            Frontend is where I'm strongest. Backend and database work is newer
            for me, and I'm building it up through real projects.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
