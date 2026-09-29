/**
 * Device frames. The content inside is a real (mini) website built in CSS,
 * so the "screenshots" stay sharp at every size and match the project's brand.
 */

const Lock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
    <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
  </svg>
);

export function BrowserFrame({ address, label, theme, ratio, children }) {
  return (
    <div className="mk-frame" style={theme} role="img" aria-label={label}>
      <div className="mk-browser">
        <div className="mk-chrome">
          <span className="mk-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="mk-url">
            <Lock />
            {address}
          </span>
        </div>
        <div className="mk-viewport" style={ratio ? { aspectRatio: ratio } : undefined}>
          {children}
        </div>
      </div>
    </div>
  );
}

export function PhoneFrame({ label, theme, children }) {
  return (
    <div className="mk-frame mk-frame--phone" style={theme} role="img" aria-label={label}>
      <div className="mk-phone__body">
        <div className="mk-phone__screen">{children}</div>
      </div>
    </div>
  );
}

export function StatusBar() {
  return (
    <div className="mk-sb" aria-hidden="true">
      <span>9:41</span>
      <span className="mk-sb__icons">
        <i />
        <i />
        <i />
        <i />
      </span>
    </div>
  );
}
