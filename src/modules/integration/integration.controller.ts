import { Response } from 'express'
import { MyRequest } from '@myTypes/Express'
import { ErrorResponse, SuccessResponse } from '@utils/Response'
import { IntegrationService } from './service/integration.service'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'
import { UserD } from '@models/user'

export const CreateIntegration = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const { name, settings } = req.body
    const result = await IntegrationService.createIntegration({
        name,
        settings,
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

export const GetIntegrations = async (req: MyRequest<UserD>, res: Response) => {
    const result = await IntegrationService.getIntegrations()
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

export const GetIntegration = async (req: MyRequest<UserD>, res: Response) => {
    const result = await IntegrationService.getIntegration(req.params.id)
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

export const UpdateIntegration = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const { name, isActive, settings } = req.body
    const result = await IntegrationService.updateIntegration(req.params.id, {
        name,
        isActive,
        settings,
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

export const DeleteIntegration = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const result = await IntegrationService.removeIntegration(req.params.id)
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
