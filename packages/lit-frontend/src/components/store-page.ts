import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
// import { property } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
// import storeCSS from "/src/styles/store.css?inline";
import "./clothing-card";

@customElement("store-page")
export class StorePage extends LitElement {
  render() {
    return html`
      <div class="container_items">
        <clothing-card
          name="Mugler H&M Printed T-Shirt"
          brand="Brand: H&M"
          price="Price: $125.00"
          category="Category: Shirt"
          size="Size: S-XXL"
          link="/individual_items/hamshirt1.html"
        >
          <img
            slot="image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IlNBBPRL6OuzCgfJtcR0p7Nst8PfuhsLSA&usqp=CAU"
            alt="Clothing Image"
            class="card-img"
          />
        </clothing-card>
        <clothing-card
          name="Relaxed Fit Twill Shirt"
          brand="Brand: H&M"
          price="Price: $9.99"
          category="Category: Shirt"
          size="Size: S-XXL"
          link="/individual_items/hamshirt2.html"
        >
          <img
            slot="image"
            src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5a%2F8b%2F5a8bbb899b64947baaff01a90f138393150dadb2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
            alt="Clothing Image"
            class="card-img"
          />
        </clothing-card>
      </div>
    `;
  }

  static styles = [
    unsafeCSS(pageCSS),
    unsafeCSS(resetCSS),
    css`
      .header-box {
        margin: 10px 5px 10px 5px;
        height: 100%;
        max-height: 72px;
      }
      .details {
        line-height: 0.5;
      }
      a {
        text-decoration: none;
        color: var(--color-text);
      }
      h1 {
        font-size: 1.5rem;
        margin: 0;
      }
      .clothing-item {
        border: 1px solid #ccc;
        background-color: rgb(250, 253, 255);
        padding: 10px;
        border-radius: 5px;
        box-shadow: 1px 1px #ccc;
        max-height: 500px;
        max-width: 330px;
        width: 100%;
        height: 100%;
        margin-left: 2%;
        margin-top: 20px;
        margin-bottom: 3%;
        object-fit: contain; /* Maintain aspect ratio and add padding if necessary */
      }
    `,
  ];
}
