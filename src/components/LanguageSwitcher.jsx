import { useLanguage } from "../i18n";

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();
  return (
    <div className="lang-switch" role="group" aria-label={t.language}>
      <button type="button" className={lang === "fr" ? "is-active" : ""} onClick={() => setLang("fr")} aria-pressed={lang === "fr"}>FR</button>
      <span aria-hidden="true">/</span>
      <button type="button" className={lang === "en" ? "is-active" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>EN</button>
    </div>
  );
}
