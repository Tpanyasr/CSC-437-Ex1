import { LitElement, html, unsafeCSS, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { RouterLocation} from "@vaadin/router";
import resetCSS from "/src/styles/reset.css?inline";
import indexCSS from "/src/styles/index.css?inline";
import homePageCSS from "/src/styles/homepage.css?inline";
import { Item } from "ts-models";
import "../components/searchbar";
import "../components/clothing-card";
import "../components/toggle"
import "../components/item-template";

@customElement("individual-page")
export class IndividualPage extends LitElement {
  @property()
  path: string = "";

  @property({ attribute: false })
  location: RouterLocation | undefined;
  
  @state()
  allItem: Item[] = [];

  render() {
    return html`
      <div>
        <item-page path = ${this.path} class = "parent" ></item-page>
      </div>
    `;
  }

  static styles = [
    unsafeCSS(resetCSS),
    unsafeCSS(indexCSS),
    unsafeCSS(homePageCSS),
    css`
    .parent{
      height: 100%;
    }
    `
  ];

  connectedCallback(): void {
    super.connectedCallback();
    window.scrollTo(0, 0);

    const id = this.location?.params.id;
    this.path = `/items/${id}`;
  }


  
}
