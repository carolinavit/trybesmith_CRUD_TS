import { Request, Response } from 'express';
// import statusCodes from '../statusCodes';
import ProductService from '../services/ProductService';

class ProductController {
  productService: ProductService;

  constructor(productService = new ProductService()) {
    this.productService = productService;
    this.create = this.create.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    const product = req.body;
    const productCreated = await this.productService.create(product);
    res.status(201).json(productCreated);
  }
}

export default ProductController;
