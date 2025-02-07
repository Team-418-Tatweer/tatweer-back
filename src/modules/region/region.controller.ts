import { Response } from 'express'
import { MyRequest } from '@myTypes/Express'
import { ErrorResponse, SuccessResponse } from '@utils/Response'
import { RegionServices } from './service/region.service'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'
import { UserD } from '@models/user'

export const CreateRegion = async (req: MyRequest<UserD>, res: Response) => {
    const { name, designation } = req.body
    const result = await RegionServices.executeCreateRegion({
        name,
        designation,
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

export const GetRegions = async (req: MyRequest<UserD>, res: Response) => {
    const result = await RegionServices.executeGetRegions()
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

export const GetRegion = async (req: MyRequest<UserD>, res: Response) => {
    const result = await RegionServices.executeGetRegion(req.params.id)
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

export const UpdateRegion = async (req: MyRequest<UserD>, res: Response) => {
    const { name, designation } = req.body
    const result = await RegionServices.executeUpdateRegion(req.params.id, {
        name,
        designation,
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

export const DeleteRegion = async (req: MyRequest<UserD>, res: Response) => {
    const result = await RegionServices.executeDeleteRegion(req.params.id)
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
