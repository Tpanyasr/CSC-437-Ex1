import { LitElement, html, unsafeCSS, css } from "lit";
import { customElement } from "lit/decorators.js";
import { property } from "lit/decorators.js";
import { serverPath } from "../components/rest";
import { Profile, Item } from "ts-models"; // Import the Profile and Item interfaces
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";

@customElement("cart-page")
export class ShoppingCart extends LitElement {
  @property()
  path: string = "/profiles/bobateadog"; // Update with actual path to fetch user profile

  @property({ attribute: false })
  userProfile?: Profile;

  @property({ attribute: false })
  cartItems: Item[] = [];

  @property({ attribute: false })
  itemCounts: Record<string, number> = {};

  async connectedCallback() {
    super.connectedCallback();
    await this.fetchUserProfile();
  }

  async fetchUserProfile() {
    try {
      const response = await fetch(serverPath(this.path));
      if (!response.ok) {
        throw new Error(
          `Failed to fetch user profile: ${response.status} ${response.statusText}`
        );
      }
      const profile: Profile = await response.json();
      this.userProfile = profile;
      if (this.userProfile && this.userProfile.cart) {
        await this._fetchallItemData();
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  }

  async _fetchallItemData() {
    try {
      const response = await fetch(serverPath("/items"));
      if (!response.ok) {
        throw new Error(
          `Failed to fetch items data: ${response.status} ${response.statusText}`
        );
      }
      const json: Item[] = await response.json();

      this.cartItems = json;

      // Now that this.cartItems is populated, you can proceed with counting items
      this.countCartItems();
    } catch (error) {
      console.error("Failed to fetch items data:", error);
    }
  }

  countCartItems() {
    for (const itemId of this.userProfile.cart) {
      if (this.itemCounts[itemId]) {
        this.itemCounts[itemId]++;
      } else {
        this.itemCounts[itemId] = 1;
      }
    }
  }

  getItemById(itemId: string) {
    return this.cartItems.find((item) => item.itemId === itemId);
  }

  async removeItemFromCart(itemId: string) {
    // Remove the item locally first
    const index = this.userProfile.cart.indexOf(itemId);
    if (index > -1) {
      this.userProfile.cart.splice(index, 1);
      delete this.itemCounts[itemId]; // Remove from local counts
      // Trigger re-render
      this.requestUpdate();
      // Then make the API call to update the user's cart
      try {
        const response = await fetch(serverPath(this.path), {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.userProfile),
        });
        if (!response.ok) {
          throw new Error(
            `Failed to update user profile: ${response.status} ${response.statusText}`
          );
        }
        // Re-fetch user profile to ensure UI reflects the updated state
        await this.fetchUserProfile();
      } catch (error) {
        console.error("Error removing item from cart:", error);
        // If there's an error with the API call, revert the local change
        this.userProfile.cart.splice(index, 0, itemId);
        this.itemCounts[itemId] = 1; // Restore local counts
        // Trigger re-render to revert UI changes
        this.requestUpdate();
      }
    }
}

  getTotalPrice() {
    let totalPrice = 0;
    for (const itemId in this.itemCounts) {
      totalPrice += this.getItemById(itemId)?.price || 0;
    }
    return totalPrice.toFixed(2); // Round to two decimal places
  }

  render() {
    return html`
    <div class="container-parent-real">
      <div class="container-parent">
        <h1>Your Shopping Cart</h1>
        <div class="container">
          <ul class="cart-items">
            ${Object.entries(this.itemCounts).map(
              ([itemId, count]) => html`
                <li class="cart-item">
                  <h3 class="count">${count}x</h3>
                  <div class="item-details">
                    <img
                      src="${this.getItemById(itemId)?.image}"
                      alt="Item Image"
                      class="item-image"
                    />
                    <div class="item-info">
                      <p class="item-name">${this.getItemById(itemId)?.name}</p>
                      <p class="item-price">
                        $${this.getItemById(itemId)?.price}
                      </p>
                    </div>
                  </div>
                  <button
                    @click="${() => this.removeItemFromCart(itemId)}"
                    class="remove-button"
                  >
                    Remove
                  </button>
                </li>
              `
            )}
          </ul>
        </div>
      </div>
      <div class="container-parent2">
        <div class="container2">
          <ul class="cart-items2">
            ${Object.entries(this.itemCounts).map(
              ([itemId, count]) => html`
                <li class="cart-item2">
                  <div class="item-info2">
                    <span class="item-name2"
                      >${count}x ${this.getItemById(itemId)?.name}</span
                    >
                    <span class="item-price2"
                      >$${(this.getItemById(itemId)?.price * count).toFixed(
                        2
                      )}</span
                    >
                  </div>
                </li>
              `
            )}
          </ul>
          <div class="receipt2">
            <span class="total2">Total:</span>
            <span class="total-price2">$${this.getTotalPrice()}</span>
            <button class="checkout-button2">Checkout</button>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  static styles = [
    unsafeCSS(pageCSS),
    unsafeCSS(resetCSS),
    css`
    .container-parent-real {
      display: flex;
      justify-content: center;
      align-items: center;
    }
      .count {
        margin-right: 50px;
      }
      .container-parent {
  
      }
      .container {
        max-width: 800px;
        margin-top: 40px;
      }
      .cart-items {
        list-style: none;
        padding: 0;
      }
      .cart-item {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ddd;
        padding: 10px 0;
      }
      .item-details {
        display: flex;
        align-items: center;
        flex: 1;
      }
      .item-image {
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin-right: 20px;
      }
      .item-info {
        flex: 1;
      }
      .item-name {
        font-weight: bold;
        margin-bottom: 5px;
      }
      .item-price {
        color: #666;
      }
      .remove-button {
        background-color: #f44336;
        color: #fff;
        border: none;
        padding: 8px 12px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
      .remove-button:hover {
        background-color: #d32f2f;
      }
      .receipt {
        margin-top: 20px;
        border-top: 2px solid #ddd;
        padding-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .checkout-button {
        background-color: #4caf50;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
      .checkout-button:hover {
        background-color: #388e3c;
      }
      .container-parent2 {
        margin-left: 10%;
      }

      .container2 {
        max-width: 800px;
        margin-top: 40px;
      }

      .cart-items2 {
        list-style: none;
        padding: 0;
      }

      .cart-item2 {
        border-bottom: 1px solid #ddd;
        padding: 10px 0;
      }

      .item-info2 {
        display: flex;
        justify-content: space-between;
      }

      .item-name2 {
        font-weight: lighter;
      }

      .receipt2 {
        margin-top: 20px;
        padding-top: 20px;

        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .total-price2 {
        font-weight: bold;
      }

      .checkout-button2 {
        background-color: #4caf50;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .checkout-button2:hover {
        background-color: #45a049;
      }
    `,
  ];
}
