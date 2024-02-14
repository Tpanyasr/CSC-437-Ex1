import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { property } from "lit/decorators.js";

@customElement("clothing-card")
export class ClothingItem extends LitElement {
  @property({ type: String }) name: string = "";
  @property({ type: String }) brand: string = "";
  @property({ type: String }) price: string = "";
  @property({ type: String }) category: string = "";
  @property({ type: String }) size: string = "";

  render() {
    return html`
      <article class="clothing-item">
        <header class="header-box">
          <h1>${this.name}</h1>
        </header>
        <slot name="image"></slot>
        <section class="details">
          <h2>${this.brand}</h2>
          <p>${this.price}</p>
          <p>${this.category}</p>
          <p>${this.size}</p>
        </section>
      </article>
    `;
  }

  static styles = css`
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
  `;
}
