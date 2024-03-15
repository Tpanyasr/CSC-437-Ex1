import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
// import { property } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";

@customElement("store-card")
export class StoreCard extends LitElement {
  render() {
    return html`
      


    <div class="clothing-grid">
      <div class="store-img-container">
        <a href="/individual stores/ham.html">
          <img class="store-img" src="/images/ham.png" alt="Item 1" />
        </a>
      </div>

      <div class="store-img-container">
        <a href="/individual stores/uniqlo.html">
          <img class="store-img" src="/images/uniqlo.png" alt="Item 2" />
        </a>
      </div>
    </div>

    `;
  }

  static styles = [
    unsafeCSS(pageCSS),
    unsafeCSS(resetCSS)
  ];
}
