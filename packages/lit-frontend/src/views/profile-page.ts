import { html, LitElement, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import "../components/user-profile";
import "../components/reviewProfile"; // Import the Reviews component
// import { Router } from "@vaadin/router";
@customElement("profile-page")
export class ProfilePageElement extends LitElement {
    render() {
        return html`
        <main>
            <user-profile path="/profiles/bobateadog"></user-profile>
            <item-reviews-profile
          class="review-container"
          itemId="bobateadog"
        ></item-reviews-profile>
        </main>
    `;
    }

    static styles = [
        unsafeCSS(resetCSS),
        unsafeCSS(pageCSS),
    ];
}




