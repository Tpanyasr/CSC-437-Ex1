import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
// import { property } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import individualItemCSS from "/src/styles/individual_item.css?inline";
@customElement("item-page")
export class ItemPage extends LitElement {
  render() {
    return html`
      <div class="checkout-big">
        <h1 class="title-text">Continue Shopping?</h1>
        <div class="checkout-container">
          <a href="./payment.html" class="linkpayment">
            <h3>Checkout</h3>
          </a>
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
      <div class="recommendations_container">
        <article class="clothing-item">
          <header>
            <h1>Mugler H&M Printed T-Shirt (Mens) White</h1>
            <p>Material: Cotton</p>
          </header>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IlNBBPRL6OuzCgfJtcR0p7Nst8PfuhsLSA&usqp=CAU"
            alt="T-shirt Image"
          />

          <section class="details">
            <h3>Brand: H&M</h3>
            <p>Price: $9.99</p>
            <p>Size: S-XXL</p>
          </section>
        </article>
      </div>
    `;
  }

  static styles = [
    unsafeCSS(pageCSS),
    unsafeCSS(resetCSS),
    unsafeCSS(individualItemCSS),
  ];
}
