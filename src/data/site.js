/**
 * Single source of truth for identity, links and contact details.
 *
 * NOTE: the social links below are placeholders — replace them with the real
 * profiles (and add the WhatsApp number) before deploying. When `whatsapp` is
 * empty the CTA opens WhatsApp without a pre-filled number, so the visitor
 * picks the chat himself; nothing fake is published.
 */

export const site = {
  name: "Riyad",
  role: "Frontend Developer",
  location: "Algeria",
  city: "Algiers",
  tagline: "Frontend Developer · Algeria",
  availability: "Available for new projects",

  nav: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  contact: {
    whatsapp: "", // e.g. "213555123456" — country code, digits only
    github: "https://github.com/", // TODO: real profile
    instagram: "https://www.instagram.com/", // TODO: real profile
    email: null, // set to a real address to show the email row
  },

  hero: {
    headline: "I build digital experiences for businesses that want to grow online.",
    supporting:
      "Frontend developer based in Algeria, creating modern websites and digital ordering experiences for restaurants and small businesses.",
  },

  services: [
    {
      n: "01",
      title: "Restaurant websites",
      desc: "Modern websites that present the restaurant, menu, location, opening hours and contact information clearly.",
      includes: ["Homepage & story", "Menu page", "Location + hours", "Mobile-first layout"],
    },
    {
      n: "02",
      title: "Digital menus",
      desc: "Mobile-first menus that are easier for customers to browse than a static PDF — with photos, categories and prices in dinars.",
      includes: ["Categories & search", "Item photos", "Prices in DA", "Fast on 3G"],
    },
    {
      n: "03",
      title: "WhatsApp ordering",
      desc: "Ordering flows that let customers build an order on your site and send the final order straight to your WhatsApp.",
      includes: ["Cart & quantities", "Delivery or pickup", "Order summary", "No app to install"],
    },
    {
      n: "04",
      title: "Business websites",
      desc: "Professional responsive websites for businesses that need a stronger online presence than a social media page.",
      includes: ["Services & pricing", "Contact forms", "Google Maps", "SEO basics"],
    },
  ],

  steps: [
    { n: "01", title: "Discover", desc: "Understand the business, the customers and the current problems." },
    { n: "02", title: "Design", desc: "Create a clear experience around the business's identity." },
    { n: "03", title: "Build", desc: "Develop the website with modern, responsive frontend technologies." },
    { n: "04", title: "Launch", desc: "Deploy the website and make sure it works properly across devices." },
  ],

  about: {
    intro:
      "I'm Riyad, a frontend developer based in Algeria. I build modern web experiences with JavaScript and React, with a focus on making websites useful for the businesses behind them.",
    second:
      "Most of my work is with restaurants, cafés and takeaways. A menu that is easy to read on a phone and an order that arrives in your WhatsApp changes how a small business runs day to day — that is the part I care about.",
    focus: [
      "Responsive interfaces",
      "User experience",
      "Restaurant websites",
      "Digital ordering experiences",
      "Modern frontend development",
    ],
    facts: [
      { k: "Based in", v: "Algiers, Algeria" },
      { k: "Working with", v: "Restaurants & small businesses" },
      { k: "Working hours", v: "CET (UTC+1) · remote" },
      { k: "Status", v: "Taking new projects" },
    ],
  },

  tools: ["JavaScript", "React", "Vite", "HTML", "CSS", "Git", "GitHub"],

  brief: {
    types: ["Restaurant", "Café / coffee shop", "Takeaway / fast food", "Shop / retail", "Other business"],
    needs: ["Website", "Digital menu", "WhatsApp ordering", "Redesign of my current site"],
  },
};

/** Build a WhatsApp deep link. Falls back to the number-less send URL. */
export function whatsappLink(message) {
  const text = encodeURIComponent(message || "");
  const number = (site.contact.whatsapp || "").replace(/\D/g, "");
  return number ? `https://wa.me/${number}?text=${text}` : `https://api.whatsapp.com/send?text=${text}`;
}

export const DEFAULT_MESSAGE =
  "Hi Riyad, I saw your portfolio and I'd like to talk about a website for my business.";
