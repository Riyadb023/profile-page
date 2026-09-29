/**
 * Selected work.
 *
 * The `theme` object feeds CSS custom properties on the mockup frame, so every
 * project keeps its own brand identity while sharing one mockup component set.
 * `url` stays null until a project is deployed — when a value is added, the
 * project preview shows a "Live site ↗" link automatically.
 */

export const projects = [
  {
    slug: "pizza-ora",
    n: "01",
    name: "Pizza Ora",
    category: "Interactive restaurant experience",
    year: "2025",
    scope: "Design & build",
    address: "pizzaora.dz",
    url: null,
    mock: "pizza",
    phoneSide: "right",
    blurb: "Menu, restaurant information and WhatsApp ordering in one mobile-first site.",
    problem:
      "Customers primarily discovered the restaurant through social media and needed an easier way to explore the menu and place an order.",
    solution:
      "A mobile-first website bringing the menu, restaurant information and WhatsApp ordering into one clear experience.",
    stack: ["React", "JavaScript", "Vite", "CSS"],
    theme: {
      "--b-bg": "#fbf7f0",
      "--b-surface": "#ffffff",
      "--b-ink": "#241a14",
      "--b-muted": "#7d6b5e",
      "--b-line": "rgba(36,26,20,.13)",
      "--b-brand": "#b03a20",
      "--b-onbrand": "#fff5f0",
      "--b-radius": "10px",
    },
  },
  {
    slug: "sushi-hero-dz",
    n: "02",
    name: "Sushi Hero DZ",
    category: "Delivery menu & ordering flow",
    year: "2025",
    scope: "Design & build",
    address: "sushiherodz.com",
    url: null,
    mock: "sushi",
    phoneSide: "left",
    blurb: "A dark, appetising storefront for a sushi delivery kitchen in Algiers.",
    problem:
      "Orders arrived as unstructured Instagram DMs: no prices in one place, no clear delivery zones, and a lot of back-and-forth before the order was confirmed.",
    solution:
      "A delivery-first website with a browsable menu, delivery zones and hours, and an order builder that sends a structured message to WhatsApp.",
    stack: ["React", "JavaScript", "CSS", "Vite"],
    theme: {
      "--b-bg": "#101413",
      "--b-surface": "#171d1b",
      "--b-ink": "#f1f5f2",
      "--b-muted": "#94a09a",
      "--b-line": "rgba(241,245,242,.15)",
      "--b-brand": "#4e8c6f",
      "--b-onbrand": "#08100c",
      "--b-radius": "6px",
    },
  },
  {
    slug: "crousty-takawa",
    n: "03",
    name: "Crousty Takawa",
    category: "Takeaway website & combo ordering",
    year: "2024",
    scope: "Design & build",
    address: "croustytakawa.dz",
    url: null,
    mock: "crousty",
    phoneSide: "right",
    blurb: "A loud, fast takeaway site built around combos and a three-tap order.",
    problem:
      "The phone was the ordering system. During peak hours the team missed calls and customers had no way to see combos, prices or opening hours.",
    solution:
      "A quick-loading takeaway site that puts combos front and centre, shows live opening hours and sends the whole order to WhatsApp in three taps.",
    stack: ["React", "JavaScript", "Vite", "CSS"],
    theme: {
      "--b-bg": "#fdf5e8",
      "--b-surface": "#fffdf8",
      "--b-ink": "#1b1512",
      "--b-muted": "#8b7565",
      "--b-line": "rgba(27,21,18,.14)",
      "--b-brand": "#dd5f0c",
      "--b-onbrand": "#fff6ea",
      "--b-radius": "14px",
    },
  },
  {
    slug: "cafe-sahel",
    n: "04",
    name: "Café Sahel",
    category: "Coffee shop website",
    year: "2024",
    scope: "Design & build",
    address: "cafesahel.dz",
    url: null,
    mock: "cafe",
    phoneSide: "left",
    blurb: "A calm editorial site for a specialty coffee shop: menu, hours, location.",
    problem:
      "People found the café by accident and had no way to check opening hours, the coffee menu or the address before walking over.",
    solution:
      "A light editorial website with the daily menu, opening hours, the address and a one-tap call button — built to load instantly on mobile.",
    stack: ["React", "JavaScript", "CSS"],
    theme: {
      "--b-bg": "#f4f1eb",
      "--b-surface": "#fffdf9",
      "--b-ink": "#2a211b",
      "--b-muted": "#8a7b6d",
      "--b-line": "rgba(42,33,27,.13)",
      "--b-brand": "#6b4a32",
      "--b-onbrand": "#fbf4ea",
      "--b-radius": "4px",
    },
  },
  {
    slug: "menu-engine",
    n: "05",
    name: "Menu Engine",
    category: "Open-source React ordering kit",
    year: "2025",
    scope: "Product & code",
    address: "menu-engine.dev",
    url: null,
    mock: "engine",
    ratio: "16 / 7.7",
    phoneSide: "right",
    blurb: "The reusable kit behind my restaurant projects: menu schema in, ordering site out.",
    problem:
      "Every restaurant project started from scratch: the same menu data, the same cart logic, the same WhatsApp message format, rebuilt each time.",
    solution:
      "A small React library that turns one menu schema into a browsable menu, a cart and a formatted WhatsApp order — so a new restaurant site starts from day two, not day one.",
    stack: ["React", "JavaScript", "Vite", "npm"],
    theme: {
      "--b-bg": "#ffffff",
      "--b-surface": "#f6f7f5",
      "--b-ink": "#14161a",
      "--b-muted": "#6c737d",
      "--b-line": "rgba(20,22,26,.12)",
      "--b-brand": "#2e5b4e",
      "--b-onbrand": "#f4f8f6",
      "--b-radius": "6px",
    },
  },
];
