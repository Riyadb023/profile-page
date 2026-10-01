import { useMemo, useState } from "react";

import { DEFAULT_MESSAGE, hasWhatsApp, site, whatsappLink } from "../data/site";
import {
  ArrowUpRight,
  Check,
  GitHub,
  Instagram,
  Mail,
  WhatsApp,
} from "./Icons";
import Reveal from "./Reveal";
import WaLink from "./WaLink";

function buildMessage(form) {
  const lines = ["Hi Riyad, I'd like to talk about a project."];
  if (form.name.trim()) lines.push(`Name: ${form.name.trim()}`);
  if (form.business.trim())
    lines.push(`Business / organization: ${form.business.trim()}`);
  if (form.type) lines.push(`Business type: ${form.type}`);
  if (form.needs.length) lines.push(`I need: ${form.needs.join(", ")}`);
  if (form.notes.trim()) lines.push(`Details: ${form.notes.trim()}`);
  return lines.join("\n");
}

/**
 * The brief composer: everything typed here is turned into a WhatsApp message.
 * No backend, no storage. The visitor reviews the text before it is sent.
 */
function BriefForm() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    type: "",
    needs: [],
    notes: "",
  });
  const [copied, setCopied] = useState(false);

  const message = useMemo(() => buildMessage(form), [form]);
  const ready = form.name.trim().length > 1 && form.needs.length > 0;
  const link = ready ? whatsappLink(message) : null;

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const toggleNeed = (need) =>
    setForm((f) => ({
      ...f,
      needs: f.needs.includes(need)
        ? f.needs.filter((n) => n !== need)
        : [...f.needs, need],
    }));

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Reveal className="brief" delay={100} direction="none">
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        aria-labelledby="brief-title"
      >
        <div className="brief__head">
          <h3 className="h3" id="brief-title">
            Start with a quick brief
          </h3>
          <p className="micro">
            This builds a WhatsApp message for you. Nothing is stored on this
            site.
          </p>
        </div>

        <div className="brief__row">
          <div className="brief__field">
            <label htmlFor="brief-name">Name</label>
            <input
              id="brief-name"
              type="text"
              value={form.name}
              onChange={set("name")}
              placeholder="e.g. Sara B."
              autoComplete="name"
              maxLength={80}
              required
            />
          </div>
          <div className="brief__field">
            <label htmlFor="brief-business">Business / organization</label>
            <input
              id="brief-business"
              type="text"
              value={form.business}
              onChange={set("business")}
              placeholder="e.g. Atlas Fitness"
              autoComplete="organization"
              maxLength={100}
            />
          </div>
        </div>

        <div className="brief__field">
          <label htmlFor="brief-type">Business type</label>
          <select id="brief-type" value={form.type} onChange={set("type")}>
            <option value="">Choose one…</option>
            {site.brief.types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <fieldset className="brief__field brief__fieldset">
          <legend className="brief__label">What do you need?</legend>
          <div className="brief__chips">
            {site.brief.needs.map((need) => (
              <button
                type="button"
                key={need}
                className="chip"
                aria-pressed={form.needs.includes(need)}
                onClick={() => toggleNeed(need)}
              >
                {need}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="brief__field">
          <label htmlFor="brief-notes">Additional details (optional)</label>
          <textarea
            id="brief-notes"
            rows={3}
            value={form.notes}
            onChange={set("notes")}
            placeholder="A few words about your business and what you have in mind."
            maxLength={600}
          />
        </div>

        <div className="brief__preview-head">
          <span className="micro" id="brief-preview-label">
            Message preview
          </span>
          <button type="button" className="brief__copy" onClick={copy}>
            {copied ? <Check /> : null}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <p className="brief__preview" aria-labelledby="brief-preview-label">
          {message}
        </p>

        {link ? (
          <a
            className="btn btn--wa btn--block brief__submit"
            href={link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <WhatsApp />
            Send on WhatsApp
          </a>
        ) : (
          <button
            type="button"
            className="btn btn--wa btn--block brief__submit"
            disabled
          >
            <WhatsApp />
            Send on WhatsApp
          </button>
        )}

        <p className="brief__hint" role="status">
          {!ready &&
            "Add your name and pick at least one thing you need to enable sending."}
          {ready &&
            !hasWhatsApp &&
            "WhatsApp number not configured yet (src/data/site.js). You can still copy the message."}
        </p>
      </form>
    </Reveal>
  );
}

export default function Contact() {
  const { github, instagram, email } = site.contact;
  const external = { target: "_blank", rel: "noreferrer noopener" };

  return (
    <section
      className="section section--ink contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container contact__grid">
        <div className="contact__main">
          <Reveal direction="none">
            <span className="eyebrow contact__eyebrow">Contact</span>
          </Reveal>
          <Reveal delay={60} direction="none">
            <h2 className="h2 contact__title" id="contact-title">
              Have a project in mind?
            </h2>
          </Reveal>
          <Reveal delay={110} direction="none">
            <p className="lede contact__lede">
              Tell me what you're building and let's see how I can help.
            </p>
          </Reveal>

          <Reveal delay={160} className="contact__cta" direction="none">
            <WaLink className="btn btn--wa" message={DEFAULT_MESSAGE}>
              <WhatsApp />
              Let's talk
            </WaLink>
            <a className="btn btn--ghost" href="#work">
              See the work first
            </a>
          </Reveal>

          <Reveal delay={210} direction="none">
            <ul className="contact__links">
              {github && (
                <li>
                  <a href={github} {...external}>
                    <GitHub />
                    GitHub
                    <ArrowUpRight className="arrow" />
                  </a>
                </li>
              )}
              {instagram && (
                <li>
                  <a href={instagram} {...external}>
                    <Instagram />
                    Instagram
                    <ArrowUpRight className="arrow" />
                  </a>
                </li>
              )}
              {email && (
                <li>
                  <a href={`mailto:${email}`}>
                    <Mail />
                    {email}
                    <ArrowUpRight className="arrow" />
                  </a>
                </li>
              )}
              {hasWhatsApp && (
                <li>
                  <a href={whatsappLink(DEFAULT_MESSAGE)} {...external}>
                    <WhatsApp />
                    WhatsApp
                    <ArrowUpRight className="arrow" />
                  </a>
                </li>
              )}
            </ul>
          </Reveal>

          <Reveal delay={240} direction="none">
            <p className="micro contact__note">
              {hasWhatsApp ? "WhatsApp is the fastest way to reach me. " : ""}
              {site.city}, {site.country}. Working remotely.
            </p>
          </Reveal>
        </div>

        <BriefForm />
      </div>
    </section>
  );
}
