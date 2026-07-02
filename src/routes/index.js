import express from 'express';
import productsRoutes from './products.route.js';
const router = express.Router();

router.use('/api/products', productsRoutes);

export default router;