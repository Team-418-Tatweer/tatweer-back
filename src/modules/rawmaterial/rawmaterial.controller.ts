import { Response } from 'express'
import { MyRequest } from '@myTypes/Express'
import { ErrorResponse, SuccessResponse } from '@utils/Response'
import { RawMaterialServices } from './service/rawmaterial.service'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'
import { UserD } from '@models/user'

export const CreateRawMaterial = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const { name, unitCost, supplier } = req.body
    const result = await RawMaterialServices.executeCreateRawMaterial({
        name,
        unitCost,
        supplier,
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

export const GetRawMaterials = async (req: MyRequest<UserD>, res: Response) => {
    const result = await RawMaterialServices.executeGetRawMaterials()
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

export const GetRawMaterial = async (req: MyRequest<UserD>, res: Response) => {
    const result = await RawMaterialServices.executeGetRawMaterial(
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

export const GetRawMaterialBySupplier = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const result = await RawMaterialServices.executeGetRawMaterialBySupplier(
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

export const UpdateRawMaterial = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const { name, unitCost, supplier } = req.body
    const result = await RawMaterialServices.executeUpdateRawMaterial(
        req.params.id,
        {
            name,
            unitCost,
            supplier,
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

export const DeleteRawMaterial = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const result = await RawMaterialServices.executeDeleteRawMaterial(
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
