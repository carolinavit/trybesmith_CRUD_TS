import express from 'express';

import ProductRoute from './routes/product.route';
import UserRoute from './routes/user.route';
import OrderRoute from './routes/order.route';

const app = express();

app.use(express.json());

app.use('/products', ProductRoute);
app.use('/users', UserRoute);
app.use('/orders', OrderRoute);

export default app;
