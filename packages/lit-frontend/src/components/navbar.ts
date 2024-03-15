import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import "./drop-down.ts"; // Importing drop-down component
import { Profile } from "ts-models";
import { consume } from "@lit/context";
import { ToggleSwitchElement } from "./toggle.ts";
import { authContext } from "./auth-required";
import { APIUser } from "../rest";

import "./toggle.ts";
import resetCSS from "/src/styles/reset.css?inline";
// import indexCSS from "/src/styles/index.css?inline";
import pageCSS from "/src/styles/page.css?inline";

@customElement("app-navbar")
export class Navbar extends LitElement {
  @state()
  profile?: Profile;

  @consume({ context: authContext, subscribe: true })
  @property({ attribute: false })
  user = new APIUser();
  render() {
    return html`
      <nav>
        <a href="/app" class="logo-container">
          <img src="/images/logo.png" alt="Logo" class="logo" />
        </a>
        <div class="link_container">
          <a href="">Stores</a>
          <a href="/app/shopping-cart">Shopping Cart</a>
          <drop-down>
            <img src="/images/profilepic.png" alt="user" />
            <ul slot="menu">
              <li><a href="/app/profile">Profile</a></li>
              <li><a href="#" @click=${this._signOut}>Logout</a></li>
            </ul>
          </drop-down>
        </div>
      </nav>
    `;
  }

  static styles = [
    unsafeCSS(resetCSS),
    // unsafeCSS(indexCSS),
    unsafeCSS(pageCSS),
    css`
      nav {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 10px 20px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding-bottom: 2%;
        margin-bottom: 3%;
      }

      .link_container {
        display: flex;
        align-items: center;
      }

      .link_container a {
        margin-right: 20px;
        font-size: 20px;
        color: #333;
        text-decoration: none;
        position: relative;
      }

      .link_container a::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #525252;
        transform: scaleX(0);
        transform-origin: bottom left;
        transition: transform 0.3s ease-in-out;
      }

      .link_container a:hover::before {
        transform: scaleX(1);
      }
    `,
  ];

  _toggleDarkMode(ev: InputEvent) {
    const target = ev.target as ToggleSwitchElement;
    const body = document.body;

    console.log("Toggling Dark mode", ev);

    if (target?.on) body.classList.add("dark-mode");
    else body.classList.remove("dark-mode");
  }
  _signOut() {
    console.log("Signout");
    this.user.signOut();
  }
}
