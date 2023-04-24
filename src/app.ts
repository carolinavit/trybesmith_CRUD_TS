import express from 'express';

import ProductRoute from './routes/product.route';

const app = express();

app.use(express.json());

app.use('/products', ProductRoute);

export default app;
