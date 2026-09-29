import { useEffect, useState } from "react";

import { whatsappLink } from "../data/site";
import { useBodyLock } from "../hooks/useNav";
import { BrowserFrame, PhoneFrame } from "./Frames";
import { mocks } from "./mocks";
import { ArrowUpRight, Close, WhatsApp } from "./Icons";

const messageFor = (name) =>
  `Hi Riyad, I just looked at ${name} on your portfolio. I'd like something similar for my business.`;

/**
 * Full-screen preview of a project: the website large, the mobile flow beside
 * it, and the story again next to a direct WhatsApp CTA.
 * Opened from "View project" in the selected work section.
 */
export default function ProjectPreview({ project, onClose }) {
  const [rendered, setRendered] = useState(null);
  const [shown, setShown] = useState(false);

  // keep the previous project mounted for a beat so the panel can fade out
  useEffect(() => {
    if (project) {
      setRendered(project);
      const raf = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(raf);
    }
    setShown(false);
    const timer = setTimeout(() => setRendered(null), 300);
    return () => clearTimeout(timer);
  }, [project]);

  useBodyLock(shown);

  useEffect(() => {
    if (!shown) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [shown, onClose]);

  if (!rendered) return null;

  const Mock = mocks[rendered.mock];

  return (
    <div
      className={`preview${shown ? " is-open" : ""}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="preview__dialog"
        role="dialog"
        aria-modal="true"
        aria-label={`${rendered.name} — project preview`}
      >
        <div className="preview__bar">
          <span className="micro preview__n">{rendered.n}</span>
          <h3 className="h3 preview__name">{rendered.name}</h3>
          <span className="micro preview__cat">{rendered.category}</span>
          <button type="button" className="preview__close" onClick={onClose} aria-label="Close preview">
            <Close />
          </button>
        </div>

        <div className="preview__body">
          <div className="preview__shot">
            <BrowserFrame
              address={rendered.address}
              theme={rendered.theme}
              ratio={rendered.ratio}
              label={`${rendered.name} website, desktop view`}
            >
              <Mock.Site />
            </BrowserFrame>
            <div className="preview__phone">
              <PhoneFrame theme={rendered.theme} label={`${rendered.name}, mobile view`}>
                <Mock.Mobile />
              </PhoneFrame>
            </div>
          </div>

          <div className="preview__text">
            <div>
              <span className="micro case__label">Problem</span>
              <p>{rendered.problem}</p>
            </div>
            <div>
              <span className="micro case__label">Solution</span>
              <p>{rendered.solution}</p>
            </div>
          </div>

          <div className="preview__foot">
            <p className="micro">
              Built with {rendered.stack.join(" · ")} — {rendered.scope} · {rendered.year}
            </p>
            <div className="preview__actions">
              {rendered.url && (
                <a
                  className="tlink"
                  href={rendered.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Live site
                  <ArrowUpRight />
                </a>
              )}
              <a
                className="btn btn--wa btn--sm"
                href={whatsappLink(messageFor(rendered.name))}
                target="_blank"
                rel="noreferrer noopener"
              >
                <WhatsApp />
                I want something like this
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
