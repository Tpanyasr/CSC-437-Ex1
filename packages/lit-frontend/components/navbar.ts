import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import './drop-down'; // Importing drop-down component

@customElement("app-navbar")
export class Navbar extends LitElement {
  render() {
    return html`
      <nav>
        <a href="../app/index.html" class="logo-container">
          <img
            src="../images/logo.png"
            alt="Logo"
            class="logo"
          />
        </a>
        <drop-down>
          <img src="../images/profilepic.png" alt="user" />
          <ul slot="menu">
            <li><a href="../nav_pages/profile.html">Profile</a></li>
            <li><a href="../nav_pages/shoppingcart.html">Shopping Cart</a></li>
            <li><a href="">Wishlist</a></li>
          </ul>
        </drop-down>
      </nav>
    `;
  }

  static styles = css`
    /* Add your CSS styles here */
    nav {
      /* Your existing styles for the nav element */
    }

    .logo-container {
      /* Your existing styles for the logo container */
    }

    .logo {
      /* Your existing styles for the logo */
    }

    .link_container {
      /* Your existing styles for the link container */
    }

    .nav_link {
      /* Your existing styles for the navigation links */
    }
  `;
}

customElements.define("app-navbar", Navbar);
