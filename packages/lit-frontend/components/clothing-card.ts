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
  @property({ type: String }) link: string = "";

  render() {
    return html`
    <a href="${this.link}">
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
    </a>
    `;
  }

  static styles = css`
  .header-box{
    margin: 10px 5px 10px 5px;
    height: 100%;
    max-height: 72px;
}
.details{
  line-height: .5;
}
  a{
    text-decoration: none;
    color: var(--color-text);
  }
  h1{
    font-size: 1.5rem;
    margin: 0;
  }
    .clothing-item {
      border: 1px solid #ccc;
      background-color: var(--card-color);
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
