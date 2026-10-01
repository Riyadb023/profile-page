export const CONFIG = {
  whatsapp: "213771797683",
  github: "https://github.com/Riyadb023",
  instagram: "https://www.instagram.com/riyadev023/",
  email: "riyadbenyamina32@gmail.com",
};

const whatsappNumber = CONFIG.whatsapp.replace(/\D/g, "");

export const hasWhatsApp = whatsappNumber.length > 0;

if (import.meta.env.DEV && !hasWhatsApp) {
  console.warn(
    "[portfolio] CONFIG.whatsapp is empty in src/data/site.js — WhatsApp links are disabled.",
  );
}

/** Build a WhatsApp deep link, or null while no number is configured. */
export function whatsappLink(message = "") {
  if (!hasWhatsApp) return null;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_MESSAGE =
  "Hi Riyad, I saw your portfolio and I'd like to talk about a website or web project for my business.";

export const site = {
  name: "Riyad",
  role: "Web Developer & Digital Solutions Builder",
  city: "Algiers",
  country: "Algeria",
  status: "Open to new projects",
  contact: CONFIG,

  nav: [
    { label: "Home", href: "#top" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    headline: "Web Developer & Digital Solutions Builder",
    supporting:
      "I'm Riyad, based in Algiers. I build modern websites and digital experiences for businesses, and I'm expanding into backend and full-stack development with Node.js, Express and PostgreSQL.",
  },

  band: [
    { label: "Business websites", href: "#services" },
    { label: "Digital experiences", href: "#services" },
    { label: "Web applications", href: "#services" },
    { label: "Backend & APIs", href: "#services" },
  ],

  building: {
    title: "Currently expanding into full-stack development",
    text: "Learning and building with Node.js, Express and PostgreSQL: APIs, database-driven applications and business tools.",
  },

  services: [
    {
      n: "01",
      title: "Business websites",
      desc: "Modern websites designed around a business's actual needs.",
      includes: [
        "Responsive, mobile-first layout",
        "Clear contact and location info",
        "SEO basics",
        "Deployed on Vercel",
      ],
    },
    {
      n: "02",
      title: "Digital experiences",
      desc: "Menus, catalogs, customer-facing experiences and interactive web interfaces.",
      includes: [
        "Digital menus and catalogs",
        "Ordering via WhatsApp message",
        "Interactive interfaces",
        "Fast on phones",
      ],
    },
    {
      n: "03",
      title: "Web applications",
      desc: "Custom applications and business tools.",
      includes: [
        "React interfaces",
        "Forms and workflows",
        "Built around how you work",
      ],
      note: "Growing area: I'm building this up through my own projects.",
    },
    {
      n: "04",
      title: "Backend & APIs",
      desc: "REST APIs, databases and business logic.",
      includes: ["Node.js and Express", "REST APIs", "PostgreSQL / SQL"],
      note: "Newer for me. Best suited to small, well-scoped projects.",
    },
  ],

  steps: [
    {
      n: "01",
      title: "Discover",
      desc: "Understand the business, the customers and the current problems.",
    },
    {
      n: "02",
      title: "Design",
      desc: "Create a clear experience around the business's identity.",
    },
    {
      n: "03",
      title: "Build",
      desc: "Develop the website with modern, responsive technologies.",
    },
    {
      n: "04",
      title: "Launch",
      desc: "Deploy the website and check that it works properly across devices.",
    },
  ],

  about: {
    intro:
      "I'm Riyad, a web developer based in Algiers, Algeria. I build websites and digital tools for businesses, mostly with HTML, CSS, JavaScript and React.",
    second:
      "So far my work is self-initiated: restaurant and gym concepts, plus smaller JavaScript projects. I'm now adding Node.js, Express and PostgreSQL so I can build the backend side as well, and I'm looking for real businesses to work with.",
    facts: [
      { k: "Based in", v: "Algiers, Algeria" },
      { k: "Builds", v: "Websites, web apps, digital tools" },
      { k: "Main stack", v: "React, JavaScript, Node.js" },
      { k: "Learning", v: "Express, PostgreSQL" },
    ],
    focus: [
      "Business websites",
      "Digital experiences",
      "Web applications",
      "Backend & APIs ",
    ],
  },

  stack: [
    {
      group: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Vite"],
    },
    { group: "Backend", items: ["Node.js", "Express", "REST APIs"] },
    { group: "Database", items: ["PostgreSQL", "SQL"] },
    { group: "Tools", items: ["Git", "GitHub", "Vercel"] },
  ],

  brief: {
    types: [
      "Gym / Fitness",
      "Restaurant",
      "Retail",
      "Service Business",
      "Other",
    ],
    needs: [
      "Business website",
      "Website redesign",
      "Digital menu/catalog",
      "WhatsApp ordering",
      "Booking / inquiries",
      "Custom web application",
      "Other",
    ],
  },
};
