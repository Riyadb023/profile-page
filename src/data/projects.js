/**
 * Portfolio projects. Only what is true goes in here.
 *
 * - group: "selected" (large cards) | "dev" (compact cards)
 * - status: shown as a badge. "concept" = self-initiated concept, not commissioned.
 * - links.live / links.github: leave null until they really exist. A button is
 *   only rendered when its link is set, so there are no dead buttons.
 * - built: things that actually exist in the code.
 * - planned: ideas / design-only items that are NOT built yet.
 * - stack: leave [] if unsure; the row is then hidden.
 * - Screenshots: drop an image named after the slug (e.g. pizza-ora.png) into
 *   src/assets/screenshots/ and it appears automatically on the card.
 */

export const STATUS = {
  concept: "Self-initiated concept",
  project: "Self-initiated project",
  personal: "Personal project",
  building: "Currently building",
};

export const projects = [
  {
    slug: "iron-district",
    group: "selected",
    name: "Iron District",
    type: "Gym website concept",
    status: "concept",
    blurb:
      "A fictional gym created as a concept, to explore what a modern gym website could look like.",
    stack: [], // TODO: add the technologies used
    links: { live: null, github: null }, // TODO
  },
  {
    slug: "pizza-ora",
    group: "selected",
    name: "Pizza Ora",
    type: "Restaurant website",
    status: "project",
    blurb:
      "A multi-page static website for a local pizzeria with a menu, a cart and ordering through WhatsApp. Built on my own initiative, not commissioned.",
    what: "A restaurant website that puts the menu and ordering in one mobile-friendly place, with no backend and no app to install.",
    problem:
      "A takeaway menu often lives in photos and social media posts. This gives customers one page to browse the menu and send an order.",
    built: [
      "Menu driven by a JSON file, with support for an owner-editable Google Sheet (CSV) menu",
      "Multi-item cart that sends the order through WhatsApp",
      "Crust price customizer",
      "Opening-hours badge and floating WhatsApp button",
    ],
    planned: [
      "Contact form",
      "Local SEO",
      "QR-code dine-in ordering",
      "Multiple languages",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Vite"],
    links: {
      live: "https://pizza-ora.vercel.app/",
      github: "https://github.com/Riyadb023/Pizza-Ora",
    },
  },
  {
    slug: "intik",
    group: "selected",
    name: "INTIK",
    type: "Restaurant website concept",
    status: "concept",
    blurb:
      "A restaurant website concept I built on my own initiative. It was not commissioned by the restaurant.",
    stack: [],
    links: {
      live: "https://intikdz.vercel.app/",
      github: "https://github.com/Riyadb023/INTIK",
    },
  },
  {
    slug: "dream-cars-builder",
    group: "dev",
    name: "Dream Cars Builder",
    type: "Development project",
    status: "personal",
    blurb: "",
    stack: [],
    links: {
      live: "https://build-your-dream-car-nu.vercel.app/",
      github: "https://github.com/Riyadb023/Build-your-dream-car",
    },
  },
  {
    slug: "battleship",
    group: "dev",
    name: "Battleship",
    type: "JavaScript game",
    status: "personal",
    blurb:
      "The Battleship game written in JavaScript, with unit tests written in Jest.",
    stack: ["JavaScript", "Jest"],
    links: {
      live: null,
      github: "https://github.com/Riyadb023/Riyad-BattleShip",
    },
  },
  {
    slug: "weather-app",
    group: "dev",
    name: "Weather App",
    type: "API project",
    status: "personal",
    blurb: "A weather app that pulls its data from a weather API.",
    stack: ["Weather API"], // TODO: add the languages/frameworks used
    links: {
      live: "https://riyadb023.github.io/Riyad-Weather/",
      github: "https://github.com/Riyadb023/Riyad-Weather",
    }, // TODO
  },
  {
    slug: "rock-paper-scissors",
    group: "dev",
    name: "Rock Paper Scissors",
    type: "JavaScript game",
    status: "personal",
    blurb:
      "Midnight Arcade: a Rock Paper Scissors game with CPU and two-player modes, a Lizard-Spock ruleset and a light/dark theme.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: {
      live: "https://riyadb023.github.io/RPS-Midnight-Arcade/",
      github: "https://github.com/Riyadb023/RPS-Midnight-Arcade",
    },
  },
];

/** In progress: shown separately, never as finished work. */
export const building = {
  slug: "gym-os",
  name: "FitLab Gym OS",
  type: "Web application",
  status: "building",
  blurb:
    "A gym-focused web application. Still in progress; details and a demo will be added when it's ready.",
  links: { live: null, github: null },
};

export const selectedProjects = projects.filter((p) => p.group === "selected");
export const devProjects = projects.filter((p) => p.group === "dev");
export const hasDetail = (p) =>
  Boolean(p.what || p.built?.length || p.planned?.length);
