import { createProductValidators } from './service/product.validator'
import {
    CreateProduct,
    GetProduct,
    GetProducts,
    GetProductsByCategory,
    UpdateProduct,
    UpdateProductPrice,
    DeleteProduct,
    GetDetailedProduct,
} from './product.controller'
import { Router } from 'express'
import { validator } from '@middleware/validator'
import { checkLogs, isLoggedIn, isAdmin } from '@middleware/auth'

export const productRouter = Router()

productRouter
    .route('/')
    .post(
        checkLogs,
        isLoggedIn,
        isAdmin,
        createProductValidators,
        validator,
        CreateProduct
    )
    .get(checkLogs, GetProducts)
productRouter
    .route('/:id')
    .get(checkLogs, GetProduct)
    .put(checkLogs, isLoggedIn, isAdmin, UpdateProduct)
    .delete(checkLogs, isLoggedIn, isAdmin, DeleteProduct)
productRouter
    .route('/:id/details')
    .get(checkLogs, isLoggedIn, GetDetailedProduct)
productRouter
    .route('/:id/price')
    .put(checkLogs, isLoggedIn, isAdmin, UpdateProductPrice)
productRouter.route('/category/:category').get(checkLogs, GetProductsByCategory)
