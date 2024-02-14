import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { property } from "lit/decorators.js";

@customElement("clothing-card")
export class ClothingItem extends LitElement {
  @property({ type: String })
  render() {
    return html`
      <article class="clothing-item">
        <header class="header-box">
          <h1><slot name="item-name"></slot></h1>
        </header>
        <slot name="image" />
        <section class="details">
          <h2><slot name="brand" /></h2>
          <p><slot name="price" /></p>
          <p><slot name="category" /></p>
          <p><slot name="size" /></p>
        </section>
      </article>
    `;
  }

  static styles = css`
    article {
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
