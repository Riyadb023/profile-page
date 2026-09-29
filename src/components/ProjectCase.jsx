import { BrowserFrame, PhoneFrame } from "./Frames";
import { mocks } from "./mocks";
import Reveal from "./Reveal";
import { ArrowUpRight } from "./Icons";

/** One project presented as a mini case study: visual first, then the story. */
export default function ProjectCase({ project, onOpen }) {
  const Mock = mocks[project.mock];

  return (
    <article className="case" id={project.slug}>
      <Reveal className="case__head" direction="none">
        <span className="case__n">{project.n}</span>
        <div className="case__titles">
          <h3 className="case__name">{project.name}</h3>
          <p className="case__cat">{project.category}</p>
        </div>
        <p className="case__blurb">{project.blurb}</p>
        <span className="case__year">{project.year}</span>
      </Reveal>

      <Reveal
        className={`case__visual case__visual--${project.phoneSide}`}
        direction="none"
        delay={60}
      >
        <div className="case__shot">
          <BrowserFrame
            address={project.address}
            theme={project.theme}
            ratio={project.ratio}
            label={`Screenshot of the ${project.name} website — ${project.category}`}
          >
            <Mock.Site />
          </BrowserFrame>

          <div className="case__phone">
            <PhoneFrame theme={project.theme} label={`${project.name} on mobile`}>
              <Mock.Mobile />
            </PhoneFrame>
          </div>

          <button
            type="button"
            className="case__peek"
            onClick={onOpen}
            tabIndex={-1}
            aria-hidden="true"
          >
            View project
            <ArrowUpRight />
          </button>
        </div>
      </Reveal>

      <div className="case__body">
        <Reveal className="case__col">
          <span className="micro case__label">Problem</span>
          <p>{project.problem}</p>
        </Reveal>
        <Reveal className="case__col" delay={90}>
          <span className="micro case__label">Solution</span>
          <p>{project.solution}</p>
        </Reveal>
      </div>

      <Reveal className="case__foot" direction="none" delay={40}>
        <div className="case__meta-group">
          <span className="micro case__label">Built with</span>
          <p className="case__stack">{project.stack.join(" · ")}</p>
        </div>
        <div className="case__meta-group">
          <span className="micro case__label">Scope</span>
          <p className="case__stack">{project.scope}</p>
        </div>
        <button type="button" className="tlink tlink--btn case__link" onClick={onOpen}>
          View project
          <ArrowUpRight />
        </button>
      </Reveal>
    </article>
  );
}
