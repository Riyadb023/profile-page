import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

/**
 * Adds absolute-URL SEO tags (canonical, og:url, og:image) and a sitemap.xml
 * only when VITE_SITE_URL is set, so nothing points at a made-up domain.
 */
function seoPlugin(siteUrl) {
  const base = (siteUrl || "").replace(/\/+$/, "");
  return {
    name: "portfolio-seo",
    transformIndexHtml() {
      if (!base) return [];
      return [
        { tag: "link", attrs: { rel: "canonical", href: `${base}/` }, injectTo: "head" },
        { tag: "meta", attrs: { property: "og:url", content: `${base}/` }, injectTo: "head" },
        { tag: "meta", attrs: { property: "og:image", content: `${base}/og-image.png` }, injectTo: "head" },
        { tag: "meta", attrs: { name: "twitter:image", content: `${base}/og-image.png` }, injectTo: "head" },
      ];
    },
    generateBundle() {
      if (!base) return;
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${base}/</loc></url>\n</urlset>\n`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  return { plugins: [react(), seoPlugin(env.VITE_SITE_URL)] };
});
