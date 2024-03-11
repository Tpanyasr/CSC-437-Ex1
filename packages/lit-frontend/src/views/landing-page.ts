import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import indexCSS from "/src/styles/index.css?inline";
import "../components/searchbar";
import "../components/clothing-grid";
@customElement("landing-page")
export class LandingPageElement extends LitElement {
  render() {
    return html`
      <main>
        <search-bar></search-bar>
        <clothing-grid></clothing-grid>
      </main>
    `;
  }

  static styles = [
    unsafeCSS(resetCSS),
    unsafeCSS(pageCSS),
    unsafeCSS(indexCSS),
  ];
}
