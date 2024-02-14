import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("dark-mode")
export class Toggle extends LitElement {
  isDarkMode: boolean = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    // Dispatch an event to notify other components about the mode change
    this.dispatchEvent(new CustomEvent("dark-mode-toggled", {
      detail: { isDarkMode: this.isDarkMode }
    }));
  }

  render() {
    return html`
      <button @click=${this.toggleDarkMode}>
        ${this.isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    `;
  }

  static styles = css`
    button {
      background-color: #333;
      color: #fff;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }
  `;
}
