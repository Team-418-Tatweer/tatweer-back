import { Response } from 'express'
import { MyRequest } from '@myTypes/Express'
import { ErrorResponse, SuccessResponse } from '@utils/Response'
import { ForecastServices } from './service/forecast.service'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'
import { UserD } from '@models/user'

export const CreateForecast = async (req: MyRequest<UserD>, res: Response) => {
    const {
        type,
        targetEntity,
        targetID,
        forecastedValue,
        confidenceLevel,
        timePeriod,
        dateGenerated,
        status,
    } = req.body
    const result = await ForecastServices.executeCreateForecast({
        type,
        targetEntity,
        targetID,
        forecastedValue,
        confidenceLevel,
        timePeriod,
        dateGenerated,
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

export const GetForecasts = async (req: MyRequest<UserD>, res: Response) => {
    const result = await ForecastServices.executeGetForecasts()
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

export const GetForecast = async (req: MyRequest<UserD>, res: Response) => {
    const result = await ForecastServices.executeGetForecast(req.params.id)
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

export const UpdateForecast = async (req: MyRequest<UserD>, res: Response) => {
    const result = await ForecastServices.executeUpdateForecast(
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

export const DeleteForecast = async (req: MyRequest<UserD>, res: Response) => {
    const result = await ForecastServices.executeDeleteForecast(req.params.id)
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

export const GetForecastsByType = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const result = await ForecastServices.executeGetForecastsByType(
        req.params.type
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

export const GetForecastsByTarget = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const result = await ForecastServices.executeGetForecastsByTarget(
        req.params.targetEntity,
        req.params.targetId
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

export const GetForecastsByStatus = async (
    req: MyRequest<UserD>,
    res: Response
) => {
    const result = await ForecastServices.executeGetForecastsByStatus(
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
