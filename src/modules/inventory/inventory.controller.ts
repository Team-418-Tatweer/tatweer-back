import { Response } from 'express'
import { MyRequest } from '@myTypes/Express'
import { ErrorResponse, SuccessResponse } from '@utils/Response'
import { InventoryServices } from './service/inventory.service'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'
import { UserD } from '@models/user'

export const CreateInventory = async (req: MyRequest<UserD>, res: Response) => {
    const {
        itemID,
        currentStock,
        itemType,
        recorderPoint,
        safetyStock,
        warehouse,
    } = req.body
    const result = await InventoryServices.executeCreateInventory({
        itemID,
        currentStock,
        itemType,
        recorderPoint,
        safetyStock,
        warehouse,
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

export const GetInventories = async (req: MyRequest<UserD>, res: Response) => {
    const result = await InventoryServices.executeGetInventories()
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

export const GetInventory = async (req: MyRequest<UserD>, res: Response) => {
    const result = await InventoryServices.executeGetInventory(req.params.id)
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

export const UpdateInventory = async (req: MyRequest<UserD>, res: Response) => {
    const {
        itemID,
        itemType,
        recorderPoint,
        currentStock,
        safetyStock,
        warehouse,
    } = req.body
    const result = await InventoryServices.executeUpdateInventory(
        req.params.id,
        {
            itemID,
            itemType,
            recorderPoint,
            currentStock,
            safetyStock,
            warehouse,
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

export const DeleteInventory = async (req: MyRequest<UserD>, res: Response) => {
    const result = await InventoryServices.executeDeleteInventory(req.params.id)
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

export const GetInventoriesByItemID = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const result = await InventoryServices.executeGetInventoriesByItemID(
        req.params.itemID
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
