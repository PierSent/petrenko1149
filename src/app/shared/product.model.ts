export interface MyProduct {
    id?: number;
    name: string;
    articul: string;
    manufacture: string;
    type: number;
    weight: number;
    cost: number;   
    amount: number;
}
  
export enum MyProductType {
    furniture,
    technics,
    books,
    phones
}