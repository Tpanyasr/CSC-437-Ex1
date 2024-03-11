export interface Profile {
  userid: string;
  name: string;
  contactInfo: string;
  sizes: {
      shirt: string;
      pants: string;
  };
  reviews: {
      reviewText: string;
  }[];
}

export interface Review {
  reviewText: string;
  datePosted: Date; // You can use the Date type if you prefer
  itemLink: string; // Optional property for the link to the item
}
//this is a typescript interface that is used to define the JSON that the rest routes will return