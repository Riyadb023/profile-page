export const CONFIG = {
  whatsapp: "213771797683",
  github: "https://github.com/Riyadb023",
  instagram: "https://www.instagram.com/riyadev023/",
  email: "riyadbenyamina32@gmail.com",
};
const whatsappNumber = CONFIG.whatsapp.replace(/\D/g, "");
export const hasWhatsApp = whatsappNumber.length > 0;
export const whatsappLink = (message = "") => hasWhatsApp ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}` : null;
export const DEFAULT_MESSAGE = "Hi Riyad, I saw your portfolio and I'd like to talk about a web project for my business.";

export const site = {
  name: "Riyad",
  role: "Full-Stack Web Developer & Digital Solutions Builder",
  city: "Algiers", country: "Algeria", status: "Available for projects", contact: CONFIG,
  nav: [{label:"Home",href:"#top"},{label:"Work",href:"#work"},{label:"About",href:"#about"},{label:"Contact",href:"#contact"}],
  hero: {
    headline: "Full-Stack Web Developer & Digital Solutions Builder",
    supporting: "I build websites, web applications and digital tools for businesses — from the customer-facing experience to the backend systems that power it.",
  },
  band: [{label:"Business websites",href:"#services"},{label:"Web applications",href:"#services"},{label:"Backend & APIs",href:"#services"},{label:"Digital tools",href:"#services"}],
  building: { title:"Building full-stack business applications", text:"Developing with Node.js, Express and PostgreSQL to build APIs, database-driven applications and practical business tools." },
  steps: [
    {n:"01",title:"Discover",desc:"Understand the business, the customers and the actual problem to solve."},
    {n:"02",title:"Design",desc:"Plan a clear experience and the right technical approach for the project."},
    {n:"03",title:"Build",desc:"Develop the frontend, backend and data layer needed for the product."},
    {n:"04",title:"Launch",desc:"Deploy the project, test the important flows and hand it over ready to use."},
  ],
  about: {
    facts:[{k:"Based in",v:"Algiers, Algeria"},{k:"Builds",v:"Websites, web apps, digital tools"},{k:"Stack",v:"React, Node.js, Express, PostgreSQL"},{k:"Focus",v:"Business-focused web products"}],
    focus:["Business websites","Web applications","Backend & APIs","Database-driven tools"],
  },
  stack:[{group:"Frontend",items:["HTML","CSS","JavaScript","React","Vite"]},{group:"Backend",items:["Node.js","Express","REST APIs"]},{group:"Database",items:["PostgreSQL","SQL"]},{group:"Tools",items:["Git","GitHub","Vercel"]}],
  brief:{types:["Gym / Fitness","Restaurant","Retail","Service Business","Other"],needs:["Business website","Website redesign","Digital menu/catalog","WhatsApp ordering","Booking / inquiries","Custom web application","Other"]},
};
