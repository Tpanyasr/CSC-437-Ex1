import { css, html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
@customElement("footer-component")
export class FooterComponent extends LitElement {
  @property({ reflect: true, type: Boolean })
  open: boolean = false;

  render() {
    return html`
      <footer>
        <p>© 2024 Thomas Panyasrivinit</p>
      </footer>
    `;
  }

  static styles =[ unsafeCSS(resetCSS), unsafeCSS(pageCSS),
    css`
    * {
      padding: 1.5px;

      box-sizing: border-box;
      
    }

    footer {
  position: fixed; /* Set the position to fixed */
  left: 0;
  bottom: 0;
  width: 100%; /* Set the width to 100% */
  background-color: #fff; /* Adjust background color if needed */
  color: #000; /* Adjust text color if needed */
  border-top: 2px solid #ccc; /* Add a border at the top if needed */
  padding: 20px; /* Padding inside the footer */
  box-sizing: border-box; /* Ensure padding is included in width calculation */
}

    footer p {
      font-size: 16px;
    }

    @media screen and (max-width: 800px) {
      footer {
        padding-left: 50px;
        padding-right: 50px;
      }
    }

    @media screen and (max-width: 500px) {
      footer {
        padding-left: 31px;
        padding-right: 31px;
      }
    }
  `];
}
