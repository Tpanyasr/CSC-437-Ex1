import { LitElement, html, css, unsafeCSS} from "lit";
import { customElement, state, property } from "lit/decorators.js";
import "./drop-down.ts"; // Importing drop-down component
import { Profile } from "ts-models";
import { consume } from "@lit/context";
import { ToggleSwitchElement } from "./toggle.ts";
import { authContext } from "./auth-required";
import { APIUser } from "../rest";

import resetCSS from "/src/styles/reset.css?inline";
import indexCSS from "/src/styles/index.css?inline";
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
        <a href="/app/index.html" class="logo-container">
          <img src="/images/logo.png" alt="Logo" class="logo" />
        </a>
        <div class="link_container">
          <a href="/nav_pages/stores.html">Stores</a>
          <a href="/nav_pages/test.html">Test Profile Page</a>
          <drop-down>
            <img src="/images/profilepic.png" alt="user" />
            <ul slot="menu">
              <li><a href="/nav_pages/profile.html">Profile</a></li>
              <li>
                <a href="/nav_pages/shoppingcart.html">Shopping Cart</a>
              </li>
              <li><a href="">Wishlist</a></li>
              <li>
                <toggle-switch @change=${this._toggleDarkMode}>Dark Mode
                </toggle-switch>
              </li>
              <li><a href="#" @click=${this._signOut}>Logout</a></li>
            </ul>
          </drop-down>
        </div>
      </nav>
    `;
  }

  static styles = [ 
    unsafeCSS(resetCSS),
    unsafeCSS(indexCSS),
    unsafeCSS(pageCSS),
    css`
    a {
      text-decoration: none;
      color: var(--color-text);
    }
    a:hover {
      color: #ffa500;
    }
    /*NAV BAR*/
    nav {
      padding: 1.5%;
      padding-left: 5%;
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-around;
      border-bottom-color: black;
      border-width: 2px;
      border-bottom-style: solid;
    }
    .link_container {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-around;
    }

    .nav_link {
      text-decoration: none;
    }
    .logo {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
    .logo-container {
      display: flex;
      justify-content: center;
      width: 25%;
    }
  `];

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

