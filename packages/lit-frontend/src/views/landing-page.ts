import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
// import { property } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import indexCSS from "/src/styles/index.css?inline";
import { Item } from "ts-models";
@customElement("landing-page")
export class LandingPage extends LitElement {
  @property()
  path: string = "";

  @state()
  allItem: Item[] = [];

  render() {
    return html`
      <main>
        You made it to the landing page!
        <search-bar></search-bar>
        <clothing-grid></clothing-grid>
      </main>
    `;
  }

  static styles = [
    unsafeCSS(resetCSS),
    unsafeCSS(pageCSS),
    unsafeCSS(indexCSS),
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



