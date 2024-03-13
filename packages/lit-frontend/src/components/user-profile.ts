import { css, html, LitElement, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile, Review } from "ts-models";
import { serverPath } from "./rest";

// export interface Review {
//   reviewText: string;
//   datePosted: Date; // You can use the Date type if you prefer
//   itemLink: string; // Optional property for the link to the item
//   userId: string;
//   itemId: string;
//   rating: number;
// }

@customElement("user-profile")
export class UserProfileElement extends LitElement {

  @property({ attribute: false })
  using?: Profile;

  get profile() {
    return this.using || ({} as Profile);
  }
  @property()
  path: string = "/profiles";

  @state()
  newAvatar?: string;

  @state()
  reviews: Review[] = [];



  render() {
    const { name, contactInfo, sizes } = (this.profile ||
      {}) as Profile;

    if (!sizes) {
      return html`<div>Loading...</div>`;
    }

    return html`
      <article>
        <h2>Your Profile</h2>
        <div class="pfp_container">
          <div class="circle" style="background-color: #b91111"></div>
        </div>
        <section class="user-info">
          <form>
            <label for="name">Name:</label><br />
            <input type="text" id="name" name="name" value="${name}" /><br />
            <label for="contact">Contact Info:</label><br />
            <input
              type="text"
              id="contact"
              name="contact"
              value="${contactInfo}"
            /><br />
          </form>
        </section>
        <section class="user-size">
          <h2>Your Size</h2>
          <form>
            <label for="shirt-size">Shirt Size:</label><br />
            <input
              type="text"
              id="shirt-size"
              name="shirt-size"
              value="${sizes.shirt}"
            /><br />
            <label for="pants-size">Pants Size:</label><br />
            <input
              type="text"
              id="pants-size"
              name="pants-size"
              value="${sizes.pants}"
            /><br />
          </form>
        </section>
      </article>
      `;
  }
//  <section class="user-reviews">
//     <h2>Your Reviews</h2>
   
//     ${reviews.map(
//       (review) => html`
//         <a href="${review.itemLink}">
//           <p>Date Posted: ${review.datePosted}</p>
//           <!-- Render date -->
//           <!-- Generate star rating HTML based on review's rating -->
//           <div class="star">
//             ${this.generateStarRating(review.rating)}
//           </div>
//           ${review.reviewText}
//         </a>
//       `
//     )}
//   </section>
  static styles = [css``];
  
  _fetchData(path: string) {
    fetch(serverPath(path))
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      })
      .then((json: unknown) => {
        if (json) this.using = json as Profile;
      });
  }

  _fetchReviewData(path: string) {
    fetch(serverPath(path))
    .then((response) => {
        if (response.status === 200) {
        return response.json();
        }
        return null;
    })
    .then((json: unknown) => {
        if (json) this.reviews = json as Review[];
    });
}

  connectedCallback() {
    console.log("Connected callback");
    if (this.path) {
      this._fetchData(this.path);
    }
    super.connectedCallback();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "path" && oldValue !== newValue && oldValue) {
      this._fetchData(newValue);
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }
}

@customElement("user-profile-edit")
export class UserProfileEditElement extends UserProfileElement {
  render() {
    console.log("Rendering form", this.profile);

    return html``;
  }

  static styles = [...UserProfileElement.styles, css``];

  // _handleSubmit(ev: Event) {
  //   ev.preventDefault(); // prevent browser from submitting form data itself

  //   const target = ev.target as HTMLFormElement;
  //   const formdata = new FormData(target);
  //   const entries = Array.from(formdata.entries())
  //     .map(([k, v]) => (v === "" ? [k] : [k, v]))
  //     .map(([k, v]) =>
  //       k === "airports"
  //         ? [k, (v as string).split(",").map((s) => s.trim())]
  //         : [k, v]
  //     );
  //   const json = Object.fromEntries(entries);

  //   this._putData(json);
  // }

  _putData(json: Profile) {
    fetch(serverPath(this.path), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json),
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        else return null;
      })
      .then((json: unknown) => {
        if (json) this.using = json as Profile;
      })
      .catch((err) => console.log("Failed to PUT form data", err));
  }

  
  // Function to generate star rating HTML based on the review's rating
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
}
