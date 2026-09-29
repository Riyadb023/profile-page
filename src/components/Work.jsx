import { useState } from "react";

import { projects } from "../data/projects";
import ProjectCase from "./ProjectCase";
import ProjectPreview from "./ProjectPreview";
import Reveal from "./Reveal";

export default function Work() {
  const [activeSlug, setActiveSlug] = useState(null);
  const active = projects.find((p) => p.slug === activeSlug) || null;
  const years = projects.map((p) => p.year).sort();

  return (
    <section className="section section--rule work" id="work">
      <div className="container">
        <Reveal className="sec-head" direction="none">
          <div className="sec-head__title">
            <span className="eyebrow">
              {projects.length} projects · {years[0]} — {years[years.length - 1]}
            </span>
            <h2 className="h2">Selected work</h2>
          </div>
          <div className="sec-head__aside">
            <p className="lede">
              A selection of websites and digital experiences I've designed and built.
            </p>
          </div>
        </Reveal>

        <div className="work__list">
          {projects.map((project) => (
            <ProjectCase
              key={project.slug}
              project={project}
              onOpen={() => setActiveSlug(project.slug)}
            />
          ))}
        </div>
      </div>

      <ProjectPreview project={active} onClose={() => setActiveSlug(null)} />
    </section>
  );
}
