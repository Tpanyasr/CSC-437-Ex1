import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
// import { property } from "lit/decorators.js";
import resetCSS from "/src/styles/reset.css?inline";
import pageCSS from "/src/styles/page.css?inline";
import individualItemCSS from "/src/styles/individual_item.css?inline";
@customElement("item-page")
export class ItemPage extends LitElement {
  render() {
    return html`
        
   
   <div class="container_items">
    <img
    class="main-img"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IlNBBPRL6OuzCgfJtcR0p7Nst8PfuhsLSA&usqp=CAU"
    alt="T-shirt Image"
    />
    <article class="clothing-info">
      <h1 class="clothing-title">Mugler H&M Printed T-shirt (Mens) White</h1>
      <div class = "item_name">
        <p class="price">$125.00</p>
        <div class="star">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>
      </div>
      <p><strong>Color:</strong> Red</p>
      <div class="clothing-colors">
        <div class="circle" style="background-color: #5eb3ec"></div>
        <div class="circle" style="background-color: #6b3727"></div>
        <div class="circle" style="background-color: #25bd76"></div>
        <div class="circle_chosen" style="background-color: #ee2727"></div>
      </div>
      <a href="./hamshirt1.html" class="buy-link"></a>
      <section class="details">
        <!-- <a href="/ham.html">
          <h2>Brand: H&M</h2>
        </a> -->
        
        <div class="size_options">
          <div class="size-box">XS</div>
          <div class="size-box">S</div>
          <div class="size-box">M</div>
          <div class="size-box">L</div>
          <div class="size-box">XL</div>
          <div class="size-box">XXL</div>
        </div>
        
        <div class="add-to-bag-container">
          <input type="number" class="quantity-input" value="1" min="1" />
          <button class="add-to-bag-button">Add to Bag</button>
        </div>
      </section>
    </article>
  </div>

  <div class="reviews_container">
    <h2 class = "section-name">Reviews</h2>
    <article class="review-item">
      <header class="review-header">
        <a href="/profile.html">Thomas</a>
        <div class="star">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>
      </header>
      <p>Date: 12/3/45</p>
      <section class="review-contenet">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          soluta atque illum ullam sint, ipsam iure molestiae provident magnam
          quidem veniam expedita fugiat ducimus necessitatibus obcaecati odio
          quae eius omnis.
        </p>
      </section>
    </article>
  </div>

  <h2 class = "section-name">Other Clothing Recommendations</h2>
  <a href="./hamshirt2.html" class="buy-link">
    <article class="clothing-item">
      <header class="header-box">
        <h1>Relaxed Fit Twill Shirt</h1>
      </header>
      <img
        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5a%2F8b%2F5a8bbb899b64947baaff01a90f138393150dadb2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
        alt="T-shirt Image"
        class="card-img"
      />
      <section class="details">
        <h2>Brand: H&M</h2>
        <p>Price: $9.99</p>
        <p>Category: Shirt</p>
        <p>Size: S-XXL</p>
      </section>
    </article>
  </a>
    `;
  }

  static styles = [
    unsafeCSS(pageCSS),
    unsafeCSS(resetCSS),
    unsafeCSS(individualItemCSS)
  ];
}
  