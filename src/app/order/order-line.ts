import { Product } from "../product/product";

export interface OrderLine {
    row: number;
    product: Product;
    quantity: number;
}