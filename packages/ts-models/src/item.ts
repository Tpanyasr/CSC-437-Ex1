import { Review } from './review';
export interface Item {
    itemId: number;
    name: string;
    price: number;
    description: string;
    categories: [string];
    quantity: number;
    reviews: [Review];
}