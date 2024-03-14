import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
// import { property } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import indexCSS from "/src/styles/index.css?inline";
import homePageCSS from "/src/styles/homepage.css?inline";
import { Item } from "ts-models";
import "../components/searchbar";
import "../components/clothing-card";
@customElement("landing-page")
export class LandingPage extends LitElement {
  @property()
  path: string = "";

  @state()
  allItem: Item[] = [];

  render() {
    return html`
      <main>
        <search-bar></search-bar>
        <div class="container_items">
          ${this.allItem.map(
            (item) =>
              html`<clothing-card
                name=${item.name}
                brand=${item.store}
                description=${item.description}
                price=${item.price}
              >  <img slot="image"          
  src=${item.image}
  alt="Clothing Image" class="card-img" /></clothing-card>`
          )}
        </div>
      </main>
    `;
  }

  static styles = [
    unsafeCSS(resetCSS),
    unsafeCSS(indexCSS),
    unsafeCSS(homePageCSS)
  ];

  
  connectedCallback() {
    //if (this.path) {
        // this._fetchData(this.path);
        // Instead of fetching data, assign dummy data for testing

        this.allItem = [
          { 
              itemId: 1,
              name: "Oxford Long-Sleeve Shirt",
              store: "Uniqlo",
              price: 19.99,
              categories: ["Shirt", "Long-Sleeve", "Oxford"],
              size: "Size: S-XXL",
              description: "A classic button-up shirt made with a durable oxford fabric. Available in a variety of colors.",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IlNBBPRL6OuzCgfJtcR0p7Nst8PfuhsLSA&usqp=CAU"
          },
          { 
              itemId: 1,
              name: "Oxford Long-Sleeve Shirt",
              store: "Uniqlo",
              price: 19.99,
              categories: ["Shirt", "Long-Sleeve", "Oxford"],
              size: "Size: S-XXL",
              description: "A classic button-up shirt made with a durable oxford fabric. Available in a variety of colors.",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IlNBBPRL6OuzCgfJtcR0p7Nst8PfuhsLSA&usqp=CAU"
          },
          { 
              itemId: 1,
              name: "Oxford Long-Sleeve Shirt",
              store: "Uniqlo",
              price: 19.99,
              categories: ["Shirt", "Long-Sleeve", "Oxford"],
              size: "Size: S-XXL",
              description: "A classic button-up shirt made with a durable oxford fabric. Available in a variety of colors.",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IlNBBPRL6OuzCgfJtcR0p7Nst8PfuhsLSA&usqp=CAU"
          },
          { 
              itemId: 1,
              name: "Oxford Long-Sleeve Shirt",
              store: "Uniqlo",
              price: 19.99,
              categories: ["Shirt", "Long-Sleeve", "Oxford"],
              size: "Size: S-XXL",
              description: "A classic button-up shirt made with a durable oxford fabric. Available in a variety of colors.",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IlNBBPRL6OuzCgfJtcR0p7Nst8PfuhsLSA&usqp=CAU"
          },
          // Add more clothing data here
      ];
  
    //}
    super.connectedCallback();
}
}



