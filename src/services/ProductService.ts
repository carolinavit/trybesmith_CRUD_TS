import connection from '../models/connection';
import ProductModel from '../models/ProductModel';
import Product from '../interfaces/product.interface';

export default class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  create(product: Product): Promise<Product> {
    return this.model.create(product);
  }

  async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }
}
