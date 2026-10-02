import { site } from "../data/site";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n";

export default function Tools() {
  const { t } = useLanguage();
  return (
    <section className="section tools" id="tools" aria-labelledby="tools-title">
      <div className="container tools__inner">
        <Reveal direction="none">
          <span className="eyebrow">{t.tools.eyebrow}</span>
          <h2 className="h3 tools__title" id="tools-title">
            {t.tools.title}
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
            {t.tools.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
