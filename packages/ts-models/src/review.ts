
export interface Review {
  reviewText: string;
  datePosted: string; // You can use the Date type if you prefer
  itemLink: string; // Optional property for the link to the item
  userId: string;
  itemId: string;
  rating: number;
}
