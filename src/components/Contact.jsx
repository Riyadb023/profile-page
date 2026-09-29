import { useMemo, useState } from "react";

import { site, whatsappLink, DEFAULT_MESSAGE } from "../data/site";
import Reveal from "./Reveal";
import { ArrowUpRight, Check, GitHub, Instagram, Mail, WhatsApp } from "./Icons";

function buildMessage(form) {
  const lines = ["Hi Riyad, I'd like to talk about a project for my business."];
  if (form.name.trim()) lines.push(`Name: ${form.name.trim()}`);
  if (form.business.trim()) lines.push(`Business: ${form.business.trim()}`);
  if (form.type) lines.push(`Type: ${form.type}`);
  if (form.needs.length) lines.push(`Looking for: ${form.needs.join(", ")}`);
  if (form.notes.trim()) lines.push(`Details: ${form.notes.trim()}`);
  return lines.join("\n");
}

/**
 * The brief composer: everything typed here is turned into a WhatsApp message.
 * No backend, no storage — the visitor reviews the text before it is sent.
 */
function BriefForm() {
  const [form, setForm] = useState({ name: "", business: "", type: "", needs: [], notes: "" });
  const [copied, setCopied] = useState(false);

  const message = useMemo(() => buildMessage(form), [form]);
  const ready = form.name.trim().length > 1 && (Boolean(form.type) || form.needs.length > 0);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const toggleNeed = (need) =>
    setForm((f) => ({
      ...f,
      needs: f.needs.includes(need) ? f.needs.filter((n) => n !== need) : [...f.needs, need],
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
      <div className="brief__head">
        <h3 className="h3">Start with a quick brief</h3>
        <p className="micro">
          This builds the WhatsApp message for you. Nothing is stored on this site.
        </p>
      </div>

      <div className="brief__row">
        <div className="brief__field">
          <label htmlFor="brief-name">Your name</label>
          <input
            id="brief-name"
            type="text"
            value={form.name}
            onChange={set("name")}
            placeholder="Amine B."
            autoComplete="name"
          />
        </div>
        <div className="brief__field">
          <label htmlFor="brief-business">Business</label>
          <input
            id="brief-business"
            type="text"
            value={form.business}
            onChange={set("business")}
            placeholder="Pizza Ora"
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="brief__field">
        <label htmlFor="brief-type">What is it?</label>
        <select id="brief-type" value={form.type} onChange={set("type")}>
          <option value="">Choose one…</option>
          {site.brief.types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="brief__field">
        <span className="brief__label">What do you need?</span>
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
      </div>

      <div className="brief__field">
        <label htmlFor="brief-notes">Anything else? (optional)</label>
        <textarea
          id="brief-notes"
          rows={3}
          value={form.notes}
          onChange={set("notes")}
          placeholder="We open in two months and only have an Instagram page today."
        />
      </div>

      <div className="brief__preview-head">
        <span className="micro">Message preview</span>
        <button type="button" className="brief__copy" onClick={copy}>
          {copied ? <Check /> : null}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <p className="brief__preview">{message}</p>

      <a
        className="btn btn--wa btn--block brief__submit"
        href={whatsappLink(message)}
        target="_blank"
        rel="noreferrer noopener"
      >
        <WhatsApp />
        Send on WhatsApp
      </a>

      {!ready && (
        <p className="brief__hint">
          Add your name and pick what you need — the message above updates as you type.
        </p>
      )}
    </Reveal>
  );
}

export default function Contact() {
  const { github, instagram, email } = site.contact;

  return (
    <section className="section section--ink contact" id="contact">
      <div className="container contact__grid">
        <div className="contact__main">
          <Reveal direction="none">
            <span className="eyebrow contact__eyebrow">Contact</span>
          </Reveal>
          <Reveal delay={60} direction="none">
            <h2 className="h2 contact__title">Have a project in mind?</h2>
          </Reveal>
          <Reveal delay={110} direction="none">
            <p className="lede contact__lede">
              Tell me what you're building and let's see how I can help.
            </p>
          </Reveal>

          <Reveal delay={160} className="contact__cta" direction="none">
            <a
              className="btn btn--wa"
              href={whatsappLink(DEFAULT_MESSAGE)}
              target="_blank"
              rel="noreferrer noopener"
            >
              <WhatsApp />
              Let's talk
            </a>
            <a className="btn btn--ghost" href="#work">
              See the work first
            </a>
          </Reveal>

          <Reveal delay={210} direction="none">
            <ul className="contact__links">
              <li>
                <a href={github} target="_blank" rel="noreferrer noopener">
                  <GitHub />
                  GitHub
                  <ArrowUpRight className="arrow" />
                </a>
              </li>
              <li>
                <a href={instagram} target="_blank" rel="noreferrer noopener">
                  <Instagram />
                  Instagram
                  <ArrowUpRight className="arrow" />
                </a>
              </li>
              {email && (
                <li>
                  <a href={`mailto:${email}`}>
                    <Mail />
                    {email}
                    <ArrowUpRight className="arrow" />
                  </a>
                </li>
              )}
              <li>
                <a href={whatsappLink(DEFAULT_MESSAGE)} target="_blank" rel="noreferrer noopener">
                  <WhatsApp />
                  WhatsApp
                  <ArrowUpRight className="arrow" />
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={240} direction="none">
            <p className="micro contact__note">
              WhatsApp is the fastest way to reach me. {site.city}, Algeria — working remotely,
              CET (UTC+1).
            </p>
          </Reveal>
        </div>

        <BriefForm />
      </div>
    </section>
  );
}
