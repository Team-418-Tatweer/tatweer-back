import { Response } from 'express'
import { MyRequest } from '@myTypes/Express'
import { ErrorResponse, SuccessResponse } from '@utils/Response'
import { OrderServices } from './service/order.service'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'
import { UserD } from '@models/user'

export const createOrder = async (req: MyRequest<UserD>, res: Response) => {
    const result = await OrderServices.executeCreateOrder(req.body)
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

export const getOrders = async (req: MyRequest<UserD>, res: Response) => {
    const result = await OrderServices.executeGetOrders()
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

export const getOrder = async (req: MyRequest<UserD>, res: Response) => {
    const result = await OrderServices.executeGetOrder(req.params.id)
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

export const updateOrder = async (req: MyRequest<UserD>, res: Response) => {
    const result = await OrderServices.executeUpdateOrder(
        req.params.id,
        req.body
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

export const deleteOrder = async (req: MyRequest<UserD>, res: Response) => {
    const result = await OrderServices.executeDeleteOrder(req.params.id)
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

export const getOrdersByClient = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const result = await OrderServices.executeGetClientOrders(req.params.id)
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

export const getOrdersByRegion = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const result = await OrderServices.executeGetRegionOrders(req.params.id)
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

export const getOrdersByStatus = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const result = await OrderServices.executeGetOrdersByStatus(
        req.params.status
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
