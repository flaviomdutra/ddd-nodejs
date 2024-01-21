import { Address } from "./entity/address";
import { Customer } from "./entity/customer";
import { Order } from "./entity/order";
import { OrderItem } from "./entity/order-item";

const customer = new Customer("1", "John Doe");
const address = new Address("Main St", 123, "Anytown", "USA");

customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10);
const item2 = new OrderItem("2", "Item 2", 15);

const order = new Order("1", customer._id, [item1, item2]);