import { Product } from "./product";

describe("Product unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => new Product("", "product-name", 200)).toThrow(
      "Id is required"
    );
  });

  it("should throw error when name is empty", () => {
    expect(() => new Product("product-id", "", 200)).toThrow(
      "Name is required"
    );
  });

  it("should throw error when price is less than zero", () => {
    expect(() => new Product("product-id", "product-name", -1)).toThrow(
      "Price must be greater than zero"
    );
  });

  it("should change name", () => {
    const product = new Product("product-id", "product-name", 200);

    product.changeName("new-product-name");

    expect(product.name).toBe("new-product-name");
  });

  it("should change price", () => {
    const product = new Product("product-id", "product-name", 100);

    product.changePrice(150);

    expect(product.price).toBe(150);
  });
});
