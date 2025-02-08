import { Response } from 'express'
import { MyRequest } from '@myTypes/Express'
import { ErrorResponse, SuccessResponse } from '@utils/Response'
import { ActionServices } from './service/action.service'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'
import { UserD } from '@models/user'

export const CreateAction = async (req: MyRequest<UserD>, res: Response) => {
    const { title, alert, type, description, responsibleTeam, status } =
        req.body
    const result = await ActionServices.executeCreateAction({
        title,
        alert,
        type,
        description,
        responsibleTeam,
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

export const GetActions = async (req: MyRequest<UserD>, res: Response) => {
    const result = await ActionServices.executeGetActions()
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

export const GetAction = async (req: MyRequest<UserD>, res: Response) => {
    const result = await ActionServices.executeGetAction(req.params.id)
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

export const UpdateAction = async (req: MyRequest<UserD>, res: Response) => {
    const result = await ActionServices.executeUpdateAction(
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

export const DeleteAction = async (req: MyRequest<UserD>, res: Response) => {
    const result = await ActionServices.executeDeleteAction(req.params.id)
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

export const GetActionsByAlert = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const result = await ActionServices.executeGetActionsByAlert(
        req.params.alertId
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

export const GetActionsByStatus = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const result = await ActionServices.executeGetActionsByStatus(
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
