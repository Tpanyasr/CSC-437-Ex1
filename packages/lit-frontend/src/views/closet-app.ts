import { html, LitElement, unsafeCSS, css} from "lit";
import { customElement } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
// import { Router } from "@vaadin/router";
import routes from "../routes";
import "../components/navbar"; //exported as name app-navbar
import "../components/vaadin-router";
import "../components/auth-required"; //exported as name auth-required
import "../components/footer"; //exported as name footer-component

@customElement("closet-app")
export class ClosetAppElement extends LitElement {
  render() {
    return html`
      <auth-required>
        <app-navbar> </app-navbar>
        <vaadin-router .routes=${routes}> </vaadin-router>
        <div class="spacer" > </div>
        <footer-component class = "footer" ></footer-component>
      </auth-required>
    `;
  }

  static styles = [unsafeCSS(resetCSS), unsafeCSS(pageCSS), css`.spacer{margin-top: 100px;}`
  ];
}
