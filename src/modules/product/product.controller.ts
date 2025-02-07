import { Response } from 'express'
import { ProductD } from '@db/models/product'
import { MyRequest } from '@myTypes/Express'
import { ErrorResponse, SuccessResponse } from '@utils/Response'
import { ProductServices } from './service/product.service'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'

export const CreateProduct = async (
    req: MyRequest<ProductD>,
    res: Response
) => {
    const { name, category, price, unit } = req.body
    const result = await ProductServices.executeCreateProduct({
        name,
        category,
        price,
        unit,
    })
    if (result instanceof SuccessResponseC)
        return SuccessResponse(
            res,
            result.code,
            result.data,
            result.message,
            result.status
        )
    if (result instanceof ErrorResponseC)
        return ErrorResponse(res, result.code, result.message, result.error)
}

export const GetProducts = async (req: MyRequest<ProductD>, res: Response) => {
    const result = await ProductServices.executeGetProducts()
    if (result instanceof SuccessResponseC)
        return SuccessResponse(
            res,
            result.code,
            result.data,
            result.message,
            result.status
        )
    if (result instanceof ErrorResponseC)
        return ErrorResponse(res, result.code, result.message, result.error)
}

export const GetProduct = async (req: MyRequest<ProductD>, res: Response) => {
    const result = await ProductServices.executeGetProduct(req.params.id)
    if (result instanceof SuccessResponseC)
        return SuccessResponse(
            res,
            result.code,
            result.data,
            result.message,
            result.status
        )
    if (result instanceof ErrorResponseC)
        return ErrorResponse(res, result.code, result.message, result.error)
}

export const UpdateProduct = async (
    req: MyRequest<ProductD>,
    res: Response
) => {
    const { name, category, price, unit } = req.body
    const result = await ProductServices.executeUpdateProduct(req.params.id, {
        name,
        category,
        price,
        unit,
    })
    if (result instanceof SuccessResponseC)
        return SuccessResponse(
            res,
            result.code,
            result.data,
            result.message,
            result.status
        )
    if (result instanceof ErrorResponseC)
        return ErrorResponse(res, result.code, result.message, result.error)
}

export const DeleteProduct = async (
    req: MyRequest<ProductD>,
    res: Response
) => {
    const result = await ProductServices.executeDeleteProduct(req.params.id)
    if (result instanceof SuccessResponseC)
        return SuccessResponse(
            res,
            result.code,
            result.data,
            result.message,
            result.status
        )
    if (result instanceof ErrorResponseC)
        return ErrorResponse(res, result.code, result.message, result.error)
}

export const GetProductsByCategory = async (
    req: MyRequest<ProductD>,
    res: Response
) => {
    const result = await ProductServices.executeGetProductsByCategory(
        req.params.category
    )
    if (result instanceof SuccessResponseC)
        return SuccessResponse(
            res,
            result.code,
            result.data,
            result.message,
            result.status
        )
    if (result instanceof ErrorResponseC)
        return ErrorResponse(res, result.code, result.message, result.error)
}

export const UpdateProductPrice = async (
    req: MyRequest<ProductD>,
    res: Response
) => {
    const { price } = req.body
    const result = await ProductServices.executeUpdateProductPrice(
        req.params.id,
        price
    )
    if (result instanceof SuccessResponseC)
        return SuccessResponse(
            res,
            result.code,
            result.data,
            result.message,
            result.status
        )
    if (result instanceof ErrorResponseC)
        return ErrorResponse(res, result.code, result.message, result.error)
}
