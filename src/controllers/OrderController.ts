import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

export default class ProductController {
  orderService: OrderService;

  constructor(orderService = new OrderService()) {
    this.orderService = orderService;
    this.getAll = this.getAll.bind(this);
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const orders = await this.orderService.getAll();
    res.status(200).json(orders);
  }
}
