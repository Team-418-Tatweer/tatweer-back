import { Response } from 'express'
import { MyRequest } from '@myTypes/Express'
import { ErrorResponse, SuccessResponse } from '@utils/Response'
import { WarehouseServices } from './service/warehouse.service'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'
import { UserD } from '@models/user'

export const CreateWarehouse = async (req: MyRequest<UserD>, res: Response) => {
    const { location, capacity, recorderPoint, region } = req.body
    const result = await WarehouseServices.executeCreateWarehouse({
        location,
        capacity,
        recorderPoint,
        region,
        usedCapacity: 0,
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

export const GetWarehouses = async (req: MyRequest<UserD>, res: Response) => {
    const result = await WarehouseServices.executeGetWarehouses()
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

export const GetWarehouse = async (req: MyRequest<UserD>, res: Response) => {
    const result = await WarehouseServices.executeGetWarehouse(req.params.id)
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

export const UpdateWarehouse = async (req: MyRequest<UserD>, res: Response) => {
    const { location, capacity, recorderPoint } = req.body
    const result = await WarehouseServices.executeUpdateWarehouse(
        req.params.id,
        {
            location,
            capacity,
            recorderPoint,
        }
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

export const DeleteWarehouse = async (req: MyRequest<UserD>, res: Response) => {
    const result = await WarehouseServices.executeDeleteWarehouse(req.params.id)
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
