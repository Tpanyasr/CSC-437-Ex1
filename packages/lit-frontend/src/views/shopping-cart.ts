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
  path: string = "/profile/bobateadog"; // Update with actual path to fetch user profile

  @property({ attribute: false })
  userProfile?: Profile;

  @property({ attribute: false })
  cartItems: Item[] = [];

  async connectedCallback() {
    super.connectedCallback();
    await this.fetchUserProfile();
    await this.fetchCartItems();
  }

  async fetchUserProfile() {
    try {
      const response = await fetch(serverPath(this.path));
      if (!response.ok) {
        throw new Error(`Failed to fetch user profile: ${response.status} ${response.statusText}`);
      }
      const profile: Profile = await response.json();
      this.userProfile = profile;
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  }

  async fetchCartItems() {
    try {
      if (!this.userProfile) {
        throw new Error("User profile not available");
      }

      const cartItemIds = this.userProfile.cart;
      if (cartItemIds.length === 0) {
        console.log("Cart is empty");
        return;
      }

      const itemsPromises = cartItemIds.map((itemId) => fetch(`/items/${itemId}`).then((response) => response.json()));
      const cartItems = await Promise.all(itemsPromises);
      this.cartItems = cartItems;
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  }

  render() {
    return html`
      <div class="container">
        <h1>Your Shopping Cart</h1>
        <ul>
          ${this.cartItems.map(
            (item) => html`
              <li>${item.name} - ${item.price}</li>
            `
          )}
        </ul>
      </div>
    `;
  }

  static styles = [
    unsafeCSS(pageCSS),
    unsafeCSS(resetCSS),
    css`
      /* Add your custom CSS styles for the shopping cart here */
    `
  ];
}
