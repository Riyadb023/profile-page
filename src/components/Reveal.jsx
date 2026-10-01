import { useInView } from "../hooks/useReveal";

/**
 * Wrapper that fades + slides its children in on first scroll into view.
 * `direction="none"` gives a plain fade (used for large blocks).
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  direction = "up",
  className = "",
  children,
  ...rest
}) {
  const [ref, inView] = useInView();

  const classes = [
    "reveal",
    direction !== "none" ? `reveal--${direction}` : "",
    inView ? "is-in" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref}
      className={classes}
      style={delay ? { "--d": `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
