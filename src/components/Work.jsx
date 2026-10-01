import { useCallback, useState } from "react";

import {
  STATUS,
  building,
  devProjects,
  selectedProjects,
} from "../data/projects";
import { site } from "../data/site";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import Reveal from "./Reveal";

export default function Work() {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section
      className="section section--rule work"
      id="work"
      aria-labelledby="work-title"
    >
      <div className="container">
        <Reveal className="sec-head" direction="none">
          <div className="sec-head__title">
            <span className="eyebrow">Work</span>
            <h2 className="h2" id="work-title">
              Selected work
            </h2>
          </div>
          <div className="sec-head__aside">
            <p className="lede">
              Projects I built on my own initiative. None of these were
              commissioned. They show how I approach a business's website, and
              each one is labelled.
            </p>
          </div>
        </Reveal>

        <div className="wgrid wgrid--selected">
          {selectedProjects.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              delay={(i % 2) * 70}
              onOpen={setActive}
            />
          ))}
        </div>

        <Reveal className="work__sub" direction="none">
          <h3 className="h3">Development projects</h3>
          <p className="micro">
            Smaller personal projects, built to practise and learn.
          </p>
        </Reveal>

        <div className="wgrid wgrid--dev">
          {devProjects.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              compact
              delay={(i % 2) * 60}
              onOpen={setActive}
            />
          ))}
        </div>

        <Reveal className="building" direction="none">
          <div className="building__main">
            <span className="eyebrow">Currently building</span>
            <h3 className="h3 building__title">{site.building.title}</h3>
            <p className="building__text">{site.building.text}</p>
          </div>
          <div className="building__item">
            <div className="wcard__top">
              <h4 className="wcard__name">{building.name}</h4>
              <span className={`badge badge--${building.status}`}>
                {STATUS[building.status]}
              </span>
            </div>
            <p className="wcard__type">{building.type}</p>
            <p className="wcard__blurb">{building.blurb}</p>
          </div>
        </Reveal>
      </div>

      <ProjectDetail project={active} onClose={close} />
    </section>
  );
}
