import { Response } from 'express'
import { MyRequest } from '@myTypes/Express'
import { ErrorResponse, SuccessResponse } from '@utils/Response'
import { PmaterialServices } from './service/pmaterial.service'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'
import { UserD } from '@models/user'

export const CreatePmaterial = async (req: MyRequest<UserD>, res: Response) => {
    const { product, material, quantity } = req.body
    const result = await PmaterialServices.executeCreatePmaterial({
        product,
        quantity,
        material,
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

export const GetPmaterials = async (req: MyRequest<UserD>, res: Response) => {
    const result = await PmaterialServices.executeGetPmaterials()
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

export const GetPmaterial = async (req: MyRequest<UserD>, res: Response) => {
    const result = await PmaterialServices.executeGetPmaterial(req.params.id)
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

export const GetPmaterialByProduct = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const result = await PmaterialServices.executeGetPmaterialsByProduct(
        req.params.product
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

export const GetPmaterialByMaterial = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const result = await PmaterialServices.executeGetPmaterialsByMaterial(
        req.params.material
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

export const UpdatePmaterial = async (req: MyRequest<UserD>, res: Response) => {
    const result = await PmaterialServices.executeUpdatePmaterial(
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

export const DeletePmaterial = async (req: MyRequest<UserD>, res: Response) => {
    const result = await PmaterialServices.executeDeletePmaterial(req.params.id)
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
