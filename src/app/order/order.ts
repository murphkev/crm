import { Customer } from "../customer/customer";
import { OrderLine } from "./order-line";

export interface Order {
    id: number;
    customer: Customer;
    lines: OrderLine[];
}