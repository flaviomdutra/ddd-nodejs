import { Order } from "../entity/order";
import { OrderItem } from "../entity/order-item";
import { OrderService } from "./order.service";

describe("Order service unit tests", () => {
  it("should get total of all orders", () => {

    const item1 = new OrderItem("item-1", "Item 1", 100, "product-1", 1);
    const item2 = new OrderItem("item-2", "Item 2", 200, "product-2", 2);

    const order1 = new Order("order-1", "customer-1", [item1]);
    const order2 = new Order("order-2", "customer-2", [item2]);

    const total = OrderService.total([order1, order2]);

    expect(total).toBe(500);
  });
});
