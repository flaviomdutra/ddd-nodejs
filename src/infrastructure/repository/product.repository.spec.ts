import { Sequelize } from "sequelize-typescript";
import { ProductModel } from "../db/sequelize/model/product.model";

describe("Product repository test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([ProductModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a product", async () => {
    const product = await ProductModel.create({
      id: "1",
      name: "Product 1",
      price: 100,
    });

    expect(product.id).toBe("1");
    expect(product.name).toBe("Product 1");
    expect(product.price).toBe(100);
  });
});
