import {Router} from 'express'
const router = Router();
import { createProduct, getProducts } from "../controllers/producto.controller";


router.get('/products', getProducts);
router.post('/products', createProduct);
// router.get('/users/:id',);

// router.put('/users',);
// router.delete('/users/:id',);

export default router
