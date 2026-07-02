import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index.js';
import ProductsRoutes from './routes/products.route.js';
import cors from 'cors';


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(routes);


app.use('/', ProductsRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

export default app;