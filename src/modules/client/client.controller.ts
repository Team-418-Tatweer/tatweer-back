import { Response } from 'express'
import { ClientD } from '@db/models/client'
import { MyRequest } from '@myTypes/Express'
import { ErrorResponse, SuccessResponse } from '@utils/Response'
import { ClientServices } from './service/client.service'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'
import { UserD } from '@models/user'

export const createClient = async (req: MyRequest<UserD>, res: Response) => {
    const { name, email, phone, address } = req.body
    const result = await ClientServices.executeCreateClient({
        name,
        email,
        phone,
        address,
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

export const getClients = async (req: MyRequest<UserD>, res: Response) => {
    const result = await ClientServices.executeGetClients()
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

export const getClient = async (req: MyRequest<UserD>, res: Response) => {
    const result = await ClientServices.executeGetClient(req.params.id)
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

export const updateClient = async (req: MyRequest<UserD>, res: Response) => {
    const result = await ClientServices.executeUpdateClient(
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

export const deleteClient = async (req: MyRequest<UserD>, res: Response) => {
    const result = await ClientServices.executeDeleteClient(req.params.id)
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
