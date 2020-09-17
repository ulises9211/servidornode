"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var producto_controller_1 = require("../controllers/producto.controller");
router.get('/products', producto_controller_1.getProducts);
router.post('/products', producto_controller_1.createProduct);
// router.get('/users/:id',);
// router.put('/users',);
// router.delete('/users/:id',);
exports.default = router;
