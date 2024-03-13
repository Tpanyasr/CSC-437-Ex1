import {Review} from './review';
export interface Profile {
    userid: string;
    name: string;
    contactInfo: string;
    sizes: {
        shirt: string;
        pants: string;
    };
    cart: string[];
  }
  
