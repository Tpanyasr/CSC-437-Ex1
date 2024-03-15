import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { serverPath } from "./rest";
import { Item, Profile } from "ts-models"; // Import the Item interface
import "./reviews"; // Import the Reviews component
import "./clothing-card"; // Import the ClothingCard component
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import individualItemCSS from "/src/styles/individual.css?inline";
@customElement("item-page")
export class ItemPage extends LitElement {

  @property({ attribute: false })
  usingProfile?: Profile;

  get profile() {
    return this.usingProfile || ({} as Profile);
  }
  @property({ attribute: false })
  using?: Item;

  get item() {
    return this.using || ({} as Item);
  }

  @property({ type: Array }) recommendations: Item[] = [];
  @property()
  path: string = "/items";

  @property({ type: Number })
  amountToAdd: number = 1;

  // @property({ type: Array }) cart: string[] = [];

  render() {
    return html`
      <div class="container">
        <div class="item-container">
          <div class="image-container">
            <img
              class="item-image"
              src="${this.item.image}"
              alt="T-shirt Image"
            />
          </div>
          <div class="item-details">
            <h1 class="item-title">${this.item.name}</h1>
            <p class="item-description">${this.item.description}</p>
            <div class="item-info">
              <div class="info-row">
                <p><strong>Price:</strong> $${this.item.price}</p>
                <p><strong>Store:</strong> ${this.item.store}</p>
                <p><strong>Size:</strong> ${this.item.size}</p>
              </div>
              <div class="info-row">
                <div class="categories">
                  ${this.item.categories
                    ? this.item.categories.map(
                        (category) =>
                          html`<div class="category-tag">${category}</div>`
                      )
                    : html`<div class="category-tag">No categories</div>`}
                </div>
              </div>
              <div class="add-to-cart-container">
                <input
                  type="number"
                  class="quantity-input"
                  .value=${this.amountToAdd}
                  min="1"
                  @change=${this.handleAmountChange}
                />
                <button class="add-to-cart-button" @click=${this.addToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <item-reviews
          class="review-container"
          itemId=${this.item.itemId}
        ></item-reviews>
        <h2 class="section-name">Recommended for You</h2>
        <div class="container_items">
          ${this.recommendations
            ? this.recommendations.map(
                (rec) =>
                  html`<clothing-card
                    name=${this.truncateTitle(rec.name)}
                    store=${rec.store}
                    description=${rec.description}
                    price=${rec.price}
                    .categories=${rec.categories}
                    complete=${rec}
                    .itemId=${rec.itemId}
                  >
                    <img
                      slot="image"
                      src=${rec.image}
                      alt="Clothing Image"
                      class="card-img"
                    />
                  </clothing-card>`
              )
            : html``}
        </div>
      </div>
    `;
  }

  handleAmountChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.amountToAdd = parseInt(input.value);
  }

  async addToCart() {
    console.log("entered function")
    if (this.usingProfile && this.profile) {
      console.log("entered if statement")
      for (let i = 0; i < this.amountToAdd; i++) {
        this.profile.cart.push(this.using.itemId);

      }
      await this.updateProfileCart("bobateadog", this.usingProfile.cart);
      alert('Items have been added to your shopping cart!');

    }
    // if (this.using && this.profile) {
    //   const itemId = this.using.itemId;
    //   this.profile.cart.push(itemId);
    //   await this.updateProfileCart(this.profile.cart);
    // }
  }


  _putData(json: Profile) {
    fetch(serverPath('/profiles/bobateadog'), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json),
    })
    .then((response) => {
      if (response.status === 200) return response.json();
      else return null;
    })
    .then((json: unknown) => {
      if (json) this.usingProfile = json as Profile;
    })
    .catch((err) => console.log("Failed to PUT form data", err));
  }
  async updateProfileCart(userid: string, cart: string[]): Promise<void> {
    try {
      const profile: Profile = { userid, cart }; // Create a Profile object with the provided userid and cart
      await this._putData(profile); // Call the _putData function with the Profile object
    } catch (error) {
      console.error('Failed to update profile cart:', error);
      // Handle error appropriately, such as displaying a message to the user
    }
  }
  
  public truncateTitle(title: string): string {
    const maxLength = 25;
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  }
  _fetchItemData(path: string) {
    fetch(serverPath(path))
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            `Failed to fetch item data: ${response.status} ${response.statusText}`
          );
        }
      })
      .then((json: unknown) => {
        if (json) {
          this.using = json as Item;
        } else {
          console.error("Received invalid JSON data for item");
        }
      })
      .catch((error) => {
        console.error("Failed to fetch item data:", error);
      });
  }

  async _fetchallItemData(path: string) {
    try {
      const response = await fetch(serverPath(path));
      if (!response.ok) {
        throw new Error(
          `Failed to fetch items data: ${response.status} ${response.statusText}`
        );
      }
      const json: Item[] = await response.json();

      // Filter items by store
      const currentStore = this.item.store; // Assuming this.item contains the current item
      this.recommendations = json.filter((item) => item.store === currentStore);
    } catch (error) {
      console.error("Failed to fetch items data:", error);
    }
  }

  async connectedCallback() {
    if (this.path) {
      await this._fetchItemData(this.path);
      await this._fetchallItemData("/items");
      await this._fetchProfileData();
    }
    super.connectedCallback();
  }

  _fetchProfileData() {
    fetch(serverPath("/profiles/bobateadog"))
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            `Failed to fetch item data: ${response.status} ${response.statusText}`
          );
        }
      })
      .then((json: unknown) => {
        if (json) {
          this.usingProfile = json as Profile;
          console.log("the profile is: ", this.usingProfile)
        } else {
          console.error("Received invalid JSON data for item");
        }
      })
      .catch((error) => {
        console.error("Failed to fetch item data:", error);
      });
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "path" && oldValue !== newValue && oldValue) {
      this._fetchItemData(newValue);
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  static styles = [
    unsafeCSS(resetCSS),
    unsafeCSS(pageCSS),
    unsafeCSS(individualItemCSS),
    css``,
  ];
}
