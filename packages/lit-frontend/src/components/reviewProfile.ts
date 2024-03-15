import { LitElement, html, css, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { serverPath } from "./rest";
import { Review } from "ts-models"; // Import the Review interface

@customElement("item-reviews-profile")
export class ItemReviewsProfile extends LitElement {
  @property({ type: Array }) reviews: Review[] = [];
  @property({ type: Boolean }) collapsed: boolean = true;
  @property({ type: String }) itemId: string = "";
    @property({ type: String }) userId: string = "bobateadog";

  render() {
    return html`
      <h2 class="section-name" @click=${this.toggleCollapse}>Reviews</h2>
      <div class="reviews-container">
        <div class="reviews">
          ${this.reviews.map(
            (review) => html`
              <div class="review">
                <p class="review-text">${review.reviewText}</p>
                <div class="review-info">
                  <p class="review-rating">
                    Rating: ${this.generateStarRating(review.rating)}
                  </p>
                  <p class="review-date">Posted on: ${review.datePosted}</p>
                  <p class="review-user">By: ${review.userId}</p>
                </div>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
  updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (changedProperties.has("userId")) {
      this._fetchItemData("/reviews");
    }
  }

  private async _fetchItemData(path: string) {
    try {
      const response = await fetch(serverPath(path));
      if (!response.ok) {
        throw new Error(
          `Failed to fetch reviews data: ${response.status} ${response.statusText}`
        );
      }
      const json: Review[] = await response.json();
      this.reviews = json.filter((review) => review.userId === this.userId);
    } catch (error) {
      console.error("Failed to fetch reviews data:", error);
    }
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  generateStarRating(rating: number) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(html`<span class="fa fa-star checked"></span>`);
      } else {
        stars.push(html`<span class="fa fa-star"></span>`);
      }
    }
    return stars;
  }

  static styles = css`
    .reviews-container {
      background-color: #f9f9f9;
      margin-bottom: 50px; /* Increase space below the reviews */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add drop shadow */
    }

    /* Rest of the styles remain unchanged */
    .section-name {
      font-size: 23px;
      margin-bottom: 10px;
      cursor: pointer;
    }

    .reviews-wrapper {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }

    .collapsed .reviews-wrapper {
      max-height: 200px; /* Adjust the max-height based on your preference */
    }

    .reviews {
      overflow-y: auto;
      max-height: 300px; /* Set the maximum height to enable scrolling */
    }

    .review {
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 10px;
      margin-bottom: 10px;
    }

    .review-text {
      font-size: 16px;
      margin-bottom: 10px;
    }

    .review-info {
      display: flex;
      justify-content: space-between;
    }

    .review-rating,
    .review-date,
    .review-user {
      font-size: 14px;
      color: #666;
    }
  `;
}
