/**
 * Hand-drawn inline icons — 1em boxes, stroke inherits currentColor.
 * Kept in one file so the whole site shares a single icon language.
 */

const base = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

export const ArrowRight = (props) => (
  <svg {...base} {...props}>
    <path d="M4 12h15" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = (props) => (
  <svg {...base} {...props}>
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const ArrowDown = (props) => (
  <svg {...base} {...props}>
    <path d="M12 4v15" />
    <path d="M6 13l6 6 6-6" />
  </svg>
);

export const ArrowUp = (props) => (
  <svg {...base} {...props}>
    <path d="M12 20V5" />
    <path d="M6 11l6-6 6 6" />
  </svg>
);

export const Plus = (props) => (
  <svg {...base} {...props}>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

export const Check = (props) => (
  <svg {...base} {...props}>
    <path d="M4.5 12.5l5 5 10-11" />
  </svg>
);

export const WhatsApp = (props) => (
  <svg {...base} fill="currentColor" stroke="none" {...props}>
    <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.86.5 3.6 1.36 5.1L2 22l5.2-1.5a9.9 9.9 0 0 0 4.84 1.24h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.47 2 12.04 2Zm0 17.98h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.09.9.83-3.01-.2-.31a8.08 8.08 0 0 1-1.25-4.3c0-4.5 3.7-8.16 8.2-8.16a8.17 8.17 0 0 1 8.18 8.17c0 4.5-3.7 8.16-8.2 8.16Zm4.5-6.1c-.25-.13-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.13-.16.24-.63.79-.77.95-.14.17-.28.19-.53.06-.24-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.24-.41.08-.17.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.74 2.65 4.2 3.72.59.25 1.05.4 1.4.52.6.18 1.14.15 1.57.08.48-.07 1.45-.59 1.66-1.17.2-.57.2-1.06.14-1.16-.06-.11-.22-.17-.47-.29Z" />
  </svg>
);

export const GitHub = (props) => (
  <svg {...base} fill="currentColor" stroke="none" {...props}>
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);

export const Instagram = (props) => (
  <svg {...base} {...props}>
    <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
    <circle cx="12" cy="12" r="4.1" />
    <circle cx="17.1" cy="6.9" r="1.05" fill="currentColor" stroke="none" />
  </svg>
);

export const Mail = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <path d="M3.8 6.6l8.2 6 8.2-6" />
  </svg>
);

export const Pin = (props) => (
  <svg {...base} {...props}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const Clock = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="M12 7.4V12l3.1 1.9" />
  </svg>
);

export const Menu = (props) => (
  <svg {...base} strokeWidth={1.8} {...props}>
    <path d="M4 8h16" />
    <path d="M4 16h16" />
  </svg>
);

export const Close = (props) => (
  <svg {...base} strokeWidth={1.8} {...props}>
    <path d="M6 6l12 12" />
    <path d="M18 6L6 18" />
  </svg>
);
