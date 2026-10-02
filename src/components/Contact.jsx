import { useMemo, useState } from "react";
import { DEFAULT_MESSAGE, hasWhatsApp, site, whatsappLink } from "../data/site";
import { ArrowUpRight, Check, GitHub, Instagram, Mail, WhatsApp } from "./Icons";
import Reveal from "./Reveal";
import WaLink from "./WaLink";
import { useLanguage } from "../i18n";

function BriefForm() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState({ name: "", business: "", type: "", needs: [], notes: "" });
  const [copied, setCopied] = useState(false);
  const labels = lang === "fr" ? { types: ["Salle de sport / Fitness","Restaurant","Commerce","Entreprise de services","Autre"], needs: ["Site vitrine","Refonte de site","Menu / catalogue digital","Commande WhatsApp","Réservation / demandes","Application web sur mesure","Autre"] } : { types: site.brief.types, needs: site.brief.needs };
  const message = useMemo(() => {
    const lines = [lang === "fr" ? "Bonjour Riyad, je souhaite parler d’un projet." : "Hi Riyad, I'd like to talk about a project."];
    if (form.name.trim()) lines.push(`${t.contact.name}: ${form.name.trim()}`);
    if (form.business.trim()) lines.push(`${t.contact.business}: ${form.business.trim()}`);
    if (form.type) lines.push(`${t.contact.type}: ${form.type}`);
    if (form.needs.length) lines.push(`${t.contact.needs}: ${form.needs.join(", ")}`);
    if (form.notes.trim()) lines.push(`${t.contact.notes}: ${form.notes.trim()}`);
    return lines.join("\n");
  }, [form, lang, t]);
  const ready = form.name.trim().length > 1 && form.needs.length > 0;
  const link = ready ? whatsappLink(message) : null;
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  const toggleNeed = (need) => setForm((f) => ({ ...f, needs: f.needs.includes(need) ? f.needs.filter((n) => n !== need) : [...f.needs, need] }));
  const copy = async () => { try { await navigator.clipboard.writeText(message); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch {} };
  return (
    <Reveal className="brief" delay={100} direction="none">
      <form onSubmit={(e) => e.preventDefault()} noValidate aria-labelledby="brief-title">
        <div className="brief__head"><h3 className="h3" id="brief-title">{t.contact.brief}</h3><p className="micro">{t.contact.briefNote}</p></div>
        <div className="brief__row">
          <div className="brief__field"><label htmlFor="brief-name">{t.contact.name}</label><input id="brief-name" type="text" value={form.name} onChange={set("name")} placeholder={t.contact.namePlaceholder} autoComplete="name" maxLength={80} required /></div>
          <div className="brief__field"><label htmlFor="brief-business">{t.contact.business}</label><input id="brief-business" type="text" value={form.business} onChange={set("business")} placeholder={t.contact.businessPlaceholder} autoComplete="organization" maxLength={100} /></div>
        </div>
        <div className="brief__field"><label htmlFor="brief-type">{t.contact.type}</label><select id="brief-type" value={form.type} onChange={set("type")}><option value="">{t.contact.choose}</option>{labels.types.map((x) => <option key={x} value={x}>{x}</option>)}</select></div>
        <fieldset className="brief__field brief__fieldset"><legend className="brief__label">{t.contact.needs}</legend><div className="brief__chips">{labels.needs.map((need) => <button type="button" key={need} className="chip" aria-pressed={form.needs.includes(need)} onClick={() => toggleNeed(need)}>{need}</button>)}</div></fieldset>
        <div className="brief__field"><label htmlFor="brief-notes">{t.contact.notes}</label><textarea id="brief-notes" rows={3} value={form.notes} onChange={set("notes")} placeholder={t.contact.notesPlaceholder} maxLength={600} /></div>
        <div className="brief__preview-head"><span className="micro" id="brief-preview-label">{t.contact.preview}</span><button type="button" className="brief__copy" onClick={copy}>{copied ? <Check /> : null}{copied ? t.contact.copied : t.contact.copy}</button></div>
        <p className="brief__preview" aria-labelledby="brief-preview-label">{message}</p>
        {link ? <a className="btn btn--wa btn--block brief__submit" href={link} target="_blank" rel="noreferrer noopener"><WhatsApp />{t.contact.send}</a> : <button type="button" className="btn btn--wa btn--block brief__submit" disabled><WhatsApp />{t.contact.send}</button>}
        <p className="brief__hint" role="status">{!ready ? t.contact.hint : !hasWhatsApp ? t.contact.whatsappMissing : ""}</p>
      </form>
    </Reveal>
  );
}

export default function Contact() {
  const { t } = useLanguage(); const { github, instagram, email } = site.contact; const external = { target: "_blank", rel: "noreferrer noopener" };
  return <section className="section section--ink contact" id="contact" aria-labelledby="contact-title"><div className="container contact__grid"><div className="contact__main">
    <Reveal direction="none"><span className="eyebrow contact__eyebrow">{t.contact.eyebrow}</span></Reveal>
    <Reveal delay={60} direction="none"><h2 className="h2 contact__title" id="contact-title">{t.contact.title}</h2></Reveal>
    <Reveal delay={110} direction="none"><p className="lede contact__lede">{t.contact.subtitle}</p></Reveal>
    <Reveal delay={160} className="contact__cta" direction="none"><WaLink className="btn btn--wa" message={DEFAULT_MESSAGE}><WhatsApp />{t.common.talk}</WaLink><a className="btn btn--ghost" href="#work">{t.common.seeWork}</a></Reveal>
    <Reveal delay={210} direction="none"><ul className="contact__links">{github && <li><a href={github} {...external}><GitHub />GitHub<ArrowUpRight className="arrow" /></a></li>}{instagram && <li><a href={instagram} {...external}><Instagram />Instagram<ArrowUpRight className="arrow" /></a></li>}{email && <li><a href={`mailto:${email}`}><Mail />{email}<ArrowUpRight className="arrow" /></a></li>}{hasWhatsApp && <li><a href={whatsappLink(DEFAULT_MESSAGE)} {...external}><WhatsApp />WhatsApp<ArrowUpRight className="arrow" /></a></li>}</ul></Reveal>
    <Reveal delay={240} direction="none"><p className="micro contact__note">{hasWhatsApp ? `${t.contact.fastest} ` : ""}{t.hero.remote}</p></Reveal>
  </div><BriefForm /></div></section>;
}
