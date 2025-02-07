import { Response } from 'express'
import { MyRequest } from '@myTypes/Express'
import { ErrorResponse, SuccessResponse } from '@utils/Response'
import { SupplierServices } from './service/supplier.service'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'
import { UserD } from '@models/user'

export const CreateSupplier = async (req: MyRequest<UserD>, res: Response) => {
    const { name, phone, email, address, reliabilityScore } = req.body
    const result = await SupplierServices.executeCreateSupplier({
        name,
        phone,
        email,
        address,
        reliabilityScore,
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

export const GetSuppliers = async (req: MyRequest<UserD>, res: Response) => {
    const result = await SupplierServices.executeGetSuppliers()
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

export const GetSupplier = async (req: MyRequest<UserD>, res: Response) => {
    const result = await SupplierServices.executeGetSupplier(req.params.id)
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

export const UpdateSupplier = async (req: MyRequest<UserD>, res: Response) => {
    const { name, phone, email, address, reliabilityScore } = req.body
    const result = await SupplierServices.executeUpdateSupplier(req.params.id, {
        name,
        phone,
        email,
        address,
        reliabilityScore,
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

export const DeleteSupplier = async (req: MyRequest<UserD>, res: Response) => {
    const result = await SupplierServices.executeDeleteSupplier(req.params.id)
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

export const GetSuppliersByReliability = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const result = await SupplierServices.executeGetSuppliersByReliability(
        parseInt(req.params.reliabilityScore)
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
