import { DEFAULT_MESSAGE, whatsappLink } from "../data/site";

export default function WaLink({
  message = DEFAULT_MESSAGE,
  children,
  ...rest
}) {
  const href = whatsappLink(message);
  const external = href ? { target: "_blank", rel: "noreferrer noopener" } : {};
  return (
    <a href={href ?? "#contact"} {...external} {...rest}>
      {children}
    </a>
  );
}
