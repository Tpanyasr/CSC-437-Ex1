import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";

import routes from "../routes";

import "../components/navbar"; //exported as name app-navbar
import "../components/vaadin-router";
import "../components/auth-required"; //exported as name auth-required

@customElement("closet-app")
export class ClosetAppElement extends LitElement {
  render() {
    return html`
      <auth-required>
        <app-navbar> </app-navbar>
        <vaadin-router .routes=${routes}> </vaadin-router>
      </auth-required>
    `;
  }

  static styles = [unsafeCSS(resetCSS), unsafeCSS(pageCSS)];
}
