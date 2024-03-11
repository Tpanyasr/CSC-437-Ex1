import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";

import routes from "../routes";

import "../components/navbar"; //exported as name app-navbar
import "../components/vaadin-router";

@customElement("sheetshare-app")
export class SheetShareAppElement extends LitElement {
    render() {
        return html`
        <app-navbar> </app-navbar>  
        <vaadin-router .routes=${routes}> </vaadin-router>
    `;
    }

    static styles = [
        unsafeCSS(resetCSS),
        unsafeCSS(pageCSS),
    ];
}