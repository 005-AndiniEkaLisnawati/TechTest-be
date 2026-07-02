import express from 'express';
const router = express.Router();
import { getProducts } from '../controllers/products.controller.js';

router.get('/api/products', getProducts); 

export default router ;