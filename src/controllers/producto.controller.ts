import {Request, Response} from 'express';
import { getRepository } from "typeorm";
import { Producto } from '../entity/Producto';

export const getProducts = async (req: Request, res: Response): Promise<Response> => {
    const productos = await getRepository(Producto).find();
    return res.json(productos);
}
export const createProduct = async (req: Request, res: Response): Promise<Response> => {
    const newProducto = getRepository(Producto).create(req.body);
    const results = await getRepository(Producto).save(newProducto);
    return res.json(results);
}