import { StatusBar } from "../Frames";
import { ArrowRight, GitHub, Check } from "../Icons";

/** Menu Engine — documentation site (desktop) */
export function MenuEngineSite() {
  return (
    <div className="mk-page mk-engine">
      <header className="mk-nav">
        <div className="mk-logo">
          <span className="mk-logo__mark">ME</span>
          Menu Engine
        </div>
        <span className="mk-ver">v1.4.0</span>
        <nav className="mk-navlinks">
          <span className="is-on">Docs</span>
          <span>Examples</span>
          <span>Changelog</span>
        </nav>
        <span className="mk-btn mk-btn--ghost mk-btn--sm">
          <GitHub />
          Star
        </span>
      </header>

      <div className="mk-docs">
        <aside className="mk-side">
          <div className="mk-side__group">
            <b>Getting started</b>
            <span className="is-on">Introduction</span>
            <span>Quick start</span>
            <span>Installation</span>
          </div>
          <div className="mk-side__group">
            <b>Guides</b>
            <span>Menu schema</span>
            <span>Cart &amp; quantities</span>
            <span>WhatsApp adapter</span>
            <span>Styling themes</span>
          </div>
          <div className="mk-side__group">
            <b>API</b>
            <span>useMenu()</span>
            <span>useCart()</span>
            <span>formatOrder()</span>
          </div>
        </aside>

        <main className="mk-doc">
          <span className="mk-kicker">Introduction</span>
          <h2 className="mk-h1">One menu schema. A full ordering site.</h2>
          <p className="mk-p">
            Menu Engine is the React kit behind my restaurant projects. Describe the menu once, get a
            browsable menu, a cart and a formatted WhatsApp order — no backend, no build step for the
            restaurant owner.
          </p>

          <div className="mk-install">
            <b>npm</b>
            install @riyad/menu-engine
            <span>Copy</span>
          </div>

          <div className="mk-flow">
            <div className="mk-node">
              <div className="mk-node__head">menu.json</div>
              <div className="mk-node__body">
                <pre className="mk-code">
{`{
  `}<b>"name"</b>{`: `}<em>"Pizza Ora"</em>{`,
  `}<b>"currency"</b>{`: `}<em>"DA"</em>{`,
  `}<b>"items"</b>{`: [ … ]
}`}
                </pre>
              </div>
            </div>

            <div className="mk-flow__arrow">
              <ArrowRight />
            </div>

            <div className="mk-node">
              <div className="mk-node__head">&lt;MenuProvider /&gt;</div>
              <div className="mk-node__body">
                <span className="mk-name" style={{ fontSize: "1.05em" }}>
                  Margherita
                </span>
                <span className="mk-desc">Tomato, fior di latte, basil</span>
                <span className="mk-card__row" style={{ marginTop: "0.4em" }}>
                  <span className="mk-price">1 200 DA</span>
                  <span className="mk-add" style={{ fontSize: "0.85em" }}>
                    <Check />
                    Added
                  </span>
                </span>
              </div>
            </div>

            <div className="mk-flow__arrow">
              <ArrowRight />
            </div>

            <div className="mk-node">
              <div className="mk-node__head">WhatsApp order</div>
              <div className="mk-node__body">
                <div className="mk-wa-msg">
                  <p>
                    <b>New order — Pizza Ora</b>
                    <br />
                    1× Margherita — 1 200 DA
                    <br />
                    1× Frites maison — 350 DA
                    <br />
                    Delivery · Hydra
                  </p>
                  <span>1 550 DA · 9:41</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mk-feats">
            <div className="mk-node">
              <div className="mk-node__head">What you get</div>
              <div className="mk-node__body">
                <span className="mk-feat">
                  <Check />
                  Menu, categories &amp; prices in DA
                </span>
                <span className="mk-feat">
                  <Check />
                  Cart with quantities
                </span>
                <span className="mk-feat">
                  <Check />
                  Formatted WhatsApp order
                </span>
              </div>
            </div>
            <div className="mk-node">
              <div className="mk-node__head">No backend</div>
              <div className="mk-node__body">
                <span className="mk-feat">
                  <Check />
                  Static hosting, free tier
                </span>
                <span className="mk-feat">
                  <Check />
                  Menu updated in one file
                </span>
                <span className="mk-feat">
                  <Check />
                  Fast on a 3G connection
                </span>
              </div>
            </div>
            <div className="mk-node">
              <div className="mk-node__head">Used in</div>
              <div className="mk-node__body">
                <span className="mk-feat">
                  <b>Pizza Ora</b> — ordering site
                </span>
                <span className="mk-feat">
                  <b>Sushi Hero DZ</b> — delivery menu
                </span>
                <span className="mk-feat">
                  <b>Crousty Takawa</b> — combo flow
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/** Menu Engine — the WhatsApp message the library produces (mobile) */
export function MenuEngineMobile() {
  return (
    <div className="mk-chat">
      <StatusBar />
      <div className="mk-chat__head">
        <span className="mk-chat__avatar">PO</span>
        <span>
          <b>Pizza Ora</b>
          <span>online</span>
        </span>
      </div>
      <div className="mk-chat__body">
        <div className="mk-bubble mk-bubble--out">
          <b>New order — Pizza Ora</b>
          <br />
          1× Margherita — 1 200 DA
          <br />
          1× Frites maison — 350 DA
          <br />
          Delivery · Hydra, 12 Rue des Frères Bouadou
          <br />
          <b>Total 1 550 DA</b>
          <em>9:41 ✓✓</em>
        </div>
        <div className="mk-bubble mk-bubble--in">
          Received — your order is confirmed, delivery in 30 minutes.
          <em>9:42</em>
        </div>
      </div>
      <div className="mk-chat__bar">
        <span className="mk-chat__field">Message</span>
        <span className="mk-chat__send">
          <ArrowRight />
        </span>
      </div>
    </div>
  );
}
