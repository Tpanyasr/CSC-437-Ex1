import { LitElement, html,  unsafeCSS, css} from "lit";
import { customElement } from "lit/decorators.js";
// import { property } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import searchCSS from "/src/styles/search.css?inline";
@customElement("search-bar")
export class Searchbar extends LitElement {
  render() {
    return html`
      <div class = "parent">

        <div class="search-container">
          <img class="search-icon" src="/images/searchbar.png" alt="Search" />
          <input type="text" class="search-input" placeholder="Search..." />
        </div>
      </div>


    `;
  }

  static styles = [
    unsafeCSS(pageCSS),
    unsafeCSS(resetCSS),
    unsafeCSS(searchCSS),


    css`
    .parent{
      display: flex;
      width: 100%;
      justify-content:center;
      margin-bottom: 60px;
    }
    .search-container {
      display: flex;
      align-items: center;
      width: 50%;
      justify-content: center;
      background-color: #f8f9fa; /* Light gray background */
      border: 1px solid #ced4da; /* Gray border */
      border-radius: 4px; /* Rounded corners */
      padding: 5px;

    }
    
    .search-icon {
      width: 20px;
      height: auto;
      margin-right: 5px;
    }
    
    .search-input {
      flex: 1; /* Take up remaining space */
      border: none; /* Remove input border */
      background: none; /* Transparent background */
      outline: none; /* Remove outline on focus */
      font-size: 16px;
      color: #495057; /* Text color */
    }
    
    /* Hover effect */
    .search-container:hover {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* Light shadow on hover */
    }`
  ];
}

