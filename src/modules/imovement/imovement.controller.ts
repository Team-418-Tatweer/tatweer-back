import { Response } from 'express'
import { MyRequest } from '@myTypes/Express'
import { ErrorResponse, SuccessResponse } from '@utils/Response'
import { InventoryMovementServices } from './service/imovement.service'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'
import { UserD } from '@models/user'

export const CreateMovement = async (req: MyRequest<UserD>, res: Response) => {
    const result = await InventoryMovementServices.executeCreateMovement(
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

export const GetMovements = async (req: MyRequest<UserD>, res: Response) => {
    const result = await InventoryMovementServices.executeGetMovements()
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

export const GetMovement = async (req: MyRequest<UserD>, res: Response) => {
    const result = await InventoryMovementServices.executeGetMovement(
        req.params.id
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

export const GetMovementsByStatus = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const result = await InventoryMovementServices.executeGetMovementsByStatus(
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

export const GetMovementsByInventory = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const result =
        await InventoryMovementServices.executeGetMovementsByInventory(
            req.params.inventoryId
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

export const UpdateMovement = async (req: MyRequest<UserD>, res: Response) => {
    const result = await InventoryMovementServices.executeUpdateMovement(
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

export const DeleteMovement = async (req: MyRequest<UserD>, res: Response) => {
    const result = await InventoryMovementServices.executeDeleteMovement(
        req.params.id
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
