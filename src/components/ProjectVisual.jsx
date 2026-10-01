/**
 * Project image. Uses a real screenshot when one exists in
 * src/assets/screenshots/<slug>.(png|jpg|jpeg|webp|avif), otherwise a neutral
 * typographic tile. Nothing here is a drawn imitation of a website.
 */
const shots = import.meta.glob(
  "../assets/screenshots/*.{png,jpg,jpeg,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

const fileSlug = (path) =>
  path
    .split("/")
    .pop()
    .replace(/\.[^.]+$/, "");

export function screenshotFor(slug) {
  const key = Object.keys(shots).find((k) => fileSlug(k) === slug);
  return key ? shots[key] : null;
}

const initials = (name) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function ProjectVisual({ project, eager = false }) {
  const src = screenshotFor(project.slug);

  if (src) {
    return (
      <div className="pv pv--shot">
        <div className="pv__chrome" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <img
          src={src}
          alt={`Screenshot of ${project.name}, ${project.type.toLowerCase()}`}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div className="pv pv--tile" aria-hidden="true">
      <span className="pv__mono">{initials(project.name)}</span>
      <span className="pv__type">{project.type}</span>
    </div>
  );
}
