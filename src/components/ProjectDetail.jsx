import { useEffect, useRef, useState } from "react";

import { STATUS } from "../data/projects";
import { useBodyLock } from "../hooks/useNav";
import { ArrowUpRight, Close, GitHub } from "./Icons";
import ProjectVisual from "./ProjectVisual";

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Detail view for a project (modal dialog): what it is, what problem it solves,
 * what actually exists, what is only planned, stack and links.
 * Sections without data are simply not rendered.
 */
export default function ProjectDetail({ project, onClose }) {
  const [rendered, setRendered] = useState(null);
  const [shown, setShown] = useState(false);
  const dialogRef = useRef(null);
  const returnFocus = useRef(null);

  // keep the previous project mounted briefly so the panel can fade out
  useEffect(() => {
    if (project) {
      returnFocus.current = document.activeElement;
      setRendered(project);
      const raf = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(raf);
    }
    setShown(false);
    const timer = setTimeout(() => setRendered(null), 250);
    return () => clearTimeout(timer);
  }, [project]);

  useBodyLock(shown);

  // focus management: move focus in, trap Tab, restore on close
  useEffect(() => {
    if (!shown || !dialogRef.current) return undefined;
    const dialog = dialogRef.current;
    dialog.querySelector(".preview__close")?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab") return undefined;
      const nodes = [...dialog.querySelectorAll(FOCUSABLE)];
      if (!nodes.length) return undefined;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
      return undefined;
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      returnFocus.current?.focus?.();
    };
  }, [shown, onClose]);

  if (!rendered) return null;
  const p = rendered;

  return (
    <div
      className={`preview${shown ? " is-open" : ""}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="preview__dialog"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="preview-title"
      >
        <div className="preview__bar">
          <div>
            <h3 className="h3 preview__name" id="preview-title">
              {p.name}
            </h3>
            <p className="micro preview__cat">
              {p.type} · {STATUS[p.status]}
            </p>
          </div>
          <button
            type="button"
            className="preview__close"
            onClick={onClose}
            aria-label="Close project details"
          >
            <Close />
          </button>
        </div>

        <div className="preview__body">
          <ProjectVisual project={p} eager />

          <div className="preview__cols">
            {p.what && (
              <section>
                <h4 className="micro case__label">What it is</h4>
                <p>{p.what}</p>
              </section>
            )}
            {p.problem && (
              <section>
                <h4 className="micro case__label">What problem it addresses</h4>
                <p>{p.problem}</p>
              </section>
            )}
            {p.built?.length > 0 && (
              <section>
                <h4 className="micro case__label">What I built</h4>
                <ul className="preview__list">
                  {p.built.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}
            {p.planned?.length > 0 && (
              <section>
                <h4 className="micro case__label">
                  Not built yet (ideas only)
                </h4>
                <ul className="preview__list preview__list--muted">
                  {p.planned.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <div className="preview__foot">
            {p.stack.length > 0 && (
              <p className="micro">Built with {p.stack.join(" · ")}</p>
            )}
            <div className="preview__actions">
              {p.links.live && (
                <a
                  className="btn btn--primary btn--sm"
                  href={p.links.live}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Live Demo
                  <ArrowUpRight />
                </a>
              )}
              {p.links.github && (
                <a
                  className="btn btn--ghost btn--sm"
                  href={p.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GitHub />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
