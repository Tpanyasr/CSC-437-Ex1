import { LitElement, html,  unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
// import { property } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import searchCSS from "/src/styles/search.css?inline";
@customElement("search-bar")
export class Searchbar extends LitElement {
  render() {
    return html`
      
      <div class="search-container">
<img class="search-icon" src="/images/searchbar.png" alt="Search" />
<input type="text" class="search-input" placeholder="Search..." />
</div>


    `;
  }

  static styles = [
    unsafeCSS(pageCSS),
    unsafeCSS(resetCSS),
    unsafeCSS(searchCSS)
  ];
}

