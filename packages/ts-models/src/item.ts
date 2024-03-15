// import { Review } from './review';
export interface Item {
    itemId: string;
    name: string;
    price: number;
    description: string;
    categories: string[];
    store: String;
    size: String;
    // size: "S" | "M" | "L" | "XL" | "XXL";
    image: string;

}