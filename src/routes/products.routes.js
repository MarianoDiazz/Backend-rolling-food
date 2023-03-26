import { Router } from "express";
import { showProducts, createProduct, getOneProduct, deleteProduct, updateProduct } from "../controllers/products.controllers";

const router = Router()


//creo rutas
router
    .route('/')
    .get(showProducts)
    .post(createProduct)

router
    .route("/:id")
    .get(getOneProduct)
    .delete(deleteProduct)
    .put(updateProduct)

export default router