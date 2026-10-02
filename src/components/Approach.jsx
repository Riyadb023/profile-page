import { site } from "../data/site";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n";

export default function Approach() {
  const { t, lang } = useLanguage();
  const steps = lang === "fr" ? [{n:"01",title:"Découvrir",desc:"Comprendre l’entreprise, ses clients et le problème réel à résoudre."},{n:"02",title:"Concevoir",desc:"Définir une expérience claire et l’approche technique adaptée au projet."},{n:"03",title:"Construire",desc:"Développer le frontend, le backend et la couche de données nécessaires."},{n:"04",title:"Lancer",desc:"Mettre le projet en ligne, tester les parcours importants et le livrer prêt à l’emploi."}] : site.steps;
  return (
    <section className="section section--rule" id="approach">
      <div className="container">
        <Reveal className="sec-head" direction="none">
          <div className="sec-head__title">
            <span className="eyebrow">{t.approach.eyebrow}</span>
            <h2 className="h2">{t.approach.title}</h2>
          </div>
          <div className="sec-head__aside">
            <p className="lede">
              {t.approach.subtitle}
            </p>
          </div>
        </Reveal>

        <Reveal className="approach__track" direction="none" aria-hidden="true">
          <i />
        </Reveal>

        <ol className="steps">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 90} className="step">
              <span className="step__n">{step.n}</span>
              <h3 className="h3 step__title">{step.title}</h3>
              <p className="step__desc">{step.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
