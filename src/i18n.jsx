import { createContext, useContext, useEffect, useMemo, useState } from "react";

const translations = {
  en: {
    language: "Language", switchTo: "FR",
    nav: { home: "Home", work: "Work", about: "About", contact: "Contact" },
    common: { talk: "Let's talk", viewWork: "View my work", seeWork: "See the work first", liveDemo: "Live Demo", details: "Details", github: "GitHub", workWithMe: "Work with me", backToTop: "Back to top", askQuestion: "Ask a question" },
    hero: { intro: "Introduction", projects: "Projects", tech: "JavaScript · React · Node.js · Express · PostgreSQL", status: "Available for projects", remote: "Algiers, Algeria · Working remotely" },
    servicesList: [
      { title: "Business websites", desc: "Modern websites designed around a business's actual needs.", includes: ["Responsive, mobile-first layout", "Clear contact and location info", "SEO basics", "Deployment and launch"] },
      { title: "Web applications", desc: "Custom interfaces and workflows for business operations.", includes: ["React interfaces", "Forms and workflows", "API-connected experiences"] },
      { title: "Backend & APIs", desc: "Server-side logic, REST APIs and database-backed features.", includes: ["Node.js and Express", "REST APIs", "PostgreSQL / SQL"] },
      { title: "Digital products", desc: "Menus, catalogs, ordering flows and customer-facing tools.", includes: ["Digital menus and catalogs", "WhatsApp ordering", "Interactive customer experiences"] },
    ],
    services: { eyebrow: "Services", title: "What I build", subtitle: "Websites, web applications and backend systems built around how a business actually works.", ask: "Not sure what your business needs? Describe what you do and I'll tell you honestly what would help, and what wouldn't." },
    approach: { eyebrow: "Approach", title: "From idea to launch", subtitle: "A simple process, so you always know what is happening and what comes next." },
    about: { eyebrow: "About", title: "About me", quick: "Quick facts", focus: "What I focus on" },
    tools: { eyebrow: "Tech stack", title: "Tools I work with", note: "I work across the frontend and backend, using the right tools for the part of the product being built." },
    contact: { eyebrow: "Contact", title: "Have a project in mind?", subtitle: "Tell me what you're building and let's see how I can help.", brief: "Start with a quick brief", briefNote: "This builds a WhatsApp message for you. Nothing is stored on this site.", name: "Name", business: "Business / organization", businessPlaceholder: "e.g. Atlas Fitness", namePlaceholder: "e.g. Sara B.", type: "Business type", choose: "Choose one…", needs: "What do you need?", notes: "Additional details (optional)", notesPlaceholder: "A few words about your business and what you have in mind.", preview: "Message preview", copy: "Copy", copied: "Copied", send: "Send on WhatsApp", hint: "Add your name and pick at least one thing you need to enable sending.", whatsappMissing: "WhatsApp number not configured yet. You can still copy the message.", fastest: "WhatsApp is the fastest way to reach me." },
    work: { eyebrow: "Work", title: "Selected work", intro: "Projects I built on my own initiative. None of these were commissioned. They show how I approach business websites and web products, and each one is labelled.", devTitle: "Development projects", devIntro: "Smaller personal projects, built to practise and learn.", buildingEyebrow: "Currently building", buildingTitle: "Building full-stack business applications", buildingText: "Currently developing with Node.js, Express and PostgreSQL to build APIs, database-driven applications and business tools." },
    footer: { navigate: "Navigate", elsewhere: "Elsewhere", pitch: "Websites, web applications and digital tools for businesses.", designed: "Designed & built in" },
    status: { concept: "Self-initiated concept", project: "Self-initiated project", personal: "Personal project", building: "Currently building" },
    detail: { close: "Close project details", what: "What it is", problem: "What problem it addresses", built: "What I built", planned: "Not built yet (ideas only)", builtWith: "Built with" },
    types: { gym: "Gym / Fitness", restaurant: "Restaurant", retail: "Retail", service: "Service Business", other: "Other" },
    needs: { website: "Business website", redesign: "Website redesign", menu: "Digital menu/catalog", whatsapp: "WhatsApp ordering", booking: "Booking / inquiries", app: "Custom web application", other: "Other" },
    seo: { title: "Riyad | Full-Stack Web Developer & Digital Solutions Builder in Algiers, Algeria", description: "Riyad is a web developer in Algiers building business websites, web applications, REST APIs and database-driven digital tools with React, Node.js, Express and PostgreSQL." },
  },
  fr: {
    language: "Langue", switchTo: "EN",
    nav: { home: "Accueil", work: "Réalisations", about: "À propos", contact: "Contact" },
    common: { talk: "Parlons-en", viewWork: "Voir mes réalisations", seeWork: "Voir les réalisations", liveDemo: "Démo en ligne", details: "Détails", github: "GitHub", workWithMe: "Travailler avec moi", backToTop: "Retour en haut", askQuestion: "Poser une question" },
    hero: { intro: "Introduction", projects: "Projets", tech: "JavaScript · React · Node.js · Express · PostgreSQL", status: "Disponible pour des projets", remote: "Alger, Algérie · Travail à distance" },
    servicesList: [
      { title: "Business websites", desc: "Modern websites designed around a business's actual needs.", includes: ["Responsive, mobile-first layout", "Clear contact and location info", "SEO basics", "Deployment and launch"] },
      { title: "Web applications", desc: "Custom interfaces and workflows for business operations.", includes: ["React interfaces", "Forms and workflows", "API-connected experiences"] },
      { title: "Backend & APIs", desc: "Server-side logic, REST APIs and database-backed features.", includes: ["Node.js and Express", "REST APIs", "PostgreSQL / SQL"] },
      { title: "Digital products", desc: "Menus, catalogs, ordering flows and customer-facing tools.", includes: ["Digital menus and catalogs", "WhatsApp ordering", "Interactive customer experiences"] },
    ],
    services: { eyebrow: "Services", title: "Ce que je construis", subtitle: "Sites web, applications web et systèmes backend conçus autour du fonctionnement réel de votre entreprise.", ask: "Vous ne savez pas de quoi votre entreprise a besoin ? Décrivez-moi votre activité et je vous dirai honnêtement ce qui peut être utile — et ce qui ne l'est pas." },
    approach: { eyebrow: "Méthode", title: "De l'idée au lancement", subtitle: "Un processus simple pour toujours savoir ce qui se passe et quelle est la prochaine étape." },
    about: { eyebrow: "À propos", title: "À propos de moi", quick: "En bref", focus: "Mes domaines d'action" },
    tools: { eyebrow: "Stack technique", title: "Technologies que j'utilise", note: "Je travaille sur le frontend et le backend, avec les bons outils pour chaque partie du produit." },
    contact: { eyebrow: "Contact", title: "Vous avez un projet en tête ?", subtitle: "Parlez-moi de ce que vous construisez et voyons comment je peux vous aider.", brief: "Commencez par un court brief", briefNote: "Cela prépare un message WhatsApp. Rien n'est enregistré sur ce site.", name: "Nom", business: "Entreprise / organisation", businessPlaceholder: "ex. Atlas Fitness", namePlaceholder: "ex. Sara B.", type: "Type d'activité", choose: "Choisissez…", needs: "De quoi avez-vous besoin ?", notes: "Détails supplémentaires (facultatif)", notesPlaceholder: "Quelques mots sur votre activité et ce que vous avez en tête.", preview: "Aperçu du message", copy: "Copier", copied: "Copié", send: "Envoyer sur WhatsApp", hint: "Ajoutez votre nom et sélectionnez au moins un besoin pour pouvoir envoyer.", whatsappMissing: "Le numéro WhatsApp n'est pas configuré. Vous pouvez tout de même copier le message.", fastest: "WhatsApp est le moyen le plus rapide de me contacter." },
    work: { eyebrow: "Réalisations", title: "Projets sélectionnés", intro: "Des projets que j'ai réalisés de ma propre initiative. Aucun n'a été commandé par le client concerné. Ils montrent ma manière d'aborder les sites et produits web pour les entreprises, et chaque projet est clairement identifié.", devTitle: "Projets de développement", devIntro: "Des projets personnels plus courts, réalisés pour pratiquer et apprendre.", buildingEyebrow: "En cours", buildingTitle: "Développement d'applications business full-stack", buildingText: "Je développe actuellement avec Node.js, Express et PostgreSQL pour créer des API, des applications connectées à une base de données et des outils métier." },
    footer: { navigate: "Navigation", elsewhere: "Me retrouver", pitch: "Sites web, applications web et outils digitaux pour les entreprises.", designed: "Conçu et développé à" },
    status: { concept: "Concept personnel", project: "Projet personnel", personal: "Projet personnel", building: "En cours de développement" },
    detail: { close: "Fermer les détails", what: "Le projet", problem: "Le problème traité", built: "Ce que j'ai construit", planned: "Pas encore construit (idées uniquement)", builtWith: "Construit avec" },
    types: { gym: "Salle de sport / Fitness", restaurant: "Restaurant", retail: "Commerce", service: "Entreprise de services", other: "Autre" },
    needs: { website: "Site vitrine", redesign: "Refonte de site", menu: "Menu / catalogue digital", whatsapp: "Commande WhatsApp", booking: "Réservation / demandes", app: "Application web sur mesure", other: "Autre" },
    seo: { title: "Riyad | Développeur web full-stack & solutions digitales à Alger", description: "Riyad est développeur web à Alger. Il crée des sites pour entreprises, applications web, API REST et outils connectés à des bases de données avec React, Node.js, Express et PostgreSQL." },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("riyad-lang") || "fr");
  useEffect(() => {
    localStorage.setItem("riyad-lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = "ltr";
    document.title = translations[lang].seo.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", translations[lang].seo.description);
  }, [lang]);
  const value = useMemo(() => ({ lang, setLang, t: translations[lang] }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used inside LanguageProvider");
  return value;
}

export const tr = (lang, key) => key.split(".").reduce((obj, part) => obj?.[part], translations[lang]) ?? key;
