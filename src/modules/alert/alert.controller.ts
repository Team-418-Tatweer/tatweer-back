import { Response } from 'express'
import { MyRequest } from '@myTypes/Express'
import { ErrorResponse, SuccessResponse } from '@utils/Response'
import { AlertServices } from './service/alert.service'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'
import { UserD } from '@models/user'

export const CreateAlert = async (req: MyRequest<UserD>, res: Response) => {
    const { title, description, type, severity, priority, status } = req.body
    const result = await AlertServices.executeCreateAlert({
        title,
        description,
        type,
        severity,
        priority,
        status,
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

export const GetAlerts = async (req: MyRequest<UserD>, res: Response) => {
    const result = await AlertServices.executeGetAlerts()
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

export const GetAlert = async (req: MyRequest<UserD>, res: Response) => {
    const result = await AlertServices.executeGetAlert(req.params.id)
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

export const UpdateAlert = async (req: MyRequest<UserD>, res: Response) => {
    const result = await AlertServices.executeUpdateAlert(
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

export const DeleteAlert = async (req: MyRequest<UserD>, res: Response) => {
    const result = await AlertServices.executeDeleteAlert(req.params.id)
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

export const GetAlertsBySeverity = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const result = await AlertServices.executeGetAlertsBySeverity(
        req.params.severity
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

export const GetAlertsByStatus = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const result = await AlertServices.executeGetAlertsByStatus(
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

export const GetAlertsByType = async (req: MyRequest<UserD>, res: Response) => {
    const result = await AlertServices.executeGetAlertsByType(req.params.type)
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

export const GetAlertsByPriority = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const result = await AlertServices.executeGetAlertsByPriority(
        req.params.priority
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
