import { LitElement, html, unsafeCSS, css, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import indexCSS from "/src/styles/index.css?inline";
import homePageCSS from "/src/styles/homepage.css?inline";
import { Item } from "ts-models";
import { serverPath } from "../components/rest";
import "../components/searchbar";
import "../components/clothing-card";
import "../components/toggle";

@customElement("landing-page")
export class LandingPage extends LitElement {
  @property()
  path: string = "/items";

  @property({ type: Array }) items: Item[] = [];


  render() {
    return html`
        <search-bar></search-bar>
      <main class = "parent">
        <div class="container_items">
          ${this.items.map(
            (item) => html`
              <clothing-card
                name=${this.truncateTitle(item.name)}
                store=${item.store}
                description=${item.description}
                price=${item.price}
                .categories=${item.categories}
                complete=${item}
                .itemId=${item.itemId}
              >
                <img
                  slot="image"
                  src=${item.image}
                  alt="Clothing Image"
                  class="card-img"
                />
              </clothing-card>
            `
          )}
        </div>
      </main>
      <!-- Render the ShoppingCart component -->
      <cart-page></cart-page>
    `;
  }

  static styles = [
    unsafeCSS(resetCSS),
    unsafeCSS(indexCSS),
    unsafeCSS(homePageCSS),
    css`
    .parent {
       display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

      .container_items {
        width: 70%;
        display: grid; /* Use CSS Grid */
        grid-template-columns: repeat(4, 1fr); /* 4 cards per row */
        gap: 40px; /* Adjust gap between cards */
      }
      .clothing-card {
        width: 100%; /* Full width */
        flex: 1 1 250px; /* Flex item with equal width and minimum width of 250px */
        margin-bottom: 20px;
        margin-left: 30px; /* Adjust margin between cards */
      }
      .card-img {
        width: 100%; /* Ensure images fill the entire space */
        height: 200px; /* Set a fixed height for consistency */
        object-fit: cover; /* Maintain aspect ratio and cover the entire container */
      }
    `,
  ];

  public truncateTitle(title: string): string {
    const maxLength = 22;
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  }

  async connectedCallback() {
    super.connectedCallback();
    if (this.path) {
      await this._fetchItemData(this.path);
    }
  }



  async _fetchItemData(path: string) {
    try {
      const response = await fetch(serverPath(path));
      if (!response.ok) {
        throw new Error(
          `Failed to fetch items data: ${response.status} ${response.statusText}`
        );
      }
      const json: Item[] = await response.json();

      this.items = json;

      
    } catch (error) {
      console.error("Failed to fetch items data:", error);
    }
  }
}

