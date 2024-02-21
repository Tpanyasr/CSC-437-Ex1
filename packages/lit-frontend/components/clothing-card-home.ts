import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { property } from "lit/decorators.js";

@customElement("clothing-card-home")
export class ClothingItem extends LitElement {
  
  // Array of clothing items data
  @property({ type: Array }) clothingItems = 
  [
    {
      name: "Oxford Long-Sleeve Shirt",
      brand: "Brand: Uniqlo",
      price: "$19.99",
      category: "Shirt",
      size: "S-XXL",
      link: "/individual_items/uniqloshirt1.html",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0umZCwz2-zJu343QE1qX-plkbppqkVfLvdg&usqp=CAU"
    },
    {
      name: "Crew Neck Short Sleeved T-Shirt",
      brand: "Brand: Uniqlo",
      price: "$19.99",
      category: "Shirt",
      size: "S-XXL",
      link: "/individual_items/uniqloshirt2.html",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9KvXyW17lWNQrOZLz1aQ_PEOO6yxNSMpjNg&usqp=CAU"
    },
    {
      name: "Mugler H&M Printed T-Shirt",
      brand: "Brand: H&M",
      price: "$125.00",
      category: "Shirt",
      size: "S-XXL",
      link: "/individual_items/hamshirt1.html",
      imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IlNBBPRL6OuzCgfJtcR0p7Nst8PfuhsLSA&usqp=CAU"
    },
    {
      name: "Relaxed Fit Twill Shirt",
      brand: "Brand: H&M",
      price: "$9.99",
      category: "Shirt",
      size: "S-XXL",
      link: "/individual_items/hamshirt2.html",
      imageSrc:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5a%2F8b%2F5a8bbb899b64947baaff01a90f138393150dadb2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
    }
    // Add more items as needed
  ];
  filteredItems = this.clothingItems;

  render() {
    return html`
    <div class="search-container">
    <img class="search-icon" src="/images/searchbar.png" alt="Search" />
    <input type="text" class="search-input" placeholder="Search..." @input="${this.handleSearch}" />
  </div>
    <div class="container_items">
      ${this.renderClothingItems()}
      </div>
    `;
  }

  renderClothingItems() {
    return this.filteredItems.map((item) => html`
      <div class="container_items">
        <a href="${item.link}">
          <article class="clothing-item">
            <header class="header-box">
              <h1>${item.name}</h1>
            </header>
            <slot name="image">
              <img class ="card-img"  src="${item.imageSrc}" />
            </slot>
            <section class="details">
              <h2>${item.brand}</h2>
              <p>${item.price}</p>
              <p>${item.category}</p>
              <p>${item.size}</p>
            </section>
          </article>
        </a>
      </div>
    `);
  }


  handleSearch(event: Event) {
    const searchInput = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredItems = this.clothingItems.filter(item =>
      item.name.toLowerCase().includes(searchInput) ||
      item.brand.toLowerCase().includes(searchInput) ||
      item.category.toLowerCase().includes(searchInput)
    );
    this.requestUpdate();
  }

  static styles = css`
  .header-box{
    margin: 10px 5px 10px 5px;
    height: 100%;
    max-height: 72px;
  }
  .container_items{
    font-family: Arial, sans-serif;
    margin: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
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
    max-width: 330px;
    width: 100%;
    height: 100%;
    margin-left: 2%;
    margin-top: 20px;
    margin-bottom: 3%;
    max-height: 500px;
  }
  
  .card-img, .recommendation-img{
    max-height: 225px;
    max-width: 225px;
    width: 100%;
    height: 100%;
    margin-left: 10%;
    margin-right: 10%;
    object-fit: contain; /* Maintain aspect ratio and add padding if necessary */
}
/* SEARCH BAR */


.search-container {
  position: relative;
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Style for the search input */
.search-input {
  width: 400px;
  height: 50px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

/* Style for the magnifying glass icon */
.search-icon {
  cursor: pointer;
}
  
  `;
}
  
  





