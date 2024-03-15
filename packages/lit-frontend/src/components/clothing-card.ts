import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import homepageCSS from "/src/styles/homepage.css?inline";
import { Router } from "@vaadin/router";

@customElement("clothing-card")
export class ClothingItem extends LitElement {
  @property({ type: String }) name: string = "";
  @property({ type: String }) store: string = "";
  @property({ type: String }) price: string = "";
  @property({ type: Array }) categories: string[] = [];
  @property({ type: String }) size: string = "";
  @property({ reflect: true, type: String })
  itemId: string = "";

  // @property({ type: Object }) item: Item | null = null;

  static styles = [
    unsafeCSS(resetCSS),
    unsafeCSS(pageCSS),
    unsafeCSS(homepageCSS),
    css`
    .clothing-item:hover {
      cursor: pointer;
      transform: scale(1.05);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .card-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%; /* Ensure the title doesn't overflow the card */
}
      /* clothing-card.css */
    `,
  ];

  render() {
    console.log("hello:", this.store);
    return html`
      <article class="clothing-item"  @click=${() => this.navigateWithValidItemId()}>

          <header class="header-box">
            <h1 card-title>${this.name}</h1>
          </header>
          <slot name="image"></slot>
          <section class="details">
            <h2>${this.store}</h2>
            <p>${this.size}</p>
            <div class="categories">
              ${this.categories.map(
                (category) => html`<div class="category-tag">${category}</div>`
              )}
            </div>
            <p>$${this.price}</p>
          </section>
          <section class="details">
            <!-- Other details -->
          </section>
        
      </article>
    `;
  }
  navigateWithValidItemId() {
    // Check if this.itemId is valid
    if (this.itemId) {
      // Navigate to the item page using Router.go
      Router.go(`/app/items/${this.itemId}`);
    } else {
      // Handle the case where itemId is not valid (e.g., show an error message)
      console.error("Invalid itemId");
    }
  }

  // addItemToCart() {
  //   if (this.item) {
  //     // Dispatch an event to add the item to the shopping cart
  //     this.dispatchEvent(
  //       new CustomEvent("add-to-cart", {
  //         detail: { item: this.item },
  //         bubbles: true,
  //         composed: true,
  //       })
  //     );
  //   }
  // }
}
