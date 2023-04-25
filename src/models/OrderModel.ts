import { Pool, RowDataPacket } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll() {
    const [rows] = await this.connection.execute<(Order & RowDataPacket)[]>(
      `SELECT o.id, o.user_id AS userId,
      JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.orders AS o 
      INNER JOIN Trybesmith.products as p ON p.order_id = o.id
      GROUP BY o.id`);
    return rows;
  }
}
