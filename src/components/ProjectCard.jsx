import { STATUS, hasDetail } from "../data/projects";
import { ArrowUpRight, GitHub } from "./Icons";
import ProjectVisual from "./ProjectVisual";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n";

/** One project card. `compact` drops the large visual (used for smaller projects). */
export default function ProjectCard({
  project,
  compact = false,
  delay = 0,
  onOpen,
}) {
  const { live, github } = project.links;
  const { t, lang } = useLanguage();
  const copy = lang === "fr" && project.fr ? project.fr : project;
  const canOpen = hasDetail(project);

  return (
    <Reveal
      as="article"
      className={`wcard${compact ? " wcard--compact" : ""}`}
      id={project.slug}
      delay={delay}
      direction="none"
    >
      {!compact && <ProjectVisual project={project} eager={false} />}

      <div className="wcard__body">
        <div className="wcard__top">
          <h3 className="wcard__name">{project.name}</h3>
          <span className={`badge badge--${project.status}`}>
            {t.status[project.status]}
          </span>
        </div>
        <p className="wcard__type">{copy.type}</p>
        {project.blurb && <p className="wcard__blurb">{copy.blurb}</p>}
        {project.stack.length > 0 && (
          <p className="wcard__stack">{project.stack.join(" · ")}</p>
        )}

        {(live || github || canOpen) && (
          <div className="wcard__links">
            {live && (
              <a
                className="btn btn--primary btn--sm"
                href={live}
                target="_blank"
                rel="noreferrer noopener"
              >
                {t.common.liveDemo}
                <ArrowUpRight />
              </a>
            )}
            {github && (
              <a
                className="btn btn--ghost btn--sm"
                href={github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.name} source code on GitHub`}
              >
                <GitHub />
                GitHub
              </a>
            )}
            {canOpen && (
              <button
                type="button"
                className="tlink tlink--btn"
                onClick={() => onOpen(project)}
              >
                {t.common.details}
                <ArrowUpRight />
              </button>
            )}
          </div>
        )}
      </div>
    </Reveal>
  );
}
